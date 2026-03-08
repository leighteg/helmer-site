import SponzaColumnsScreenshot from '../../assets/screenshots/sponza_columns.png'
import SponzaRaptorScreenshot from '../../assets/screenshots/sponza_raptor.png'
import SponzaOverviewScreenshot from '../../assets/screenshots/sponza_overview.png'
import SponzaTopdownScreenshot from '../../assets/screenshots/sponza_topdown.png'
import CityCornerScreenshot from '../../assets/screenshots/city_corner.png'
import Carousel from '../../components/Carousel/Carousel'
import './Home.css'

const Home = () => {
    return (
        <>
            <Carousel images={[SponzaColumnsScreenshot, CityCornerScreenshot, SponzaRaptorScreenshot, SponzaOverviewScreenshot, SponzaTopdownScreenshot]} />

            <div style={{ display: 'flex', "justify-content": 'center' }}>
                <div class='base'>
                    <div class='info' style={{ "max-width": "53em" }}>
                        <h2>modular, extensible runtime<br />bring your own logic, or build over ours.</h2>

                        <p>there are many ways to use helmer. at it's core, <code>helmer</code> is nothing more than a robust, extendable runtime. components like the renderer, windowing, and audio are extensions of this runtime. this means you are <b>not</b> locked into some inherent/dependant logic paradigm such as ECS, nor an editor</p>

                        <div class='info-sec-cont'>
                            <h4>want to get straight to scripting? multiple integrations are provided:</h4>

                            <a class='info-sec' href='https://github.com/leighteg/helmer/tree/main/helmer_editor_egui'>
                                <h3>helmer editor</h3>
                                <p>a powerful, featured editor providing rich luau, rust, and visual scripting integrations</p>
                                <img src='https://raw.githubusercontent.com/leighteg/helmer/refs/heads/main/assets/screenshots/editor.png' width={'100%'} style={{ 'padding': 0 }} />
                            </a>
                            <a class='info-sec' href='https://github.com/leighteg/helmer/tree/main/helmer_becs'>
                                <h3><code>helmer_becs</code></h3>
                                <p>a robust integration for the expeditious yet powerful <code>bevy_ecs</code> library</p>
                                <img src='https://github.com/leighteg/helmer/blob/main/assets/screenshots/editor.png?raw=true' width={'100%'} />
                            </a>
                            <a class='info-sec' href='https://github.com/leighteg/helmer/tree/main/helmer_becs'>
                                <h3><code>helmer_ecs</code></h3>
                                <p>an integration for helmer's own simple ecs</p>
                                <img src='https://github.com/leighteg/helmer/blob/main/assets/screenshots/editor.png?raw=true' width={'100%'} />
                            </a>
                            <a class='info-sec' href='https://github.com/leighteg/helmer/tree/main/helmer_becs'>
                                <h3>custom!</h3>
                                <p>manually orchestrate data</p>
                                <img src='https://github.com/leighteg/helmer/blob/main/assets/screenshots/editor.png?raw=true' width={'100%'} />
                            </a>
                        </div>
                    </div>

                    <div class='info' style={{ "max-width": "53em" }}>
                        <h2>beautiful, scalable, powerful rendering</h2>

                        <p>a flexible, massively scalable render system built over a robust graph and a powerful asset pipeline</p>

                        <p>helmer's render system is architected to scale to worlds of any size/complexity with minimal overhead</p>

                        <div class='info-sec-cont'>
                            <h4>an abundance of beautiful graphs are provided:</h4>

                            <div class='info-sec'>
                                <h3 style={{ 'margin-bottom': 0 }}>default/raster graph</h3>
                                <img src={CityCornerScreenshot} width={'100%'} />
                                <ul style={{ display: 'flex', 'flex-direction': 'column', 'justify-content': 'start', 'align-items': 'start' }}>
                                    <li>tunable PBR</li>
                                    <li>physically based sky [LUT-based or raycast-based]</li>
                                    <li>SSGI</li>
                                    <li>SSR</li>
                                    <li>cascaded EVSM</li>
                                </ul>
                            </div>
                            <div class='info-sec'>
                                <h3>hybrid (RT) graph</h3>
                                <p>a robust integration for the expeditious yet powerful bevy_ecs library</p>
                                <img src='https://github.com/leighteg/helmer/blob/main/assets/screenshots/editor.png?raw=true' width={'100%'} />
                                <ul style={{ display: 'flex', 'flex-direction': 'column', 'justify-content': 'start', 'align-items': 'start' }}>
                                    <li>tunable PBR</li>
                                    <li>physically based sky [LUT-based or raycast-based]</li>
                                    <li>DDGIR</li>
                                    <li>RT reflections [RT + DDGIR fallback | SSR fallback]</li>
                                    <li>cascaded EVSM</li>
                                </ul>
                            </div>
                            <div class='info-sec'>
                                <h3>traced graph</h3>
                                <p>a robust integration for the expeditious yet powerful bevy_ecs library</p>
                                <img src='https://github.com/leighteg/helmer/blob/main/assets/screenshots/editor.png?raw=true' width={'100%'} />
                                <ul style={{ display: 'flex', 'flex-direction': 'column', 'justify-content': 'start', 'align-items': 'start' }}>
                                    <li>monte-carlo tracer</li>
                                    <li>robust, scalable optimizations to accomidate real time performance</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class='info' style={{ "max-width": "53em" }}>
                        <h2><b>tons</b> of building blocks</h2>

                        <div class='info-sec-cont'>
                            <a class='info-sec' href='https://github.com/leighteg/helmer/tree/main/helmer_editor_egui'>
                                <h3>helmer ui</h3>
                                <p style={{ margin: 0 }}>robust, rich, ergonomic retained & immediate APIs</p>
                                <p style={{ margin: 0 }}>flexible, powerful styling/layout</p>
                                <p style={{ 'margin-top': 0 }}>minimal overhead</p>
                                <img src='https://raw.githubusercontent.com/leighteg/helmer/refs/heads/main/assets/screenshots/editor.png' width={'100%'} style={{ 'padding': 0 }} />
                            </a>
                            <a class='info-sec' href='https://github.com/leighteg/helmer/tree/main/helmer_becs'>
                                <h3>powerful animation</h3>
                                <p>a robust integration for the expeditious yet powerful <code>bevy_ecs</code> library</p>
                                <img src='https://github.com/leighteg/helmer/blob/main/assets/screenshots/editor.png?raw=true' width={'100%'} />
                            </a>
                            <a class='info-sec' href='https://github.com/leighteg/helmer/tree/main/helmer_becs'>
                                <h3>sprite tooling</h3>
                                <p>a robust integration for the expeditious yet powerful <code>bevy_ecs</code> library</p>
                                <img src='https://github.com/leighteg/helmer/blob/main/assets/screenshots/editor.png?raw=true' width={'100%'} />
                            </a>
                        </div>
                    </div>

                    <div class='info' style={{ "max-width": "53em" }}>
                        <h2>runs <b>everywhere</b></h2>

                        <p>helmer was architected to both seamlessly scale to hardware of any tier/generation, and to deterministically run on any platform</p>

                        <div class='info-sec-cont'>
                            <h4>want to get straight to scripting? multiple integrations are provided:</h4>

                            <a class='info-sec' href='https://github.com/leighteg/helmer/tree/main/helmer_editor_egui'>
                                <h3>web support</h3>
                                <p>a powerful, featured editor providing rich luau, rust, and visual scripting integrations</p>
                                <img src='https://raw.githubusercontent.com/leighteg/helmer/refs/heads/main/assets/screenshots/editor.png' width={'100%'} style={{ 'padding': 0 }} />
                            </a>
                            <a class='info-sec' href='https://github.com/leighteg/helmer/tree/main/helmer_editor_egui'>
                                <h3>multiplatform</h3>
                                <p>a powerful, featured editor providing rich luau, rust, and visual scripting integrations</p>
                                <img src='https://raw.githubusercontent.com/leighteg/helmer/refs/heads/main/assets/screenshots/editor.png' width={'100%'} style={{ 'padding': 0 }} />
                            </a>
                            <a class='info-sec' href='https://github.com/leighteg/helmer/tree/main/helmer_becs'>
                                <h3>seamless, smooth low-tier hardware experience</h3>
                                <p>a robust integration for the expeditious yet powerful <code>bevy_ecs</code> library</p>
                                <img src='https://github.com/leighteg/helmer/blob/main/assets/screenshots/editor.png?raw=true' width={'100%'} />
                            </a>
                        </div>
                    </div>

                    <a href='/details' class='page-pane'>
                        <h2>features<span> &nbsp; </span>→</h2>
                    </a>

                    <a href='/tools' class='page-pane' style={{ "background-color": "rgba(160, 230, 150, 0.23)" }}>
                        <h2>tooling<span> &nbsp; </span>→</h2>
                    </a>

                    <a href='/demos' class='page-pane' style={{ "background-color": "rgba(200, 150, 200, 0.23)" }}>
                        <h2>demos<span> &nbsp; </span>→</h2>
                    </a>

                    <div class='info' style={{ "max-width": "53em" }}>
                        <h3>Almost there...</h3>

                        <p>all major features are implemented. helmer is <a href='https://github.com/leighteg/helmer?tab=readme-ov-file#left-to-do'>very close</a> to alpha</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home