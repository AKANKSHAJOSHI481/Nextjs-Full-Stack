import PostCard from "../../components/postcard/postCard";
import styles from "./Blog.module.css";
<<<<<<< HEAD
import {getPosts} from "../../lib/data";
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next: {revalidate: 3600}});
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   const data = await res.json();
//   // console.log(data);
//   return data;
// };
const Blogpage = async () => {
  
  const posts = await getPosts();
=======
const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next: {revalidate: 3600}});
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data = await res.json();
  // console.log(data);
  return data;
};
const Blogpage = async () => {
  const posts = await getData();
>>>>>>> c1cc1c50fda6fc5e6ce05d864e6857f42e204060
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
  ))}
    </div>
  );
};

export default Blogpage;
