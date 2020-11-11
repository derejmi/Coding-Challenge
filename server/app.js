const express = require("express");

const app = express();

const port = 2000;

const cors = require("cors");
app.use(cors());

app.listen(port, () => console.log(`Your port is now open at ${port}`));

const websites = [
  {
    id: "FirstWebsite",
    websiteName: "Netflix",
    url: "https://www.netflix.com/browse",
    description: "Binge Watch all day long",
    Hyperlinks: "None",
  },
  {
    id: "SecondWebsite",
    websiteName: "Facebook",
    url: "https://www.facebook.com/",
    description: "Stalk people you havent seen in years",
    Hyperlinks: "None",
  },
  {
    id: "ThirdWebsite",
    websiteName: "Amazon",
    url: "https://www.amazon.co.uk/",
    description: "Making the richest man in the world richer",
    Hyperlinks: [
      "https://www.amazon.co.uk/gp/bestsellers/?ref_=nav_cs_bestsellers",
      "https://www.amazon.co.uk/Amazon-Video/b/?ie=UTF8&node=3010085031&ref_=nav_cs_prime_video",
    ],
  },
  {
    id: "FourthWebsite",
    websiteName: "YouTube",
    url: "https://www.youtube.com/",
    description: "Watch Cat Videos",
    Hyperlinks: [
      "https://www.youtube.com/watch?v=XyNlqQId-nk",
      "https://www.youtube.com/watch?v=gCAYhUkKUjU",
    ],
  },
  {
    id: "FifthWebsite",
    websiteName: "Stack Overflow",
    url: "https://stackoverflow.com/",
    description: " Helping you to pass this course",
    Hyperlinks: "None",
  },
  {
    id: "SixthWebsite",
    websiteName: "Google",
    url: "https://www.google.com/",
    description: "The real google",
    Hyperlinks: "None",
  },
  {
    id: "SeventhWebsite",
    websiteName: "MiniClip",
    url: "https://www.miniclip.com/games/en/#privacy-settings",
    description: "Free Games",
    Hyperlinks: [
      "https://www.miniclip.com/games/tanki-online/en/#privacy-settings",
      "https://www.miniclip.com/games/8-ball-pool-multiplayer/en/#privacy-settings",
    ],
  },
  {
    id: "EigthWebsite",
    websiteName: "Just Eat",
    url: "https://www.just-eat.co.uk/",
    description: "Snoop Doggs in the adverts",
    Hyperlinks: "None",
  },
  {
    id: "NinthWebsite",
    websiteName: "SkyScaner",
    url: "https://www.skyscanner.net/",
    description: "not going to be using this link for a while",
    Hyperlinks: "None",
  },
  {
    id: "TenthWebsite",
    websiteName: "Please Kick on this link",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "Dont give up",
    Hyperlinks: "None",
  },
];

const randSiteGenerator = (searchData) => {
  const randomIndex = Math.floor(Math.random() * searchData.length);
  const randomSite = searchData[randomIndex];
  return randomSite;
};

//Server Routes

app.get("/search", (req, res) => {
  res.status(200).send(websites);
});

app.get("/lucky", (req, res) => {
  const randomSite = randSiteGenerator(websites);
  res.status(200).send(randomSite);
});
