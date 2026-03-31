import { useGetAllProductsQuery, useGetProductsByIdQuery } from "./services/productsAPI";
import React from "react";
import { useParams } from "react-router-dom";

function ProdDetails(){
    const { id } = useParams(); 
    const{data,isLoading,error}=useGetProductsByIdQuery(id)

    return(
        <div>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    <h2>{data.title}</h2>
                    <p>Price: ₹{data.price}</p>
                    <img src={data.thumbnail} alt={data.title} width="150" />
                </>
            ) : null}
        </div>
    )
}

export default ProdDetails;