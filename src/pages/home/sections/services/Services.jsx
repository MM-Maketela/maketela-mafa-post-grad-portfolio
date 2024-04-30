import React from "react";
import classes from "./Services.module.css";
import { ServiceCard } from "../../../../components/service-card/ServiceCard";
import { BiTask } from "react-icons/bi";
import { SubHeader } from "../../../../components/sub-header/SubHeader";
import { FaReact, FaNodeJs, FaJava, IoLogoJavascript, FaAddressCard } from "react-icons/fa";
import { SiAndroidstudio } from "react-icons/si";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { TbReportAnalytics } from "react-icons/tb";

export const Services = () => {
  const size = 80;
  return (
    <div className={classes.services}>
      <div style={{ marginBottom: "2rem" }}>
        <SubHeader heading="SERVICES" subText="Embrace the opportunity to leverage my versatile skill set, tailored to seamlessly elevate your project to new heights, ensuring unparalleled success and satisfaction." />
      </div>

      <div className={classes.servicesCards}>
        <ServiceCard Icon={<FaReact size={size} />} text1={["Data Collection", "Planing", "Design", "Agile Implementation"]} heading1="frontend web-dev" />
        <ServiceCard Icon={<FaNodeJs size={size} />} text1={["Data Collection", "Planing", "Design", "Agile Implementation"]} heading1="backend web-dev" />
        <ServiceCard Icon={<SiAndroidstudio size={size} />} text1={["Data Collection", "Planing", "Design", "Agile Implementation"]} heading1="android app-dev" />
        <ServiceCard Icon={<TbReportAnalytics size={size} />} text1={["Data Collection", "Isolate Problem", "Find Root Cause", "Brainstorm Solutions", "Implement Solution"]} heading1="data analysis" />
        <ServiceCard Icon={<FaAddressCard size={size} />} text1={["Data Collection", "Compile Resume", "Compile Cover Letter", "Format Docs As PDF"]} heading1="compile a resume" />
        <ServiceCard Icon={<LiaChalkboardTeacherSolid size={size} />} text1={["Explain Concepts", "Test Student", "Provide Feedback", "Share Advice", "Mentor"]} heading1="grade12 maths tutor" />
      </div>
    </div>
  );
};
