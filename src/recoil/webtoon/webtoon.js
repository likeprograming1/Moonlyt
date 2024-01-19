import { atom } from "recoil";

const DetailState = atom({
  key: "webtoon",
  default: {
    product: {},
  },
});

export { DetailState };
