import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "./services/productsAPI";
import React from "react";

function Prod(){
    const{data,isLoading,error}=useGetAllProductsQuery()

    return(
        <div>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    {data.products.map((product) => (
                        <div key={product.id}>
                            <Link to={`/products_details_rtk/${product.id}`}><h3>{product.title}</h3></Link>
                        </div>
                    ))}
                </>
            ) : null}
        </div>
    )
}

export default Prod;