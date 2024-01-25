import React, { useEffect, useRef } from "react";

function MobileSearch() {
    const inputRef = useRef(null);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, []);
  return (
    <div className="mobileSearch" >
      <form className="d-flex justify-content-center">
        <div className="input-group border rounded-pill">
          <button className="btn" type="submit">
            <i className="bi bi-search"></i>
          </button>
          <input
            ref={inputRef}
            className="form-control border-0 bg-transparent"
            type="search"
            placeholder="Recherche"
            aria-label="Search"
          />
        </div>
      </form>
    </div>
  );
}

export default MobileSearch;
