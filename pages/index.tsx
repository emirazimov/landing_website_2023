import dynamic from "next/dynamic";
import Layout from "components/layout";
import styled from "styled-components";
import PageTitle from "components/common/PageTitle";
import { useEffect, useMemo, useState } from "react";
import ServicesSection from "components/homepage/ServicesSection";
import DestinationLocations from "components/homepage/DestinationLocations";
import SafetySection from "components/homepage/SafetySection";
import SolutionsSection from "components/homepage/SolutionsSection";
import AboutUsSection from "components/common/AboutUsSection";
import ContactUs from "components/common/ContactUs";
import Partners from "components/common/Partners";
import Head from "next/head";

const BookingSection = dynamic(() => import("components/common/booking"));

const Container = styled.div`
  flex: 1;
`;

function Home() {
  return (
    <Layout>
      <Container>
        <Head>
          <title>Bookinglane | Limo & global chauffeur service</title>

          <meta
            name="description"
            key="desc"
            content="Book luxury rides with Bookinglane's global chauffeur service. Premium limo fleet. Arrive in comfort & elegance."
          />
        </Head>
        <PageTitle.h1>
          Book executive car & chauffeur service locally and nationwide
        </PageTitle.h1>
        <BookingSection />
        <ServicesSection />
        <DestinationLocations />
        <SafetySection />
        <SolutionsSection />
        <AboutUsSection />
        <ContactUs />
        <Partners />
      </Container>
    </Layout>
  );
}

export default Home;
