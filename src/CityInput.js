import React, { useState } from "react";
import Select from "react-select";

const CityInput = ({ onSelectCity }) => {
  const [selectedCity, setSelectedCity] = useState(null);

  const cities = [
    { label: "Paris", value: "Paris" },
    { label: "London", value: "London" },
    { label: "Jakarta", value: "Jakarta" },
    { label: "Tokyo", value: "Tokyo" },
  ];

  const handleChange = (selectedOption) => {
    setSelectedCity(selectedOption);
    onSelectCity(selectedOption.value);
  };

  return (
    <Select
      options={cities}
      value={selectedCity}
      onChange={handleChange}
      placeholder="Select a city..."
    />
  );
};

export default CityInput;
