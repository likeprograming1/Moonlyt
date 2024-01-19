export const handleclick = (names) => {
  if (names === "Account Infromation") {
    return "/myprofile/profile";
  } else if (names === "Purchase Webtoon") {
    return "/myprofile/webtoon";
  } else if (names === "Owned NFT") {
    return "/myprofile/nft";
  } else if (names === "My Webtoon") {
    return "/myprofile/upload";
  } else {
    return null;
  }
};
