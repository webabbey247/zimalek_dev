import styled from 'styled-components';

export const FooterSection = styled.footer`
display: flex;
justify-content: center;
align-items: center;
padding: 3rem 0 1rem;
background: #1b1b1b;

@media screen and (min-device-width: 1400px) and (max-device-width: 1600px) {
}

@media screen and (min-device-width: 1200px) and (max-device-width: 1400px) {
   
}

@media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
}

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
}

@media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
}

`;

export const FooterLTR = styled.div`
flex: 0 0 25%;
max-width: 25%;
padding: 0 1rem;

@media screen and (min-device-width: 1400px) and (max-device-width: 1600px) {
}

@media screen and (min-device-width: 1200px) and (max-device-width: 1400px) {
   
}

@media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
}

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 0 2rem;
}

@media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 0 1.5rem;
}
`;

export const FooterImg = styled.figure`
padding: 0;
margin: 2.5rem 0 0;
width: 200px;
height: 100px;

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
margin: auto;
}

@media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    margin: auto;
    width: 140px;
    height: 70px;
}

`;

export const FooterFormContainer = styled.div`
margin: 10px 0;
position: relative;
`;

export const FooterForm = styled.form`
display: flex;
flex-direction: column;
`;

export const FooterSocials = styled.div`
padding: 1rem 0;
display: flex;
justify-content: flex-start;
flex-direction: row;

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    justify-content: center;
    }

    @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
        justify-content: center;

    }
`;

export const FooterSocialsLink = styled.a`
text-decoration: none;
font-size: 25px;
padding: 0 1rem;
color: #f71735;
cursor: pointer;

&:first-child {
    padding-left: 0;
}

&:last-child {
    border-right: none;
}

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    font-size: 23px;
    }


@media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    font-size: 19px;
}
`;

export const FooterRTL = styled.div`
flex: 0 0 75%;
max-width: 75%;
flex-direction: row;
display: flex;
padding: 0 0 0 2rem;

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    flex: 0 0 100%;
    max-width: 100%;
    }

    @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
        flex: 0 0 100%;
    max-width: 100%;

    }

`;

export const FooterTopContent = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
flex: 0 0 60%;
max-width: 60%;


@media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    flex-direction: column;
}

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    flex-direction: column;
    }

    @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
        flex-direction: column;
    }

`;

export const FooterAddressInfo = styled.aside`
flex: 0 0 50%;
max-width: 50%;


@media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    flex: 0 0 100%;
    max-width: 100%;
}

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin: 1rem 0;
    }

    @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
        flex: 0 0 100%;
    max-width: 100%;
    margin: 0.5rem 0;
    }
`;

export const FooterBottomContent = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
flex: 0 0 40%;
max-width: 40%;


@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    flex-direction: column;
    justify-content: center;
 }

 @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    flex-direction: column;
    justify-content: center;
`;

export const FooterNavChild = styled.div`
flex: 0 0  33.3%;
max-width: 33.3%;

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    flex: 0 0 100%;
    max-width: 100%;
    text-align: center;
    }

    @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
        flex: 0 0 100%;
    max-width: 100%;
    }
`;

export const FooterNav = styled.div`
margin: 0;
padding: 0;
display: flex;
flex-direction: column;
`;

export const FooterCopyright = styled.div`
display: flex;
flex-direction: center;
align-items: center;
justify-content: center;
padding: 1rem 1rem 0;
`;






