import React from "react";
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
import { SRLWrapper } from "simple-react-lightbox";
import { StyledGallery, EachProject } from "../pages/gallery/styledGallery";

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
            <img style={style.img} src={case_1} alt="case1" />
          </EachProject>
        </div>
        <EachProject>
          <div>
            <h2>Walnut Writing Desk</h2>
            <span>Period 18th century, Tuscany-Lucca</span>
          </div>
          <hr />
          <img style={style.img} src={case_2} alt="case1" />
        </EachProject>
        <EachProject>
          <div>
            <h2>Neapolitan Louis XV Writing Desk</h2>
            <span>
              Period mid-18th century Walnut-plated, with bois de rose
              marquetry, and purple ebony Sliding top
            </span>
          </div>
          <hr />
          <img style={style.img} src={case_3} alt="case1" />
        </EachProject>
        <EachProject>
          <div>
            <h2>Neapolitan Louis Philippe Coffee Table</h2>
            <span>
              Period mid-18th century Walnut-plated, with bois de rose
              marquetry, and purple ebony Sliding top
            </span>
          </div>
          <hr />
          <img style={style.img} src={case_4} alt="case1" />
        </EachProject>
        <EachProject>
          <div>
            <h2>Neapolitan Louis XV Writing Desk</h2>
            <span>
              Period mid-18th century Walnut-plated, with bois de rose
              marquetry, and purple ebony Sliding top
            </span>
          </div>
          <hr />
          <img style={style.img} src={case_5} alt="case1" />
        </EachProject>
        <EachProject>
          <div>
            <h2>Neapolitan Louis XV Writing Desk</h2>
            <span>
              Period mid-18th century Walnut-plated, with bois de rose
              marquetry, and purple ebony Sliding top
            </span>
          </div>
          <hr />
          <img style={style.img} src={case_6} alt="case1" />
        </EachProject>
        <EachProject>
          <div>
            <h2>Neapolitan Louis XV Writing Desk</h2>
            <span>
              Period mid-18th century Walnut-plated, with bois de rose
              marquetry, and purple ebony Sliding top
            </span>
          </div>
          <hr />
          <img style={style.img} src={case_7} alt="case1" />
        </EachProject>
        <EachProject>
          <div>
            <h2>Neapolitan Louis XV Writing Desk</h2>
            <span>
              Period mid-18th century Walnut-plated, with bois de rose
              marquetry, and purple ebony Sliding top
            </span>
          </div>
          <hr />
          <img style={style.img} src={case_8} alt="case1" />
        </EachProject>
        <EachProject>
          <div>
            <h2>Neapolitan Louis XV Writing Desk</h2>
            <span>
              Period mid-18th century Walnut-plated, with bois de rose
              marquetry, and purple ebony Sliding top
            </span>
          </div>
          <hr />
          <img style={style.img} src={case_9} alt="case1" />
        </EachProject>
        <EachProject>
          <div>
            <h2>Neapolitan Louis XV Writing Desk</h2>
            <span>
              Period mid-18th century Walnut-plated, with bois de rose
              marquetry, and purple ebony Sliding top
            </span>
          </div>
          <hr />
          <img style={style.img} src={case_10} alt="case1" />
        </EachProject>
        <EachProject>
          <div>
            <h2>Neapolitan Louis XV Writing Desk</h2>
            <span>
              Period mid-18th century Walnut-plated, with bois de rose
              marquetry, and purple ebony Sliding top
            </span>
          </div>
          <hr />
          <img style={style.img} src={case_11} alt="case1" />
        </EachProject>
      </SRLWrapper>
    </StyledGallery>
  );
}

export default Gallery;
