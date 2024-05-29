//SECOND METHOD DISTICT INCLUDE
import React, { useState } from "react";


const Dropdowns = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const countryList = [
    {
      country: "India",
      states: [
        {
          state: "Tamil Nadu",
          districts: ["Chennai", "Coimbatore", "Madurai"],
        },
        {
          state: "mumbai",
          districts: ["Che", "batore", "Madu"],
        },
        // ... add more states and districts for India
      ],
      cities: ["Mumbai", "Delhi", "Bangalore"],
    },
    {
      country: "United States",
      states: [
        {
          state: "California",
          districts: [
            "Los Angeles County",
            "San Diego County",
            "Orange County",
          ],
        },
        // ... add more states and districts for the United States
      ],
      cities: ["New York", "Los Angeles", "Chicago"],
    },
    // ... add more countries, states, districts, and cities
  ];

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedState("");
    setSelectedDistrict("");
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedDistrict("");
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  const states =
    countryList.find((country) => country.country === selectedCountry)
      ?.states || [];
  const districts =
    states.find((state) => state.state === selectedState)?.districts || [];

  return (
    <div>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select a country</option>
        {countryList.map((country, index) => (
          <option key={index} value={country.country}>
            {country.country}
          </option>
        ))}
      </select>

      <select value={selectedState} onChange={handleStateChange}>
        <option value="">Select a state</option>
        {states.map((state, index) => (
          <option key={index} value={state.state}>
            {state.state}
          </option>
        ))}
      </select>

      <select value={selectedDistrict} onChange={handleDistrictChange}>
        <option value="">Select a district</option>
        {districts.map((district, index) => (
          <option key={index} value={district}>
            {district}
          </option>
        ))}
      </select>
      <h1 style={{color:"indigo"}}>Country :<span style={{color:"violet"  }}>{selectedCountry}</span> States :<span style={{color:"violet"  }}> {selectedState}</span> Districts :<span style={{color:"violet"  }}>{selectedDistrict} </span></h1>
    </div>
  );
};

export default Dropdowns;