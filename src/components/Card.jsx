import React from "react";

const Card = ({ data }) => {
  const { links, mission_id, rocket } = data;
  const land_success = rocket.first_stage.cores[0].land_success;

  console.log(land_success);

  return (
    <div className="card">
      <div className="inner-card">
        <img src={links.mission_patch_small} alt={data.mission_name} />
        <div className="card-info">
          <h2>
            {data.mission_name} <span>#{data.flight_number}</span>
          </h2>
          <h3>Mission Ids:</h3>
          {mission_id.length ? (
            <ul>
              {mission_id.map((mission, index) => (
                <li key={index}>{mission}</li>
              ))}
            </ul>
          ) : (
            <span>NA</span>
          )}
          <h3>
            launch Year: <span>{data.launch_year}</span>
          </h3>
          <h3>
            Successful Launch: <span>{data.launch_success?.toString()}</span>{" "}
          </h3>
          <h3>
            Successful Landing:{" "}
            <span>
              {land_success !== null ? land_success.toString() : "NA"}
            </span>{" "}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
