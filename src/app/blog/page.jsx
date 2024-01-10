import PostCard from "../../components/postcard/postCard";
import styles from "./Blog.module.css";
import {getPosts} from "../../lib/data";
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {next: {revalidate: 3600}});
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data = await res.json();
  // console.log(data);
  return data;
};
const Blogpage = async () => {
  
  const posts = await getData();
  // const posts = await getPosts();
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
