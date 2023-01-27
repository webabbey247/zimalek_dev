import React, { useEffect, useState } from "react";
import {
  Content2Column2,
  GeneralMdText,
  CustomDiv,
} from "../../styles/GlobalCss";
import {
  PartnerCardV2,
  PartnerCardImg,
} from "../../styles/PartnersCss";

const SinglePartnerCard = () => {
  const [partner, setPartner] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    const response = await fetch("/api/get-partners");
    const data = await response.json();
    setPartner(data.data);
    setIsLoading(false);
  };
  return (
    !isLoading &&
    partner &&
    partner.map((item, index) => {
      return (
        <Content2Column2 key={index} id={item.id}>
          <PartnerCardV2>
            <CustomDiv
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              margin="20px 0"
            >
              <PartnerCardImg width="200" height="100" src={item.cover_img_url} placeholder='blur' blurDataURL={item.cover_img_url} alt={item.caption} />
            </CustomDiv>
            <GeneralMdText
              textAlign="left"
              textTransform="unset"
              fontWeight="700"
              fontSize="25px"
              lineHeight="38px"
              margin="1rem 0"
            >
              {item.caption}
            </GeneralMdText>
            <GeneralMdText
              fontSize="16px"
              fontWeight="400"
              lineHeight="24px"
              textTransform="unset"
              margin="1rem 0"
              color="#2b2d42"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </PartnerCardV2>
        </Content2Column2>
      );
    })
  );
};

export default SinglePartnerCard;
