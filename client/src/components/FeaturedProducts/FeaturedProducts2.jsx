import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "/img/t-shirt.JPG",
      img2: "/img/t-shirt2.JPG",
      title: "T-shirts",
      isNew: true,
      oldPrice: 15,
      price: 10,
    },
    {
      id: 2,
      img: "/img/dress.JPG",
      img2: "/img/dress2.JPG",
      title: "Dresses",
      isNew: true,
      oldPrice: 28,
      price: 17,
    },
    {
      id: 3,
      img: "/img/jacket1.JPG",
      img2: "/img/jacket2.JPG",
      title: "Jackets",
      isNew: true,
      oldPrice: 43,
      price: 27,
    },
    {
      id: 1,
      img: "/img/skirt1.JPG",
      img2: "/img/skirt2.JPG",
      title: "Skirts",
      isNew: true,
      oldPrice: 25,
      price: 14,
    },
  ];

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>I'll write here something later.</p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;

/*import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import axios from "axios";

const FeaturedProducts = ({ type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/products",
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>I'll write here something later.</p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
 */
