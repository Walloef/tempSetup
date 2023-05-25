import { ReactNode } from "react";
import { Link, Outlet } from "react-router-dom"

const Layout = ({children}: { children: ReactNode; }) => {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link></li>
          <li><Link to="/users">users</Link></li>
          <li><Link to="/posts">posts</Link></li>
        </ul>
      </nav>
      {children}
    </main>
  )
}

export default Layout