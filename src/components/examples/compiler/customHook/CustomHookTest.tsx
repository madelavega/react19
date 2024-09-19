import {useState, useEffect, useMemo} from "react";

const useGetResponse = () => {
    const response = useMemo(() => ({test: "ok"}), []);
    return response;
};

export default function Component() {
    const [count, setCount] = useState(0);
    const response = useGetResponse();

    useEffect(() => {
        console.log("cambio", response);
        setCount((prev) => prev + 1);
    }, [response]);

    return <div>Prueba {count}!</div>;
}
