import Header from "../parts/header"
import Footer from "../parts/footer"
import { Outlet } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default HomePage;