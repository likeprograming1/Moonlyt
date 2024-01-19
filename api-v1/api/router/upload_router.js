const express = require('express');
const multer  = require('multer');
const uploadService = require('../service/upload_service.js');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix);
    }
});

const upload = multer({ storage: storage });
const uploadRouter = express.Router();

uploadRouter.post("/images", upload.array('images', 12), async (req, res) => {
    try {
        const data = {
            title: req.body.title,
            chapter: req.body.chapter,
        }
        const imageUrls = await uploadService.uploadImagesToS3(data, req.files);
        res.json({ images: imageUrls });
    } catch (e) {
        res.status(500).send(e.message);
    }
});

uploadRouter.post("/thumnail", upload.single(''), async (req, res) => {
    try {
        const thumnailUrl = await uploadService.uploadImageToPinata(req.file);
        res.json({ thumnail: thumnailUrl });
    } catch (e) {
        res.status(500).send(e.message);
    }
});


uploadRouter.post("/metadata", upload.single(''), async (req, res) => {
    try {
        const metadata = JSON.parse(req.body.metadata);
        const name = req.body.name;
        const metadataUrl = await uploadService.uploadMetadataToPinata(name, metadata);
        
        res.json({ metadata: metadataUrl });
    } catch (e) {
        res.status(500).send(e.message);
    }
});

module.exports = uploadRouter;