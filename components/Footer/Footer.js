import React, { useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";
import Image from "next/image";
import {
  CustomButton,
  CustomDiv,
  CustomLink,
  GeneralMdText,
  GeneralSmText,
  SiteContainer,
} from "../../styles/GlobalCss";
import {
  FooterSection,
  FooterLTR,
  FooterRTL,
  FooterImg,
  FooterFormContainer,
  FooterForm,
  FooterSocials,
  FooterSocialsLink,
  FooterTopContent,
  FooterAddressInfo,
  FooterBottomContent,
  FooterNavChild,
  FooterNav,
  FooterCopyright,
} from "../../styles/FooterCss";
import { TextInput, TextInputWrapper } from "../../styles/FormCSS";
import { themeLogo } from "../../assets";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { SubscriberForm } from "../Forms";
import { LocationData } from "../../data/Utilities";

const Footer = () => {
  return (
    <>
      <FooterSection>
        <SiteContainer>
          <CustomDiv className="FooterContent" display="flex" flexDirection="row" width="100%">
            <FooterLTR>
              <GeneralMdText
                className="FooterNavTitle"
                color="#f71735"
                fontSize="13px"
                fontWeight="700"
                textAlign="left"
                textTransform="uppercase"
              >
                Subscribe to our Newsletters
              </GeneralMdText>
             
              <FooterFormContainer>
               <SubscriberForm />
              </FooterFormContainer>
              <FooterSocials>
                <FooterSocialsLink>
                  <FaFacebookF />
                </FooterSocialsLink>
                <FooterSocialsLink>
                  <FaLinkedinIn />
                </FooterSocialsLink>
                <FooterSocialsLink>
                  <FaTwitter />
                </FooterSocialsLink>
              </FooterSocials>
            </FooterLTR>
            <FooterRTL>
              
              <FooterTopContent>
                <FooterAddressInfo>
                  <GeneralMdText
                    color="var(--theme-color)"
                    fontSize="13px"
                    fontWeight="700"
                    textAlign="left"
                    textTransform="uppercase"
                  >
                    Nigeria
                  </GeneralMdText>
                  <GeneralSmText
                    color="var(--white)"
                    margin="20px 0 0"
                    fontSize="15px"
                    fontWeight="400"
                    textAlign="left"
                    width="75%"
                    lineHeight="23px"
                    textTransform="unset"
                  >
                   No 1 Anjorin lane, off olukole street <br />
                   surulere. Lagos
                  </GeneralSmText>
                </FooterAddressInfo>

                <FooterAddressInfo>
                  <GeneralMdText
                    color="var(--theme-color)"
                    fontSize="13px"
                    fontWeight="700"
                    textAlign="left"
                    textTransform="uppercase"
                  >
                    United States
                  </GeneralMdText>
                  <GeneralSmText
                    color="var(--white)"
                    margin="20px 0 0"
                    fontSize="15px"
                    fontWeight="400"
                    textAlign="left"
                    width="75%"
                    lineHeight="23px"
                    textTransform="unset"
                  >
                    No 10201 Buffalo speedway, 
                    <br />
                    Huston, Texas.
                  </GeneralSmText>
                </FooterAddressInfo>

           


              </FooterTopContent>
              <FooterBottomContent>
                <FooterNavChild>
                  <GeneralMdText
                    className="FooterNavTitle"
                    color="var(--theme-color)"
                    fontSize="13px"
                    fontWeight="700"
                    textAlign="left"
                    textTransform="uppercase"
                  >
                    Company
                  </GeneralMdText>

                  <FooterNav>
                    <CustomLink
                      color="var(--white)"
                      margin="20px 0 0"
                      fontSize="15px"
                      fontWeight="400"
                      textAlign="left"
                    >
                      About Zimalek
                    </CustomLink>

                    <CustomLink
                      color="var(--white)"
                      margin="20px 0 0"
                      fontSize="15px"
                      fontWeight="400"
                      textAlign="left"
                    >
                      Leadership
                    </CustomLink>

                    <CustomLink
                      color="var(--white)"
                      margin="20px 0 0"
                      fontSize="15px"
                      fontWeight="400"
                      textAlign="left"
                    >
                      Partners
                    </CustomLink>

                    <CustomLink
                      color="var(--white)"
                      margin="20px 0 0"
                      fontSize="15px"
                      fontWeight="400"
                      textAlign="left"
                    >
                      Contact Us
                    </CustomLink>

                    <CustomLink
                      color="var(--white)"
                      margin="20px 0 0"
                      fontSize="15px"
                      fontWeight="400"
                      textAlign="left"
                    >
                      Careers
                    </CustomLink>


                    <CustomLink
                      color="var(--white)"
                      margin="20px 0 0"
                      fontSize="15px"
                      fontWeight="400"
                      textAlign="left"
                    >
                     Press
                    </CustomLink>

                    <CustomLink
                      color="var(--white)"
                      margin="20px 0 0"
                      fontSize="15px"
                      fontWeight="400"
                      textAlign="left"
                    >Resources
                    </CustomLink>
                  </FooterNav>
                </FooterNavChild>

                <FooterNavChild>
                  <GeneralMdText
                    className="FooterNavTitle"
                    color="var(--theme-color)"
                    fontSize="13px"
                    fontWeight="700"
                    textAlign="left"
                    textTransform="uppercase"
                  >
                    Products
                  </GeneralMdText>

                  <FooterNav>
                    <CustomLink
                      color="var(--white)"
                      margin="20px 0 0"
                      fontSize="15px"
                      fontWeight="400"
                      textAlign="left"
                    >
                      Gtaas
                    </CustomLink>

                    <CustomLink
                      color="var(--white)"
                      margin="20px 0 0"
                      fontSize="15px"
                      fontWeight="400"
                      textAlign="left"
                    >
                     SalaPay
                    </CustomLink>
                  </FooterNav>

                  <GeneralMdText
                    className="FooterNavTitle"
                    color="var(--theme-color)"
                    fontSize="13px"
                    fontWeight="700"
                    textAlign="left"
                    textTransform="uppercase"
                    margin="2rem 0 0"
                  >
                    Portfolio
                  </GeneralMdText>

                  <FooterNav>
                    <CustomLink
                      color="var(--white)"
                      margin="20px 0 0"
                      fontSize="15px"
                      fontWeight="400"
                      textAlign="left"
                    >
                      Z-Market
                    </CustomLink>

                    <CustomLink
                      color="var(--white)"
                      margin="20px 0 0"
                      fontSize="15px"
                      fontWeight="400"
                      textAlign="left"
                    >
                     Z-Tickets
                    </CustomLink>

                    <CustomLink
                      color="var(--white)"
                      margin="20px 0 0"
                      fontSize="15px"
                      fontWeight="400"
                      textAlign="left"
                    >
                     Privop
                    </CustomLink>

                    <CustomLink
                      color="var(--white)"
                      margin="20px 0 0"
                      fontSize="15px"
                      fontWeight="400"
                      textAlign="left"
                    >
                     CleanIT
                    </CustomLink>
                  </FooterNav>
                </FooterNavChild>
              </FooterBottomContent>
            </FooterRTL>

          </CustomDiv>
          <FooterCopyright>
            <GeneralSmText
              color="var(--theme-color)"
              margin="20px 0 0"
              fontSize="15px"
              fontWeight="600"
              textAlign="center"
              textTransform="capitalize"
            >
              &copy;{new Date().getFullYear()} Zimalek Technologies. All rights reserved.
            </GeneralSmText>
          </FooterCopyright>
        </SiteContainer>
      </FooterSection>
    </>
  );
};

export default Footer;



