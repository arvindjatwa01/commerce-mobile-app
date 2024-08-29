import React, { useEffect, useState } from "react";

import $ from "jquery";
import SearchIcon from "@mui/icons-material/Search";

import PartsCard from "./parts-master/PartsCard";
import { callGetApi } from "../api/ApiCaller";
import { API_SUCCESS } from "../api/ResponseCode";
import { DATA_SVC_PARTS_MASTER } from "../api/ApiConstants";
import SelectFilter from "react-select";
import { FONT_STYLE_SELECT, partsSearchOptions, SELECT_CUSTOM_STYLES } from "./common/constents";
import CustomizedSnackbar from "./common/CustomSnackBar";
import { partsSearch } from "../api/searchServices";

const HomeScreen = () => {
  const [partsRecord, setPartsRecord] = useState([]);
  const [loading, setLoading] = useState(false);

  const [querySearchSelector, setQuerySearchSelector] = useState([
    {
      id: 0,
      selectCategory: "",
      selectOperator: "",
      inputSearch: "",
      selectOptions: [],
      selectedOption: "",
    },
  ]);

  // Snack Bar State
  const [severity, setSeverity] = useState("");
  const [openSnack, setOpenSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const handleSnackBarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

  const handleSnack = (snackSeverity, snackMessage) => {
    setSnackMessage(snackMessage);
    setSeverity(snackSeverity);
    setOpenSnack(true);
  };

  useEffect(() => {
    getPartsRecords();
  }, []);

  // get the parts records
  const getPartsRecords = async () => {
    setLoading(true);
    const rUrl = DATA_SVC_PARTS_MASTER + `?pageNumber=0&pageSize=20`;
    callGetApi(
      rUrl,
      (response) => {
        if (response.status === API_SUCCESS) {
          const responseData = response.data;
          setPartsRecord(responseData);
          setLoading(false);
        } else {
          setPartsRecord([]);
          setLoading(false);
        }
      },
      (error) => {
        setPartsRecord([]);
        setLoading(false);
      }
    );
  };

  // ! SEarch filter

  // select the filter type options
  const handleSelectCategory = (e, id) => {
    let tempArray = [...querySearchSelector];
    let obj = tempArray[id];
    obj.selectCategory = e;
    obj.inputSearch = "";
    obj.selectOptions = [];
    tempArray[id] = obj;
    setQuerySearchSelector([...tempArray]);
  };

  //
  const handleInputSearch = (e, i) => {
    let tempArray = [...querySearchSelector];
    let obj = tempArray[i];
    let searchString = tempArray[i].selectCategory.value + "~" + e.target.value;
    if (tempArray[i].selectCategory.value && e.target.value) {
      partsSearch(searchString)
        .then((res) => {
          obj.selectOptions = res;
          tempArray[i] = obj;
          setQuerySearchSelector([...tempArray]);
          $(`.scrollbar-${i}`).css("display", "block");
        })
        .catch((err) => {
          handleSnack("error", "Error occurred while searching spare parts!");
        });
    } else {
      handleSnack("info", "Please fill search criteria!");
      obj.selectOptions = [];
    }
    obj.inputSearch = e.target.value;
  };

  // select data from search list
  const handleSearchListClick = (e, currentItem, obj1, id) => {
    let tempArray = [...querySearchSelector];
    let obj = tempArray[id];
    obj.inputSearch = currentItem[obj.selectCategory.value];
    obj.selectedOption = currentItem;
    obj.selectOptions = [];
    tempArray[id] = obj;
    setQuerySearchSelector([...tempArray]);
    $(`.scrollbar-${id}`).css("display", "none");
  };

  // click on search button
  const handleQuerySearchClick = async () => {
    $(".scrollbar").css("display", "none");
    var searchStr = "";
    querySearchSelector.map(function (item, i) {
      if (i === 0 && item.selectCategory.value && item.inputSearch) {
        searchStr = item.selectCategory.value + ":" + encodeURI('"' + item.inputSearch + '"');
      } else if (item.selectCategory.value && item.inputSearch && item.selectOperator.value) {
        searchStr = searchStr + " " + item.selectOperator.value + " " + item.selectCategory.value + ":" + encodeURI('"' + item.inputSearch + '"');
      }
      return searchStr;
    });

    try {
      if (searchStr) {
        setLoading(true);
        await partsSearch(searchStr)
          .then((result) => {
            if (result && result.length > 0) {
              setPartsRecord(result);
              setLoading(false);
            } else {
              setPartsRecord([]);
              setLoading(false);
            }
          })
          .catch((err) => {
            setPartsRecord([]);
            setLoading(false);
          });
      } else {
        handleSnack("info", "Please fill the search criteria!");
      }
    } catch (err) {
      handleSnack("error", "Error occurred while fetching spare parts!");
    }
  };

  return (
    <>
      <CustomizedSnackbar handleClose={handleSnackBarClose} open={openSnack} severity={severity} message={snackMessage} />
      <main className="p-4">
        <div className="grid grid-cols-7 items-center">
          {querySearchSelector.length !== 0 &&
            querySearchSelector.map((obj, i) => (
              <div className="col-span-6" key={i}>
                <div className="grid grid-cols-3 items-center border-2 mb-3 rounded md:w-2/5">
                  <div className="col-span-1">
                    <SelectFilter
                      className="border-0"
                      options={partsSearchOptions}
                      styles={SELECT_CUSTOM_STYLES}
                      placeholder="Select"
                      value={obj?.selectCategory}
                      onChange={(e) => handleSelectCategory(e, i)}
                    />
                  </div>
                  <div className="col-span-2 flex items-center border-l-2 pl-2 relative">
                    <SearchIcon className="text-purple-600 h-full" />
                    <input
                      className="custom-input-select border-0 focus:outline-none focus:ring-0 focus:border-none ml-2 w-full h-full"
                      type="text"
                      placeholder="Search Products"
                      id={`inputSearch-${i}`}
                      autoComplete="off"
                      value={obj.inputSearch}
                      onChange={(e) => handleInputSearch(e, i)}
                    />
                    <ul className="list-group absolute top-full left-0 mt-2 w-full max-h-60 overflow-y-auto bg-white border border-gray-300 rounded">
                      {obj.selectOptions.map((currentItem, j) => (
                        <li key={j} className="py-2 px-4 hover:bg-gray-100" onClick={(e) => handleSearchListClick(e, currentItem, obj, i)}>
                          {currentItem[obj.selectCategory.value]}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          <div className="col-span-1 flex items-center justify-center relative">
            <div
              className="h-11 w-11 absolute translate-x-1 top-0 left-0 flex justify-center items-center bg-yellow-500 rounded-full text-white sm:hidden"
              style={{ transform: "translate(15%, -65%)" }}
              onClick={handleQuerySearchClick}
            >
              <SearchIcon className="h-full" />
            </div>
            <button className="bg-purple-600 text-white px-4 py-2 rounded hidden sm:block h-full" onClick={handleQuerySearchClick}>
              Search
            </button>
          </div>
        </div>

        {/* <div className="grid grid-cols-7 items-center">
          {querySearchSelector.length !== 0 &&
            querySearchSelector.map((obj, i) => (
              <div className="col-span-6" key={i}>
                <div className="grid grid-cols-3 items-center border-2 mb-3 rounded md:w-2/5">
                  <div className="col-span-1">
                    <SelectFilter
                      className="border-0"
                      options={partsSearchOptions}
                      styles={SELECT_CUSTOM_STYLES}
                      placeholder="Select"
                      value={obj?.selectCategory}
                      onChange={(e) => handleSelectCategory(e, i)}
                    />
                  </div>
                  <div className="col-span-2 flex items-center border-l-2 pl-2 relative">
                    <SearchIcon className="text-purple-600 h-full" />
                    <input
                      className="custom-input-select border-0 focus:outline-none focus:ring-0 focus:border-none ml-2 w-full h-full"
                      type="text"
                      placeholder="Search Products"
                      id={`inputSearch-${i}`}
                      autoComplete="off"
                    />
                    <ul className={`list-group absolute scrollbar scrollbar-${i} style`}>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          <div className="col-span-1 flex items-center justify-center relative">
            <div
              className="h-11 w-11 absolute translate-x-1 top-0 left-0 flex justify-center bg-yellow-500 align-middle items-center rounded-full text-white sm:hidden"
              style={{ transform: "translate(15%, -65%)" }}
            >
              <SearchIcon className=" h-full sm:hidden" />
            </div>
            <button className="bg-purple-600 text-white px-4 py-2 rounded hidden sm:block h-full">Search</button>
          </div>
        </div> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {partsRecord.length !== 0 && partsRecord.map((partItem) => <PartsCard key={partItem?.id} partItem={partItem} />)}
        </div>
      </main>
    </>
  );
};

export default HomeScreen;
