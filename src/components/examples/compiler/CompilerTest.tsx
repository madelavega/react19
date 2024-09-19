import {useEffect, useRef, useState} from "react";
import Footer from "./Footer";

const CompilerTest = () => {
    const [renderCount, setRenderCount] = useState(0);
    const interval = useRef(0);

    useEffect(() => {
        interval.current = setInterval(() => {
            setRenderCount(rc => ++rc);
        }, 2000);
        return () => {
            interval.current && clearInterval(interval.current);
        }
    }, []);

    return (<>
        Renderizado {renderCount} veces
        <Footer/>
    </>)
}

export default CompilerTest;