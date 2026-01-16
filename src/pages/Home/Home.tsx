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
                    <div class='info' style={{"max-width": "53em"}}>
                        <h3>Why Reinvent the Wheel?</h3>

                        <p>Considering the scope/extensibility/goals of modern engines, this is a loaded question.</p>

                        <p>
                            Modern foundations often overcommit, pushing visuals at the cost of performance, or chasing performance at the expense of developer workflow and accessibility. helmer was built to close that gap. Its philosophy is balance: delivering robust visuals, consistent performance across hardware generations, and a streamlined developer experience. Where other engines lean heavily in one direction, helmer aims to keep all aspects in equilibrium.
                        </p>
                        <p>
                            Regardless, arguably any mainstream engine is likely bound by architectural decisions made 12+ years ago.
                        </p>
                    </div>

                    <div class='info' style={{"max-width": "53em"}}>
                        <h3>But alternatives already fill that gap...</h3>

                        <p>
                            Sort of. The limitation of many mainstream engines is their financial incentive to cater to AAA studios (or the opposite). Consequently, they prioritize "assembly line" workflows designed for high-volume production over the seamless (or verbose) flexibility needed for truly scalable, adaptable development.
                        </p>
                        <p>
                            helmer is naturally unbiased. It can be bent to cater any workflow.
                        </p>
                    </div>

                    <a href='/details' class='page-pane'>
                        <h2>features<span> &nbsp; </span>→</h2>
                    </a>

                    <a href='/tools' class='page-pane' style={{"background-color": "rgba(160, 230, 150, 0.23)"}}>
                        <h2>tooling<span> &nbsp; </span>→</h2>
                    </a>

                    <a href='/demos' class='page-pane' style={{"background-color": "rgba(200, 150, 200, 0.23)"}}>
                        <h2>demos<span> &nbsp; </span>→</h2>
                    </a>

                    <div class='info' style={{"max-width": "53em"}}>
                        <h3>Almost there...</h3>

                        <p>
                            Unfortunately, helmer is not yet ready for you to use, but it's getting there. Expect an alpha v1 release April-July - which will hopefully include an editor.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home