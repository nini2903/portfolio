import Footer from "./Footer";
import Header from "./Header";
import Home from "../Home";

function Layout({children}) {
    return ( 
        <div>
            <Header/>
           <Home/>
            {children}
            <Footer/>
        </div>
     );
}

export default Layout;