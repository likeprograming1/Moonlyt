const Update = [
  {
    Title: "Weboon Title",
    type: "select",
    num: 0,
    placeholder: "Please write the name of the webtoon",
  },
  {
    Title: "Category",
    Tags: [
      "Action",
      "Rofan",
      "Wuxia",
      "Hero",
      "For Girls",
      "Adult",
      "Fantasy",
      "Apocalyps",
      "School",
      "Mistery",
      "For Boys",
      "Cooking",
    ],
    advise: [
      "You can select a minimum of 1 and a maximum of 2 category tags.",
      "You can cancel by clicking the x button below.",
    ],
  },
  {
    Title: "Webtoon Episode",
    type: "select",
    num:1,
    placeholder: "Select the Episode of Your Webtoon",
    advise: [
      "If you select the latest episode that has not been uploaded, you can register a new webtoon.",
      "You can edit the previously uploaded webtoon by selecting the episode that was uploaded. ",
      "Only one round can be selected.",
    ],
  },
  {
    Title: "Episode Title",
    max: 20,
    height: 60,
    placeholder: "Please write the title of the Episode",
    advise: ["You can set the title of the registered episode"],
  },
  {
    Title: "Brief Plot",
    max: 100,
    height:110,
    placeholder: "Please write a brief synopsis",
    advise: [
      "Please write a synopsis so that you can briefly introduce your webtoon.",
      "The plot you wrote will be displayed on the webtoon page.",
      "Please write in 100 characters or less",
    ],
  },
  {
    Title: "Thumbnail Image",
  },
  {
    Title: "Webtoon",
    max: 5,
  },
  {
    Title: "Caution",
    Content: [
      {
        Title: "Webtoon Image Upload Guide",
        Sub: [
          {
            title: "Webtoon Image",
            content: [
              "The minimum horizontal size of webtoon images is 500 pixels and the maximum horizontal size is 800 pixels.The vertical size is not set, but please adjust it so it is not too long.",
            ],
          },
          {
            title: "Thumbnail Image",
            content: [
              "Please upload the thumbnail image with a ratio of at least 100 x 100 adjusted to the regular size so that no part is cut off.",
            ],
          },
        ],
      },
      {
        Title: "Bad post policy",
        Sub: [
          {
            title: "Defamatory Post",
            content: [
              "Content that violates an individual’s privacy and portrait rights",
              "If you slander an individual or organization, spread false information, or infringe on the rights of an individual or organization.",
              "Content that insults the personality of a specific person or causes discomfort through vulgar expressions such as profanity or verbal violence",
              "In case of intentionally or maliciously posting another person's personal information (real name, resident registration number, contact information, address, SNS, etc.) without the person's consent",
            ],
          },
          {
            title: "Posts that infringe copyright",
            content: [
              "Content that illegally publishes, distributes or solicits materials without the consent of the copyright holder.",
              "When uploading or linking to unauthorized materials from other services or sites",
              "Content that recommends illegal copying/installation of programs, such as free downloads, without using genuine programs",
              "Content related to illegal copying, such as sharing serial numbers and CD keys",
              "Sales of backup CDs",
              "If there is a post (alleged infringement) that infringes on another person's copyright without permission, such as copyright, trademark, design right, etc.",
              "Please report it to the takedown request service.",
            ],
          },
          {
            title: "pornographic posts",
            content: [
              "In cases where excessive physical exposure is judged to be harmful to youth",
            ],
          },
        ],
      },
    ],
  },
];

const WetoonTitle = ["first", "second", "third", "first", "second", "third"];
const Episode = [30, 20, 10];
export { Update, WetoonTitle, Episode };
