import { Link, navigate } from '../Link'

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <p>this is the home page</p>
      <Link to='/about'>About Page</Link>
    </>
  )
}
