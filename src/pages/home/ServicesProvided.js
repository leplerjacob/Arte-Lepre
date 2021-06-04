import React from "react";
import {
  ServicesProvidedContainer,
  FretSaw,
  EachService,
} from "./servicesProvided/styledServicesProvided";
import { GiTreeBeehive } from "react-icons/gi";
import { TiTree } from "react-icons/ti";

const ServicesProvided = () => {
  return (
    <ServicesProvidedContainer>
      {/* <EachService>
        <GiTreeBeehive size="50px" color="#484649" />
        <span>All natural beeswax polishing</span>
      </EachService>
      <EachService>
        <TiTree size="50px" color="#484649" />
        <span>Alcohol and shellac polishing</span>
      </EachService>
      <EachService>
        <div>
          <FretSaw />
        </div>
        <span>Traditional methods from decades of experience</span>
      </EachService> */}
    </ServicesProvidedContainer>
  );
};

export default ServicesProvided;
