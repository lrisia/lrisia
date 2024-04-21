import * as fs from "fs";
import generateWeekchartImage from "./src/weekchart/weekchart.index.js";

function writeReadme(percent) {
  const now = new Date();

  let oldReadme = "";
  try {
    oldReadme = fs.readFileSync("./README.md", "utf8");
  } catch (e) {
    console.log("No README.md found");
  }

  const mediumPostList = oldReadme.substring(
    oldReadme.indexOf("<!-- MEDIUM:START -->") + "<!-- MEDIUM:START -->".length,
    oldReadme.lastIndexOf("<!-- MEDIUM:END -->")
  );

  const readme = `\
# Hi there 👋 How are you doing

### Did you know? the average human life spans 4,000 weeks.
❓ **Do you have statistics about how you use?**

So far, I do. For me, it was approximately ${Math.round(
    (percent / 4000) * 100
  )}% of my life; It was the beginning of the career period. And I've decided to use it as *Software developer*. 

📊 So, this graph represents my remaining life time spent attempting to improve and learn new things every day.

![weekchart.png](src/weekchart/weekchart.png)

## ⭐️ GitHub Stats
![Profile views](https://komarev.com/ghpvc/?username=lrisia&color=orange)
![Github stats](https://pixel-profile.vercel.app/api/github-stats?username=lrisia&theme=summer&pixelate_avatar=false&screen_effect=true)

## 💻 Favorite Tech
🔬 Tools, languages, and other things that I like to work with.

![My Fav](https://skillicons.dev/icons?i=nodejs,ts,python,mongo,tailwind,docker,git,postman,vscode,discord)

## Where to find me
[![Linkedin Badge](https://img.shields.io/badge/-linkedin-0072b1?style=flat&labelColor=0072b1&logo=Linkedin&link=https://www.linkedin.com/in/irisia)](https://www.linkedin.com/in/irisia)
[![Medium Badge](https://img.shields.io/badge/-medium-000000?style=flat&labelColor=000000&logo=Medium&link=https://medium.com/@iricea)](https://medium.com/@iricea)

### 📝 Latest Blog Posts

<!-- MEDIUM:START -->
${mediumPostList.trim()}
<!-- MEDIUM:END -->

<br>
⏰ Updated on: ${now}
`;
  fs.writeFileSync("./README.md", readme);
}

async function main() {
  const weeks = await generateWeekchartImage();
  writeReadme(weeks);
}

main();
