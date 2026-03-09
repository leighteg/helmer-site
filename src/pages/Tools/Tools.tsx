import { For, Show } from "solid-js"
import TuxLogo from '../../assets/logos/tux.svg'
import AppleLogo from '../../assets/logos/apple_black.svg'
import WindowsLogo from '../../assets/logos/windows.svg'
import WASMLogo from '../../assets/logos/wasm.svg'
import GitHubLogo from '../../assets/logos/github-dark.svg'
import EditorScreenshot from '../../assets/screenshots/editor.png'
import HelmerViewScreenshot from '../../assets/screenshots/helmer_view.png'
import "./Tools.css"

type ToolStage = 'preview' | 'pre-alpha' | 'alpha' | 'beta' | 'release'

type ToolEntry = {
    title: string,
    description: string,
    icon: string,
    file?: URL,
    repo?: URL,
    date?: Date,
    stage: ToolStage,
}

const Tools: ToolEntry[] = [
    {
        title: "helmer editor",
        description: "a powerful, featured editor providing rich luau, rust, and visual scripting integrations",
        icon: EditorScreenshot,
        repo: new URL("https://github.com/leighteg/helmer/tree/main/helmer_editor_egui"),
        stage: 'preview',
    },
    {
        title: "helmer view",
        description: "a robust tool for viewing GLTF models/scenes",
        icon: HelmerViewScreenshot,
        file: new URL("https://builds.helmer.leighteg.dev/builds/tools/helmer_view"),
        date: new Date(Date.UTC(2026, 0, 17)),
        stage: 'preview',
    },
]

const ToolsPage = () => {
    return (
        <>
            <div id="tools-body">
                <h1 id="title">tooling</h1>

                <For each={Tools}>{tool =>
                    <a class="tool-section" id="editor">
                        <h2 style={{ "margin-bottom": "0" }}>{tool.title}</h2>
                        <b><span class="stage" style={tool.stage === 'preview' ? { color: '#FFA500' } : tool.stage === 'pre-alpha' ? { color: '#FF0000' } : tool.stage === 'alpha' ? { color: '#FFC0CB' } : tool.stage === 'beta' ? { color: '#808080' } : { color: '#00FF00' }}>{tool.stage}</span></b><br />

                        <img src={tool.icon} />

                        <p>{tool.description}</p>

                        <Show when={tool.repo}>
                            <span style={{ display: 'flex', "flex-direction": 'column', gap: '.5em', "margin-bottom": ".8em" }}>
                                <a class='button web' href={tool.repo?.toString()} target='_blank'>
                                    <img src={GitHubLogo} height={'90%'} />
                                    repo
                                </a>
                            </span>
                        </Show>

                        <Show when={tool.file}>
                            <span style={{ display: 'flex', "flex-direction": 'column', gap: '.5em', "margin-bottom": ".8em" }}>
                                <a class='button web' href={tool.file + '/WASM/helmer_view/index.html'} target='_blank'>
                                    <img src={WASMLogo} height={'90%'} />
                                    web
                                </a>
                                <a class='button linux' href={tool.file + '-linux_x64.tar.gz'} target='_blank'>
                                    <img src={TuxLogo} height={'90%'} />
                                    Linux (x64)
                                </a>
                                <a class='button windows' href={tool.file + '-win_x64.zip'} target='_blank'>
                                    <img src={WindowsLogo} height={'90%'} />
                                    Windows (x64)
                                </a>
                                <a class='button macos' href={tool.file + '-mac_arm.zip'} target='_blank'>
                                    <img src={AppleLogo} height={'90%'} />
                                    macOS (Apple Silicon)
                                </a>
                                <a class='button macos' href={tool.file + '-mac_x64.zip'} target='_blank'>
                                    <img src={AppleLogo} height={'90%'} />
                                    macOS (x64)
                                </a>
                            </span>
                        </Show>

                        <Show when={tool.date}>
                            <span>{tool.date!.toLocaleDateString()}</span>
                        </Show>
                    </a>
                }</For>
            </div>
        </>
    )
}

export default ToolsPage