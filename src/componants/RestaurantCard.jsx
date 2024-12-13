import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props)=>{
    const { resData } = props;
    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime}= resData?.info
   
    return(
      <div className="ml-24 w-[250px] rounded-xl mt-5 bg-orange-600 hover:bg-red-700 text-center text-white">
     
        <img className = "res-logo rounded-xl" src={CDN_URL+cloudinaryImageId}></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}minutes</h4>
      </div>
    )
  
  }

  export default RestaurantCard;