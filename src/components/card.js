import React from "react";
import { MdLocationOn } from "react-icons/md";
export default function Card(props) {
  var item = props.item;
  var {
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl,
  } = item;
  // console.log(googleMapsUrl);
  return (
    <div className="card">
      <img className="card-img" src={imageUrl} alt="mountain" />
      <div className="card-body">
        <div className="location-details">
          <span>
            <MdLocationOn className="location-icon" />
          </span>
          <span className="location">{location}</span>
          <span>
            <a
              href={googleMapsUrl}
              className="gray"
              target="_blank"
              rel="noreferrer"
            >
              View On Google Maps
            </a>
          </span>
        </div>

        <div className="title">
          <h1>{title}</h1>
        </div>

        <div className="date">
          <span>{startDate}</span>
          <span> - </span>
          <span>{endDate}</span>
        </div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
}
