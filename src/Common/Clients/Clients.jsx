import React from "react";

import BoxedLayout from "../BoxedLayout/BoxedLayout";
import { clientsData as clients } from "../../Data/clientsData";

import "./Clients.scss";

export default function Testimonial() {
  const displayClients = clients.map((aClient, index) => {
    return (
      <React.Fragment key={index} >
        <img alt={aClient.name} src={aClient.img} height={aClient.height}></img>
      </React.Fragment>
    )
  });

  return (
    <div className="clients">
      <BoxedLayout>
        <h2 className="title">Some of our clients</h2>
        <div className="client-logos">{displayClients}</div>
      </BoxedLayout>
    </div>
  );
}
