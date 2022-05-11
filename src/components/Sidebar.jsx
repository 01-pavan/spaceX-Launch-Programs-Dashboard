import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const Sidebar = () => {
  const { updateUrl } = useContext(GlobalContext);

  const years = [
    2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,
    2018, 2019, 2020,
  ];
  const successBtns = ["True", "False"];

  const [indexVal, setIndexVal] = useState(null);
  const [indexVal2, setIndexVal2] = useState(null);
  const [indexVal3, setIndexVal3] = useState(null);

  const [filters, setFilters] = useState({
    year: null,
    launch_success: null,
    land_success: null,
  });

  useEffect(() => {
    modifyUrl();
  }, [filters]);

  const handleClick = (e, index) => {
    // console.log(e.target);
    console.log(e.target.innerText);
    // console.log(index);
    // updateUrl();

    setFilters((prevState) => {
      if (prevState.year === e.target.innerText) {
        return {
          ...prevState,
          year: null,
        };
      }
      return {
        ...prevState,
        year: e.target.innerText,
      };
    });

    setIndexVal((prev) => {
      if (prev === index) {
        return null;
      } else {
        return index;
      }
    });
  };
  const handleClick2 = (e, index) => {
    console.log(e.target.innerText);
    setFilters((prevState) => {
      if (prevState.launch_success === e.target.innerText) {
        return {
          ...prevState,
          launch_success: null,
        };
      }
      return {
        ...prevState,
        launch_success: e.target.innerText,
      };
    });

    // modifyUrl(e.target.innerText);
    setIndexVal2((prev) => {
      if (prev === index) {
        return null;
      } else {
        return index;
      }
    });
  };
  const handleClick3 = (e, index) => {
    console.log(e.target.innerText);
    setFilters((prevState) => {
      if (prevState.land_success === e.target.innerText) {
        return {
          ...prevState,
          land_success: null,
        };
      }
      return {
        ...prevState,
        land_success: e.target.innerText,
      };
    });
    setIndexVal3((prev) => {
      if (prev === index) {
        return null;
      } else {
        return index;
      }
    });
  };

  //modify url

  const modifyUrl = () => {
    const url = `https://api.spacexdata.com/v3/launches?limit=100${
      filters.year ? "&launch_year=" + filters.year : ""
    }${
      filters.launch_success
        ? "&launch_success=" + filters.launch_success.toLowerCase()
        : ""
    }${
      filters.land_success
        ? "&land_success=" + filters.land_success.toLowerCase()
        : ""
    }`;
    console.log("url from" + url);
    updateUrl(url);
  };
  console.log(filters);

  return (
    <div className="sidebar">
      <h2>Filters</h2>
      <div className="launch-year">
        <h3>Launch Year</h3>
        <div className="years">
          {years.map((year, index) => (
            <button
              key={index}
              className={`${index === indexVal && "active"}`}
              onClick={(e) => handleClick(e, index)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
      <div className="success">
        <h3>Succesful Launch</h3>
        <div className="buttons">
          {successBtns.map((btn, index) => (
            <button
              key={index}
              className={`btn1${index === indexVal2 && " active"}`}
              onClick={(e) => handleClick2(e, index)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
      <div className="success">
        <h3>Succesful Landing</h3>
        <div className="buttons">
          {successBtns.map((btn, index) => (
            <button
              key={index}
              className={`btn1${index === indexVal3 && " active"}`}
              onClick={(e) => handleClick3(e, index)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
