import { Link } from "react-router-dom";

function ProductCard({ID,imgLink,name,price,ratings}){
    return(
        <Link to={`/details/${ID}`}>
            <div className=" w-64 max-h-45 border-2 border-gray-100 rounded-md px-2 py-4">
                <div><img src={imgLink}/></div>
                <div>{name}</div>
                <div>
                    <span>{price}</span>
                    <span>{ratings}</span>
                </div>
            </div>
        </Link>
        
    )
}

export default ProductCard;