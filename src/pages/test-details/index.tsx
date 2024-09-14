

import AccordionWrap from "@components/Common/AccordionWrap/accordionwrap";
import IMAGE from "@const/Image";
import SVGIcon from "@const/SvgIcon";
import MetaRepo from "@store/Services/MetaService";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface AccordionMap {
    "0": boolean;
    "1": boolean;
    "2": boolean;
    "3": boolean;
    "4": boolean;
    "5": boolean;
  }

const TestDetail = ({
    metaDetail,
}: InferGetStaticPropsType<typeof getStaticProps>) => {

    
    const [accordionMap, setAccordionMap] = useState<AccordionMap>({
        "0": true,
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
      });

      
    const [activeSection, setActiveSection] = useState(0);

    const handleSectionClick = (index: number) => {
        console.log(typeof index, 'index');

        setActiveSection(index)
        
        const newMap: AccordionMap = {
          "0": false,
          "1": false,
          "2": false,
          "3": false,
          "4": false,
          "5": false,
        };
    
        newMap[index.toString() as keyof AccordionMap] = true; // Open the clicked accordion
        
        setAccordionMap(newMap);
      };
 


    const sections = [
        'Overview',
        'Sample Guidelines & Forms',
        'Clinical Information & Resources',
        'Reports',
        'Additional information',
        'Test Price & Other Details'
      ];

      
   

      const handleAccordion = (userInput: keyof AccordionMap) => {
        setActiveSection(parseInt(userInput));
        setAccordionMap({ ...accordionMap, [userInput]: !accordionMap[userInput] });
      };

      const handleDownload = () => {
        // Create a dummy text content for the file
        const dummyData = "This is a dummy file for download";
        const blob = new Blob([dummyData], { type: "application/pdf" });
    
        // Create a download link
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "dummyFile.pdf"; // Name of the file
        link.click(); // Trigger the click to download the file
      };


      const handlePrint = () => {
        // Create the dummy content for printing
        const printContent = `
          <html>
            <head>
              <title>Print Dummy Data</title>
              <style>
                body { font-family: Arial, sans-serif; text-align: center; }
                h1 { color: #333; }
              </style>
            </head>
            <body>
              <h1>Dummy Data</h1>
              <p>This is some dummy data for printing.</p>
              <p>Print this content by clicking 'Print'.</p>
            </body>
          </html>
        `;
    
        // Open a new window
        const printWindow: Window | null = window.open('', '', 'width=600,height=400');
        
        // Write content to the new window
        if (printWindow) {
            printWindow.document.write(printContent);
            printWindow.document.close(); // Close the document stream
            printWindow.focus(); // Focus on the new window
            printWindow.print(); // Trigger the print dialog
        } else {
            console.error('Failed to open print window. Please ensure popups are not blocked.');
        }
 
    }

    return (
        <>
            <NextSeo
                title={metaDetail?.SeoTitle}
                description={metaDetail?.SeoDescription}
                canonical={``}
            />
            <div className="container test-detail-sec">
                <div className="test-detail-head">
                    <div className="">
                        <h1>B0104 - ( 1-3 )-SS-D GLUCAN LEVEL</h1>
                    </div>
                    <div className="flex">
                        <a href="https://wa.me/9717661304">
                            <SVGIcon.WhatsappIcon />
                        </a>
                        <a href="">
                            <SVGIcon.ShareIcon />
                        </a>
                        <a href="mailto:demo@1mg.in">
                            <SVGIcon.EmailIcon />
                        </a>
                        <a href="">
                            <SVGIcon.ChatIcon />
                        </a>
                        <a href="#" onClick={handlePrint}>
                            <SVGIcon.PdfIcon />
                        </a>
                        <a href="#" onClick={handleDownload}>
                            <SVGIcon.DownloadIcon />
                        </a>
                    </div>
                </div>
                <div className="test-detail-cont">
                    <div className="grid  grid-cols-1 md:grid-cols-12 md:gap-4 gap-y-3 ">
                        <div className=" md:col-span-3">
                            <div>
                                {/* <h3>Overview</h3> */}
                                <ul className="test-overview">
                                    {sections.map((section, index : number) => (
                                        <li
                                            key={index}
                                            className={activeSection === index ? 'active' : ''}
                                            onClick={() => handleSectionClick(index)}
                                        >
                                            {section}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className=" col-span-6 ">
                            <div className="">
                                <AccordionWrap onClick={()=>handleAccordion("0")} isOpen={accordionMap["0"]} title={"Test Information"}>
                                    <ul className="test-info">
                                        <li>
                                            <div>
                                                <h4>Test code</h4>
                                                <p> A0001</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4>Test name </h4>
                                                <p>ABNORMAL HAEMOGLOBIN STUDIESHB VARIANTSBLOOD</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4 className="flex items-center">
                                                    Department
                                                    <div className="ml-1">
                                                        <Image
                                                            src={IMAGE.InfomIcon}
                                                            alt="information-icon"
                                                        />
                                                    </div>
                                                </h4>
                                                <p> HEMATOLOGY</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4 className="flex items-center">
                                                    Method
                                                    <div className="ml-1">
                                                        <Image
                                                            src={IMAGE.InfomIcon}
                                                            alt="information-icon"
                                                        />
                                                    </div>
                                                </h4>
                                                <p> HPLC</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4 className="flex items-center">
                                                    Test parameters (Name)
                                                    <div className="ml-1">
                                                        <Image
                                                            src={IMAGE.InfomIcon}
                                                            alt="information-icon"
                                                        />
                                                    </div>
                                                </h4>
                                                <p>
                                                    Abnormal Haemoglobin Studies
                                                    (HBF,HBA0,HBA2,HBD,HBS,HBC,HBE,)
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4 className="flex items-center">
                                                    Test parameters (Count)
                                                    <div className="ml-1">
                                                        <Image
                                                            src={IMAGE.InfomIcon}
                                                            alt="information-icon"
                                                        />
                                                    </div>
                                                </h4>
                                                <p> 7</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4 className="flex items-center">
                                                    Report display name
                                                    <div className="ml-1">
                                                        <Image
                                                            src={IMAGE.InfomIcon}
                                                            alt="information-icon"
                                                        />
                                                    </div>
                                                </h4>
                                                <p> Abnormal Haemoglobin Studies, Hb Variants</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4 className="flex items-center">
                                                    Alternate Name
                                                    <div className="ml-1">
                                                        <Image
                                                            src={IMAGE.InfomIcon}
                                                            alt="information-icon"
                                                        />
                                                    </div>
                                                </h4>
                                                <p>Hemoglobin Variant Analysis with EDTA Blood</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4 className="flex items-center">
                                                    Published on
                                                    <div className="ml-1">
                                                        <Image
                                                            src={IMAGE.InfomIcon}
                                                            alt="information-icon"
                                                        />
                                                    </div>
                                                </h4>
                                                <p>15-07-2024 12:42:55</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4 className="flex items-center">
                                                    Walkin
                                                    <div className="ml-1">
                                                        <Image
                                                            src={IMAGE.InfomIcon}
                                                            alt="information-icon"
                                                        />
                                                    </div>
                                                </h4>
                                                <p> No</p>
                                            </div>
                                        </li>
                                    </ul>
                                </AccordionWrap>
                                <AccordionWrap onClick={()=>handleAccordion("1")} isOpen={accordionMap["1"]} title={"Sample Information"}>
                                    <ul className="test-info">
                                        <li>
                                            <div>
                                                <h4 className="flex items-center">
                                                    Sample container
                                                    <div className="ml-1">
                                                        <Image src={IMAGE.InfomIcon} alt="information-icon" />
                                                    </div>
                                                </h4>
                                                <p>EDTA Vacutainer</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4 className="flex items-center">
                                                    Sample type
                                                    <div className="ml-1">
                                                        <Image src={IMAGE.InfomIcon} alt="information-icon" />
                                                    </div>
                                                </h4>
                                                <p>EDTA Blood</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4 className="flex items-center">
                                                    Sample volume
                                                    <div className="ml-1">
                                                        <Image src={IMAGE.InfomIcon} alt="information-icon" />
                                                    </div>
                                                </h4>
                                                <p>1 ml</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4 className="flex items-center">
                                                    Shipping Temperature & Sample Stability
                                                </h4>
                                                {/* Replacing <p> with <div> to wrap the <ul> */}
                                                <div>
                                                    <ul className="flex items-center gap-4">
                                                        <li className="tempera-box">
                                                            <div>
                                                                <h4>S 2-8 C</h4>
                                                                <p>Ambient</p>
                                                            </div>
                                                        </li>
                                                        <li className="tempera-box">
                                                            <div>
                                                                <h4>A 25 C</h4>
                                                                <p>1 Day</p>
                                                            </div>
                                                        </li>
                                                        <li className="tempera-box">
                                                            <div>
                                                                <h4>R 28 C</h4>
                                                                <p>1 Day</p>
                                                            </div>
                                                        </li>
                                                        <li className="tempera-box">
                                                            <div>
                                                                <h4>F 20 C</h4>
                                                                <p> </p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4 className="flex items-center">
                                                    Rejected, if any
                                                    <div className="ml-1">
                                                        <Image src={IMAGE.InfomIcon} alt="information-icon" />
                                                    </div>
                                                </h4>
                                                <p>Qns,Hemolysed,clotted</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4 className="flex items-center">
                                                    Collection instruction
                                                    <div className="ml-1">
                                                        <Image src={IMAGE.InfomIcon} alt="information-icon" />
                                                    </div>
                                                </h4>
                                                <p>
                                                    3 ml EDTA whole blood. Age, DOB, History of Blood transfusion in last 3 months, Parental/ family history of any abnormal Hb, History of requiring multiple or recurrent blood transfusion if any, all details TRF is mandatory.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </AccordionWrap>
                                <AccordionWrap onClick={()=>handleAccordion("2")} isOpen={accordionMap["2"]} title={"Clinical Information"}>
                                    <ul className="test-info">
                                        <li>
                                            <div>
                                                <h4 className="flex items-center">
                                                    Clinical Utility
                                                    <div className="ml-1">
                                                        <Image
                                                            src={IMAGE.InfomIcon}
                                                            alt="information-icon"
                                                        />
                                                    </div>
                                                </h4>
                                                <p className="">
                                                    Diagnose and characterize abnormal hemoglobin
                                                    variants. This assay is useful in the diagnosis of
                                                    Beta Thalassemia. It quantitates the percent of fetal
                                                    hemoglobin & HbA2 & assists in the diagnosis of
                                                    disorders with elevated levels of HbF & HbA2..
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4 className="flex items-center">
                                                    Clinical instruction
                                                    <div className="ml-1">
                                                        <Image
                                                            src={IMAGE.InfomIcon}
                                                            alt="information-icon"
                                                        />
                                                    </div>
                                                </h4>
                                                <p>Clinical History if any</p>
                                            </div>
                                        </li>
                                    </ul>
                                </AccordionWrap>
                                <AccordionWrap onClick={()=>handleAccordion("3")} isOpen={accordionMap["3"]} title={"Reports"}>
                                    <ul className="test-info">
                                        <li>
                                            <div>
                                                <h4 className="flex justify-between items-center">
                                                    <div className="flex items-center">
                                                        Reports
                                                        <div className="ml-1">
                                                            <Image
                                                                src={IMAGE.InfomIcon}
                                                                alt="information-icon"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <span>Last updated on</span>
                                                        <p className="text-[#ABABAB] font-medium ml-1">
                                                            15-07-2024 12:42:55
                                                        </p>
                                                    </div>
                                                </h4>
                                                {/* Corrected nesting here */}
                                                <div className="flex gap-x-10 mt-2">
                                                    <div className="w-28">
                                                        <Image src={IMAGE.PDFImg} alt="pdf-img" />
                                                        <p>
                                                            A0001_Abnormal HaemoglobinStudies HbVariantsBlood
                                                        </p>
                                                    </div>
                                                    <div className="w-28">
                                                        <Image src={IMAGE.PDFImg} alt="pdf-img" />
                                                        <p>
                                                            A0001_Abnormal HaemoglobinStudies HbVariantsBlood
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </AccordionWrap>
                                <AccordionWrap onClick={()=>handleAccordion("4")} isOpen={accordionMap["4"]} title={"Test Schedule"}>
                                    <ul className="test-info">
                                        <li>
                                            <div>
                                                <h4 className="flex items-center">
                                                    Test schedule Days
                                                    <div className="ml-1">
                                                        <Image
                                                            src={IMAGE.InfomIcon}
                                                            alt="information-icon"
                                                        />
                                                    </div>
                                                </h4>
                                                <p>MO,TU,WE,TH,FR,SA</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4 className="flex items-center">
                                                    Test schedule
                                                    <div className="ml-1">
                                                        <Image
                                                            src={IMAGE.InfomIcon}
                                                            alt="information-icon"
                                                        />
                                                    </div>
                                                </h4>
                                                <p>Daily: 9am and Next day 5pm</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4 className="flex items-center">
                                                    Reported on
                                                    <div className="ml-1">
                                                        <Image
                                                            src={IMAGE.InfomIcon}
                                                            alt="information-icon"
                                                        />
                                                    </div>
                                                </h4>
                                                <p>Next day 5pm</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4 className="flex items-center">
                                                    Sample retention
                                                    <div className="ml-1">
                                                        <Image
                                                            src={IMAGE.InfomIcon}
                                                            alt="information-icon"
                                                        />
                                                    </div>
                                                </h4>
                                                <p>3 Days</p>
                                            </div>
                                        </li>
                                    </ul>
                                </AccordionWrap>
                                <AccordionWrap onClick={()=>handleAccordion("5")} isOpen={accordionMap["5"]} title={"Test Price & Other Details"}>
                                    <ul className="test-info">
                                        <li>
                                            <div>
                                                <h4 className="flex items-center">
                                                    Test fees
                                                    <div className="ml-1">
                                                        <Image
                                                            src={IMAGE.InfomIcon}
                                                            alt="information-icon"
                                                        />
                                                    </div>
                                                </h4>
                                                <p>₹ 1060</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4 className="flex items-center">
                                                    Category
                                                    <div className="ml-1">
                                                        <Image
                                                            src={IMAGE.InfomIcon}
                                                            alt="information-icon"
                                                        />
                                                    </div>
                                                </h4>
                                                <p>C</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4 className="flex items-center">
                                                    Section name
                                                    <div className="ml-1">
                                                        <Image
                                                            src={IMAGE.InfomIcon}
                                                            alt="information-icon"
                                                        />
                                                    </div>
                                                </h4>
                                                <p>General Haematology</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4 className="flex items-center">
                                                    Sub section name
                                                    <div className="ml-1">
                                                        <Image
                                                            src={IMAGE.InfomIcon}
                                                            alt="information-icon"
                                                        />
                                                    </div>
                                                </h4>
                                                <p> Thallassaemia Studies</p>
                                            </div>
                                        </li>
                                    </ul>
                                </AccordionWrap>
                            </div>
                        </div>
                        <div className=" col-span-3">
                            <div className="md:inline-grid gap-5 md:block hidden ">
                                <div>
                                    <Image src={IMAGE.AdvertiseImg1} alt="advertise" />
                                </div>
                                <div>
                                    <Image src={IMAGE.AdvertiseImg2} alt="advertise" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestDetail;
export const getStaticProps: GetStaticProps = async (context: any) => {
    const res: any = await MetaRepo.getMeta("test-details");
    const metaData = res?.Data;
    return { props: { metaDetail: metaData || [] }, revalidate: 10 };
};
