import React, { useEffect, useState } from "react";
import {
  Content3Column3,
  GeneralMdText,
  GeneralSmText,
} from "../../styles/GlobalCss";
import { ServicesCardList, ServicesCardIcon } from "./ServicesCompStyles";
const ServicesCard = () => {
  const [serviceList, setServiceList] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchServiceList();
  }, []);

  const fetchServiceList = async () => {
    const response = await fetch("/api/get-services");
    const data = await response.json();
    setServiceList(data.data);
    setIsLoading(false);
  };
  return (
    !isLoading &&
    serviceList &&
    serviceList.map((item, index) => {
      return (
        <Content3Column3>
          <ServicesCardList>
            <ServicesCardIcon
              src="../static/images/icons/services-icon-01.svg"
              alt={item.caption}
            />
            <GeneralMdText
              textAlign="left"
              textTransform="capitalize"
              fontWeight="700"
              fontSize="1.25rem"
              lineHeight="30px"
            >
            {item.caption}
            </GeneralMdText>
            <GeneralSmText
              fontSize="16px"
              fontWeight="400"
              lineHeight="24px"
              textTransform="unset"
              margin="1rem 0"
              color="#2b2d42"
            >
             <div
                dangerouslySetInnerHTML={{
                  __html: item.description,
                }}
              />
            </GeneralSmText>
          </ServicesCardList>
        </Content3Column3>
      );
    })
  );
};

export default ServicesCard;
