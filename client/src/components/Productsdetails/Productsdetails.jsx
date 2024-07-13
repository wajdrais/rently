  import "./productsdetails.css";
  import micky from "../../assets/mickey.png";
  import Toast from "react-bootstrap/Toast";
  import pic from "../../assets/wajd.jpg";

  import Rating from "react-rating-stars-component";
  function Productsdetails() {
    return (
      <div>
        <div
          className="product-container"
          style={{ display: "flex", gap: "20px" }}
        >
          <div className="products images" style={{ display: "flex" }}>
            <div className="left-side">
              <img
                src={micky}
                alt=""
                style={{
                  width: "50px",
                  height: "75px",
                  backgroundColor: "white",
                }}
              />
              <img
                src={micky}
                alt=""
                style={{
                  width: "50px",
                  height: "75px",
                  backgroundColor: "white",
                }}
              />
              <img
                src={micky}
                alt=""
                style={{
                  width: "50px",
                  height: "75px",
                  backgroundColor: "white",
                }}
              />
              <img
                src={micky}
                alt=""
                style={{
                  width: "50px",
                  height: "75px",
                  backgroundColor: "white",
                }}
              />
            </div>
            <div className="right-side">
              <img
                src={micky}
                alt=""
                style={{
                  width: "250px",
                  height: "330px",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>
          </div>
          <div className="products-description">
            <h1 style={{ color: "black", marginBottom: "25px" }}>
              Mickey mouse poster
            </h1>
            <h4 style={{ color: "black", marginBottom: "25px" }}>
              Owner : wajd rais
            </h4>
            <h5 style={{ color: "black", marginBottom: "25px" }}>
              Category : IT{" "}
            </h5>

            <h5 style={{ color: "black", marginBottom: "25px" }}>
              30 Dt \ Pers day
            </h5>
            <div style={{ width: "800px", marginBottom: "25px" }}>
              <p
                style={{ color: "black", fontSize: "20px", marginBottom: "25px" }}
              >
                description description description descriptiondescription
                description description description description description
                description
              </p>
              <div style={{ display: "flex" }}>
                <p
                  style={{
                    color: "black",
                    marginBottom: "25px",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                >
                  Rating{" "}
                </p>
                <Rating
                  count={5}
                  value={5}
                  size={24}
                  activeColor="#ffd700"
                  edit={false}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="Feedbacks">
          {[1, 2, 3, 4].map((e) => (
            <Toast className="feed" key={e}>
              <Toast.Header closeButton={false}>
                <img
                  src={pic}
                  style={{ width: "40px", borderRadius: "50%", height: "40px" }}
                  alt=""
                />
                <strong style={{ marginLeft: "10px" }} className="me-auto">
                  Wajd rais
                </strong>
              </Toast.Header>
              <Toast.Body style={{ color: "black" }}>
                fezjnfezjnfzeljfnzelnfzeklnfejzlnfzejlnfzejlnfzejlnfezjnfjzlenfezjnfzejnfzejlfnzjlenfjeznfjkzenjfknzejkfnzejkfnzejkfnzejkfnzejknfzejkfnzejknfzjlfnezkjfnzekjfnzekjfne.
              </Toast.Body>
            </Toast>
          ))}
        </div>
      </div>
    );
  }

  export default Productsdetails;
