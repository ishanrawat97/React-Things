import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestuarant, setListOfRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6230719&lng=77.0277157&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json);
        setListOfRestaurant(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
    };
    
    return listOfRestuarant.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestuarant.filter(
                            (res) => res.info.avgRating > 4.2
                        );
                        setListOfRestaurant(filteredList);
                    }}
                >
                    Top rated Restaurants
                </button>
                <button
                    className="filter-btn"
                    onClick={() => {
                        return fetchData();
                    }}
                >
                    Show All Restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfRestuarant.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.info.id}
                        resData={restaurant}
                    />
                ))}
            </div>
        </div>
    );
};
export default Body;
