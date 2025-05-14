
import Layout from '../../Layout'
import NavBar from '../../Nav'
import HeaderOtherPage from '../../HeaderOtherPage'
import Footer from '../../Footer'
import Topics from './Topics'
import Trending from './Trending'


export default function TopicListing(){
    return(
        <>
            <Layout>
                <NavBar />
                <HeaderOtherPage currentPage='Topics Listing' />
                <Topics />
                <Trending />
            </Layout>
            
            <Footer />
        </>
        )
}