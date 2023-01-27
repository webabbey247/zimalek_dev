import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainLayout from "../../components/Layouts/MainLayout";
import PageBanner from "../../components/PageBanner";
import {
  Content3Column3,
  Content4Column4,
  ContentRow,
  GeneralFlexRow,
  GeneralLgText,
  GeneralMdText,
  SiteContainer,
} from "../../styles/GlobalCss";
import ClientList from "../../components/Clients/ClientList";

export const ClientSection = styled.section`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ClientRTL = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ClientStatistics = styled.div`
  margin: 2rem 0;
  position: relative;
  padding: 0;
`;

export const ClientStatisticsCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-right: 1px solid #9993;
  padding: 0 10px;

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    flex-direction: column;
    border-bottom: 1px solid #9993;
    padding: 2rem 0;

    & > h2 {
      text-align: center;
    }

    & > h4 {
      text-align: center;
    }
  }
  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    flex-direction: column;
    border-bottom: 1px solid #9993;
    padding: 2rem 0;
    border-right: none;

    & > h2 {
      text-align: center;
    }

    & > h4 {
      text-align: center;
    }
  }
`;

export const ClientChildren = styled.div`
  position: relative;
  padding: 4rem 0;
`;

const Clients = () => {
    const [client, setClient] = useState("");
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
        fetchClient();
    }, []);
  
    const fetchClient = async () => {
      const response = await fetch("/api/get-clients");
      const data = await response.json();
      setClient(data.data);
      setIsLoading(false);
    };
  return (
    <MainLayout title="Clients" description="">
      <PageBanner typeUrl="Clients" />
      <ClientSection>
        <SiteContainer>
          <ClientStatistics>
            <ContentRow>
              <Content4Column4>
                <GeneralFlexRow className="ClienStats">
                  <ClientStatisticsCard>
                    <GeneralLgText
                      fontSize="40px"
                      textTransform="unset"
                      fontWeight="700"
                      lineHeight="40px"
                      color="#2b2d42"
                    >
                      2
                    </GeneralLgText>
                    <GeneralMdText
                      fontSize=""
                      fontWeight=""
                      textAlign=""
                      margin=""
                      padding=""
                      color=""
                      textTransform="unset"
                    >
                      Years Of Experience
                    </GeneralMdText>
                  </ClientStatisticsCard>
                </GeneralFlexRow>
              </Content4Column4>

              <Content4Column4>
                <GeneralFlexRow className="ClienStats">
                  <ClientStatisticsCard>
                    <GeneralLgText
                      fontSize="40px"
                      textTransform="unset"
                      fontWeight="700"
                      lineHeight="40px"
                      color="#2b2d42"
                    >
                      41
                    </GeneralLgText>
                    <GeneralMdText
                      fontSize=""
                      fontWeight=""
                      textAlign=""
                      margin=""
                      padding=""
                      color=""
                      textTransform="unset"
                    >
                      Satisfied Clients
                    </GeneralMdText>
                  </ClientStatisticsCard>
                </GeneralFlexRow>
              </Content4Column4>

              <Content4Column4>
                <GeneralFlexRow className="ClienStats">
                  <ClientStatisticsCard>
                    <GeneralLgText
                      fontSize="40px"
                      textTransform="unset"
                      fontWeight="700"
                      lineHeight="40px"
                      color="#2b2d42"
                    >
                      41
                    </GeneralLgText>
                    <GeneralMdText
                      fontSize=""
                      fontWeight=""
                      textAlign=""
                      margin=""
                      padding=""
                      color=""
                      textTransform="unset"
                    >
                      Satisfied Clients
                    </GeneralMdText>
                  </ClientStatisticsCard>
                </GeneralFlexRow>
              </Content4Column4>

              <Content4Column4>
                <GeneralFlexRow className="ClienStats">
                  <ClientStatisticsCard
                    style={{
                      borderRight: "none",
                    }}
                  >
                    <GeneralLgText
                      fontSize="40px"
                      textTransform="unset"
                      fontWeight="700"
                      lineHeight="40px"
                      color="#2b2d42"
                    >
                      7
                    </GeneralLgText>
                    <GeneralMdText
                      fontSize=""
                      fontWeight=""
                      textAlign=""
                      margin=""
                      padding=""
                      color=""
                      textTransform="unset"
                    >
                      Countries 
                    </GeneralMdText>
                  </ClientStatisticsCard>
                </GeneralFlexRow>
              </Content4Column4>
            </ContentRow>
          </ClientStatistics>

          <ClientChildren>
            <ContentRow>
              {!isLoading && client && client.map((item, index) => {
                return (
                  <ClientList
                    index={index}
                    id={item.id}
                    client_url={item.client_domain_url}
                    cover_img={item.cover_img_url}
                  />
                );
              })}
            </ContentRow>
          </ClientChildren>
        </SiteContainer>
      </ClientSection>
    </MainLayout>
  );
};

export default Clients;
