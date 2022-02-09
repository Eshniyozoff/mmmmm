import Footer from "./footer"
import Header from "./header"

const Layout = (props) => {
    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-auto">{props.children}</div>
            <Footer />
        </div>
    );
};

export default Layout;