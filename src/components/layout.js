import React from 'react';
import Header from "./header/header";
import Contact from "../components/contact";
import Footer from "./footer/footer";

const layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Contact />
            <Footer />
        </>
    )
}

export default layout;