import React from 'react';
import Navbar from './Components/Header/Navbar';
import Welcome from './Components/Welcome/Welcome';
import Info from './Components/Info/Info';
import Footer from './Components/Footer/Footer';
const App = () => {
    return(
        <>
            <Navbar />
            <Welcome />
            <Info />
            <Footer />
        </>
    );
}

export default App;