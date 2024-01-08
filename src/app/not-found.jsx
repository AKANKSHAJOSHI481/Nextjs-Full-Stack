import Link from "next/link"
function notFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Sorry page is not found.</p>
      <Link href = "/">Return Home</Link>
    </div>
  )
}

export default notFound
