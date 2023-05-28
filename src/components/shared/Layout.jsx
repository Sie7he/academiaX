import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header />
    <Main>
     <Outlet />
    </Main>
    <Footer />
    </>
  )
}

export default Layout