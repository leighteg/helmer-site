import SponzaColumnsScreenshot from './assets/screenshots/sponza_columns.png'
import SponzaRaptorScreenshot from './assets/screenshots/sponza_raptor.png'
import Carousel from './components/Carousel/Carousel'
import './App.css'

const App = () => {
    return (
        <>
            <Carousel images={[SponzaColumnsScreenshot, SponzaRaptorScreenshot]} />

            <span style={{ position: 'absolute', padding: '2em', display: 'flex', "flex-direction": 'column', gap: '2em' }}>
                <div class='info'>
                    helmer is built on a simple but ambitious principle: balance. Every decision—technical, aesthetic, and practical—strives to equally value performance, visual fidelity, portability, and developer quality of life. The result is a game engine designed to look great, run well, and work on anything.

                    At its core, the engine features a flexible ECS architecture with three purpose-built renderers:

                    Deferred Renderer – A cutting-edge pipeline supporting advanced features like SSGI, SSR, and other modern effects, designed for high-end visuals.

                    Forward Renderer (Modern) – Optimized for lower-end but still modern hardware, offering efficient per-material uniform handling.

                    Forward Renderer (Legacy) – Built with maximum compatibility in mind, targeting older devices with texture array–based rendering.

                    Currently in alpha and closed source (commercially developed), the engine is under active development with many more features planned. The mission remains constant: a platform where no single characteristic overshadows the rest—where graphics, performance, accessibility, and developer workflow exist in harmony.
                </div>

                <div class='downloadPane'>
                    <span>helmer is still under heavy active development, and is not yet ready for production use. but to test helmer, a sponza scene demo is available for download.</span>
                    <span style={{ display: 'flex', "flex-direction": 'column', gap: '.5em' }}>
                        <button>Windows (x64)</button>
                        <button>macOS (Apple Silicon)</button>
                    </span>
                </div>
            </span>
        </>
    )
}

export default App