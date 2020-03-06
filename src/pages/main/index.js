import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "./styles.css";
import { Link } from "react-router-dom";


export default function Main() {
    const [product, setProduct] = useState([]);
    const [productInfo, setProductInfo] = useState({});
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function loadProducts(nextPage = page){
            const response = await api.get(`/products?page=${nextPage}`);
            const { docs, ...productInfo } = response.data;
            setProduct(docs);
            setProductInfo(productInfo)
        }
        loadProducts()
    }, [page]);
    
function prevPage() {
    setPage(page, productInfo);
    if (page === 1) return;
    const pageNumber = page - 1;
    setPage(pageNumber);
}

function nextPage() {
    setPage(page, productInfo);
    if (page === productInfo.pages) return;
    const pageNumber = page + 1;
    setPage(pageNumber)
}

return (
    <div className="product-list">
        {product.map(product => (
            <article key={product._id}>
                <strong>{product.title}</strong>
                <p>{product.description}</p>

                <Link to={`/products/${product._id}`}>Acessar</Link>
            </article>
        ))}
        <div className="actions">
            <button disabled={page === 1} onClick={() => prevPage()}>Anterior</button>
            <button disabled={page === productInfo.pages} onClick={() => nextPage()}>Próxima</button>
        </div>
    </div>
);
}