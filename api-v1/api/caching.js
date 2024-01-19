const Redis = require("ioredis");
const { REDIS_HOST, REDIS_PORT, REDIS_TTL, REDIS_TIMEOUT } = process.env;

let redis;
// 숫자로 변환. 잘못된 값이 있을 경우 기본값 사용.
const _ttl = parseInt(process.env.REDIS_TTL) || 3600;
const _timeout = parseInt(process.env.REDIS_TIMEOUT) || 3000;

// Redis 인스턴스 생성
(async () => {
    redis = new Redis({
        host: REDIS_HOST,
        port: REDIS_PORT,
        commandTimeout: _timeout
    });
    redis.on("error", (err) => {
        console.log(err);
    });
})();

// Redis 캐시에서 키 데이터 가져오기
async function getCache(key) {
    try {
        const cacheData = await redis.get(key);
        return cacheData;
    } catch (err) {
        return null;
    }
}

// 지정된 만료 시간으로 Redis 캐시 키 설정
function setCache(key, data, ttl = _ttl) {
    try {
        redis.set(key, JSON.stringify(data), "EX", ttl);
    } catch (err) {
        return null;
    }
}

// 주어진 Redis 캐시 키 제거
function removeCache(key) {
    try {
        redis.del(key);
    } catch (err) {
        return null;
    }
}

module.exports = { getCache, setCache, removeCache };