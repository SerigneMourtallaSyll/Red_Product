import React from 'react'

function InputModal({label, type, func, value, id}) {
  return (
    <div className="col py-2">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input type={type} className="form-control" id={id} placeholder="" onChange={func} value={value} required/>
    </div>
  );
}

export default InputModal;