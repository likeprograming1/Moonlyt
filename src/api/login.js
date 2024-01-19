// import axios from "axios";

// const handleNonce = () => {
//   const response = axios
//     .post("http://localhost:8000/auth/nonce")
//     .then((res) => {
//       console.log(res);
//       const data = res.data.nonce;
//       return data;
//     });
//   return response;
// };

// const handleLogin = ({ signedMessage, message, address }) => {
//   const response = axios
//     .post("http://localhost:8000/auth/login", {
//       address: address,
//     })
//     .then((res) => {
//       console.log(res);
//       const accessToken = res.data.tokens.accessToken.split(" ")[1];
//       sessionStorage.setItem("accessToken", accessToken);
//       sessionStorage.setItem("refreshToken", res.data.tokens.refreshToken);
//     });
//   return response;
// };

// export { handleLogin };
