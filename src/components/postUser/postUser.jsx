<<<<<<< HEAD
import { getUser } from "../../lib/data";
import styles from "./postUser.module.css";
import Image from "next/image";
const getData = async (userId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data = await res.json();
  // console.log(data);
  return data;
};
const postUser = async ({ userId }) => {
  // const user = await getData(userId);
  const user = await getUser(userId);
  return (
    <div className={styles.container}>
      <Image
        src={user.img ? user.img : "/noavatar.png"}
        alt=""
        className={styles.avatar}
        width={50}
        height={50}
      />

      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user?.username}</span>
      </div>
    </div>
  );
};
=======
import styles from './postUser.module.css'

const getData = async (userId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const data = await res.json();
    // console.log(data);
    return data;
  };
const postUser = async ({userId})=> {
    const user = await getData(userId);
  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{user.username}</span>
    </div>
  );
}
>>>>>>> c1cc1c50fda6fc5e6ce05d864e6857f42e204060

export default postUser;
