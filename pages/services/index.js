import React from "react";
import styled from "styled-components";
import MainLayout from "../../components/Layouts/MainLayout";
import PageBanner from "../../components/PageBanner";
import { ServicesCard } from "../../components/Services";

import {
  ContentRow,
  GeneralMdText,
  SiteContainer,
  GeneralSmText,
} from "../../styles/GlobalCss";

const ServiceSection = styled.section`
  padding: 2rem 0;
  justify-content: center;
  display: flex;
  align-items: center;
  background: #f0f3f6;

  @media screen and (min-device-width: 1200px) and (max-device-width: 1400px) {
    padding: 2rem 1rem;
  }

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    padding: 2rem 1rem;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    padding: 2rem 1rem;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    padding: 2rem 0.5rem;
  }
`;

const ServiceTopContent = styled.div`
  padding: 1.5rem 0;
`;

const ServiceBottomContent = styled.div`
  padding: 1.5rem 0;
`;

const Services = () => {
  return (
    <>
      <MainLayout title="Our Services" description="">
        <PageBanner typeUrl="Services" />
        <ServiceSection>
          <SiteContainer>
            <ServiceTopContent>
              <GeneralMdText
                textAlign="left"
                textTransform="unset"
                fontWeight="700"
                fontSize="1.25rem"
                lineHeight="30px"
              >
                Zimalek Technologies strives to provide the best of breed in IT solutions,
                technologies, and frameworks. We have partnered with some of the
                leading software solution providers in the world.
              </GeneralMdText>
              {/* <GeneralSmText
                fontSize="16px"
                fontWeight="400"
                lineHeight="24px"
                textTransform="unset"
                margin="1rem 0"
                color="#2b2d42"
              >
                Outlined below are some of the solutions/ OEM’s we represent in
                the African space. We bring in-depth functional expertise with a
                proven multiplier effect not just comes by the individual pieces
                but by optimizing the sum of the parts. Our team of experienced
                and highly professional consultants are well versed in the
                fin-tech domain with years of experience in technical
                management, sales and business development, finance and
                corporate restructuring{" "}
              </GeneralSmText> */}
            </ServiceTopContent>

            <ServiceBottomContent>
              <ContentRow>
                <ServicesCard />
              </ContentRow>
            </ServiceBottomContent>
          </SiteContainer>
        </ServiceSection>
      </MainLayout>
    </>
  );
};

export default Services;
