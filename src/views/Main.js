import React, { useEffect, useState, useRef } from "react";
import { Autocomplete, useLoadScript } from "@react-google-maps/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components and Styles
import "./Main.css";

const placesLibrary = ["places"];

const Main = () => {
  const locationRef = useRef(),
    form = useRef(),
    [searchResult, setSearchResult] = useState("Result: none"),
    [displayLocationForm, setDisplayLocationForm] = useState(true),
    [displayUserInfoForm, setDisplayUserInfoForm] = useState(false),
    [formattedAddress, setFormattedAddress] = useState(),
    initValue = { address: "", fname: "", lname: "", email: "", phone: "" },
    [formVals, setFormVals] = useState(initValue),
    restrictions = {
      country: "ca",
    },
    options = {
      strictBounds: true,
    };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDFxzcbEf46JcOv7LYxHtR6dI9xxROT4OQ",
    libraries: placesLibrary,
  });

  function onLoad(autocomplete) {
    setSearchResult(autocomplete);
  }

  function onPlaceChanged() {
    if (searchResult != null) {
      const place = searchResult.getPlace();
      setFormattedAddress(place.formatted_address);
      setDisplayLocationForm((prevVis) => !prevVis);
      setDisplayUserInfoForm((prevShow) => !prevShow);
      setFormVals({ ...formVals, address: place.formatted_address });
      //   const name = place.name;
      //   const status = place.address_components[0].short_name;
      //   const formattedAddress = place.formatted_address;
      //   console.log(place);
      //   console.log(`Name: ${name}`);
      //   console.log(`Address Num: ${status}`);
      //   console.log(`Formatted Address: ${formattedAddress}`);
    } else {
      alert("Please enter text");
    }
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const place = searchResult.getPlace();
    if (place) {
      setFormattedAddress(place.formatted_address);
      setDisplayLocationForm((prevVis) => !prevVis);
      setDisplayUserInfoForm((prevShow) => !prevShow);
      setFormVals({ ...formVals, address: place.formatted_address });
    } else {
      console.log("No location submitted");
    }
  };

  const handleFormSubmitFinal = (e) => {
    e.preventDefault();
    console.log(form.current);
  };

  const handleFormBack = (e) => {
    e.preventDefault();
    setDisplayLocationForm((prevVis) => !prevVis);
    setDisplayUserInfoForm((prevShow) => !prevShow);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormVals({ ...formVals, [id]: value });
  };

  return (
    <main className="main">
      <div className="main_content-container">
        <form
          className={`main-form-container ${
            !displayLocationForm ? "isDone" : ""
          }`}
          onSubmit={handleFormSubmit}
        >
          <h1>Discover full-service short-term rental management</h1>
          <h3>Get a free rental analysis of your property</h3>
          <div className="main-form-container_input-container">
            <div className="main-form-container_location-input">
              <FontAwesomeIcon icon="fa-location-dot" />
              <Autocomplete
                onPlaceChanged={onPlaceChanged}
                onLoad={onLoad}
                restrictions={restrictions}
                options={options}
              >
                <input
                  ref={locationRef}
                  className="input-text"
                  type="text"
                  placeholder="Vacation home address"
                  name="address"
                />
              </Autocomplete>
            </div>
            <div className="main-form-container_location-submit">
              <button className="location-submit">
                <FontAwesomeIcon icon="fa-arrow-right" />
              </button>
            </div>
          </div>
        </form>
        <form
          ref={form}
          className={`main-form-container2 ${
            displayUserInfoForm ? "showForm" : ""
          }`}
          onSubmit={handleFormSubmitFinal}
        >
          <div className="back-arrow-container">
            <a
              href="#"
              className="back-arrow-container_link"
              onClick={handleFormBack}
            >
              <FontAwesomeIcon icon="fa-arrow-left" />
              <span>BACK</span>
            </a>
          </div>
          <h2>Unlock your revenue potential</h2>
          <h3>{formattedAddress}</h3>
          <div className="main-form-container2_input-container">
            <input
              className="input-text user-text-field"
              type="text"
              placeholder="First Name"
              id="fname"
              name="fname"
              required
              value={formVals.fname}
              onChange={handleChange}
            />
            <input
              className="input-text user-text-field"
              type="text"
              placeholder="Last Name"
              id="lname"
              name="lname"
              required
              value={formVals.lname}
              onChange={handleChange}
            />
            <input
              className="input-text user-text-field"
              type="text"
              placeholder="Email"
              id="email"
              name="email"
              required
              value={formVals.email}
              onChange={handleChange}
            />
            <input
              className="input-text user-text-field"
              type="text"
              placeholder="Phone (optional)"
              id="phone"
              name="phone"
              value={formVals.phone}
              onChange={handleChange}
            />
            <input
              className="input-text user-text-field"
              type="hidden"
              id="address"
              name="address"
              value={formVals.address}
            />
            <button className="userSubmit">Submit Request</button>
            <p>
              I agree to receive email communications from Short Stays
              International as well as updates on workshops & rental news. You
              can unsubscribe at any time.
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Main;
