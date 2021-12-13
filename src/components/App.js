import { useState } from "react";

import Home from "./Home";
import Header from "./Header";

export default function App() {

    const [screen, setScreen] = useState(null);

    return ( 
        <>
            {
            screen ? 
            (
            <>
                <Header />
                {screen}
            </>
            ) :
            <Home setScreen={setScreen}/>
            }
        </>

    );
}