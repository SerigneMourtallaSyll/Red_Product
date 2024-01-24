import React from "react";
import CardContentDash from "./CardContentDash";
import { cardsDash } from "./Utils";

function DashboardCard() {
  return (
    <div className="pt-3">
      <div className="row m-0 px-3">
        {cardsDash.map((card, index) => (
          <div key={index} className="col-md-4">
            <CardContentDash {...card} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardCard;
