import React from 'react';

function Template(props) {
    
  return (
    <div className="container-fluid nin-vh-100 template p-0">
      <div className="d-flex contenu">
        <div className="col-md-2 vh-100 position-fixed m-0 p-0" id="sidebarDiv">
          {props.sidebar}
        </div>
        <div className="contentNavbar col-md-2 p-0 m-0"></div>
        <div className="col-md-10 p-0 m-0 vh-100">
          {props.navbar}
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Template