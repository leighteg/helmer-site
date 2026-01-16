import "./Details.css"

const DetailsPage = () => {
    return (
        <>
            <div id="details-body">
                <h1 id="title">features</h1>

                <div class="feature-section">
                    <h2>wield the logic thread</h2>
                    <p>although ECS integrations are provided, you are <b>not</b> bound to a single game logic paradigm. helmer's lightweight runtime enables you to directly hook callbacks to the logic thread, so you can provide a completely custom logic implementation.</p>
                </div>

                <div class="feature-section">
                    <h2>first-class ECS support</h2>
                    <p>helmer gives the developer full control over game logic architecture, but also provides powerful ECS integrations, featuring ergonomic APIs that <b>enable you to just get to scripting</b>:</p>
                    <ul>
                        <li><b>helmer_becs</b>: a robust integration for the expeditious yet powerful <a href="https://github.com/bevyengine/bevy/tree/main/crates/bevy_ecs">bevy_ecs</a> library.</li>
                        <li><b>helmer_ecs</b>: the og! simple and surprisingly scalable.</li>
                        <li><b>anything you want</b>: hecs, flecs, EnTT, etc.. - integrate any library of your choice. but don't stop at ECS libraries: ECS, CBA, event-driven, etc.., you name it. helmer is what you make it.</li>
                    </ul>
                </div>

                <div class="feature-section">
                    <h2>robust asset pipeline</h2>
                    <p>instant. seamless. featured.</p>
                    <ul>
                        <li><b>fast</b>: all tasks are allocated to a thread/worker pool</li>
                        <li><b>GLTF-based pipeline</b>: GLTF is a thoughtful, well-designed standard, providing detailed, proper hierarchical scene descriptions - all while maintaining a lightweight yet malleable form. artists get mini-USD level freedom and developers love life just a little more.</li>
                        <li><b>streamed</b>: assets are streamed on demand from their respective files. if you attempt to load a massive scene, only the needed resources are brought into RAM.</li>
                        <li><b>cache</b>: frequent/high-priority assets are cached in memory to skip the fs step</li>
                        <li><b>on-demand LOD/mip generation</b>: helmer was designed to generate LODs at runtime. it is unnoticeable. when over-budget (VRAM soft), the renderer will start to request lower quality derivatives of meshes/textures to relax VRAM pressure.</li>
                    </ul>
                </div>

                <div class="feature-section">
                    <h2>renderer</h2>
                    <p>fast. featured. massively scalable. on any hardware.</p>
                    <ul>
                        <li><b>any hardware</b>: helmer supports all major GPU backends, ensuring consistent support across platforms. helmer's speedy asset streaming & resource management allows for hardware of any tier/generation/limit to hit performance goals - and not at the expense of looks.</li>
                        <li><b>asset streaming</b>: helmer's robust yet low-overhead asset streaming enables the seamless traversal of massive worlds under any reasonable budgets.</li>
                        <li><b>decoupled rendering</b>: helmer's architecture ensures no thread is bound to another thread. consequently, the framerate cannot be affected by the tickrate (or vice versa), and data is interpolated to ensure motion appears smooth even when the logic thread is the opposite of smooth.</li>
                        <li><b>beautiful</b>: helmer provides a robust <b>default graph</b>:
                        <ul>
                            <li><b>tunable PBR</b>: full Cook-Torrance+GGX PBR lighting, with some optional custom tweaks for stylization.</li>
                            <li><b>cascaded EVSM</b>: stable, scalable, and pretty. features configurable dynamic PCF for soft shadows.</li>
                            <li><b>SSGI</b>: highly tunable, scalable, and fast, providing realistic indirect light.</li>
                            <li><b>SSR</b>: highly tunable, scalable, and fast, providing realistic reflections.</li>
                        </ul>
                        </li>
                    </ul>
                </div>

                <div class="feature-section">
                    <h2><u><b>powerful</b></u> render graph</h2>
                    <p>every feature ever. no overhead. extensible.</p>
                    <ul>
                        <li><b>modern</b>: supports mesh shaders, indirect drawing, GPU-driven pipeline, etc..</li>
                        <li><b>extensible</b>: add passes and graph templates using the ergonomic API</li>
                        <li><b>resourceful</b>: incredibly quick resource management, even with absurd resource counts, yet virtually no overhead.</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default DetailsPage