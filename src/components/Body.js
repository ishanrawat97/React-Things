import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [listOfRestuarant, setListOfRestaurant] = useState(resObj);
    return (
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
                        setListOfRestaurant(resObj);
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
