import React, { useEffect } from "react";
import api from "../../services/api";

export default function Main() {

    useEffect(() => {
        async function load(){
            const response = await api.get('/products');
            console.log(response.data);
        }
        load()
    }, []);
    
    
    return (<h1>Testando o Commit</h1>)
}