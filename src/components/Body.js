import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { Online } from "./Online";

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
            json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilteredListOfRestuarant(
            json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        console.log(listOfRestuarant);
    };

    return listOfRestuarant.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="flex justify-between items-center w-full p-4">
                <div className="flex-1"></div>
                <div className="search flex items-center">
                    <input
                        type="text"
                        className="border border-opacity-75 border-gray-400 hover:bg-slate-100 rounded-md px-3 py-0.5 w-96 focus:outline-none focus:ring-0"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        className="px-3 py-1 bg-mustard hover:bg-yellow-500 m-4 rounded-xl font-semibold"
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
                <div className="flex-1 flex justify-end space-x-4">
                    <button
                        className="px-2 py-1 bg-mustard hover:bg-yellow-500 rounded-xl font-semibold"
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
                        className="px-2 py-1 bg-mustard hover:bg-yellow-500 rounded-xl font-semibold"
                        onClick={() => {
                            setFilteredListOfRestuarant(listOfRestuarant);
                        }}
                    >
                        Show All Restaurants
                    </button>
                </div>
            </div>

            <div className="online-status">
                <Online />
            </div>
            <div className="res-container flex flex-wrap mx-80 mb-5 justify-center">
                {filteredListOfRestuarant.map((restaurant) => (
                    <Link
                        className="res-menu-link"
                        key={restaurant?.info?.id}
                        to={"/restaurants/" + restaurant?.info?.id}
                    >
                        <RestaurantCard resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
};
export default Body;
