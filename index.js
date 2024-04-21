import * as fs from 'fs';
import generateWeekchartImage from "./src/weekchart/weekchart.index.js";

function writeReadme(percent) {
  const now = new Date();
  const readme = `\
# Hi there 👋 How are you doing

### Did you know? the average human life spans 4,000 weeks.
❓ **Do you have statistics about how you use?**

So far, I do. For me, it was approximately ${Math.round(percent / 4000 * 100)}% of my life; it was the beginning of my professional career. And I've decided to spend it doing software engineering. 

📊 So, this graph represents my remaining life time spent attempting to improve and learn new things every day.

![weekchart.png](src/weekchart/weekchart.png)

⏰ Updated on: ${now.toISOString()}
`;
  fs.writeFileSync('./README.md', readme);
}

async function main() {
  const weeks = await generateWeekchartImage();
  writeReadme(weeks);
}

main();
