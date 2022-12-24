import fs from "fs/promises";
import Cors from "cors";
import { runInNewContext } from "vm";

const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method !== "POST") return;
  if (!req.body.content) {
    res.status(400).end();
    return;
  }
  try {
    const fileBuffer = await fs.readFile("./data/blogs.json");
    const blogs = JSON.parse(fileBuffer);
    const blogObject = {
      title: req.body.title,
      content: req.body.content,
      updatedAt: new Date().toISOString(),
    };
    blogs.push(blogObject);
    await fs.writeFile("./data/blogs.json", JSON.stringify(blogs));
    res.status(200).end();
  } catch (e) {
    res.json(JSON.stringify(e));
  }
}
