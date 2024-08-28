import React, { useEffect, useState } from "react";
import PartsCard from "./parts-master/PartsCard";
import { callGetApi } from "../api/ApiCaller";
import { API_SUCCESS } from "../api/ResponseCode";
import { DATA_SVC_PARTS_MASTER } from "../api/ApiConstants";

const HomeScreen = () => {
  const [partsRecord, setPartsRecord] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <>
      <main className="p-4">
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {partsRecord.length !== 0 && partsRecord.map((partItem) => <PartsCard key={partItem?.id} partItem={partItem} />)}
        </div>
      </main>
    </>
  );
};

export default HomeScreen;
