import { useState } from "react";
import "./mainprofil.css";
import Plus from "../../assets/plus.png";
import { toast } from "react-toastify";
import Modalrented from "../../../Modalrented"; // Added Modalrented component
import { useDispatch, useSelector } from "react-redux";
import { UpdateD } from "../../redux/actions/Useraction";
import axios from "axios";
import { addProduct } from "../../redux/actions/Productaction";

function Mainprofil() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const userProducts = useSelector((state) => state.products.products); // Assuming you have products in your Redux state
  const [showModal, setShowModal] = useState(false);
  const [showEditUserModal, setShowEditUserModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: "",
    category: "IT products",
    price: "",
    description: "",
    photos: [],
  });
  const [country, setCountry] = useState(user.country);
  const [state, setState] = useState(user.state);
  const [address, setAddress] = useState(user.address);
  const [zipCode, setZipCode] = useState(user.zip_code);
  const [phone, setPhone] = useState(user.phone);
  const [photo, setPhoto] = useState([]);
  const [email, setEmail] = useState(user.email);

  const handleAddProductClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowEditUserModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    setNewProduct((prev) => ({
      ...prev,
      photos: e.target.files,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newProduct.photos.length) {
      toast.error("Please select at least one photo.");
      return;
    }

    const formData = new FormData();
    formData.append("upload_preset", "ml_default");

    for (let i = 0; i < newProduct.photos.length; i++) {
      formData.append("file", newProduct.photos[i]);
    }

    try {
      const uploadResponse = await axios.post(
        "https://api.cloudinary.com/v1_1/dyim824yg/upload",
        formData
      );

      if (uploadResponse.status === 200) {
        const photoUrls = [uploadResponse.data.secure_url];

        dispatch(
          addProduct({
            ...newProduct,
            photos: photoUrls,
          })
        );
        toast.success("Product added successfully!");
        handleCloseModal();
      } else {
        toast.error("Failed to upload photos.");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Error adding product.");
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", photo);
    formData.append("upload_preset", "ml_default");
    if (photo.length === undefined) {
      await axios
        .post("https://api.cloudinary.com/v1_1/dyim824yg/upload", formData)
        .then((res) =>
          dispatch(
            UpdateD(user._id, {
              email,
              country,
              state,
              address,
              zip_code: zipCode,
              phone,
              photo: res.data.url,
            })
          )
        );
    } else {
      dispatch(
        UpdateD(user._id, {
          email,
          country,
          state,
          address,
          zip_code: zipCode,
          phone,
        })
      );
    }
    handleCloseModal();
  };

  return (
    <div className="mainprofil-wrapper">
      <div className="profile-container">
        <i
          className="fa-solid fa-pen-to-square"
          style={{ color: "#f35027", fontSize: "20px", marginLeft: "300px" }}
          onClick={() => setShowEditUserModal(true)}
        ></i>
        <img src={user.photo} alt="Profile Picture" className="profile-pic" />
        <div className="user-details">
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Country: {user.country}</p>
          <p>
            Address: {user.state} , {user.address}
          </p>
          <p>Address Details: {user.zip_code}</p>
          <p>Phone: {user.phone}</p>
        </div>
      </div>
      <div className="user-products">
        <div id="productlist" className="row row-cols-5 justify-content-center">
          <div className="col-md-2 mb-4">
            <div className="card">
              <div className="card-body d-flex flex-column align-items-center">
                <img
                  className="card-img-top"
                  src={Plus}
                  style={{ marginBottom: "60px" }}
                  alt="Add Product"
                />
                <button
                  onClick={handleAddProductClick}
                  className="btn btn-primary"
                >
                  Add Product
                </button>
              </div>
            </div>
          </div>
          {userProducts.map((product, index) => (
            <div className="col-md-2 mb-4" key={index}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={product?.image}
                  alt={product?.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product?.title}</h5>
                  <Modalrented />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <form onSubmit={handleSubmit}>
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  value={newProduct.title}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Category:
                <select
                  name="type"
                  value={newProduct.type}
                  onChange={handleInputChange}
                >
                  <option value="IT products">IT products</option>
                  <option value="transportation">Transportation</option>
                  <option value="Educative products">Educative products</option>
                  <option value="Clothes">Clothes</option>
                  <option value="other">Other</option>
                  <option value="buildings">Buildings</option>
                </select>
              </label>
              <label>
                Price per day (DT):
                <input
                  type="number"
                  name="price"
                  value={newProduct.price}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Description:
                <textarea
                  name="description"
                  value={newProduct.description}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Photos:
                <input
                  type="file"
                  name="photos"
                  multiple
                  accept="image/*"
                  onChange={handlePhotoChange}
                />
                <small>You can upload up to 5 photos</small>
              </label>
              <button type="submit" className="btn btn-submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      {showEditUserModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <form>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  defaultValue={user.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                Phone Number:
                <input
                  type="tel"
                  name="phone"
                  defaultValue={user.phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
              <label>
                Country:
                <input
                  type="text"
                  name="country"
                  defaultValue={user.country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </label>
              <label>
                State:
                <input
                  type="text"
                  name="state"
                  defaultValue={user.state}
                  onChange={(e) => setState(e.target.value)}
                />
              </label>
              <label>
                Address:
                <input
                  type="text"
                  name="address"
                  defaultValue={user.address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </label>
              <label>
                Zip Code:
                <input
                  type="text"
                  name="zip_code"
                  defaultValue={user.zip_code}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </label>
              <label>
                Photo:
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={(e) => setPhoto(e.target.files)}
                />
              </label>
              <button
                type="submit"
                className="btn btn-submit"
                onClick={handleEdit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mainprofil;
