import React, { useState, useEffect } from "react";
import Showcase from './home/Showcase'
import { Section, Content, HomeDescription } from "./home/homeStyles";
import ServicesProvided from "./home/ServicesProvided";


function Home() {

  return (
    <Section>
      <Showcase/>
      <Content>
        <HomeDescription>
          <h2>Our Principle</h2>
          <div>
            The Arte Lepre company guarantees its customers the maximum
            professionalism and quality of its meticulous restoration by working
            by hand, using only traditional methods and methods: such as alcohol
            and shellac polishing, beeswax polishing, and the integration of
            parts missing through the use of vintage wood in order to restore
            the restored pieces to their original state.
          </div>
          <hr style={{ width: "100%" }} />
        </HomeDescription>
        <ServicesProvided />
      </Content>
    </Section>
  );
}

export default Home;
