import React from "react";

import Header from "../components/Layout/Header";
import MainNavigation from "../components/Layout/MainNavigation";
import Footer from "../components/Layout/Footer";
import Separator from "../components/Layout/Separator";

const App = (props) => (
    <div>
        <Header />
        <MainNavigation />
        
        <Separator />
        
        {props.children || <Index/>}

        <Footer />
    </div>
)

export default App