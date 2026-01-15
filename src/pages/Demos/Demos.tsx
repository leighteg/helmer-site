import { For } from "solid-js"
import AppleLogo from '../../assets/logos/apple_black.svg'
import WindowsLogo from '../../assets/logos/windows.svg'
import WASMLogo from '../../assets/logos/wasm.svg'
import "./Demos.css"

type DemoEntry = {
    title: string,
    description: string,
    icon: string,
    file: URL,
    date: Date,
}

const Demos: DemoEntry[] = [
    {
        title: "helmer view",
        description: "a robust tool for viewing GLTF models/scenes",
        icon: "",
        file: new URL("https://helmer.leighteg.dev/builds/demos/helmer_view"),
        date: new Date(Date.UTC(2026, 0, 15)),
    }
]

const DemosPage = () => {
    return (
        <>
            <div id="demos-body">
                <h1 id="title">demos</h1>
                
                <For each={Demos}>{demo =>
                    <div class="demo-section">
                        <h2>{demo.title}</h2>

                        <p>{demo.description}</p>

                        <span style={{ display: 'flex', "flex-direction": 'column', gap: '.5em', "margin-bottom": ".8em" }}>
                            <button class='windows' onClick={() => window.open(demo.file + '-win.zip', '_blank')?.focus()}>
                                <img src={WindowsLogo} height={'90%'} />
                                Windows (x64)
                            </button>
                            <button class='macos' onClick={() => window.open(demo.file + '-mac.zip', '_blank')?.focus()}>
                                <img src={AppleLogo} height={'90%'} />
                                macOS (Apple Silicon)
                            </button>
                            <button class='web'>
                                <img src={WASMLogo} height={'90%'} />
                                web (web support coming soon)
                            </button>
                        </span>
                        
                        <span>{demo.date.toLocaleDateString()}</span>
                    </div>
                }</For>
            </div>
        </>
    )
}

export default DemosPage