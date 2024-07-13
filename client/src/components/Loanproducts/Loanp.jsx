import "./loanp.css";
import tente from "../../assets/tente6.png";
import micro from "../../assets/micro.png";
import nikond300 from "../../assets/nikond300.png";
import bicy from "../../assets/bicy.png";
import truck from "../../assets/truck.png";
import ps4 from "../../assets/ps4.png";
import psp from "../../assets/psp.png";
import Rating from "react-rating-stars-component"; // Import the Rating component
import { useState } from "react";
import StarRatings from "react-star-ratings/build/star-ratings";

function Loanp() {
  const products = [
    { image: tente, title: "Tente", rating: 4.5 },
    { image: micro, title: "Microphone", rating: 2.0 },
    { image: nikond300, title: "Nikon D300", rating: 4.7 },
    { image: bicy, title: "Bicycle", rating: 4.7 },
    { image: truck, title: "Ford Truck", rating: 4.7 },
    { image: psp, title: "PSP", rating: 3.5 },
    { image: ps4, title: "PS4", rating: 1.2 },
    { image: ps4, title: "PS4", rating: 1.2 },
    { image: ps4, title: "PS4", rating: 1.2 },
    { image: ps4, title: "PS4", rating: 1.2 },
    { image: ps4, title: "PS4", rating: 1.2 },
    { image: ps4, title: "PS4", rating: 1.2 },
    { image: ps4, title: "PS4", rating: 1.2 },
  ];

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [rating, setRating] = useState(0);
  console.log(rating);

  const handleRating = (rate) => {
    console.log(rate);
    setRating(rate);
  };

  const filterProducts = () => {};

  return (
    <div className="full-container">
      <div
        id="seachbar"
        style={{
          justifyContent: "center",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <form
          className="searchform cf"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <input type="text" placeholder="Searching for a product?" />
          <button type="submit" style={{ marginTop: "4px" }}>
            Search
          </button>
        </form>
      </div>
      <div
        style={{
          marginRight: "20px",
          marginBottom: "150px",
          display: "flex",
          gap: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            width: "600px",
            border: "2px",
            borderRadius: "20px",
          }}
        >
          <div style={{display:"flex" , flexDirection:"column",alignItems:"center"}}>
            <h2 style={{color:"#f35027", textAlign:"center", marginTop:"20px", marginBottom:"0"}}>SEARCH BY</h2>
            <hr  style={{color:'black', width:"80%",}}/>
          </div>
          <div>
            <h3
              style={{ color: "#f35027", marginLeft: "8px", marginTop: "0" }}
            >
              Category
            </h3>
          </div>
          <div
            style={{ color: "#f35027", marginLeft: "8px", marginTop: "8px" }}
          >
            <div style={{ display: "flex", marginBottom: "8px" }}>
              <p style={{ color: "black", flex: "3", fontSize: "20px" }}>IT </p>
              <input style={{ flex: "1" }} type="checkbox" />
            </div>
            <div style={{ display: "flex", marginBottom: "8px" }}>
              <p style={{ color: "black", flex: "3", fontSize: "20px" }}>
                Transportation
              </p>
              <input style={{ flex: "1" }} type="checkbox" />
            </div>
            <div style={{ display: "flex", marginBottom: "8px" }}>
              <p style={{ color: "black", flex: "3", fontSize: "20px" }}>
                Education{" "}
              </p>
              <input style={{ flex: "1" }} type="checkbox" />
            </div>
            <div style={{ display: "flex", marginBottom: "8px" }}>
              <p style={{ color: "black", flex: "3", fontSize: "20px" }}>
                Clothing
              </p>
              <input style={{ flex: "1" }} type="checkbox" />
            </div>
            <div style={{ display: "flex", marginBottom: "8px" }}>
              <p style={{ color: "black", flex: "3", fontSize: "20px" }}>
                Buildings
              </p>
              <input style={{ flex: "1" }} type="checkbox" />
            </div>
            <div style={{ display: "flex", marginBottom: "8px" }}>
              <p style={{ color: "black", flex: "3", fontSize: "20px" }}>
                Other
              </p>
              <input style={{ flex: "1" }} type="checkbox" />
            </div>
          </div>
          <div>
            <h3
              style={{ color: "#f35027", marginLeft: "8px", marginTop: "30px" }}
            >
              Pricing
            </h3>
          </div>
          <div
            style={{ marginLeft: "8px", marginTop: "8px", marginBottom: "8px" }}
          >
            <input
              type="number"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              style={{ width: "100px", marginRight: "10px" }}
            />
            <input
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              style={{
                width: "100px",
                marginRight: "10px",
                marginBottom: "10px",
              }}
            />{" "}
          </div>
          <div>
            <h3
              style={{ color: "#f35027", marginLeft: "8px", marginTop: "30px" }}
            >
              Rating
            </h3>
            <div style={{ marginBottom: "10px", marginLeft: "8px" }}>
              {" "}
              <StarRatings
                rating={rating}
                starRatedColor="#ffd700"
                changeRating={handleRating}
                numberOfStars={5}
                starDimension="24px"
                starSpacing="1px"
                starHoverColor="#ffd700"
                starEmptyColor="#e0e0e0"
              />
            </div>
          </div>
          <div style={{display:"flex", justifyContent:"center" , marginTop:"45px"}}>
            <button
              onClick={filterProducts}
              className="btn btn-primary"
              style={{ backgroundColor: "#f35027", borderColor: "#f35027" , }}
            >
              Apply
            </button>
          </div>
        </div>
        <div>
          <div
            id="productist"
            style={{ flexWrap: "wrap", display: "flex", gap: "30px" }}
          >
            {products.map((product, index) => (
              <div key={index}>
                <div
                  className="card"
                  style={{
                    width: "220px",
                    borderRadius: "15px",
                    boxShadow: "0 4px 8px rgba(243, 80, 39, 0.5)",
                    textAlign: "center",
                  }}
                >
                  <img
                    className="card-img-top"
                    src={product.image}
                    alt={product.title}
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "15px",
                      margin: "10px auto 0",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <div
                      className="card-text"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Rating
                        count={5}
                        value={product.rating}
                        size={24}
                        activeColor="#ffd700"
                        edit={false}
                      />
                    </div>
                    <a
                      href="#"
                      className="btn btn-primary"
                      style={{
                        marginTop: "10px",
                        backgroundColor: "#f35027",
                        borderColor: "#f35027",
                      }}
                    >
                      Rent now !
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loanp;
