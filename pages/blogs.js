import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '../styles/BlogPost.module.css'
import fs from 'fs'
import InfiniteScroll from 'react-infinite-scroll-component'
import Spinner from './components/Spinner'


export default function Blogs(props) {
  const [blogs, setBlogs] = useState(props.articles);
  const [count, setCount] = useState(8);
  const [totalBlogs, setTotalBlogs] = useState(blogs.totalBlogs);


  // fetching the data from an api when there is a parameter added with the api request, like - count
  // *******************************************************************************************************
  const fetchingdata = async () => {
    const response = await fetch(`http://localhost:3000/api/fetchBlogs?count=${count}`);
    const data = await response.json();
    setBlogs((data.articles));
    setTotalBlogs(data.totalBlogs);
    setCount(count + 3);
  }

  // fetching the data from the json file and useEffect the data in the website 
  // *********************************************************************************
  // const fetchingdata = async () => {
  //   const response = await fetch("http://localhost:3000/api/fetchBlogs");
  //   const data = await response.json();
  //   setBlogs(data);
  // }

  // using useEffect to change the DOM 
  // **********************************************
  useEffect(() => {
    fetchingdata();
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.blogContent}>
        <h1 className={styles.pageHeading}>Get All Our Latest Blogs Here</h1>
        <hr className={styles.afterPageHeading} />
        <div className="allBlogs">
          {/* The first blog article */}
          {
            // adding infiniteScroll to the blogs page
            <InfiniteScroll
              dataLength={blogs.length}
              next={fetchingdata}
              hasMore={(blogs.length !== totalBlogs)}
              loader={<Spinner />}>
              {
                blogs.map((blog) => {
                  return (
                    <Link href={`/blogpost/${blog.slug}`} key={blog.author}>
                      <div className={styles.blogSections}>
                        <div className={styles.blogHeading}>
                          {blog.title}
                        </div>
                        <hr className={styles.afterBlogHeading} />
                        <div className={styles.blogData}>
                          {blog.blogdesc}...
                        </div>
                      </div>
                    </Link>
                  )
                })
              }
            </InfiniteScroll>
          }
        </div>
      </div>
    </main>
  )
}


// api data fetching and building the whole webpage with serverSideRendering
// **************************************************************************************
// export async function getServerSideProps(context) {
//   const response = await fetch("http://localhost:3000/api/fetchBlogs");
//   const data = await response.json();
//   return {
//     props: { data },
//   }
// }


// static site generation with next export to get the website in the out folder
// ******************************************************************************************
export async function getStaticProps(context) {

  const dirData = await fs.promises.readdir('./blogData', 'utf-8');
  let blogArray = [];
  for (let i = 0; i < dirData.length; i++) {
    const Data = await fs.promises.readFile(`./blogData/${dirData[i]}`, 'utf-8');
    let blogData = JSON.parse(Data);
    blogArray.push(blogData);
  }

  return {
    props: { totalBlogs: dirData.length, articles: blogArray },
  }

}
