import React, { useEffect, useState } from "react";
import {
  Content2Column2,
  GeneralMdText,
  GeneralSmText,
} from "../../styles/GlobalCss";
import { ExpertiseCardChild, ExpertiseCardContent } from "./AboutCompStyles";

const AboutChildCard = () => {
  const [portfolio, setPortfolio] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    const response = await fetch("/api/get-portfolio");
    const data = await response.json();
    setPortfolio(data.data);
    setIsLoading(false);
  };
  return (
    !isLoading &&
    portfolio &&
    portfolio.map((item, index) => {
      return (
        <Content2Column2 key={index} id={item.id}>
          <ExpertiseCardChild>
            <ExpertiseCardContent>
              <GeneralMdText
                fontSize="24px"
                fontWeight="600"
                lineHeight="33.6px"
                textTransform="capitalize"
                color="#342C1B"
                margin="1rem 0"
              >
               {item.caption}
              </GeneralMdText>
              <GeneralSmText
                fontSize="16px"
                fontWeight="400"
                lineHeight="24px"
                textTransform="capitalize"
                color="#7a7a7a"
                margin="0 0 2rem 0"
                height="300px"
                dangerouslySetInnerHTML={{ __html: item.description }}
              >
              </GeneralSmText>
            </ExpertiseCardContent>
          </ExpertiseCardChild>
        </Content2Column2>
      );
    })
  );
};

export default AboutChildCard;
