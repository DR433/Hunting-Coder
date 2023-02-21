/* Next.js API route support: https://nextjs.org/docs/api-routes/introduction*/

import * as fs from 'fs'

export default async function handler(req, res) {

  // if your api endpoint is kind of like this - localhost:3000/api/fetchBlogData?slug=some_Keywords_to_Find_blog, then the next line catches the slug and helps to use it as a variable to navigate towards the json file. It works for any kind of parameter you decide to give it and you can access the data based on that parameter if you put the logic in right ways in your api using that parameter.
  const slug = req.query.slug;

  // nodeJs file reading technique in asynchronus mode
  const data = await fs.promises.readFile(`./blogData/${slug}.json`, 'utf-8');
  const blogData = JSON.parse(data);
  res.status(200).json(blogData);
}
