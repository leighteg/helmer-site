import { RouteProps } from '@solidjs/router'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import NoticePopup from './components/NoticePopup/NoticePopup'

const App = (props: RouteProps<string, unknown>) => {
    return (
        <>
            <NavBar />
            {props.children}
            <Footer />
        </>
    )
}

export default App