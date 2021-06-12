import React, {useState} from "react";
import case_1 from "../images/Case_1.png";
import case_2 from "../images/Case_2.png";
import case_3 from "../images/Case_3.png";
import case_4 from "../images/Case_4.png";
import case_5 from "../images/Case_5.png";
import case_6 from "../images/Case_6.png";
import case_7 from "../images/Case_7.png";
import case_8 from "../images/Case_8.png";
import case_9 from "../images/Case_9.png";
import case_10 from "../images/Case_10.png";
import case_11 from "../images/Case_11.png";
import images from './gallery/images';
import { SRLWrapper } from "simple-react-lightbox";
import {
  StyledGallery,
  EachProject,
  StyledImage,
} from "../pages/gallery/styledGallery";
import LoadImage from "../components/LoadImage";

const style = {
  img: {
    height: "450px",
    width: "450px",
    maxWidth: "800px",
    cursor: "zoom-in",
  },
};

function Gallery() {


  return (
    <StyledGallery>
      <img src='' alt="" style={{height: "10px", width: "10px"}} />
      <h2>Gallery</h2>
      <SRLWrapper>
        <div>
          <EachProject>
            <div>
              <h2>Commode Louis XVI Sorrento</h2>
              <span>
                Period late 18th century. With marquetry in walnut, rosewood,
                bois de rose, maple and olive the rectangular top above a
                conforming case enclosing three full drawers, raised on straight
                tapering legs, the whole elaborately decorated with scrolling
                leafage
              </span>
            </div>
            <hr />
            <StyledImage>
              <LoadImage image={case_1} />
            </StyledImage>
          </EachProject>
        </div>
        <EachProject>
          <div>
            <h2>Walnut Writing Desk</h2>
            <span>Period 18th century, Tuscany-Lucca</span>
          </div>
          <hr />
          <StyledImage>
            <LoadImage image={case_2} />
          </StyledImage>
        </EachProject>
        <EachProject>
          <div>
            <h2>Neapolitan Louis XV Writing Desk</h2>
            <span>
              Period mid-18th century Walnut-plated, with bois de rose
              marquetry, and purple ebony sliding top
            </span>
          </div>
          <hr />
          <StyledImage>
            <LoadImage image={case_3} />
          </StyledImage>
        </EachProject>
        <EachProject>
          <div>
            <h2>Neapolitan Louis Philippe Coffee Table</h2>
            <span>
              Period mid-18th century Walnut-plated, with bois de rose
              marquetry, and purple ebony sliding top
            </span>
          </div>
          <hr />
          <StyledImage>
            <LoadImage image={case_4} />
          </StyledImage>
        </EachProject>
        <EachProject>
          <div>
            <h2>Neapolitan Louis Phillipe Coffe Table</h2>
            <span>
              Period Mid-19th century, feather mahogany
            </span>
          </div>
          <hr />
          <StyledImage>
            <LoadImage image={case_5} />
          </StyledImage>
        </EachProject>
        <EachProject>
          <div>
            <h2>Charles X Smith Console</h2>
            <span>
              Italian Mid-19th century, federal mahogany, finely inlaid maple wood
            </span>
          </div>
          <hr />
          <StyledImage>
            <LoadImage image={case_6} />
          </StyledImage>
        </EachProject>
        <EachProject>
          <div>
            <h2>Neapolitan Louis XV Writing Desk</h2>
            <span>
              Period mid-18th century Walnut-plated, with bois de rose
              marquetry, and purple ebony sliding top
            </span>
          </div>
          <hr />
          <StyledImage>
            <LoadImage image={case_7} />
          </StyledImage>
        </EachProject>
        <EachProject>
          <div>
            <h2>Italian Armchairs</h2>
            <span>
              Pair of armchairs from the residence of the Italian Embassy
            </span>
          </div>
          <hr />
          <StyledImage>
            <LoadImage image={case_8} />
          </StyledImage>
        </EachProject>
        <EachProject>
          <div>
            <h2>Neapolitan </h2>
            <span>
              Period mid-18th century Walnut-plated, with bois de rose
              marquetry, and purple ebony Sliding top
            </span>
          </div>
          <hr />
          <StyledImage>
            <LoadImage image={case_9} />
          </StyledImage>
        </EachProject>
        <EachProject>
          <div>
            <h2>Neapolitan Louis</h2>
            <span>
              Period mid-18th century Walnut-plated, with bois de rose
              marquetry, and purple ebony Sliding top
            </span>
          </div>
          <hr />
          <StyledImage>
            <LoadImage image={case_10} />
          </StyledImage>
        </EachProject>
        <EachProject>
          <div>
            <h2>Neapolitan Louis as</h2>
            <span>
              Period mid-18th century Walnut-plated, with bois de rose
              marquetry, and purple ebony Sliding top
            </span>
          </div>
          <hr />
          <StyledImage>
            <LoadImage image={case_11} />
          </StyledImage>
        </EachProject>
      </SRLWrapper>
    </StyledGallery>
  );
}

export default Gallery;
