import React, { useState } from "react";
import "../css/CustomizeCake.css";

function CustomizeCake() {
  const [selectedSize, setSelectedSize] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    alert(
      `Order placed for a ${selectedSize} cake with description: ${description}`
    );
    if (selectedFile) {
      alert(`Image uploaded: ${selectedFile.name}`);
    }
    setSelectedSize("");
    setDescription("");
    setSelectedFile(null);
  };

  return (
    <div className="customize-cake">
      <h1>Customize Your Cake</h1>
      <div className="size-section">
        <h3>Please Select Your Size</h3>
        <div className="button-group">
          {["1 pound", "2 pounds", "3 pounds", "4 pounds", "Wedding Cake"].map(
            (size) => (
              <button
                key={size}
                className={`button-size ${
                  selectedSize === size ? "selected" : ""
                }`}
                onClick={() => handleSizeClick(size)}>
                {size}
              </button>
            )
          )}
        </div>
      </div>
      <div className="input-description">
        <h6>Please write description or any suggestions for your cake</h6>
        <textarea
          className="input-description-box"
          rows="4"
          value={description}
          onChange={handleDescriptionChange}></textarea>
      </div>

      <div className="file-upload">
        <h6>Upload an image of your desired cake</h6>
        <input type="file" onChange={handleFileChange} />
      </div>

      <button className="button-submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default CustomizeCake;
