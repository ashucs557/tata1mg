import IMAGE from "@const/Image";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import TabButtons from ".";
import RecentlyButton from "../RecentlyButton/recentlybutton";

const Category = (isActive: any) => {
  const [selectedIndex, setSelectedIndex] = useState(isActive.active);
  const [isOpen, setIsOpen] = useState(true);
  function close() {
    setIsOpen(false);
    setSelectedIndex(2);
  }
  useEffect(() => {
    if (isActive.active === 0) {
      setSelectedIndex(2);
    }
  }, [isActive.active]);



  return (

    <>
      <Dialog open={isOpen} as="div" className="relative z-10" onClose={close}>
        <div className="alpha-box fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex items-center justify-center">
            <DialogPanel className="alpha-popup relative">
              <DialogTitle className="alpha-heading">
                Search by :{" "}
                {selectedIndex === 0
                  ? "Alphabets"
                  : selectedIndex === 1
                  ? "Diseases"
                  : selectedIndex === 2
                  ? "Categories"
                  : "Alphabets"}
              </DialogTitle>
              <div className="alpha-btns mt-4">
                <div className="w-full">
                  <TabGroup
                    selectedIndex={selectedIndex}
                    onChange={setSelectedIndex}
                  >
                    <TabList className="tab-buttons flex gap-4">
                      <Tab className="tab-btn data-[selected]:bg-black">
                        By Alphabetes
                      </Tab>
                      <Tab className="tab-btn data-[selected]:bg-black">
                        By Diseases
                      </Tab>
                      <Tab className="tab-btn data-[selected]:bg-black tab-btn">
                        By Categories
                      </Tab>
                    </TabList>
                    <TabPanels className="mt-3">
                      <TabPanel className="alpha-letter">
                        <RecentlyButton title="A" className="" />
                        <RecentlyButton title="B" className="" />
                        <RecentlyButton title="C" className="" />
                        <RecentlyButton title="D" className="" />
                        <RecentlyButton title="E" className="" />
                        <RecentlyButton title="F" className="" />
                        <RecentlyButton title="G" className="" />
                        <RecentlyButton title="H" className="" />
                        <RecentlyButton title="I" className="" />
                        <RecentlyButton title="J" className="" />
                        <RecentlyButton title="K" className="" />
                        <RecentlyButton title="L" className="" />
                        <RecentlyButton title="M" className="" />
                        <RecentlyButton title="N" className="" />
                        <RecentlyButton title="O" className="" />
                        <RecentlyButton title="P" className="" />
                        <RecentlyButton title="Q" className="" />
                        <RecentlyButton title="R" className="" />
                        <RecentlyButton title="S" className="" />
                        <RecentlyButton title="T" className="" />
                        <RecentlyButton title="U" className="" />
                        <RecentlyButton title="V" className="" />
                        <RecentlyButton title="W" className="" />
                        <RecentlyButton title="X" className="" />
                        <RecentlyButton title="Y" className="" />
                        <RecentlyButton title="Z" className="" />
                      </TabPanel>
                      <TabPanel className="alpha-diseases">
                        <RecentlyButton title="Acne" className="" />
                        <RecentlyButton title="Alopecia Areata" className="" />
                        <RecentlyButton
                          title="Ankylosing Spondylitis"
                          className=""
                        />
                        <RecentlyButton title="Arthritis" className="" />
                        <RecentlyButton title="Back Pain" className="" />
                        <RecentlyButton
                          title="Bone & Osteoporosis"
                          className=""
                        />
                        <RecentlyButton title="Fibromyalgia" className="" />
                        <RecentlyButton title="Osteoarthritis" className="" />
                        <RecentlyButton
                          title="Psoriatic Arthritis"
                          className=""
                        />
                        <RecentlyButton title="Scleroderma" className="" />
                        <RecentlyButton title="Sports Injuries" className="" />
                        <RecentlyButton title="Vitiligo" className="" />
                        <RecentlyButton title="Spinal Stenosis" className="" />
                      </TabPanel>
                      <TabPanel className="alpha-category">
                        <RecentlyButton title="Blood" className="" />
                        <RecentlyButton
                          title="Cancer and neoplasms"
                          className=""
                        />
                        <RecentlyButton title="Cardiovascular" className="" />
                        <RecentlyButton
                          title="Congenital disorders"
                          className=""
                        />
                        <RecentlyButton title="Ear" className="" />
                        <RecentlyButton title="Eye" className="" />
                        <RecentlyButton title="Infection" className="" />
                        <RecentlyButton title="immune system" className="" />
                        <RecentlyButton
                          title="Injuries and accidents"
                          className=""
                        />
                        <RecentlyButton title="Mental health" className="" />
                        <RecentlyButton title="Neurological" className="" />
                        <RecentlyButton title="Skin" className="" />
                        <RecentlyButton title="Respiratory" className="" />
                      </TabPanel>
                    </TabPanels>
                  </TabGroup>
                </div>
              </div>
              <div className="mt-4 absolute top-[-12px] right-1">
                <Button className="inline-flex items-center" onClick={close}>
                  <Image src={IMAGE.CloseIcon} alt="closeicon" />
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Category;
