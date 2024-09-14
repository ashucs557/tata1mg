import React from "react";
import Dropdownlist from "../Dropdown/dropdownlist";
import Searchinput from "../SearchBox/searchinput";
import RecentlyButton from "../RecentlyButton/recentlybutton";
import Link from "next/link";

const Specialisty = () => {
  return (
    <>
      <div className="speci-serach mt-3 md:mt-7">
        <div className=" flex md:grid md:grid-cols-12 md:gap-6 gap-2">
          <div className=" md:col-span-2  specialist-drop">
            <Dropdownlist
              title="Speciality"
              items={['Chronic', 'Gastromet', 'Genomexpert', 'Microxpert dfsrdfguk sdhfjg ssgdtfj ', 'Radiology Services', 'Osteoxpert', 'Oncomet', 'Wellness', 'Veterinary']}
            />
          </div>
          <div className=" w-full md:col-span-10 specrialist-search">
            <Searchinput />
          </div>
        </div>
        <div className="md:grid md:grid-cols-12 mt-5  md:gap-4 speci-search-drop">
          <div className=" md:col-span-2 specialist-drop md:block hidden"></div>
          <div className=" md:col-span-10 w-full specrialist-search md:flex inline-block items-center">
            <p>Popular Search :</p>
            <div className="popular-search md:mt-3 mt-1 md:mt-0 block">
              <Link href='/test-details'>
                <RecentlyButton title="c0044" />
              </Link>
              <Link href='/test-details'>
                <RecentlyButton title="g0027" />
              </Link>
              <Link href='/test-details'>
                <RecentlyButton title="h0018" />
              </Link>
              <Link href='/test-details'>
                <RecentlyButton title="cbc" />
              </Link>
              <Link href='/test-details'>
                <RecentlyButton title="t0065" />
              </Link>
              <Link href='/test-details'>
                <RecentlyButton title="l0071" />
              </Link>
              <Link href='/test-details'>
                <RecentlyButton title="r0041" />
              </Link>
              <Link href='/test-details'>
                <RecentlyButton title="c0169" />
              </Link>
              <Link href='/test-details'>
                <RecentlyButton title="v0015" />
              </Link>
              <Link href='/test-details'>
                <RecentlyButton title="ige" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specialisty;

// <div className=" col-end-1 specialist-drop">
// <Dropdownlist title="Speciality" />
// </div>
// <div className="col-start-1 specrialist-search">
// <Searchinput />
// </div>
// <div className=" md:col-span-1 specialist-drop md:block hidden">

// </div>
// <div className="col-start-1 w-full specrialist-search md:flex inline-block items-center">
// <p>Popular Search :</p>
// <div className="popular-search">
// <RecentlyButton title='c0044' />
// <RecentlyButton title='g0027' />
// <RecentlyButton title='h0018' />
// <RecentlyButton title='cbc' />
// <RecentlyButton title='t0065' />
// <RecentlyButton title='l0071' />
// <RecentlyButton title='r0041' />
// <RecentlyButton title='c0169' />
// <RecentlyButton title='v0015' />
// <RecentlyButton title='ige' />
// </div>
// </div>
