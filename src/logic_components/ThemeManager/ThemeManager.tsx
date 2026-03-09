import { usePrefersDark } from "@solid-primitives/media"
import { createEffect, createSignal } from "solid-js"

function ThemeManager() {
    const isDark = usePrefersDark()

    const [themeValue, setThemeValue] = createSignal(isDark() ? "dark" : "light")

    createEffect(() => {
        document.documentElement.setAttribute("data-theme", themeValue())

        document.documentElement.style.colorScheme = themeValue()
    })

    createEffect(() => {
        setThemeValue(isDark() ? "dark" : "light")
    })

    return [themeValue, setThemeValue]
}

export default ThemeManager