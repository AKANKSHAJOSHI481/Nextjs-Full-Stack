"use client";
import styles from "./navLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
function navLink({ item }) {
  const pathname = usePathname();
  return (
    <Link href={item.path} key={item.title} className={`${styles.container} ${pathname === item.path && styles.active}`}>
      {item.title}
    </Link>
  );
}

export default navLink;
