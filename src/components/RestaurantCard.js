import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({
    resData,
}) => {
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,
    } = resData?.info;
    const cuisineString =
        cuisines.join(", ").length > 27
            ? cuisines.join(", ").substr(0, 27) + "..."
            : cuisines.join(", ");
    const nameStr = name.length > 20 ? name.substr(0, 20) + "..." : name;
    return (
        <div className="m-4 p-4 w-[250px] h-[400px] rounded-lg shadow-md bg-white hover:bg-very-light-gray hover:translate-y-2">
            <div className="flex items-center">
                <img
                    className="res-logo rounded-lg w-[250px] h-[200px] px-1 mx-1 overflow-hidden"
                    src={CDN_URL + cloudinaryImageId}
                />
            </div>

            <h3 className="flex items-center font-bold py-2 text-lg">{nameStr}</h3>
            <h4 className="p-0.5 font-thin">{cuisineString}</h4>
            <h4 className="p-0.5 font-thin">
                Rating: {avgRating} {" ⭐"}
            </h4>
            <h4 className="p-0.5 font-thin">Delivery in {sla["deliveryTime"] + " minutes"}</h4>
            <h4 className="p-0.5 ">{costForTwo}</h4>
        </div>
    );
};
export default RestaurantCard;
