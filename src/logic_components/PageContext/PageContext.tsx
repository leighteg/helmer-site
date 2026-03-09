import { Accessor, createContext, Setter, useContext } from "solid-js";
import ThemeManager from "../ThemeManager/ThemeManager";

type PageContext = {
    themeValue: Accessor<'light' | 'dark'>,
    setThemeValue: Setter<'light' | 'dark'>
}

const pageContext = createContext()
export const usePageContext = () => useContext(pageContext) as PageContext

export const PageContextProvider = (props: { children: any }) => {
    const [theme, setTheme] = ThemeManager()

    return (
        <pageContext.Provider value={{ themeValue: theme, setThemeValue: setTheme }}>
            {props.children}
        </pageContext.Provider>
    )
}