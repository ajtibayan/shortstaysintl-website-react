import React, { useEffect, useState, useRef } from "react";
import { Autocomplete, useLoadScript } from "@react-google-maps/api";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";

// Components and Styles
import "react-phone-input-2/lib/style.css";
import "./Main.css";

const placesLibrary = ["places"];

const Main = () => {
  const locationRef = useRef(),
    form = useRef(),
    [searchResult, setSearchResult] = useState("Result: none"),
    [displayLocationForm, setDisplayLocationForm] = useState(true),
    [displayUserInfoForm, setDisplayUserInfoForm] = useState(false),
    [formattedAddress, setFormattedAddress] = useState(),
    initValue = {
      address: "",
      fname: "",
      lname: "",
      email: "",
      phone: "",
      contactFormType: "hpForm",
    },
    [formVals, setFormVals] = useState(initValue),
    [formErrs, setFormErrs] = useState({}),
    [isSubmit, setIsSubmit] = useState(false),
    [isSent, setIsSent] = useState(false),
    restrictions = {
      country: "ca",
    },
    options = {
      strictBounds: true,
    };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
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
    } else {
      alert("Please enter text");
    }
  }

  useEffect(() => {
    if (Object.keys(formErrs).length === 0 && isSubmit) {
      // console.log(formVals);
      const sendFormEmail = async () => {
        const response = await fetch(
          "http://ajtibayan.com/shortstaysintl/contactform",
          {
            method: "POST",
            body: JSON.stringify(formVals),
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        const json = await response.json();

        if (!response.ok) {
          console.log(json.error);
          setIsSubmit(false);
          setIsSent(false);
        }

        if (response.ok) {
          if (json.sent) {
            setFormVals(initValue);
            setIsSent(true);
            setFormErrs({});
            setIsSubmit(false);
          }
        }
      };

      sendFormEmail();
    }
  }, [formErrs, isSubmit]);

  useEffect(() => {
    if (isSent) {
      const msgSent = setTimeout(() => setIsSent(false), 5000);
      return () => clearTimeout(msgSent);
    }
  }, [isSent]);

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
    setFormErrs(validate(formVals));
    setIsSubmit(true);
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

  const validate = (vals) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!vals.fname) {
      errors.fname = "Name is required!";
    } else if (vals.fname.length < 2) {
      errors.fname = "Enter at least 2 characters!";
    }

    if (!vals.lname) {
      errors.lname = "Name is required!";
    } else if (vals.lname.length < 2) {
      errors.lname = "Enter at least 2 characters!";
    }

    if (!vals.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(vals.email)) {
      errors.email = "This is not a valid email format!";
    }

    return errors;
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
          <h1 className="mx-0 mb-10 mt-5 block w-full text-4xl font-bold lg:mb-12 lg:mt-0 lg:w-4/5 lg:text-7xl">
            Discover full-service short-term rental management
          </h1>
          <h3 className="mb-9 font-bold lg:mb-8 lg:text-xl">
            Get a free rental analysis of your property
          </h3>
          <div className="main-form-container_input-container">
            <div className="main-form-container_location-input">
              <i className="fa-solid fa-location-dot"></i>
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
              <button className="location-submit" aria-label="Submit address">
                <i className="fa-solid fa-arrow-right"></i>
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
            <button
              className="back-arrow-container_link"
              onClick={handleFormBack}
              aria-label="Back to address submit"
            >
              <i className="fa-solid fa-arrow-left"></i>
              <span>BACK</span>
            </button>
          </div>
          <h2>Unlock your revenue potential</h2>
          <h3>{formattedAddress}</h3>
          {isSent && (
            <motion.h3
              className="sent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              Successful Rental Analysis Request!
            </motion.h3>
          )}
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
            {formErrs.fname && (
              <motion.p
                className="error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {formErrs.fname}
              </motion.p>
            )}
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
            {formErrs.lname && (
              <motion.p
                className="error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {formErrs.lname}
              </motion.p>
            )}
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
            {formErrs.email && (
              <motion.p
                className="error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {formErrs.email}
              </motion.p>
            )}
            <PhoneInput
              country={"ca"}
              containerStyle={{ padding: "0" }}
              inputStyle={{
                height: "52px",
                border: "none",
                background: "#f0f3f6",
                borderRadius: "3px",
              }}
              buttonStyle={{ border: "none", background: "#f0f3f6" }}
              className="input-text user-text-field"
              type="text"
              placeholder="Phone (optional)"
              id="phone"
              name="phone"
              required
              value={formVals.value}
              onChange={(phone) => setFormVals({ ...formVals, phone: phone })}
            />
            {formErrs.phone && (
              <motion.p
                className="error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {formErrs.phone}
              </motion.p>
            )}
            {/* <input
              className="input-text user-text-field"
              type="text"
              placeholder="Phone (optional)"
              id="phone"
              name="phone"
              value={formVals.phone}
              onChange={handleChange}
            /> */}
            <input
              className="input-text user-text-field"
              type="hidden"
              id="address"
              name="address"
              value={formVals.address}
            />
            <button
              className="userSubmit"
              aria-label="Submit Rental Analysis Request Form"
            >
              Submit Request
            </button>
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
