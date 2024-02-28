// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  let newData = await data.json()
  res.status(200).json(newData);
}
