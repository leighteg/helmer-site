import { RouteProps } from '@solidjs/router'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import NoticePopup from './components/NoticePopup/NoticePopup'

const App = (props: RouteProps<string, unknown>) => {
    return (
        <>
            <NoticePopup title='THIS SITE IS APPROXIMATE!' body='helmer is a project of ambitious scope, and is still in pre-alpha. this site is only updated every so often and may not accurately reflect the current state of helmer. everything is subject to change.' />
            <NavBar />
            {props.children}
            <Footer />
        </>
    )
}

export default App