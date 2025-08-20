import React, { useState, useEffect } from "react";
import item_1 from "../images/Inventory/Dutch-Baroque-Satinwood-Marquetry-and-Crossbanded-Mahogany-Bombe-Bureau-Closed.jpg";
import item_1_1 from "../images/Inventory/Dutch-Baroque-Satinwood-Marquetry-and-Crossbanded-Mahogany-Bombe-Bureau-Open.jpg";
import item_2 from "../images/Inventory/Anglo-Dutch-Marquetry-Walnut-Cabinet-on-Chest.jpg";
import item_3 from "../images/Inventory/South-German-Baroque-Parquetry-Walnut-Slant-Front-Bureau-SchreibSchrank-Cabinet-18th-Century.jpg";
import item_4 from "../images/Inventory/Italian-Walnut-Commode-late-18th-Century.jpg";
import item_5 from "../images/Inventory/Continental-Ladies-Inlaid-Writing-Closed.jpg";
import item_5_1 from "../images/Inventory/Continental-Ladies-Inlaid-Writing-Open.jpg";
import item_6 from "../images/Inventory/Continental-Marquetry-Inlaid-Shaving-Mirror-Closed.jpg";
import item_6_1 from "../images/Inventory/Continental-Marquetry-Inlaid-Shaving-Mirror-Open.jpg";
import item_7 from "../images/Inventory/Birds-eye-maple-vanity-1930s-Closed.jpg";
import item_7_1 from "../images/Inventory/Birds-eye-maple-vanity-1930s-Open.jpg";
import { SRLWrapper } from "simple-react-lightbox";
import {
  StyledGallery,
  EachProject,
  StyledImage,
} from "../pages/gallery/styledGallery";
import LoadImage from "../components/LoadImage";

function Gallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const item_1_set = [item_1, item_1_1];
  const item_5_set = [item_5, item_5_1];
  const item_6_set = [item_6, item_6_1];
  const item_7_set = [item_7, item_7_1];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % item_1_set.length);
    }, 4000); // 3000 milliseconds = 3 seconds

    return () => {
      clearInterval(intervalId); // Clean up the interval on component unmount
    };
  }, [item_1_set.length]);

  return (
    <StyledGallery>
      <img src="" alt="" style={{ height: "10px", width: "10px" }} />
      <h2>For Sale</h2>
      <SRLWrapper>
        <div>
          <EachProject>
            <div>
              <h2>
                Dutch Baroque Satinwood Marquetry and Crossbanded Mahogany Bombé
                Bureau
              </h2>
              <span>
                Early 19th Century The 'S' hinged writing lid opening to view a
                fitted interior with a central prospect door enclosing a shelf
                flanked by ormolu Doric-column mounted document drawers and a
                serpentine arrangement of two valanced drawers above two
                pigeonholes and six serpentine drawers. Scattered losses and
                repairs to veneer and marquetry. Height: 43-1/2 in (110.5 cm);
                Greatest width: 57 in (144.8 cm); Greatest depth: 27 in (68.6
                cm)Property from the Colonel and Mrs. Arthur W.S. Herrington
                Trust.
              </span>
              <a href="tel:12025505312">
                <p>Call to Purchase</p>
              </a>
            </div>
            <hr />
            <StyledImage>
              <LoadImage
                image={item_1_set[currentImageIndex]}
                alt={`Early 19th Century The 'S' hinged writing lid opening to view a
                fitted interior with a central prospect door enclosing a shelf
                flanked by ormolu Doric-column mounted document drawers and a
                serpentine arrangement of two valanced drawers above two
                pigeonholes and six serpentine drawers. Scattered losses and
                repairs to veneer and marquetry. Height: 43-1/2 in (110.5 cm);
                Greatest width: 57 in (144.8 cm); Greatest depth: 27 in (68.6
                cm)Property from the Colonel and Mrs. Arthur W.S. Herrington
                Trust.`}
              />
            </StyledImage>
          </EachProject>
          <EachProject>
            <div>
              <h2>Anglo Dutch Marquetry Walnut Cabinet on Chest</h2>
              <span>
                Early 19th Century In two parts: the upper section having two
                panel doors encasing an arrangement of niches and shelves above
                four drawers. Height: 57-3/4 in (146.7 cm); Width: 31-1/4 in
                (79.4 cm); Depth: 20 in (50.8 cm).
              </span>
              <a href="tel:12025505312">
                <p>Call to Purchase</p>
              </a>
            </div>
            <hr />
            <StyledImage>
              <LoadImage
                image={item_2}
                alt={`Early 19th Century In two parts: the upper section having two
                panel doors encasing an arrangement of niches and shelves above
                four drawers. Height: 57-3/4 in (146.7 cm); Width: 31-1/4 in
                (79.4 cm); Depth: 20 in (50.8 cm).`}
              />
            </StyledImage>
          </EachProject>
          <EachProject>
            <div>
              <h2>
                South German Baroque Parquetry Walnut Slant Front Bureau
                SchreibSchrank Cabinet 18th Century
              </h2>
              <span>
                In three parts: the upper section having a central panel door
                enclosing a niche flanked by an arrangement of seven short
                drawers over a tripartite long drawer; the middle section having
                a slanting hinged writing lid flanked by two short drawers and a
                green faux-leather lined interior with six niches; and the lower
                section having three concave long drawers. Height: 72 in (182.9
                cm); Width: 46 in (116.8 cm); Depth: 26 in (66 cm).
              </span>
              <a href="tel:12025505312">
                <p>Call to Purchase</p>
              </a>
            </div>
            <hr />
            <StyledImage>
              <LoadImage
                image={item_3}
                alt={`In three parts: the upper section having a central panel door enclosing a niche flanked by an arrangement of seven short drawers over a tripartite long drawer; the middle section having a slanting hinged writing lid flanked by two short drawers and a green faux-leather lined interior with six niches; and the lower section having three concave long drawers.
                Height: 72 in (182.9 cm); Width: 46 in (116.8 cm); Depth: 26 in (66 cm).`}
              />
            </StyledImage>
          </EachProject>
          <EachProject>
            <div>
              <h2>Italian Walnut Commode late 18th Century</h2>
              <span>
                the banded and shaped rectangular top centered by a panel scene
                of classical characters, flanked to either side by winged female
                warriors, above a conforming case fitted with two short drawers
                over two long drawers, all with foliate scrolling and mythical
                inlaid creatures, raised on cabriole legs ending in scrolled
                toes. h. 36", w. 56", d. 23".
              </span>
              <a href="tel:12025505312">
                <p>Call to Purchase</p>
              </a>
            </div>
            <hr />
            <StyledImage>
              <LoadImage
                image={item_4}
                alt={`the banded and shaped rectangular top centered by a panel scene of classical characters, flanked to either side by winged female warriors, above a conforming case fitted with two short drawers over two long drawers, all with foliate scrolling and mythical inlaid creatures, raised on cabriole legs ending in scrolled toes.
                h. 36", w. 56", d. 23".`}
              />
            </StyledImage>
          </EachProject>
          <EachProject>
            <div>
              <h2>Continental Ladies Inlaid Writing</h2>
              <span>
              Continental Neoclassical style ladies writing desk or bonheur du jour, comprised of mixed woods with satinwood and contrasting inlaid and marquetry decoration throughout, single part construction. Flat top over central doors flanked by a row of four stacked drawers opening to an interior with single shelf.  Below the fold down hinged writing surface is a dovetailed drawer above two locking drawers, and a shaped kneehole skirt, all raised on square tapered legs terminating into balls. 48 1/2" H x 32 5/8" W x 17 3/8".
              </span>
              <a href="tel:12025505312">
                <p>Call to Purchase</p>
              </a>
            </div>
            <hr />
            <StyledImage>
              <LoadImage
                image={item_5_set[currentImageIndex]}
                alt={`Continental Neoclassical style ladies writing desk or bonheur du jour, comprised of mixed woods with satinwood and contrasting inlaid and marquetry decoration throughout, single part construction. Flat top over central doors flanked by a row of four stacked drawers opening to an interior with single shelf.  Below the fold down hinged writing surface is a dovetailed drawer above two locking drawers, and a shaped kneehole skirt, all raised on square tapered legs terminating into balls. 48 1/2" H x 32 5/8" W x 17 3/8".`}
              />
            </StyledImage>
          </EachProject>
          <EachProject>
            <div>
              <h2>Continental Marquetry Inlaid Shaving Mirror</h2>
              <span>
              A Continental marquetry inlaid shaving mirror, likely Dutch, 19th Century. 30-1/2 in tall x 31 in wide x 13 in deep.
              </span>
              <a href="tel:12025505312">
                <p>Call to Purchase</p>
              </a>
            </div>
            <hr />
            <StyledImage>
              <LoadImage
                image={item_6_set[currentImageIndex]}
                alt={`A Continental marquetry inlaid shaving mirror, likely Dutch, 19th Century. 30-1/2 in tall x 31 in wide x 13 in deep.`}
              />
            </StyledImage>
          </EachProject>
          <EachProject>
            <div>
              <h2>Bird's Eye Maple Vanity 1930's</h2>
              <span>
              A 1930s serpentine birds eye maple veneered vanity or dressing table. Vanity features a large folding mirror over two drawers between two columnar cabinets on a open base.
              </span>
              <a href="tel:12025505312">
                <p>Call to Purchase</p>
              </a>
            </div>
            <hr />
            <StyledImage>
              <LoadImage
                image={item_7_set[currentImageIndex]}
                alt={`A 1930s serpentine birds eye maple veneered vanity or dressing table. Vanity features a large folding mirror over two drawers between two columnar cabinets on a open base.`}
              />
            </StyledImage>
          </EachProject>
        </div>
      </SRLWrapper>
    </StyledGallery>
  );
}

export default Gallery;
