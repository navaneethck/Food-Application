import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2397171&lng=75.8411287&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);


 
    //optional chaining
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus()

  if(onlineStatus===false){
    return (<h1>
      looks like you are offline please check the internet connection ..!
    </h1>
    )
  }

  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex pl-20  bg-orange-300">
        <div className="search m-4 p-4">

          <input
            type="text"
            className="border  rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
          className="px-4 ml-5 h-[28] bg-red-600 rounded-lg text-white"
            onClick={() => {
              const filteredRestaurantCard = ListOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurants(filteredRestaurantCard);
            }}
          >
            Search
          </button>
        </div>

       <div className="search m-4 p-4 flex items-center">
       <button className=" w-[200] h-[28] bg-red-600 rounded-lg text-white" 
       onClick={()=>{
        const filteredList = ListOfRestaurants.filter((restaurant)=>restaurant.info.avgRating>4.3)
        console.log("look this:",ListOfRestaurants)
        setListOfRestaurants(filteredList)
       }}
       >
        Top Rated Restaurants
       </button>
       </div>
        </div>
        <div className="res-container flex flex-wrap bg-orange-300">
          {filteredRestaurant.map((restaurant) => (
            <Link key={restaurant.info.id} to = {"/restaurants/"+ restaurant.info.id}>
              <RestaurantCard  resData={restaurant} /></Link>
          ))}
        </div>
      
    </div>
  );
};

export default Body;
