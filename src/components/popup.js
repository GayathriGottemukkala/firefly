// src/Popup.js
import React from 'react';


const Popup = ({ show, onClose }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="popup-overlay">
        
            <img  onClick={onClose} src={require("../images/popup.png")}/>
          
        </div>
    );
};

export default Popup;
