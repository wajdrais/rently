  import "./footer.css";

const Footer = () => {
  const bubbles = Array.from({ length: 128 }, () => ({
    size: `${2 + Math.random() * 4}rem`,
    distance: `${6 + Math.random() * 4}rem`,
    position: `${-5 + Math.random() * 110}%`,
    time: `${2 + Math.random() * 2}s`,
    delay: `${-1 * (2 + Math.random() * 2)}s`,
  }));

  return (
    <div className="footer" id="footer">
      <div className="bubbles">
        {bubbles.map((style, index) => (
          <div
            key={index}
            className="bubble"
            style={{
              "--size": style.size,
              "--distance": style.distance,
              "--position": style.position,
              "--time": style.time,
              "--delay": style.delay,
            }}
          ></div>
        ))}
      </div>
      <div className="content">
        <div style={{display:'flex',}}>
          <ul style={{listStyle:"none" , display:"flex", gap:"35px" ,justifyContent:"center", color:"white"}}>
            <li >
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
          <ul style={{listStyle:"none", display:"flex",gap: "35px", justifyContent:"center"}}>
            <li>
            <i className="fa-brands fa-facebook fa-2xl"  style={{color:"white"}}></i>
            </li>
            <li>
            <i className="fa-brands fa-instagram fa-2xl" style={{color:"white"}} ></i>

            </li>
            <li>
            <i className="fa-brands fa-linkedin fa-2xl" style={{color:"white"}}></i>
            </li>
          </ul>
          <hr style={{color:"white"}}/>
<div style={{display:'flex', justifyContent:"center"}}>
  <a style={{color:"white"}}>All rights reserved © 2024</a>
</div>
        </div>
      </div>
      <svg style={{ position: "fixed", top: "100vh" }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Footer;
