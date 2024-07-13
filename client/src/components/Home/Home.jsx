import tente from "../../assets/tente6.png";
import micro from "../../assets/micro.png";
import nikond300 from "../../assets/nikond300.png";
import bicy from "../../assets/bicy.png";
import truck from "../../assets/truck.png";
import "./Home.css";
import Rating from 'react-rating-stars-component'; // Import the Rating component

const products = [
  { image: tente, title: "Tente", rating: 4.5 },
  { image: micro, title: "Microphone", rating: 2.0 },
  { image: nikond300, title: "Nikon D300", rating: 4.7 },
  { image: bicy, title: "Bicycle", rating: 4.7 },
  { image: truck, title: "Ford Truck", rating: 4.7 },
];

function Home() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "120px",
          marginBottom: "120px",
        }}
      >
        <div>
          <span className="me-1 fw-semibold" style={{ fontSize: "20px" }}>
            👋 <span style={{ color: "black" }}>With</span>{" "}
            <span style={{ fontSize: "50px", color: "#f35027" }}>RENTLY</span>
          </span>
          <h1 className="font-heading mb-6" style={{ color: "black" }}>
            Your life gets plenty easy
          </h1>
          <h3 style={{ color: "black" }}>
            Rent<span style={{ color: "#f35027" }}>,</span>Use
          </h3>
          <h2 style={{ color: "black" }}>And enjoy effortlessly!</h2>
        </div>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/gbLmku5QACM?si=TggchRd_-8FrMJEP"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ borderRadius: "50px" }}
          ></iframe>
        </div>
      </div>
      <div>
        <hr style={{color:"black"}}/>
        <h1 style={{color:'#f35027', textAlign:"center", marginBottom:"50px"}}>Most Rated Products</h1>
      </div>
      <div
        style={{
          marginBottom: "100px",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "1200px", // Set max-width to center smaller cards
        }}
      >
        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-3" key={index} style={{ marginBottom: "30px", paddingLeft: "15px", paddingRight: "15px" }}>
              <div className="card" style={{ borderRadius: "15px", boxShadow: "0 4px 8px rgba(243, 80, 39, 0.5)", textAlign: "center" }}>
                <img className="card-img-top" src={product.image} alt={product.title} style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: "15px", margin: "10px 0" }} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <div className="card-text" style={{ display: "flex", justifyContent: "center" }}>
                    <Rating
                      count={5}
                      value={product.rating}
                      size={24}
                      activeColor="#ffd700"
                      edit={false}
                    />
                  </div>
                  <a href="#" className="btn btn-primary" style={{ marginTop: "10px", backgroundColor: "#f35027", borderColor: "#f35027" }}>
                    Rent now !
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
