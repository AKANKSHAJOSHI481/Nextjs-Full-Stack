import Image from "next/image";
<<<<<<< HEAD
import { Suspense } from "react";
import styles from "./SinglePost.module.css";
import PostUser from "../../../components/postUser/postUser";
import { getPost } from "../../../lib/data";
//with API
// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   const data = await res.json();
//   // console.log(data);
//   return data;
// };
const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  // const post = await getData(slug);
  const post = await getPost(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={post.img ? post.img : "/noavatar.png"} alt="" fill className={styles.img} />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post?.desc}</div>
=======
import styles from "./SinglePost.module.css";
import PostUser from "../../../components/postUser/postUser"
const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data = await res.json();
  // console.log(data);
  return data;
};
const SinglePostPage = async ({params}) => {
  const {slug} = params;
  const post = await getData(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/noavatar.png" alt="" fill className={styles.img} />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image src="/noavatar.png" alt="" className={styles.avatar} width = {50} height = {50} />
          
          <PostUser userId = {post.userId}/>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
>>>>>>> c1cc1c50fda6fc5e6ce05d864e6857f42e204060
      </div>
    </div>
  );
};

export default SinglePostPage;
