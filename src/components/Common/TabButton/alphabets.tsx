import IMAGE from "@const/Image";
import {
  Button,
  Dialog,
  DialogBackdrop,
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

const ModalCust = (props: any) => {
  const { isActive, onClose } = props;
  const [selectedIndex, setSelectedIndex] = useState(isActive);
  const [isOpen, setIsOpen] = useState(true);
  // function close() {
  //   setIsOpen(false);
  //   setSelectedIndex(0);
  // }
  // useEffect(() => {
  //   if (isActive.active === 0) {
  //     setSelectedIndex(0);
  //   }
  // }, [isActive.active]);

  useEffect(() => {
    // console.log(isActive, "isactive");
    if (isActive === 1) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(isActive);
    }
  }, [isActive]);

  function close() {
    event?.stopPropagation();
    setIsOpen(false);
    onClose();

  }

  return (
    <>
      <Dialog open={isOpen} as="div" className="relative z-[999]" onClose={close}>
        <DialogBackdrop className="fixed inset-0 bg-black/30 " />
        <div className="alpha-box mt-24 md:pt-24 fixed inset-0  w-screen overflow-y-auto">
          <div className="flex items-center justify-center">
            <DialogPanel className="alpha-popup relative">
              <DialogTitle className="alpha-heading">
                Search by {" "}
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
                    <TabList className="tab-buttons flex gap-2 md:gap-4">
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
                        <RecentlyButton title="A" onClick={close}/>
                        <RecentlyButton title="B" onClick={close}/>
                        <RecentlyButton title="C" onClick={close}/>
                        <RecentlyButton title="D" onClick={close}/>
                        <RecentlyButton title="E" onClick={close}/>
                        <RecentlyButton title="F" onClick={close} />
                        <RecentlyButton title="G" onClick={close} />
                        <RecentlyButton title="H" onClick={close} />
                        <RecentlyButton title="I" onClick={close} />
                        <RecentlyButton title="J" onClick={close} />
                        <RecentlyButton title="K" onClick={close} />
                        <RecentlyButton title="L" onClick={close} />
                        <RecentlyButton title="M" onClick={close} />
                        <RecentlyButton title="N" onClick={close} />
                        <RecentlyButton title="O" onClick={close} />
                        <RecentlyButton title="P" onClick={close} />
                        <RecentlyButton title="Q" onClick={close} />
                        <RecentlyButton title="R" onClick={close} />
                        <RecentlyButton title="S" onClick={close} />
                        <RecentlyButton title="T" onClick={close} />
                        <RecentlyButton title="U" onClick={close} />
                        <RecentlyButton title="V" onClick={close} />
                        <RecentlyButton title="W" onClick={close} />
                        <RecentlyButton title="X" onClick={close} />
                        <RecentlyButton title="Y" onClick={close} />
                        <RecentlyButton title="Z" onClick={close} />
                      </TabPanel>
                      <TabPanel className="alpha-diseases">
                        <RecentlyButton title="Acne" onClick={close} />
                        <RecentlyButton title="Alopecia Areata" onClick={close} />
                        <RecentlyButton
                          title="Ankylosing Spondylitis"
                          onClick={close}
                        />
                        <RecentlyButton title="Arthritis" onClick={close} />
                        <RecentlyButton title="Back Pain" onClick={close} />
                        <RecentlyButton
                          title="Bone & Osteoporosis"
                          onClick={close}
                        />
                        <RecentlyButton title="Fibromyalgia" onClick={close} />
                        <RecentlyButton title="Osteoarthritis" onClick={close} />
                        <RecentlyButton
                          title="Psoriatic Arthritis"
                          onClick={close}
                        />
                        <RecentlyButton title="Scleroderma" onClick={close} />
                        <RecentlyButton title="Sports Injuries" onClick={close} />
                        <RecentlyButton title="Vitiligo" onClick={close} />
                        <RecentlyButton title="Spinal Stenosis" onClick={close} />
                      </TabPanel>
                      <TabPanel className="alpha-category">
                        <RecentlyButton title="Blood" onClick={close} />
                        <RecentlyButton
                          title="Cancer and neoplasms"
                          onClick={close}
                        />
                        <RecentlyButton title="Cardiovascular" onClick={close} />
                        <RecentlyButton
                          title="Congenital disorders"
                          onClick={close}
                        />
                        <RecentlyButton title="Ear" onClick={close} />
                        <RecentlyButton title="Eye" onClick={close} />
                        <RecentlyButton title="Infection" onClick={close} />
                        <RecentlyButton title="immune system" onClick={close} />
                        <RecentlyButton
                          title="Injuries and accidents"
                          onClick={close}
                        />
                        <RecentlyButton title="Mental health" onClick={close} />
                        <RecentlyButton title="Neurological" onClick={close} />
                        <RecentlyButton title="Skin" onClick={close} />
                        <RecentlyButton title="Respiratory" onClick={close} />
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

export default ModalCust;
