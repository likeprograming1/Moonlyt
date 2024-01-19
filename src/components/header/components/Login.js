// import { handleLogin } from "../../../api/login";

const handleClick = async () => {
  try {
    if (window.ethereum) {
      await window.ethereum.enable();

      return window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => {
          // let message = "";
          // handleNonce().then((res) => {
          //   console.log(res);
          //   message = res;
          // });
          // let address = res[0];
          if (res[0]) {
            window.ethereum
              ?.request({
                method: "personal_sign",
                params: [JSON.stringify(res[0]), res[0]],
              })
              .then((res) => {
                console.log(res);
                // let signedMessage = res;
                // handleLogin({ signedMessage, address });
              });
          }
          return res[0];
        });
    }
  } catch (error) {
    alert("install metamask extension!!");
  }
};

export { handleClick };
