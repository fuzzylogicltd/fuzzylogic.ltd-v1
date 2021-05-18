import React from 'react';
import Helmet from "../components/helmet";
import Header from "./header/header";
import Contact from "../components/contact";
import Footer from "./footer/footer";
import "../styles/global.css";

const layout = ({ children }) => {
    return (
        <>
            <Helmet slug="" title="fuzzylogic.ltd - custom web design and development" />
                
            <Header />
            {children}
            <Contact />
            <Footer />
        </>
    )
}

export default layout;