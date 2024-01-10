"use client";
import Link from "next/link";
import styles from "./Links.module.css";
import Navlink from "./navLink/navLink";
import Image from "next/image";
import { useState } from "react";
import { handleLogout } from "../../../lib/action";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];
const Links = ({session})=> {
  const [open, setOpen] = useState(false);
  
  const isAdmin = true;

  return (
    <div className = {styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <Navlink item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && <Navlink item={{ title: "Admin", path: "/admin" }} />}
            <form action={handleLogout}>
            <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <Navlink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image src = "/menu.png" alt = "" className={styles.menuButton} width = {30} height = {30} onClick={()=>setOpen((prev)=>!prev)}/>
      {
        open && <div className={styles.mobileLinks}>
          {links.map((link)=>(
            <Navlink item = {link} key={link.title}/>
          ))}
        </div>
      }
    </div>
  );
}

export default Links;
