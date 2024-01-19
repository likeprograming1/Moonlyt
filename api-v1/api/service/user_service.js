const { User } = require('../models');

const userService = {
    async createUser(address) {
        const newUser = new User({
            address: address,
            fundings: [],
            subscribedComic: [],
            supportedFunding: []
        });

        try {
            await newUser.save();
            console.log('User created!');
            return newUser;
        } catch (error) {
            throw error;
        }
    },

    async checkUserExist(address) {
        try {
            const user = await User.findOne({ address: address });
            if (user) {
                console.log('User exists!');
                return true;
            } else {
                console.log('User does not exist!');
                return false;
            }
        } catch (error) {
            throw error;
        }
    }
};

module.exports = userService;
