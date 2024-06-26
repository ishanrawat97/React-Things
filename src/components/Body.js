import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestuarant, setListOfRestaurant] = useState([]);
    const [filteredListOfRestuarant, setFilteredListOfRestuarant] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6230719&lng=77.0277157&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        setListOfRestaurant(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilteredListOfRestuarant(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
    };

    return listOfRestuarant.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        className="search-btn"
                        onClick={() => {
                            const filteredRestaurant = listOfRestuarant.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredListOfRestuarant(filteredRestaurant);
                        }}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestuarant.filter(
                            (res) => res.info.avgRating > 4.2
                        );
                        setFilteredListOfRestuarant(filteredList);
                    }}
                >
                    Top rated Restaurants
                </button>
                <button
                    className="filter-btn"
                    onClick={() => {
                        setFilteredListOfRestuarant(listOfRestuarant);
                    }}
                >
                    Show All Restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredListOfRestuarant.map((restaurant) => (
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
