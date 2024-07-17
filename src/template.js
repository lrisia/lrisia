/**
 *
 * @param {string} text The content of the README.md file
 * @param {{ pastWeek: number, gitUsername: string }} prop
 * pastWeek - The number of weeks that have passed since birth
 * gitUsername - The GitHub username
 * @returns {string} The new content of the README.md file
 */
export function createNewText(text, prop) {
  const mediumPostList = text.substring(
    text.indexOf("<!-- BLOG:START -->") + "<!-- BLOG:START -->".length,
    text.lastIndexOf("<!-- BLOG:END -->")
  );

  return `\
# Hi there 👋 How are you doing

### Did you know? the average human life spans around 4,000 weeks.
❓ **Do you satisfied how you use?**

So far, I do. For me, it was approximately ${Math.round(
    (prop.pastWeek / 4000) * 100
  )}% of my life; It was the beginning of the career period. And I've decided to use it as *Software developer*. 

📊 So, this graph represents my remaining life time spent attempting to improve and learn new things every day.

![weekchart.png](assets/weekchart.png)

## ⭐️ GitHub Stats
![Profile views](https://komarev.com/ghpvc/?username=${prop.gitUsername}&color=orange)
[![GitHub followers](https://img.shields.io/github/followers/${prop.gitUsername}?style=social&label=Follower)](https://github.com/lrisia/lrisia)
![Github stats](https://pixel-profile.vercel.app/api/github-stats?username=${prop.gitUsername}&theme=summer&pixelate_avatar=false&screen_effect=true)

## 💻 Favorite Tech
🔬 Tools, languages, and other things that I prefer to work with.

![My Fav](https://skillicons.dev/icons?i=nodejs,ts,python,mongo,mysql,tailwind,docker,git,postman,vscode,discord)

## Where to find me
[![Linkedin Badge](https://img.shields.io/badge/-linkedin-0072b1?style=flat&labelColor=0072b1&logo=Linkedin)](https://www.linkedin.com/in/irisia)
[![Medium Badge](https://img.shields.io/badge/-medium-000000?style=flat&labelColor=000000&logo=Medium)](https://medium.com/@iricea)
[![Spotify Badge](https://img.shields.io/badge/Spotify-1ED760?&style=flat&logo=spotify&logoColor=white)](https://open.spotify.com/user/wu6s8uphlppuab55xm340xa2p)

### 📝 Latest Blog Posts

<!-- BLOG:START -->
${mediumPostList.trim()}
<!-- BLOG:END -->

<br>
⏰ Updated on: ${new Date()}

<br><hr>

To use this template, you can check [here](docs/SETUP_INSTRUCTION.md)
`;
}
