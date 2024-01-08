import Image from "next/image";
import styles from "./PostCard.module.css";
import Link from "next/link";
<<<<<<< HEAD
const postCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
      
          <div className={styles.imgContainer}>
            <Image src={post.img ? post.img : "/noavatar.png"} alt="" fill className={styles.img} />
          </div>
        
        
        <span className={styles.date}>
          {post.createdAt?.toString().slice(4, 16)}
=======
const postCard = ({post})=> {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill className={styles.img} />
        </div>
        <span className={styles.date}>
          {
            // {post.createdAt?.toString().slice(4, 16)}
          }
          01.01.2024
>>>>>>> c1cc1c50fda6fc5e6ce05d864e6857f42e204060
        </span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
<<<<<<< HEAD
        <p className={styles.desc}>{post.desc}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
=======
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.id}`}>
>>>>>>> c1cc1c50fda6fc5e6ce05d864e6857f42e204060
          READ MORE
        </Link>
      </div>
    </div>
  );
<<<<<<< HEAD
};
=======
}
>>>>>>> c1cc1c50fda6fc5e6ce05d864e6857f42e204060

export default postCard;
