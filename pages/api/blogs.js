import fs from "fs/promises";
import Cors from "cors";
import path from "path";

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
  const filePath = "../../data/blogs.json";
  console.log(filePath);
  try {
    const fileBuffer = await fs.readFile(filePath);
    const blogs = JSON.parse(fileBuffer);
    const blogObject = {
      title: req.body.title,
      content: req.body.content,
      updatedAt: new Date().toISOString(),
    };
    blogs.push(blogObject);
    await fs.writeFile(filePath, JSON.stringify(blogs));
    res.status(200).end();
  } catch (e) {
    res.json(e);
  }
}
