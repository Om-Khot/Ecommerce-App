import { useContext, useEffect, useState } from "react";
import ProductListContext from "../Context/ProductListContext";
import { useParams } from "react-router-dom";

function DetailsPage(){

    const {list} = useContext(ProductListContext);
    const {id} = useParams();
    const [product,setProduct] = useState({});
    function fetchProductDetails(){
        const productDetails = list.map((p)=>{
            if(p.id == id){
                setProduct({
                    name : p.name,
                    image: p.image,
                    price: p.price,
                    rating: p.rating
                });
            }
        });
    }

    useEffect(()=>{
        fetchProductDetails();
    },[]);

    return(
        <div className="ml-10 mt-5">
            <h2 className="text-lg font-bold">Name : {product.name}</h2>
            <div className="border-slate-500 border-2 w-[260px] my-5"><img src={product.image}/></div>
            <h2 className="font-semibold">Price : {product.price}</h2>
            <h2 className="font-semibold">Ratings : {product.rating}</h2>
        </div>
    );
}

export default DetailsPage;