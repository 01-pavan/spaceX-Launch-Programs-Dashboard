import React, { useEffect, useState } from "react";
import Card from "./Card";
import Spinner from "./Spinner";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Dashboard = () => {
  const { url } = useContext(GlobalContext);
  console.log(url);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataFetch = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      if (data) {
        setLoading(false);
      }
    };
    dataFetch();
  }, [url]);
  console.log(data);
  if (loading) {
    return <Spinner />;
  }
  if (data.length < 1) {
    return <h1>No items found</h1>;
  }
  return (
    <div className="dashboard">
      {data.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  );
};

export default Dashboard;
