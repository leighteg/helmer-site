import { RouteProps } from '@solidjs/router'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import { PageContextProvider } from './logic_components/PageContext/PageContext'

const App = (props: RouteProps<string, unknown>) => {
    return (
        <PageContextProvider>
            <NavBar />
            {props.children}
            <Footer />
        </PageContextProvider>
    )
}

export default App