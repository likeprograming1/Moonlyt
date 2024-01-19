import { atom } from "recoil";

const ProfileState = atom({
  key: "profile",
  default: {
    webtoon: [],
    nft: [],
  },
});

const WebtoonUpdate = atom({
  key: "update",
  default: {
    Title: "",
    Category: [],
    Episode: "",
    EpisodeTitle: "",
    Brief: "",
    Thumbnail: "",
    Webtoon: [],
  },
});

export { ProfileState, WebtoonUpdate };
