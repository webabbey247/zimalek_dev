import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Navigation, EffectFade, Autoplay } from "swiper";

import {
  GeneralLgText,
  GeneralSmText,
} from "../../styles/GlobalCss";
import {
  HeroBannerSection,
  HeroBannerLTRCta,
  HeroBannerChild,
  HeroBannerContainer,
} from "../../styles/HeroBannerCss";

const HeroBanner = () => {
  return (
    <>
      <HeroBannerSection>
        <HeroBannerContainer>
          <HeroBannerChild>
            <GeneralLgText
              color="#ffffff"
              fontSize="41px"
              lineHeight="60px"
              fontWeight="600"
              textTransform="capitalize"
            >
              Welcome to your home of technology and digital solutions.
            </GeneralLgText>
            <GeneralSmText
              color="#ffffff"
              fontSize="15px"
              lineHeight="25px"
              textTransform="unset"
              fontWeight="400"
              margin="1.5rem 0"
            >
              We are primarily geared towards providing specialist support
              services for finance applications in the areas of Software product
              Sale, Support, Training and Consultancy services for the finance
              industry.
            </GeneralSmText>
            <Link href="/portfolio" passHref>
              <HeroBannerLTRCta> Our Potfolio</HeroBannerLTRCta>
            </Link>{" "}
          </HeroBannerChild>
        </HeroBannerContainer>

        {/* <Swiper
          effect={"fade"}
          spaceBetween={30}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade, Navigation]}>
          {HeroBannerData.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                id={item.id}>
                <HeroBannerChild style={{
                  backgroundImage: `url(${item.bgImg})`,
                }}>
                  <HeroBannerLTR>
                    <GeneralLgText
                      color="#ffffff"
                      fontSize="41px"
                      lineHeight="60px"
                      fontWeight="600"
                    >
                      {item.title}
                    </GeneralLgText>
                    <GeneralSmText
                      color="#ffffff"
                      fontSize="15px"
                      lineHeight="25px"
                      textTransform="unset"
                      fontWeight="400"
                      margin="1.5rem 0"
                    >
                      We are primarily geared towards providing specialist support
                      services for finance applications in the areas of Software
                      product Sale, Support, Training and Consultancy services for
                      the finance industry.
                    </GeneralSmText>
                    <Link href="/projects" passHref>
                        <HeroBannerLTRCta> Our Potfolio</HeroBannerLTRCta>
                      </Link>
                  </HeroBannerLTR>
                </HeroBannerChild>
              </SwiperSlide>
            );
          })}
        </Swiper> */}
      </HeroBannerSection>
    </>
  );
};

export default HeroBanner;
