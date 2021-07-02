import React, { useState, useEffect } from "react";
import Showcase from "./home/Showcase";
import { Section, Content, HomeDescription } from "./home/homeStyles";
import ServicesProvided from "./home/ServicesProvided";

function Home() {
  return (
    <Section>
      <Showcase />
      <Content>
        <HomeDescription>
          <h2>Our Principle</h2>
          <div>
            Arte Lepre guarantees the maximum quality of Restoration and Conservation by
            adhering to traditional methods, natural materials and above and
            beyond customer service.
          </div>
          <hr style={{ width: "100%" }} />
        </HomeDescription>
        <ServicesProvided />
      </Content>
    </Section>
  );
}

export default Home;
