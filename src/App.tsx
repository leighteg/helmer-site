import SponzaColumnsScreenshot from './assets/screenshots/sponza_columns.png'
import SponzaRaptorScreenshot from './assets/screenshots/sponza_raptor.png'
import SponzaOverviewScreenshot from './assets/screenshots/sponza_overview.png'
import SponzaTopdownScreenshot from './assets/screenshots/sponza_topdown.png'
import AppleLogo from './assets/logos/apple_black.svg'
import WindowsLogo from './assets/logos/windows.svg'
import Carousel from './components/Carousel/Carousel'
import './App.css'

const App = () => {
    return (
        <>
            <Carousel images={[SponzaColumnsScreenshot, SponzaRaptorScreenshot, SponzaOverviewScreenshot, SponzaTopdownScreenshot]} />

            <div style={{ display: 'flex', "justify-content": 'center' }}>
                <div class='base'>
                    <div class='info'>
                        <h3>Comprehensive Overview</h3>

                        <p>
                            helmer is built on a simple but ambitious principle: balance. Every decision—technical, aesthetic, and practical—strives to equally value performance, visual fidelity, portability, and developer quality of life. The result is a game engine designed to look great, run well, and work on anything.

                            At its core, helmer features a flexible ECS architecture with three purpose-built renderers:

                            Deferred Renderer – A cutting-edge pipeline supporting advanced features like SSGI, SSR, and other modern effects, designed for high-end visuals.

                            Forward Renderer (Modern) – Optimized for lower-end but still modern hardware, offering efficient per-material uniform handling.

                            Forward Renderer (Legacy) – Built with maximum compatibility in mind, targeting older devices with texture array–based rendering.

                            Currently in alpha and closed source (commercially developed), helmer is under active development with many more features planned. The mission remains constant: a platform where no single characteristic overshadows the rest—where graphics, performance, accessibility, and developer workflow exist in harmony.
                        </p>
                    </div>

                    <div class='info'>
                        <h3>Why Reinvent the Wheel?</h3>

                        <p>
                            Modern engines often overcommit—pushing visuals at the cost of performance, or chasing performance at the expense of developer workflow and accessibility. helmer was built to close that gap. Its philosophy is balance: delivering strong visuals, consistent performance across hardware generations, and a streamlined developer experience. Where other engines lean heavily in one direction, helmer aims to keep all aspects in equilibrium.
                        </p>
                    </div>

                    <div class='downloadPane'>
                        <h3 style={{ margin: '0' }}>Sponza Demo</h3>
                        <span>helmer is still under heavy active development, and is not yet ready for production use. but to test helmer, a sponza scene demo is available for download.</span>

                        <span style={{ display: 'flex', "flex-direction": 'column', gap: '.5em' }}>
                            <button class='windows' onClick={() => window.open(location.href + 'builds/helmer-win.zip', '_blank')?.focus()}>
                                <img src={WindowsLogo} height={'90%'} />
                                Windows (x64)
                            </button>
                            <button class='macos' onClick={() => window.open(location.href + 'builds/helmer-mac.zip', '_blank')?.focus()}>
                                <img src={AppleLogo} height={'90%'} />
                                macOS (Apple Silicon)
                            </button>
                        </span>
                    </div>
                </div>
            </div>

            <footer>© 2025 leighton</footer>
        </>
    )
}

export default App