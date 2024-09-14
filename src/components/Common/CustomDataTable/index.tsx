import React, { useState } from "react";
import RecentlyButton from "../RecentlyButton/recentlybutton";
import SVGIcon from "@const/SvgIcon";
import { useRouter } from "next/router";

const TestListTable = () => {
  const route = useRouter();
  const [page,setPage]=useState(1)

  const testList = [
    {
      name: "A001",
      type: "GRP",
      method: "HLPC",
      quantity: 10,
      fastingReq: "Yes",
      consentForm: "No",
      nabl: "Yes",
      testScheduleDays: "Mon-Fri",
      reportedOn: "2 days",
      price: 500,
      category: "Blood",
      testStatus: "Active",
    },
    {
      name: "A002",
      type: "LFT",
      method: "ELISA",
      quantity: 15,
      fastingReq: "No",
      consentForm: "Yes",
      nabl: "No",
      testScheduleDays: "Tue-Thu",
      reportedOn: "3 days",
      price: 700,
      category: "Urine",
      testStatus: "Inactive",
    },
    {
      name: "A003",
      type: "CBC",
      method: "Automated",
      quantity: 20,
      fastingReq: "Yes",
      consentForm: "No",
      nabl: "Yes",
      testScheduleDays: "Mon-Sat",
      reportedOn: "1 day",
      price: 300,
      category: "Blood",
      testStatus: "Active",
    },
    {
      name: "A004",
      type: "KFT",
      method: "Colorimetric",
      quantity: 12,
      fastingReq: "No",
      consentForm: "Yes",
      nabl: "Yes",
      testScheduleDays: "Wed-Fri",
      reportedOn: "4 days",
      price: 600,
      category: "Serum",
      testStatus: "Inactive",
    },
    {
      name: "A005",
      type: "Lipid Profile",
      method: "Spectrophotometry",
      quantity: 5,
      fastingReq: "Yes",
      consentForm: "No",
      nabl: "Yes",
      testScheduleDays: "Mon-Fri",
      reportedOn: "2 days",
      price: 900,
      category: "Blood",
      testStatus: "Active",
    },
    {
      name: "A006",
      type: "Thyroid",
      method: "Chemiluminescence",
      quantity: 7,
      fastingReq: "No",
      consentForm: "Yes",
      nabl: "No",
      testScheduleDays: "Mon-Wed",
      reportedOn: "3 days",
      price: 450,
      category: "Blood",
      testStatus: "Active",
    },
    {
      name: "A007",
      type: "CRP",
      method: "Latex Agglutination",
      quantity: 8,
      fastingReq: "Yes",
      consentForm: "No",
      nabl: "Yes",
      testScheduleDays: "Tue-Fri",
      reportedOn: "2 days",
      price: 350,
      category: "Serum",
      testStatus: "Active",
    },
    {
      name: "A008",
      type: "Vitamin D",
      method: "Immunoassay",
      quantity: 6,
      fastingReq: "No",
      consentForm: "Yes",
      nabl: "Yes",
      testScheduleDays: "Mon-Thu",
      reportedOn: "5 days",
      price: 800,
      category: "Blood",
      testStatus: "Inactive",
    },
    {
      name: "A009",
      type: "Iron Profile",
      method: "Spectrophotometry",
      quantity: 10,
      fastingReq: "Yes",
      consentForm: "No",
      nabl: "No",
      testScheduleDays: "Wed-Fri",
      reportedOn: "3 days",
      price: 550,
      category: "Blood",
      testStatus: "Active",
    },
    {
      name: "A010",
      type: "HbA1c",
      method: "HPLC",
      quantity: 9,
      fastingReq: "No",
      consentForm: "Yes",
      nabl: "Yes",
      testScheduleDays: "Mon-Sat",
      reportedOn: "1 day",
      price: 400,
      category: "Blood",
      testStatus: "Inactive",
    },
    {
      name: "A011",
      type: "Allergy Test",
      method: "ELISA",
      quantity: 5,
      fastingReq: "No",
      consentForm: "No",
      nabl: "No",
      testScheduleDays: "Thu-Sat",
      reportedOn: "7 days",
      price: 1500,
      category: "Blood",
      testStatus: "Active",
    },
    {
      name: "A012",
      type: "Electrolyte Panel",
      method: "Ion-selective Electrode",
      quantity: 4,
      fastingReq: "Yes",
      consentForm: "Yes",
      nabl: "Yes",
      testScheduleDays: "Mon-Thu",
      reportedOn: "2 days",
      price: 600,
      category: "Serum",
      testStatus: "Active",
    },
    {
      name: "A013",
      type: "Liver Panel",
      method: "Photometry",
      quantity: 7,
      fastingReq: "Yes",
      consentForm: "No",
      nabl: "Yes",
      testScheduleDays: "Mon-Fri",
      reportedOn: "3 days",
      price: 750,
      category: "Blood",
      testStatus: "Active",
    },
    {
      name: "A014",
      type: "Renal Panel",
      method: "Colorimetric",
      quantity: 8,
      fastingReq: "No",
      consentForm: "Yes",
      nabl: "No",
      testScheduleDays: "Mon-Wed",
      reportedOn: "4 days",
      price: 500,
      category: "Serum",
      testStatus: "Inactive",
    },
    {
      name: "A015",
      type: "Prostate-Specific Antigen",
      method: "Immunoassay",
      quantity: 6,
      fastingReq: "Yes",
      consentForm: "Yes",
      nabl: "Yes",
      testScheduleDays: "Tue-Thu",
      reportedOn: "2 days",
      price: 1200,
      category: "Blood",
      testStatus: "Active",
    },
    {
      name: "A016",
      type: "Hemoglobin",
      method: "Cyanmethemoglobin",
      quantity: 10,
      fastingReq: "No",
      consentForm: "No",
      nabl: "No",
      testScheduleDays: "Wed-Fri",
      reportedOn: "1 day",
      price: 200,
      category: "Blood",
      testStatus: "Inactive",
    },
  ];
  
  

  return (
    <>
      <div className="">
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>
                  <div className="flex items-center" style={{ width: "50px" }}>
                    S.No
                    <SVGIcon.TableArrowIcon className="ml-1" />
                  </div>
                </th>
                <th>
                  <div className="flex items-center" style={{ width: "100px" }}>
                    Test Name
                    <SVGIcon.TableArrowIcon className="ml-1" />
                  </div>
                </th>
                <th>
                  <div className="flex items-center" style={{ width: "100px" }}>
                    Test Type
                    <SVGIcon.TableArrowIcon className="ml-1" />
                  </div>
                </th>
                <th>
                  <div className="flex items-center" style={{ width: "100px" }}>
                    Method
                    <SVGIcon.TableArrowIcon className="ml-1" />
                  </div>
                </th>
                <th>
                  <div className="flex items-center" style={{ width: "140px" }}>
                    Sample Quantity
                    <SVGIcon.TableArrowIcon className="ml-1" />
                  </div>
                </th>
                <th>
                  <div className="flex items-center" style={{ width: "110px" }}>
                    Fasting Req?
                    <SVGIcon.TableArrowIcon className="ml-1" />
                  </div>
                </th>
                <th>
                  <div className="flex items-center" style={{ width: "120px" }}>
                    Consent Form
                    <SVGIcon.TableArrowIcon className="ml-1" />
                  </div>
                </th>
                <th>
                  <div className="flex items-center" style={{ width: "60px" }}>
                    NABL
                    <SVGIcon.TableArrowIcon className="ml-1" />
                  </div>
                </th>
                <th>
                  <div className="flex items-center" style={{ width: "160px" }}>
                    Test Schedule Days
                    <SVGIcon.TableArrowIcon className="ml-1" />
                  </div>
                </th>
                <th>
                  <div className="flex items-center" style={{ width: "110px" }}>
                    Reported On
                    <SVGIcon.TableArrowIcon className="ml-1" />
                  </div>
                </th>
                <th>
                  <div className="flex items-center" style={{ width: "70px" }}>
                    Price
                    <SVGIcon.TableArrowIcon className="ml-1" />
                  </div>
                </th>
                <th>
                  <div className="flex items-center" style={{ width: "90px" }}>
                    Catagory
                    <SVGIcon.TableArrowIcon className="ml-1" />
                  </div>
                </th>
                <th>
                  <div className="flex items-center" style={{ width: "100px" }}>
                    Test Status
                    <SVGIcon.TableArrowIcon className="ml-1" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {testList.slice((page-1)*5,page*5).map((test, index) => (
                <tr key={index}>
                  <td>{(page-1)*5+ index + 1}</td>
                  <td style={{color:'blue'}} onClick={() => route.push("test-details")}>
                    <a>{test.name}</a>{" "}
                  </td>
                  <td>{test.type}</td>
                  <td>{test.method}</td>
                  <td>{test.quantity}</td>
                  <td>{test.fastingReq}</td>
                  <td>{test.consentForm}</td>
                  <td>{test.nabl}</td>
                  <td>{test.testScheduleDays}</td>
                  <td>{test.reportedOn}</td>
                  <td>{test.price}</td>
                  <td>{test.category}</td>
                  <td className="text-status-btn">
                    <RecentlyButton title="Active" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination mt-5">
          <a href="#" className="page-arrow">
            &laquo;
          </a>
          <a href="#" className={page===1?'active':''} onClick={()=>setPage(1)}>1</a>
          <a className={page===2?'active':''} href="#" onClick={()=>setPage(2)}>
            {" "}
            2{" "}
          </a>
          <a href="#" className={page===3?'active':''} onClick={()=>setPage(3)}>3</a>
          <a href="#" className={page===4?'active':''} onClick={()=>setPage(4)}>4</a>
          <a href="#">...</a>
          <a href="#" className="page-arrow">
            &raquo;
          </a>
        </div>
        <div className="absolute bottom-[-40px] left-0">
                <h5 className="text-[#ABABAB] md:text-[15px] text-[13px] ">Showing {(page-1)*5+1}-{page*5>testList.length?testList.length:page*5 } of {testList?.length}</h5>
              </div>
      </div>
    </>
  );
};

export default TestListTable;
