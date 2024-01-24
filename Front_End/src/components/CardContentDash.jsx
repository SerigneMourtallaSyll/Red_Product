import React from 'react'

function CardContentDash({icon, title, description, number, id}) {
  return (
    <div
      id={id}
      className="d-flex align-items-center bg-white my-3 py-3 cards "
    >
      <div className="icon px-3 py-3 mx-3">
        <span>{icon}</span>
      </div>
      <div>
        <p className="m-0 p-0">
          <span className="fw-bold fs-4 ">{number}</span> {title}
        </p>
        <p className="m-0 p-0">{description}</p>
      </div>
    </div>
  );
}

export default CardContentDash