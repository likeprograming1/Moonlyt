const express = require('express');
const ethers = require('ethers');
const { authenticate } = require('../service/auth_service');
const { Comic, User } = require('../models');

const comicRouter = express.Router();

comicRouter.post('/', async (req, res) => {
  try {
    const { title, author, thumbnail, episodes } = req.body;
    const existingComic = await Comic.findOne({ title });

    if (existingComic) {
        return res.status(400).json({ message: 'A comic with this title already exists.' });
    }

    const user = await User.findOne({ author });

    if (!user) {
        return res.status(400).json({ message: 'Author not found.' });
    }

    const newComic = new Comic({
        title,
        author,
        thumbnail,
        episodes,
    });

    const savedComic = await newComic.save();
    author.comics.push(savedComic);
    await author.save();

    res.json({ 
        savedComic
    });
  } catch (error) {
      res.status(500).send(error.message);
  }
});

comicRouter.post('/episode/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { chapter, images } = req.body;

        const comic = await Comic.findById(id);
        if (!comic) {
            return res.status(404).send('Comic not found');
        }
        
        const existingEpisode = comic.episodes.find(ep => ep.chapter === chapter);
        if (existingEpisode) {
            return res.status(400).send('Episode with this chapter already exists');
        }

        comic.episodes.push({ chapter, images });
        const updatedComic = await comic.save();

        res.json(updatedComic);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// GET http://localhost:8000/comic?page=2&pageSize=20
comicRouter.get('/', async (req, res) => {
    const page = Number(req.query.page) || 1;  // 페이지 번호 (기본값: 1)
    const pageSize = Number(req.query.pageSize) || 10;  // 페이지당 문서 수 (기본값: 10)

    try {
        const comics = await Comic.find()  // 모든 Comic 문서를 찾습니다.
            .skip((page - 1) * pageSize)  // (페이지 번호 - 1) * 페이지당 문서 수 만큼 건너뜁니다.
            .limit(pageSize);  // 페이지당 문서 수만큼 문서를 가져옵니다.
        res.json(comics);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

comicRouter.get('/me', authenticate, async (req, res) => {
    try {
        const user = await User.findOne({ address: req.auth.address }).populate('comics');
    
        console.log("user : ", user);
        if (!user) {
            return res.status(400).json({ message: 'User not found.' });
        }
    
        res.json({ 
            comics: user.comics
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

comicRouter.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const comic = await Comic.findById(id);

        if (!comic) {
            return res.status(404).send('Comic not found');
        }

        res.json(comic);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = comicRouter;
