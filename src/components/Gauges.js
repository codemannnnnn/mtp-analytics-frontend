import React, { useState, useEffect } from "react";
import { atom, useRecoilState, useRecoilValue } from "recoil";

import { getAllData } from "../state/api/getAllData";

import Gauge from "./Gauge";

const Gauges = () => {
  const [data, setData] = useRecoilState(getAllData);

  return (
    <div>
      <h1>Gauges Component</h1>
      <Gauge />
    </div>
  );
};

export default Gauges;
