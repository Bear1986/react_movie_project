import React from "react";
import "./searchbar.css";


function Searchbar() {
      return (
      <div className="input-group">
        <input required type="text" name="text" autoComplete="off" className="input" />
          <label className="user-label">Search</label>
      </div>
  );
}

export default Searchbar;
