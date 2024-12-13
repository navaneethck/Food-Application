// import{useState,useEffect} from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
// import { MENU_API } from "../utils/constants";


const RestaurantMenu = ()=>{

    // const [resInfo,setResInfo] = useState(null);
    const{resId} = useParams()
    const resInfo = useRestaurantMenu(resId);
    // useEffect(()=>{

    //     fetchMenu();
    // },[]);

    // const fetchMenu = async ()=>{
    //    const data = await fetch(MENU_API+resId);
    //    const json = await data.json();
    //    setResInfo(json)
       
    // }
    if(resInfo===null) return <Shimmer/>;
    const {name,avgRating,costForTwoMessage,cuisines,locality,sla}=resInfo?.cards[2]?.card?.card?.info
    console.log(resInfo)
    const{itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
    
    return (
        <div className="menu bg-orange-300">
            <h1 className="font-bold">{name}</h1>
            <h2>{avgRating} - {costForTwoMessage}</h2>
            <h3>{cuisines}</h3>
            <h4>{locality}</h4>
            <h5>{sla.slaString}</h5>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item =>
                <li  key = {item.card.info.id}>
                   
                    {item.card.info.name} 
                    <span>-{'\u00A0'} {"Rs"}{'\u00A0'}{'\u00A0'}{item.card.info.defaultPrice/100 ||  item.card.info.price/100 }</span>
                    </li>)}
                
            </ul>
        </div>
    )
};

export default RestaurantMenu;