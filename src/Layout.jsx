import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Layout = () => {
    return (
        <div id="content">
            <Header />
            <Outlet />
            <Footer />

            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 3000,
                    style: {
                        fontWeight: "700"
                    }
                }}
            />
        </div>
    );
};

export default Layout;