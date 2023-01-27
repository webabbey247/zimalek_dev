import styled from 'styled-components';

export const TeamSection = styled.section`
background: #fff;
padding: 4rem 0;
display: flex;
align-items: center;
justify-content: center;

@media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
  padding: 4rem 0 0;
}

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
  padding: 4rem 0 0;
}
`;


export const TeamContainer = styled.div`
width: min(100%,75rem);

@media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
  width: 100%;
}

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
  width: 100%;
}
`;

export const TeamIntroContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding-bottom: 3rem;
`;

export const TeamBottomContainer = styled.div`
padding: 4rem 0;
`;

export const LeadershipCard = styled.div`
margin-bottom: 20px;
`;

export const LeadershipContent = styled.div`
background: #fff;
`;

export const LeadershipPictureHolder = styled.div`
height: 310px;
margin-bottom: 12px;

@media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
  height: auto;
  padding: 0 3rem;
}

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {

  @media only screen and (max-device-width: 384px) {
    padding: 0 2rem;
  }
  
  height: auto;
  padding: 0 3rem;
}

`;

export const LeadershipCardPic = styled.img`
width: 100%;
filter: grayscale(1);
height: 350px;
&:hover {
  filter: none;
}
`;

export const LeadershipCardInfo = styled.div`
padding: 20px 15px 20px;
`;























export const TeamInfo = styled.div`
width: 100%;
position: relative;
transition: background .3s,border .3s,border-radius .3s,box-shadow .3s,-webkit-border-radius .3s,-webkit-box-shadow .3s;
margin: 1rem 0;
`;

export const TeamInfoContainer = styled.figure`
display: flex;
flex-direction: column;
margin: 0;
padding: 0;
`;

export const TeamInfoImg = styled.div`
display: flex;
flex-direction: row;
`;

export const TeamInfoButton = styled.div`
background-color: #EF9801;
display: flex;
flex-direction: column;
min-width: 2.5rem;
margin-top: auto;
`;

export const TeamInfoLinkedinButton = styled.a`
text-decoration: none;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 2.5rem;
height: 2.5rem;
`;

export const TeamInfoCheckBioButton = styled.span`
height: 2.5rem;
min-width: calc(75% - 2.5rem);
margin-left: auto;
margin-right: 2.5rem;
background-color: #EF9801;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;


`;

