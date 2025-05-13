import Layout from '../../Layout'
import NavBar from '../../Nav'
import Explore from './Explore'
import Faq from './Faq'
import Featured from './Featured'
import GetInTouch from './GetInTouch'
import HomeHero from './HomeHero'
import HowDoseWork from './HowDoseWork'
import Footer from '../../Footer'



export default function Home() {
    return (
        <>
        <Layout>
            <NavBar />
            <HomeHero />
            <Featured />
            <Explore />
            <HowDoseWork />
            <Faq />
            <GetInTouch />
        </Layout>
        <Footer />
        </>
    )
}