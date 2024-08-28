import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Tooltip } from "@mui/material";
import NumberSpinner from "../number-spineer/NumberSpinner";
import { currencyFormatter } from "../../utils/currencyFormatter";

const PartsCard = ({ partItem }) => {
  return (
    <>
      <div className="bg-white p-2 md:p-4 border-2 border-gray-500 shadow rounded" key={partItem?.id}>
        <img
          className="w-full object-contain"
          src={
            partItem?.sparepartImages?.length > 0
              ? partItem?.sparepartImages[0] || "./assets/images/defaultImage.png"
              : "./assets/images/defaultImage.png"
          }
          alt={partItem?.partNumber || "Part Image"}
        />
        <div className="px-3 md:p-4">
          <div className="font-bold text-sm md:text-xl mb-1">{partItem?.partNumber}</div>
          <p className="text-gray-700 text-xs text-wrap">{partItem?.partDescription}</p>
        </div>
        <div className="px-3 md:p-4">
          <div className="font-bold text-sm md:text-xl mb-1">{currencyFormatter.format(partItem?.listPrice || 0)}</div>
        </div>
        <div className="w-full flex justify-between items-center mt-2 px-3 gap-2">
          <NumberSpinner qnt={1} />
          {/* <div className="flex items-center border-1 bg-gray-300 border-gray-300 px-2 rounded">
            <button className="text-base bg-purple-700">-</button>
            <input type="number" readOnly value={1} className="w-10 mx-2 text-center border-2 border-gray-300 rounded" />
            <button className="text-base bg-purple-700">+</button>
          </div> */}
          <Tooltip title={"Add to Cart"}>
            <button className="bg-yellow-500 text-white rounded p-1 text-base">
              <AddShoppingCartIcon className="text-sm" size="large" />
            </button>
          </Tooltip>
        </div>
      </div>

      {/* <div className="bg-white p-2 md:p-4 border-2 border-gray-500 shadow rounded" key={partItem?.id}>
        <img
          className="w-[100%] align-middle items-center object-contain"
          src={
            partItem?.sparepartImages.length > 0
              ? partItem?.sparepartImages[0] || "./assets/images/defaultImage.png"
              : "./assets/images/defaultImage.png"
          }
          alt="Sunset in the mountains"
        />
        <div className="px-2 text-wrap md:p-4">
          <div className="font-bold text-sm md:text-xl mb-1">{partItem?.partNumber}</div>
          <p className="text-gray-700 text-wrap text-xs">{partItem?.partDescription}</p>
        </div>
        <div className="w-full flex">
          <div className="w-4/5">
            <div className="align-middle px-2 border-1 bg-gray-300 border-gray-300">
              <button className="text-base">-</button>
              <input type="number" readOnly value={1} className="w-10 mx-2 text-center border-2 border-gray-300 rounded" />
              <button className="text-base">+</button>
            </div>
          </div>
          <div className="w-1/5">
            <Tooltip title={"Add to Cart"}>
              <button className="bg-yellow-500 text-white rounded text-base">
                <AddShoppingCartIcon className="text-sm" size="large" />
              </button>
            </Tooltip>
          </div>
        </div>
        <div className="w-full flex align-middle rounded-md mt-2 px-0">
          <div className="align-middle px-2 border-1 bg-gray-300 border-gray-300">
            <button className="text-base">-</button>
            <input type="number" readOnly value={1} className="w-10 mx-2 text-center border-2 border-gray-300 rounded" />
            <button className="text-base">+</button>
          </div>
          <div className="bg-yellow-500 text-white rounded items-center px-1">
            <Tooltip title={"Add to Cart"}>
              <button className="bg-yellow-500 text-white rounded text-base">
                <AddShoppingCartIcon className="text-sm" size="large" />
              </button>
            </Tooltip>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default PartsCard;
