import React from "react";
import styled from "styled-components";
import { GeneralMdText, GeneralSmText } from "../../styles/GlobalCss";

const BannerSection = styled.section`
  padding: 3rem 0 3rem;
  background-image: url("../../static/images/about-banner-img.webp");
  height: 470px;
  background-size: cover;
  background-position: 50%;

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    height: auto;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    height: auto;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    height: auto;
  }
`;

const BannerServicesSection = styled.section`
  padding: 3rem 0 3rem;
  background-image: url("../../static/images/services-banner-img.webp");
  height: 470px;
  background-size: cover;
  background-position: top;

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    height: auto;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    height: auto;
  }
`;

const BannerProductSection = styled.section`
  padding: 3rem 0 3rem;
  background-image: url("../../static/images/products-banner-img.webp");
  height: 460px;
  background-size: cover;
  background-position: center;

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    height: auto;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    height: auto;
  }
`;

const BannerClientSection = styled.section`
  padding: 3rem 0 3rem;
  background-image: url("../../static/images/products-banner-img.webp");
  height: 410px;
  background-size: cover;
  background-position: center;

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    height: auto;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    height: auto;
  }
`;

const BannerCareerSection = styled.section`
  padding: 3rem 0 3rem;
  background-image: url("../../static/images/our-approach-img.webp");
  height: 460px;
  background-size: cover;
  background-position: top;

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    height: auto;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    height: auto;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    height: auto;
  }
`;

const BannerPressSection = styled.section`
  padding: 3rem 0 3rem;
  background-image: url("../../static/images/blog-img-01.webp");
  height: 460px;
  background-size: cover;
  background-position: top;

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    height: auto;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    height: auto;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    height: auto;
  }
`;

const BannerPartnersSection = styled.section`
  padding: 3rem 0 3rem;
  background-image: url("../../static/images/services-banner-img.webp");
  height: 490px;
  background-size: cover;
  background-position: top;

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    height: auto;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    height: auto;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    height: auto;
  }
`;

const BannerProjectSection = styled.section`
  padding: 3rem 0 3rem;
  background-image: url("../../static/images/project-banner-01.jpg");
  height: 400px;
  background-size: cover;
  background-position: top;

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    height: auto;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    height: auto;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    height: auto;
  }
`;

const BannerTeamSection = styled.section`
  padding: 3rem 0 3rem;
  background-image: url("../../static/images/leadership-img.webp");
  height: 490px;
  background-size: cover;
  background-position: center;

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    height: auto;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    height: auto;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    height: auto;
  }
`;

const BannerContainer = styled.div`
  width: min(100%, 45rem);
  margin-top: 4.5rem;
  background-color: #161e2d;
  margin-left: 5.5rem;
  padding: 1rem 2rem 2rem;

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    margin-left: 3rem;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    width: 100%;
    margin-left: 0;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    width: 100%;
    margin-left: 0;
  }
`;

