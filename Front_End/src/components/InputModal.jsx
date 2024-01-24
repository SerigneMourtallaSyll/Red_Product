import React from 'react'

function InputModal({label, type, func, value}) {
  return (
    <div className="col">
      <label htmlFor="email" className="form-label">
        {label}
      </label>
      <input type={type} className="form-control" id="email" placeholder="" onChange={func} value={value} required/>
    </div>
  );
}

export default InputModal