import React from 'react';
import MainLayout from '../../components/Layouts/MainLayout';
import PageBanner from '../../components/PageBanner';
import { Content2Column2, ContentRow, GeneralMdText, GeneralSmText } from '../../styles/GlobalCss';
import { TeamContainer, TeamIntroContainer, TeamSection, TeamBottomContainer } from '../../styles/TeamCss';
import TeamProfile from '../../components/TeamProfile/TeamProfile';


const Leadership = () => {
  return (
    <>
      <MainLayout
        title="Our Team"
        description="">
        <PageBanner typeUrl="Leadership" />
        <TeamSection>
          <TeamContainer>
            <TeamIntroContainer>
              <ContentRow>
                <Content2Column2>
                  <GeneralMdText textAlign='center' color='#2b2d42' fontSize='31px' fontWeight='700' lineHeight='38px' margin='15px 0' textTransform='capitalize'>15+ Years Combined Business Experience</GeneralMdText>
                </Content2Column2>
                <Content2Column2>
                  <GeneralSmText textAlign='center' color='#2b2d42' fontSize='16px' fontWeight='400' lineHeight='24px' textTransform='unset'>The success of Zimalek Technologies as a software marketing company owes a lot to the direction provided by the key management personnel. These people have many years of management and professional experience in their key areas. When we offer the services of Zimalek Technologies to any client, we offer the wealth of experience of these key players who actively participate in the delivery of any major project. They are there from the conceptual stage right through the life of the project.
                  </GeneralSmText>
                </Content2Column2>
              </ContentRow>
            </TeamIntroContainer>

            <TeamBottomContainer>
            <ContentRow>
            <TeamProfile /> 
            </ContentRow>
            </TeamBottomContainer>


          </TeamContainer>
        </TeamSection>
      </MainLayout>
    </>
  )
}

export default Leadership;