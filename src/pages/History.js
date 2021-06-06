import React from "react";
import {
  StyledHistory,
  ArticleContainer,
  LeftFloat,
  RightFloat,
} from "./history/styledHistory";
import shop from "../images/shop.jpg";
import article_one from "../images/article_1.jpg";
import article_two from "../images/article_2.jpg";
import article_three from "../images/article_3.jpg";

function History() {
  return (
    <StyledHistory>
      <span>
        <h2>History</h2>
      </span>
      <ArticleContainer>
        <LeftFloat>
          <img src={shop} alt="shop" />
        </LeftFloat>
        <span>
          With over 60 years of experience and three generations later, the
          Lepre family run artisan restoration workshop has been a staple in
          Naples, Italy since 1959 specializing in the restoration of Italian,
          French and English style antique furniture and cabinet making.
          <br />
          <br />
          Raffaele Lepre learned this craft from a young age, thanks to his
          uncle Sassano Giacomo who was an artisan cabinet maker. Since then,
          <RightFloat>
            <img src={article_three} alt="article one" />
          </RightFloat>
          Mr. Lepre passed his enthusiasm and passion for all things antique to
          his two sons, Alfredo and Fabio Lepre. Fabio Lepre emigrated to the
          Greater Washington D.C. area in the 2010's for a special someone that
          won his heart. He brought with him over 20 years in the antique
          restoration, conservation and trading business. After working in a
          <LeftFloat>
            <img src={article_one} alt="article one" />
          </LeftFloat>
          prestigious antiques gallery in Georgetown D.C., he slowly expanded
          his business to focus on the legacy of his family through the love of
          his craft. 
          <br />
          <br />
          Arte Lepre guarantees the quality of antiques through
          meticulous restoration by hand using exclusively traditional methods
          <RightFloat>
            <img src={article_two} alt="article two" />
          </RightFloat>
          such as: spirit polishing and shellac, beeswax polishing, and the
          possible integration of missing parts through the use of antique wood
          in order to return the restored pieces to the original state.
        </span>
      </ArticleContainer>
    </StyledHistory>
  );
}

export default History;
