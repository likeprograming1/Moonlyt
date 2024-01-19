const express = require('express');
const { Funding, Comic } = require('../models');
const fundingRouter = express.Router();
require('dotenv').config();

const provider = new ethers.providers.JsonRpcProvider(process.env.CONTRACT_NETWORK_URL);
const signer = new ethers.Wallet(process.env.CONTRACT_PRIVATE_KEY, provider);
const {abi} = require("../../contract/MoonlightContract.sol/MoonlightContract.json");
const contractInstance = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, signer);

fundingRouter.post('/', async (req, res) => {
  try {
    const { title, amount, stakeUnit, price, maxAmount, purchasedAmount, comicId } = req.body;

    const existingFunding = await Funding.findOne({ 'comic._id': comicId });

    if (existingFunding) {
        return res.status(400).json({ message: 'A funding for this comic already exists.' });
    }

    const comic = await Comic.findById(comicId);

    if (!comic) {
        return res.status(404).send('Comic not found');
    }
    
    const newFunding = new Funding({
        title,
        amount,
        stakeUnit,
        price,
        maxAmount,
        purchasedAmount,
        comic: {
            _id: comic._id,
            thumbnail: comic.thumbnail,
        },
    });

    const savedFunding = await newFunding.save();

    res.json({ 
        savedFunding
    });
  } catch (error) {
      res.status(500).send(error.message);
  }
});

fundingRouter.get('/best', async (req, res) => {
    try {
        const fundings = await Funding.find().sort({amount: -1}).limit(5).populate('comic');
        res.json(fundings);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

fundingRouter.get('/', async (req, res) => {
    const page = Number(req.query.page) || 1;  // 페이지 번호 (기본값: 1)
    const pageSize = Number(req.query.pageSize) || 10;  // 페이지당 문서 수 (기본값: 10)

    try {
        const fundings = await Funding.find()  // 모든 Funding 문서를 찾습니다.
            .skip((page - 1) * pageSize)  // (페이지 번호 - 1) * 페이지당 문서 수 만큼 건너뜁니다.
            .limit(pageSize);  // 페이지당 문서 수만큼 문서를 가져옵니다.
        res.json(fundings);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

fundingRouter.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const funding = await Funding.findById(id);
  
        if (!funding) {
            return res.status(404).send('Funding not found');
        }
  
        res.json(funding);
    } catch (error) {
        res.status(500).send(error.message);
    }
  });
  

module.exports = fundingRouter;
