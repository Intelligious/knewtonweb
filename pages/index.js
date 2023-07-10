import React, { useState, useEffect, useRef } from "react";
import WebHeader from "../Web-Layouts/Web-Header/WebHeader";
import HeroSection from "../component/HeroSection";
import OurServices from "../component/OurServices";
import AboutUs from "../component/AboutUs";
import WhyChooseUs from "../component/WhyChooseUs";
import RecentProjects from "../component/RecentProjects";
import { Imageone } from "../component/Imageone";
import { Imagetwo } from "../component/Imagetwo";
import { OurTeam } from "../component/OurTeam";
import OurCustomer from "../component/OurCustomer";
import ContactUs from "../component/ContactUs";
import WebFooter from "../Web-Layouts/Web-Footer/WebFooter";

export default function Home() {
  return (
    <>
      <WebHeader />
      <div className="pageWrapper">
        <HeroSection />
        <hr className="f_hr " />
        <OurServices />
        <hr className="f_hr " />
        <Imageone />
        <AboutUs />
        <Imagetwo />
        {/* <hr className="f_hr " /> */}
        <WhyChooseUs />
        <hr className="f_hr " />
        <RecentProjects />
        <hr className="f_hr " />
        <OurTeam />
        <hr className="f_hr " />
        <OurCustomer />
        <hr className="f_hr " />
        <ContactUs />
        <hr className="f_hr " />
        <WebFooter />
      </div>
    </>
  );
}
