import fs from 'fs'


export default async function handler(req, res) {
    const dirData = await fs.promises.readdir('contacts');
    if (req.method === 'POST') {
        // process to POST a request
        const data = await fs.promises.writeFile(`contacts/${dirData.length + 1}.json`, JSON.stringify(req.body));
        res.status(200).json(req.body);

    } else if (req.method === 'GET') {
        // process to GET a request
        const data = await fs.promises.readFile('contacts/profile.json', 'utf-8');
        const parsed = JSON.parse(data);
        res.status(200).json(parsed);
    }
}