import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
import { useContext, useEffect, useState } from "react";
import ProductListContext from "../../Context/ProductListContext";

function DisplayProduct(){

    const {list,setList} = useContext(ProductListContext);
    const [isLoading,setIsLoading] = useState(true);
    async function fetchProducts(){
        const response = await axios.get('https://dummyjson.com/products');
        const responseData = response.data.products;
        console.log(responseData);
        const responsePromise = await axios.all(responseData);

        const res = responsePromise.map((p)=>{
            return({
                id : p.id,
                image : p.thumbnail,
                name : p.title,
                price: p.price,
                rating: p.rating,
            })           
        })
        setList(res);
        console.log({list});

        setIsLoading(false);
    }

    useEffect(()=>{
        fetchProducts();
    },[]);


    return(
        <div className="flex flex-wrap justify-center gap-y-10 gap-x-2 absolute top-10 mt-10">
            {list.length > 0 && (isLoading) ? "Loading....." : list.map((p)=><ProductCard
                                                key={p.id}
                                                imgLink={p.image}
                                                name={p.name}
                                                price={p.price}
                                                ratings={p.rating}
            />)}            
        </div>
    );
}

export default DisplayProduct;