import Link from "next/link"
import Links from "./links/Links"
import styles from "./Navbar.module.css"

function Navbar() {
  return (
    <div className = {styles.container}>
      <div className = {styles.logo}>Logo</div>
      <Links/>
    </div>
  )
}

export default Navbar
