import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import api from "../../services/api";
import "./styles.css";

export default function Product(){
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fectchData = async () => {
            const response = await api.get(`/products/${id}`);
            setProduct(response.data);
        }
        fectchData()
    }, []);
    
    return(
        
        <div className="product-info">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>
                URL: <a href={product.url}>{product.url}</a>
            </p>
        </div>
    );
}