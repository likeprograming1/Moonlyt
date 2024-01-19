import { atom } from "recoil";

const LoginState = atom({
  key: "account",
  default: {
    account: "",
  },
});

const PointState = atom({
  key: "amount",
  default: {
    amount: 0,
  },
});

const Author = atom({
  key: "author",
  default: false,
});

export { LoginState, PointState, Author };