const PageBanner = ({ typeUrl }) => {
  return (
    <>
      {typeUrl === "Services" && (
        <BannerServicesSection>
          <BannerContainer>
            <GeneralMdText
              textAlign="left"
              fontSize="3.4rem"
              lineHeight="64.8px"
              textTransform="unset"
              margin="20px 0"
              color="#F4F4F4"
              fontWeight="700"
            >
              Strategy, Execution
            </GeneralMdText>
            <GeneralSmText
              textAlign="left"
              fontSize="16px"
              fontWeight="400"
              color="#F4F4F4"
              lineHeight="25.6px"
              textTransform="unset"
              margin="20px 0"
            >
              We are a world class organization driven by a passion to deliver
              value for our clients, and ensure that they succeed in their
              chosen markets and operating environments, we pay detailed
              attention to the needs of our clients and carefully examine their
              business operations and operating market dynamics to deliver
              best-in-class tailored solutions.
            </GeneralSmText>
          </BannerContainer>
        </BannerServicesSection>
      )}

      {typeUrl === "About" && (
        <BannerSection>
          <BannerContainer>
            <GeneralMdText
              textAlign="left"
              fontSize="3.4rem"
              lineHeight="64.8px"
              textTransform="unset"
              margin="20px 0"
              color="var(--theme-color)"
              fontWeight="700"
            >
              Corporate Introduction
            </GeneralMdText>
            <GeneralSmText
              textAlign="left"
              fontSize="16px"
              fontWeight="400"
              color="#F4F4F4"
              lineHeight="25.6px"
              textTransform="unset"
              margin="20px 0"
            >
              Zimalek global technologies Limited is an indigenous IT company
              known as the most rewarded company of the industry. We strive hard
              to fulfill the expectation of our Valuable clients. A team of
              dedicated experts and professional is hired by the company to
              serve with the best possible solutions to the experts of company.
            
            </GeneralSmText>
          </BannerContainer>
        </BannerSection>
      )}

      {typeUrl === "Careers" && (
        <BannerCareerSection>
          <BannerContainer>
            <GeneralMdText
              textAlign="left"
              fontSize="3.4rem"
              lineHeight="64.8px"
              textTransform="unset"
              margin="20px 0"
              color="#F4F4F4"
              fontWeight="700"
            >
              Start your FASYL adventure!
            </GeneralMdText>
            <GeneralSmText
              textAlign="left"
              fontSize="16px"
              fontWeight="400"
              color="#F4F4F4"
              lineHeight="25.6px"
              textTransform="unset"
              margin="20px 0"
            >
              Come be part of our team–bring your ideas, ingenuity and
              determination to make a difference, and we’ll solve some of the
              world’s biggest challenges.
            </GeneralSmText>
          </BannerContainer>
        </BannerCareerSection>
      )}

      {typeUrl === "Products" && (
        <BannerProductSection>
          <BannerContainer>
            <GeneralMdText
              textAlign="left"
              fontSize="3.4rem"
              lineHeight="64.8px"
              textTransform="unset"
              margin="20px 0"
              color="#F4F4F4"
              fontWeight="700"
            >
              Our Products
            </GeneralMdText>
            <GeneralSmText
              textAlign="left"
              fontSize="16px"
              fontWeight="400"
              color="#F4F4F4"
              lineHeight="25.6px"
              textTransform="unset"
              margin="20px 0"
            >
              Our team of innovators empower customers to realize business value
              through Microsoft solutions, technologies, and services. If you
              have a passion for the investment industry and want to be a part
              of a company that is actively fostering the growth of companies in
              Africa, apply to one of our open positions today.
            </GeneralSmText>
          </BannerContainer>
        </BannerProductSection>
      )}

      {typeUrl === "Clients" && (
        <BannerClientSection>
          <BannerContainer>
            <GeneralMdText
              textAlign="left"
              fontSize="3.4rem"
              lineHeight="64.8px"
              textTransform="unset"
              margin="20px 0"
              color="#F4F4F4"
              fontWeight="700"
            >
              Our Clients
            </GeneralMdText>
            <GeneralSmText
              textAlign="left"
              fontSize="16px"
              fontWeight="400"
              color="#F4F4F4"
              lineHeight="25.6px"
              textTransform="unset"
              margin="20px 0"
            >
              Our team of innovators empower customers to realize business value
              through Microsoft solutions, technologies, and services. If you
              have a passion for the investment.
            </GeneralSmText>
          </BannerContainer>
        </BannerClientSection>
      )}

      {typeUrl === "Blog" && (
        <BannerPressSection>
          <BannerContainer>
            <GeneralMdText
              textAlign="left"
              fontSize="3.4rem"
              lineHeight="64.8px"
              textTransform="unset"
              margin="20px 0"
              color="#F4F4F4"
              fontWeight="700"
            >
              Information Center
            </GeneralMdText>
            <GeneralSmText
              textAlign="left"
              fontSize="16px"
              fontWeight="400"
              color="#F4F4F4"
              lineHeight="25.6px"
              textTransform="unset"
              margin="20px 0"
            >
              Our team of innovators empower customers to realize business value
              through Microsoft solutions, technologies, and services. If you
              have a passion for the investment industry and want to be a part
              of a company that is actively fostering the growth of companies in
              Africa, apply to one of our open positions today.
            </GeneralSmText>
          </BannerContainer>
        </BannerPressSection>
      )}

      {typeUrl === "Partners" && (
        <BannerPartnersSection>
          <BannerContainer>
            <GeneralMdText
              textAlign="left"
              fontSize="3.4rem"
              lineHeight="64.8px"
              textTransform="unset"
              margin="20px 0"
              color="#F4F4F4"
              fontWeight="700"
            >
             Our Partners
            </GeneralMdText>
            <GeneralSmText
              textAlign="left"
              fontSize="16px"
              fontWeight="400"
              color="#F4F4F4"
              lineHeight="25.6px"
              textTransform="unset"
              margin="20px 0"
            >
              We recognized quite early, that it is impossible to satisfy the
              ever increasing and complex demands, for suitable software
              solutions, of the various sectors of the African economy, without
              some sort of strategic alliances. Consequently, we have been
              working in very close collaboration with very reputable
              international organizations to implement well proven international
              packages in various companies in West Africa.
            </GeneralSmText>
          </BannerContainer>
        </BannerPartnersSection>
      )}

      {typeUrl === "Portfolio" && (
        <BannerProjectSection>
          <BannerContainer>
            <GeneralMdText
              textAlign="left"
              fontSize="3.4rem"
              lineHeight="64.8px"
              textTransform="unset"
              margin="20px 0"
              color="#F4F4F4"
              fontWeight="700"
            >
              Our Portfolio
            </GeneralMdText>
            <GeneralSmText
              textAlign="left"
              fontSize="16px"
              fontWeight="400"
              color="#F4F4F4"
              lineHeight="25.6px"
              textTransform="unset"
              margin="20px 0"
            >
              We are primarily geared towards providing specialist support
              services for finance applications in the areas of Software product
              Sale, Support, Training and Consultancy services for the finance
              industry.
            </GeneralSmText>
          </BannerContainer>
        </BannerProjectSection>
      )}

      {typeUrl === "Leadership" && (
        <BannerTeamSection>
          <BannerContainer>
            <GeneralMdText
              textAlign="left"
              fontSize="3.4rem"
              lineHeight="64.8px"
              textTransform="unset"
              margin="20px 0"
              color="#F4F4F4"
              fontWeight="700"
            >
              Our Team
            </GeneralMdText>
            <GeneralSmText
              textAlign="left"
              fontSize="16px"
              fontWeight="400"
              color="#F4F4F4"
              lineHeight="25.6px"
              textTransform="unset"
              margin="20px 0"
            >
              Our team is fluent in the languages of strategy, business
              performance, leadership, and interpersonal dynamics. We have
              worked extensively with large and small organizations, both as
              leaders and as senior-level consultants brought in to rethink
              strategy, redesign structure, amplify execution, and catalyze
              change. Our job is to mobilize our clients’ internal capacities to
              create change that is lasting and meaningful.
            </GeneralSmText>
          </BannerContainer>
        </BannerTeamSection>
      )}
    </>
  );
};

export default PageBanner;
