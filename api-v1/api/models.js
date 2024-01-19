const mongoose = require('mongoose');
const { Schema, Types: { ObjectId } } = mongoose;

const EpisodeSchema = new Schema({
    chapter: { type: Number, required: true },
    image: { type: [String], required: true },
});

const FundingSchema = new Schema({
    amount: { type: Number, required: true },
    stakeUnit: { type: Number, required: true },
    price: { type: Number, required: true },
    maxAmount: { type: Number, required: true },
    purchasedAmount: { type: Number, required: false },
    comic: { 
        _id: { type: ObjectId, ref: 'Comic', required: true },
        title: { type: String, required: true },
        thumbnail: { type: String, required: true },
    }
});

const ComicSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    thumbnail: { type: String, required: true },
    funding: { type: ObjectId, ref: 'Funding', required: false },
    episodes: [EpisodeSchema],
});

const UserSchema = new Schema({
    address: { type: String, required: true },
    fundings: [{ type: ObjectId, ref: 'Funding' }],
    comics: [{ type: ObjectId, ref: 'Comic' }],
    subscribedComics: [{ type: ObjectId, ref: 'Comic' }],
    supportedFundings: [{ type: ObjectId, ref: 'Funding' }]
});

const User = mongoose.model('User', UserSchema);
const Funding = mongoose.model('Funding', FundingSchema);
const Comic = mongoose.model('Comic', ComicSchema);

module.exports = {
  User,
  Funding,
  Comic
};
