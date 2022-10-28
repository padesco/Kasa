import React from 'react';

import './Main.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Main({children}) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Main;