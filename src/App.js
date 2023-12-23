import Navbar from './components/Navbar';
import Categories from './components/Categories';
import SaleImage from './components/Saleimage';
import Course from './components/Course';
import Topics from './components/Topics';
import Popular from './components/Popular';
import Footer from './components/Footer';
function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Categories></Categories>
            <SaleImage></SaleImage>
            <Course></Course>
            <Topics></Topics>
            <Popular></Popular>
            <Footer></Footer>
        </div>
    )
}
export default App