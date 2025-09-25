import React from "react";
import Image from "next/image";
import "../styles/Card.module.css";

interface CardProps {
  image: string;
  price: string;
  category: string;
  description: string;
  location: string;
}

const Card: React.FC<CardProps> = ({ image, price, category, description, location }) => {
  return (
    <div className="card">
      <div className="card-image-wrapper">
        <Image
          src={image}
          alt={description}
          className="card-image"
          width={300}      // default width
          height={200}     // default height
          style={{ objectFit: "cover", width: "100%", height: "auto" }} // responsive
          priority={false} // lazy load by default
        />
      </div>
      <div className="card-content">
        <h3 className="card-price">{price}</h3>
        <p className="card-category">{category}</p>
        <p className="card-description">{description}</p>
        <p className="card-location">{location}</p>
      </div>
    </div>
  );
};

export default Card;
