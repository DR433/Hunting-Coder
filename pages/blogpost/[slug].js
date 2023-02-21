import React, { useEffect, useState } from 'react'
import styles from '../../styles/DynamicPage.module.css'
import fs from 'fs'

// useRouter is a hook to get the router data given by the user in the address bar .
// import { useRouter } from 'next/router'

export default function Slug(props) {
    // const router = useRouter();
    // router.query will help you get the data given by the user in the address bar .
    // const { slug } = router.query;
    // const [blogData, setBlogData] = useState([]);


    const [blogData, setBlogData] = useState(props.parsedData);

    // This function is needed to create the html json to work and it will go as a arguement in the dangerouslySetInnerHTML method
    const sanitizedHtml = (content)=>({
        __html: content
    })

    // useEffect(() => {
        // this ensures if router is ready or not and if not then it returns nothing 
    //     if (!router.isReady) return;
    //     fetchBlogData();
    // }, [router.isReady])

    return (
        <div className={styles.main}>
            <div className={styles.dynamicPageContent}>
                <h1 className={styles.pageHeading}>{blogData && blogData.title}</h1>
                <hr className={styles.lineAfterParagraph} />
                <div className={styles.dynamicPageParagraph}>

                    {/* This one works if there is no json content that is written using html tags 
                    {blogData && blogData.content} */
                    }
                    {/* This one is if the content in this json file is written in html code then use the dandgerouslySetInnerHTML*/}
                    {blogData && <div dangerouslySetInnerHTML={sanitizedHtml(blogData.content)}></div>}
                </div>
            </div>
        </div>
    )
}

// api data generating with serverSideRendering 
// **********************************************************
// export async function getServerSideProps(context){
//     const { slug } = context.query;
//     const response = await fetch(`http://localhost:3000/api/fetchBlogData?slug=${slug}`);
//     const data = await response.json();
//     return {
//         props: {data},
//     }
// }


// this whole section will help you with the static site generation of your website
// **********************************************************************************************

// this function will help you set the paths from which the information is needed to be fetched .
export async function getStaticPaths(){
    return {
        paths:[
            {params: {slug: "javaScriptBlog"}},
            {params: {slug: "MongodbBlog"}},
            {params: {slug: "nextJsBlog"}},
            {params: {slug: "reactJsBlog"}},
        ],
        fallback: true
    }
}

// This function fetches the api data from these paths provided by the getStaticPaths 
export async function getStaticProps(context){
    const { slug } = context.params; 
    const data = await fs.promises.readFile(`./blogData/${slug}.json`, 'utf-8');
    const parsedData = JSON.parse(data);
    return {
        props: {parsedData},
    }
}