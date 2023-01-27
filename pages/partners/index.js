import React from 'react';
import MainLayout from '../../components/Layouts/MainLayout';
import PageBanner from '../../components/PageBanner';
import { ContentRow, GeneralFlexRow, GeneralMdText, GeneralSmText, SiteContainer } from '../../styles/GlobalCss';
import { PartnerSection, PartnerTopContent } from '../../styles/PartnersCss';
import SinglePartnerCard from '../../components/Partners/SinglePartnerCard';

const Partner = () => {
    return (
        <>
            <MainLayout
                title="Partners"
                description="">
                <PageBanner typeUrl="Partners" />
                <PartnerSection>
                    <SiteContainer>
                        <PartnerTopContent>
                            <ContentRow>
                                <SinglePartnerCard />
                            </ContentRow>
                        </PartnerTopContent>
                    </SiteContainer>
                </PartnerSection>
            </MainLayout>
        </>
    )
}

export default Partner;


