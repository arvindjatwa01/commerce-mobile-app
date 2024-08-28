import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Header({ toggleSidebar }) {
  return (
    <header className="bg-purple-600 text-white ">
      <div className="container mx-auto flex align-middle items-center justify-between p-4">
        {/* Logo */}

        <div className="brand-logo ">
          <Link to="/" className="md:hidden">
            <span className="brand-title logo-servicecpq fill-white">
              <svg className="w-[50%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1299.92 258.91">
                <defs></defs>
                <g className="cls-4">
                  <g id="Layer_1">
                    <g>
                      <g className="cls-3">
                        <g>
                          <path
                            className="cls-2"
                            d="M1160.38,215.55v-51.18c48.72,0,88.36-39.64,88.36-88.36h51.18c0,76.94-62.6,139.54-139.54,139.54Z"
                          />
                          <polygon className="cls-2" points="1178.24 76.01 1213.08 0 1282.98 0 1248.14 76.01 1178.24 76.01" />
                        </g>
                      </g>
                      <g>
                        <path
                          className="cls-1"
                          d="M18.45,216.77c-5.34-1.41-11.27-3.45-17.79-6.11v-29.13c12.01,9.04,24.6,13.56,37.8,13.56,5.04,0,8.71-.85,11.01-2.56,2.29-1.7,3.45-4.04,3.45-7,0-3.41-1.86-5.93-5.56-7.56-3.71-1.63-9.64-3.41-17.79-5.34-8.6-1.78-15.68-5.34-21.24-10.67-5.56-5.34-8.34-13.12-8.34-23.35,0-8.74,2.22-15.93,6.67-21.57,4.45-5.63,10.04-9.75,16.79-12.34,6.74-2.59,13.75-3.89,21.01-3.89,8.89,0,16.12,.78,21.68,2.33,5.56,1.56,11.01,3.97,16.34,7.23v26.02c-7.56-4.15-13.42-7.11-17.57-8.89-4.15-1.78-8.97-2.67-14.45-2.67s-9.56,.86-12.23,2.56c-2.67,1.71-4,4.11-4,7.23,0,3.71,1.48,6.41,4.45,8.12,2.96,1.71,7.71,3.45,14.23,5.23,7.41,1.93,13.27,3.82,17.57,5.67,4.3,1.86,8.15,5.04,11.56,9.56,3.41,4.52,5.11,10.86,5.11,19.01-.3,12.75-5.11,22.05-14.45,27.91-9.34,5.85-21.2,8.78-35.58,8.78-7.11,0-13.34-.71-18.68-2.11Z"
                        />
                        <path
                          className="cls-1"
                          d="M212.8,167.96h-74.27c2.81,15.57,13.27,23.35,31.35,23.35,5.48,0,10.86-.78,16.12-2.34,5.26-1.56,10.86-3.59,16.79-6.11v28.46c-12.16,5.04-25.8,7.56-40.91,7.56-11.42,0-21.42-2.34-30.02-7.01-8.6-4.67-15.27-11.38-20.01-20.12-4.74-8.74-7.11-19.05-7.11-30.91,0-19.57,4.85-34.72,14.57-45.47,9.71-10.75,23.53-16.12,41.47-16.12,35.13,0,52.48,22.9,52.03,68.71Zm-74.49-21.12h41.58c-1.04-8.01-3.15-13.71-6.34-17.12-3.19-3.41-7.89-5.11-14.12-5.11-11.86,0-18.9,7.41-21.12,22.24Z"
                        />
                        <path
                          className="cls-1"
                          d="M235.92,114.82c2.22-1.93,6.11-4.08,11.68-6.45,5.56-2.37,11.79-4.41,18.68-6.11,6.89-1.7,13.53-2.56,19.9-2.56,12.3,0,20.83,1.86,25.57,5.56v24.24c-5.93-1.33-14.45-2-25.57-2-6.97,0-12.68,.37-17.12,1.11v86.94h-33.13V114.82Z"
                        />
                        <path className="cls-1" d="M448.94,103.03l-46.92,112.51h-33.13l-46.92-112.51h35.8l29.8,76.05,26.46-76.05h34.91Z" />
                        <path className="cls-1" d="M469.17,62.12h34.24v25.57h-34.24v-25.57Zm.67,42.47h33.13l.22,110.96h-33.35V104.59Z" />
                        <path
                          className="cls-1"
                          d="M555.67,211.99c-8.89-4.3-15.97-10.78-21.24-19.46-5.26-8.67-7.89-19.23-7.89-31.69,0-20.01,5.34-35.17,16.01-45.47,10.67-10.3,24.9-15.45,42.69-15.45,6.23,0,12.52,.63,18.9,1.89,6.37,1.26,12.01,3,16.9,5.23v28.46c-6.08-2.67-11.49-4.71-16.23-6.12-4.75-1.41-9.49-2.11-14.23-2.11-9.79,0-17.42,2.41-22.9,7.23-5.49,4.82-8.23,12.34-8.23,22.57,0,11.42,2.56,19.86,7.67,25.35,5.12,5.49,13.45,8.23,25.02,8.23,8.74,0,18.45-2.96,29.13-8.89v28.24c-5.34,2.82-10.86,4.93-16.57,6.34-5.71,1.41-12.12,2.11-19.23,2.11-10.97,0-20.9-2.15-29.8-6.45Z"
                        />
                        <path
                          className="cls-1"
                          d="M746.23,167.96h-74.27c2.81,15.57,13.27,23.35,31.35,23.35,5.48,0,10.86-.78,16.12-2.34,5.26-1.56,10.86-3.59,16.79-6.11v28.46c-12.16,5.04-25.8,7.56-40.91,7.56-11.42,0-21.42-2.34-30.02-7.01-8.6-4.67-15.27-11.38-20.01-20.12-4.74-8.74-7.11-19.05-7.11-30.91,0-19.57,4.85-34.72,14.57-45.47,9.71-10.75,23.53-16.12,41.47-16.12,35.13,0,52.48,22.9,52.03,68.71Zm-74.49-21.12h41.58c-1.04-8.01-3.15-13.71-6.34-17.12-3.19-3.41-7.89-5.11-14.12-5.11-11.86,0-18.9,7.41-21.12,22.24Z"
                        />
                        <path
                          className="cls-1"
                          d="M792.26,211.99c-8.89-4.3-15.97-10.78-21.24-19.46-5.26-8.67-7.89-19.23-7.89-31.69,0-20.01,5.34-35.17,16.01-45.47,10.67-10.3,24.9-15.45,42.69-15.45,6.23,0,12.52,.63,18.9,1.89,6.37,1.26,12.01,3,16.9,5.23v28.46c-6.08-2.67-11.49-4.71-16.23-6.12-4.75-1.41-9.49-2.11-14.23-2.11-9.79,0-17.42,2.41-22.9,7.23-5.49,4.82-8.23,12.34-8.23,22.57,0,11.42,2.56,19.86,7.67,25.35,5.12,5.49,13.45,8.23,25.02,8.23,8.74,0,18.45-2.96,29.13-8.89v28.24c-5.34,2.82-10.86,4.93-16.57,6.34-5.71,1.41-12.12,2.11-19.23,2.11-10.97,0-20.9-2.15-29.8-6.45Z"
                        />
                        <path
                          className="cls-1"
                          d="M976.6,113.37c9.93,9.42,14.9,25.09,14.9,47.03,0,17.64-4.45,31.8-13.34,42.47-8.89,10.67-21.05,16.01-36.47,16.01-11.27,0-20.68-2-28.24-6v42.92h-32.47V126.83c0-9.04,5-15.86,15.01-20.46,10.01-4.59,22.87-6.97,38.58-7.12,18.09,0,32.09,4.71,42.03,14.12Zm-24.68,71.27c4.3-5.04,6.45-13.49,6.45-25.35,0-10.67-1.89-18.71-5.67-24.13-3.78-5.41-10.27-8.12-19.46-8.12-13.2,0-19.79,2.52-19.79,7.56v52.92c2.67,1.63,5.63,2.82,8.89,3.56,3.26,.74,6.45,1.11,9.56,1.11,9.04,0,15.71-2.52,20.01-7.56Z"
                        />
                        <path
                          className="cls-1"
                          d="M1118.91,131.27v127.64h-32.47v-46.7c-6.82,4.45-15.71,6.67-26.68,6.67-16.45,0-29.13-4.97-38.02-14.9-8.89-9.93-13.34-24.09-13.34-42.47,0-22.09,5.26-37.87,15.79-47.36,10.52-9.49,25.27-14.23,44.25-14.23,33.65,0,50.48,10.45,50.48,31.35Zm-70.38,53.03c4.81,5.27,11.3,7.89,19.46,7.89,7.11,0,13.27-1.56,18.46-4.67v-49.81c0-3.26-1.78-5.78-5.34-7.56-3.56-1.78-7.93-2.67-13.12-2.67-9.34,0-16.12,2.78-20.35,8.34s-6.34,13.45-6.34,23.68c0,11.27,2.41,19.53,7.23,24.79Z"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </span>
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <div className="relative">
            <ShoppingCartIcon className="h-6 w-6 cursor-pointer" />
            <span className="absolute top-0 right-0 bg-red-500 text-xs rounded-full h-4 w-4 flex items-center justify-center">4</span>
          </div>

          {/* Profile Icon */}
          <AccountCircleIcon className="h-6 w-6 cursor-pointer" />

          {/* Mobile Menu Button */}
          <button onClick={toggleSidebar} className="md:hidden">
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
