import { createContext, useState, useEffect, React } from "react";
import axios  from "axios";

export const dataContext = createContext();

const DataProvider = ({ children}) => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios("libros.json").then((res) => setData(res.data));
    }, []);

    return <dataContext.Provider value={{ data, cart, setCart }}> {children}</dataContext.Provider>;
};

export default DataProvider;