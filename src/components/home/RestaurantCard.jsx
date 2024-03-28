import { CDN_URL } from "@/utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  // const { cloudinaryImageId, name, avgRating, cuisines, areaName } =
  //   resData?.info;

  const { cloudinaryImageId, name, avgRating, cuisines, areaName } = resData;

  return (
    <div className="card w-60 shadow-xl hover:shadow-2xl transition duration-300">
      <figure>
        <img
          className="res-logo "
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </figure>
      <div className="card-body">
        <h4 className="card-title text-base">{name}</h4>
        <h6 className="text-sm font-semibold">{avgRating} stars</h6>
        <p className="text-sm truncate">{cuisines.join(", ")}</p>
        <p className="text-sm truncate">{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
