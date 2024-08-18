import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import Latest from './Latest';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Home = () => {
    const news = useLoaderData();

    return (
        <div>
            <Header/>
            <Latest/>
            <Navbar/>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className='order-2 md:order-1'><LeftSideNav/></div>
                <div className='order-3 md:order-2 md:col-span-2'>
                    <p className='text-xl font-semibold text-center'>Dragon News Home</p>
                {
                    news.map(aNews => <NewsCard aNews={aNews} key={aNews._id}></NewsCard>)
                }
                    </div>
                <div className='order-1 md:order-3'><RightSideNav/></div>
            </div>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;