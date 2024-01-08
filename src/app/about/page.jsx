import Image from "next/image";
import styles from "./About.module.css";
export const metadata = {
  title: "About Page",
  description: "About description",
};
function Aboutpage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className={styles.boxes}>
          <div className = {styles.box}>
            <h1>10 K+</h1>
            <p>Year of Experience</p>
          </div>
          <div className = {styles.box}>
            <h1>10 K+</h1>
            <p>Year of Experience</p>
          </div>
          <div className = {styles.box}>
            <h1>10 K+</h1>
            <p>Year of Experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src = "/about.png" alt = "pic" fill className={styles.img}/>
      </div>
    </div>
  );
}

export default Aboutpage;
