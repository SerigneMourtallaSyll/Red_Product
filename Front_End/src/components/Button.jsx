import React from "react";

function Button({ text, icon, id, func, type }) {
  return (
    <div className="bouton text-center w-100 ">
      <button className="btn text-white w-100" id={id} type={type} onClick={func}>
        {icon}
        {text}
      </button>
    </div>
  );
}

export default Button;
