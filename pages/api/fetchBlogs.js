import * as fs from 'fs';

// use this one for the synchronus methods
// export default function handler (req, res){

// use this one for the asynchronus methods 
export default async function handler (req, res){

    // This method uses the nodeJs asynchronus methods
    // *********************************************************
    const dirData = await fs.promises.readdir('./blogData', 'utf-8');
    let blogArray = [];
    let slicedBlogArray = dirData.slice(0, parseInt(req.query.count));
    for(let i = 0; i < slicedBlogArray.length; i++){
        const Data = await fs.promises.readFile(`./blogData/${slicedBlogArray[i]}`, 'utf-8');
        let blogData = JSON.parse(Data);
        blogArray.push(blogData);
    }
    res.status(500).json({totalBlogs: dirData.length, articleLength: slicedBlogArray.length, articles: blogArray});



    // This method uses the nodeJs synchronization methods
    // *****************************************************************
    //     const data = fs.readdirSync('./blogData', 'utf-8');
    //     let blogArray = [];
    //     for(let i = 0; i < data.length; i++){
    //         let responseData = fs.readFileSync(`./blogData/${data[i]}`, 'utf-8');
    //         responseData = JSON.parse(responseData);
    //         blogArray.push(responseData);
    //     }
    //     res.status(200).json({articles: blogArray});
}