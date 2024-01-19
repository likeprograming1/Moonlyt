const jwt = require('jsonwebtoken');
var { expressjwt } = require("express-jwt");
const { getCache, setCache } = require('../caching');
require("dotenv").config();

const authenticate = expressjwt({
  secret: process.env.JWT_ACCESS_SECRET, 
  algorithms: ['HS256'], 
});

const authService = {
  jwtService: {
    async signAsync(payload, options) {
      try {
        const token = await jwt.sign(payload, options.secret, { expiresIn: options.expiresIn });
        return token;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },

    async verifyAsync(token, options) {
      try {
        const decoded = await jwt.verify(token, options.secret, options);
        return decoded;
      } catch (err) {
        console.error(err);
        throw err;
      }
    }
  },

  makeBearerFormat(token) {
    return "Bearer " + token;
  },

  async issueToken(payload) {
    try {
      const accessToken = this.makeBearerFormat(await this.jwtService.signAsync(
        payload, {
        secret: process.env.JWT_ACCESS_SECRET,
        expiresIn: process.env.JWT_ACCESS_EXPIRED,
      }));
      const refreshToken = await this.jwtService.signAsync(
        payload, {
        secret: process.env.JWT_REFRESH_SECRET,
        expiresIn: process.env.JWT_REFRESH_EXPIRED,
      });
      setCache(payload.address, refreshToken);
      return { accessToken, refreshToken };
    } catch (e) {
      throw error;
    }
  },

  async verifyAccessToken(req, res, next) {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Invalid token' });
      }
    
      const token = authHeader.split(' ')[1];
      const verifyOptions = {
        secret: process.env.JWT_ACCESS_SECRET,
        ignoreExpiration: false,
      };
      await this.jwtService.verifyAsync(token, verifyOptions);
      next();
    } catch (error) {
      throw error;
    }
  },

  async verifyRefreshToken(token) {
    try {
      const verifyOptions = {
        secret: process.env.JWT_REFRESH_SECRET,
        ignoreExpiration: false,
      };
      if (getCache(userInfo.address) !== token) {
        throw error;
      }
      const userInfo = await this.jwtService.verifyAsync(token, verifyOptions); 
      return userInfo;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = {
  authService,
  authenticate,
};
