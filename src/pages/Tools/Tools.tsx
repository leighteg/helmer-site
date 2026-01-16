import { For } from "solid-js"
import TuxLogo from '../../assets/logos/tux.svg'
import AppleLogo from '../../assets/logos/apple_black.svg'
import WindowsLogo from '../../assets/logos/windows.svg'
import WASMLogo from '../../assets/logos/wasm.svg'
import "./Tools.css"

type ToolEntry = {
    title: string,
    description: string,
    icon: string,
    file: URL,
    date: Date,
}

const Tools: ToolEntry[] = [
    {
        title: "helmer view",
        description: "a robust tool for viewing GLTF models/scenes",
        icon: "",
        file: new URL("https://helmer.leighteg.dev/builds/tools/helmer_view"),
        date: new Date(Date.UTC(2026, 0, 17)),
    }
]

const ToolsPage = () => {
    return (
        <>
            <div id="tools-body">
                <h1 id="title">tooling</h1>
                
                <For each={Tools}>{tool =>
                    <div class="tool-section">
                        <h2>{tool.title}</h2>

                        <p>{tool.description}</p>

                        <span style={{ display: 'flex', "flex-direction": 'column', gap: '.5em', "margin-bottom": ".8em" }}>
                            <button class='linux' onClick={() => window.open(tool.file + '-linux_x64.tar.gz', '_blank')?.focus()}>
                                <img src={TuxLogo} height={'90%'} />
                                Linux (x64)
                            </button>
                            <button class='windows' onClick={() => window.open(tool.file + '-win_x64.zip', '_blank')?.focus()}>
                                <img src={WindowsLogo} height={'90%'} />
                                Windows (x64)
                            </button>
                            <button class='macos' onClick={() => window.open(tool.file + '-mac_arm.zip', '_blank')?.focus()}>
                                <img src={AppleLogo} height={'90%'} />
                                macOS (Apple Silicon)
                            </button>
                            <button class='macos' onClick={() => window.open(tool.file + '-mac_x64.zip', '_blank')?.focus()}>
                                <img src={AppleLogo} height={'90%'} />
                                macOS (x64)
                            </button>
                            <button class='web'>
                                <img src={WASMLogo} height={'90%'} />
                                web (web support coming soon)
                            </button>
                        </span>
                        
                        <span>{tool.date.toLocaleDateString()}</span>
                    </div>
                }</For>
            </div>
        </>
    )
}

export default ToolsPage