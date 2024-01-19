const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const pinataSDK = require('@pinata/sdk');
require("dotenv").config();

const bucketName = process.env.BUCKET_NAME;
const region = process.env.BUCKET_REGION;
const accessKey = process.env.AWS_ACCESS_KEY;
const secretKey = process.env.AWS_PRIVATE_KEY;

const s3config = {
  region: region,
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretKey,
  },
}; 
const s3Client = new S3Client(s3config);


const uploadService = {
    async uploadMetadataToPinata(name, metadata) {
        try {
            const pinata = new pinataSDK(process.env.PINATA_API, process.env.PINATA_PRIVATE_API);
            
            const options = {
                pinataMetadata: {
                    name: name,
                    keyvalues: metadata,
                },
                pinataOptions: {
                    cidVersion: 0
                }
            };
            const ipfsData = await pinata.pinJSONToIPFS(metadata, options);
            console.log(ipfsData);
            return ipfsData['IpfsHash'];
        } catch (error) {
            throw error;
        }
      },
      
      async uploadImageToPinata(file) {
        try {
            const filePath = `uploads/${file.filename}`;
            const fs = require('fs');
            const readableStreamForFile = fs.createReadStream(filePath)

            const pinataSDK = require('@pinata/sdk');
            const pinata = new pinataSDK(process.env.PINATA_API, process.env.PINATA_PRIVATE_API);

            const options = {
                pinataMetadata: {
                    name: file.originalname,
                },
                pinataOptions: {
                    cidVersion: 0
                }
            };
            const ipfsData = await pinata.pinFileToIPFS(readableStreamForFile, options)
            console.log(ipfsData);
            return ipfsData['IpfsHash'];
        } catch (error) {
            throw error;
        }
    },

    generateImageUrl(title, chapter, index) {
      return `${title}-C${chapter}-${index}`
    },
    
    async uploadImagesToS3(data, files) {
        if (!files || files.length === 0) {
          throw e;
        }
    
        try {
          const uploadedImageUrls = [];
          const uploadPromises = files.map(async (file, index) => {
            const filename = this.generateImageUrl(data.title, data.chapter, index);
            const params = {
              Bucket: bucketName,
              Key: filename,
              Body: file.buffer,
              ContentType: file.mimetype
            };
            const command = new PutObjectCommand(params);
            await s3Client.send(command);
            return uploadedImageUrls.push(filename);
          });
    
          await Promise.all(uploadPromises);
          return uploadedImageUrls;
        } catch (e) {
          throw (e);
        }
    },
}

module.exports = uploadService;