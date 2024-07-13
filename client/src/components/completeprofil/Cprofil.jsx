import { useState } from "react";
import CountryList from "react-select-country-list";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./Cprofil.css"; // Import CSS file for styling
import { UpdateP } from "../../redux/actions/Useraction";
import axios from "axios";

const Cprofil = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("Ben arous");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [photo, setPhoto] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  console.log(photo)

  const countryOptions = CountryList().getData();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.users.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(country && state && address && zipCode && photo && phoneNumber && dateOfBirth && gender){
      const obj = new FormData ()
      obj.append("file",photo,)
      obj.append("upload_preset","ml_default")
      if(photo.length===undefined){
        await axios.post('https://api.cloudinary.com/v1_1/dyim824yg/upload',obj).then((res)=>
        dispatch(
          UpdateP(user._id, {
            country,
            State:state,
            Address: address,
            zip_code: zipCode,
            photo:res.data.url,
            phone : phoneNumber,
            Date_of_birthday: dateOfBirth,
            gender,
          },navigate)
        )
        )
    }}else {
      toast.error("all fields are required")
    }
    // Handle form submission, such as sending data to a backend server
    console.log("Form submitted:", {
      country,
      state,
      address,
      zipCode,
      photo,
      phoneNumber,
      dateOfBirth,
      gender,
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    // Perform validation for file type and size here
    if (
      file &&
      (file.type === "image/jpeg" || file.type === "image/jpg") &&
      file.size <= 5000000
    ) {
      setPhoto(file);
    } else {
      // Display error message for invalid file type or size
      console.error("Invalid file type or size");
    }
  };

  return (
    <div className="cprofil-container" style={{ marginBottom: "150px" }}>
      <h2 className="cprofil-header">Complete Profil Informations</h2>
      <form className="cprofil-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="country" style={{ color: "#f35027" }}>
            Country:
          </label>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Select Country</option>
            {countryOptions.map((option) => (
              <option key={option.value} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="state" style={{ color: "#f35027" }}>
            State:
          </label>
          <input
            type="text"
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="Ben arous"
          />
        </div>
        <div>
          <label htmlFor="address" style={{ color: "#f35027" }}>
            Address:
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="House street and number"
          />
        </div>
        <div>
          <label htmlFor="zipCode" style={{ color: "#f35027" }}>
            Zip Code:
          </label>
          <input
            type="text"
            id="zipCode"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" style={{ color: "#f35027" }}>
            Phone Number:
          </label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth" style={{ color: "#f35027" }}>
            Date of Birth:
          </label>
          <input
            type="date"
            id="dateOfBirth"
            className="dob-input"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="gender" style={{ color: "#f35027" }}>
            Gender:
          </label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="photo" style={{ color: "#f35027" }}>
            Choose a Photo:
          </label>
          <input
            type="file"
            id="photo"
            accept=".jpg, .jpeg"
            onChange={handlePhotoChange}
          />
        </div>
        <button type="submit" >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Cprofil;
