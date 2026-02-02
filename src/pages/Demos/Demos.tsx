import { For, Show } from "solid-js"
import TuxLogo from '../../assets/logos/tux.svg'
import AppleLogo from '../../assets/logos/apple_black.svg'
import WindowsLogo from '../../assets/logos/windows.svg'
import WASMLogo from '../../assets/logos/wasm.svg'
import CityCornerScreenshot from '../../assets/screenshots/city_corner.png'
import "./Demos.css"

type DemoEntry = {
    title: string,
    description: Element,
    icon: string,
    file: URL,
    date: Date,
}

const Demos: DemoEntry[] = [
    {
        title: "helmer_becs city scene",
        description: <div>
            <ul>
                <li>built over <a href="https://github.com/bevyengine/bevy/tree/main/crates/bevy_ecs">bevy_ecs</a> integration (helmer_becs)</li>
                <li>asset streaming over http</li>
                <li>runtime asset derivative generation</li>
                <li>features bulk physics entity spawner for stressbenching</li>
            </ul>
        </div> as HTMLDivElement,
        icon: CityCornerScreenshot,
        file: new URL("https://helmer.leighteg.dev/builds/demos/becs_bench"),
        date: new Date(Date.UTC(2026, 1, 3)),
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

                        <img src={demo.icon} />

                        <p>{demo.description}</p>

                        <span style={{ display: 'flex', "flex-direction": 'column', gap: '.5em', "margin-bottom": ".8em" }}>
                            <button class='web' onClick={() => window.open(demo.file + `/WASM/${demo.file.pathname.split("/").filter(Boolean).at(-1)}/index.html`, '_blank')?.focus()}>
                                <img src={WASMLogo} height={'90%'} />
                                web
                            </button>
                            <Show when={false}>
                                <button class='linux' onClick={() => window.open(demo.file + '-linux_x64.tar.gz', '_blank')?.focus()}>
                                    <img src={TuxLogo} height={'90%'} />
                                    Linux (x64)
                                </button>
                                <button class='windows' onClick={() => window.open(demo.file + '-win_x64.zip', '_blank')?.focus()}>
                                    <img src={WindowsLogo} height={'90%'} />
                                    Windows (x64)
                                </button>
                                <button class='macos' onClick={() => window.open(demo.file + '-mac_arm.zip', '_blank')?.focus()}>
                                    <img src={AppleLogo} height={'90%'} />
                                    macOS (Apple Silicon)
                                </button>
                                <button class='macos' onClick={() => window.open(demo.file + '-mac_x64.zip', '_blank')?.focus()}>
                                    <img src={AppleLogo} height={'90%'} />
                                    macOS (x64)
                                </button>
                            </Show>
                        </span>

                        <span>{demo.date.toLocaleDateString()}</span>
                    </div>
                }</For>
            </div>
        </>
    )
}

export default DemosPage