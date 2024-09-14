// import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import React, { useEffect, useState } from 'react'
import Specialisty from './specialisty';
import ModalCust from './alphabets';
import Category from './category';
import { number } from 'yup';
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
import SVGIcon from '@const/SvgIcon';
import Image from "next/image";
import IMAGE from "@const/Image";


const TabButtons = () => {
    const [isActive, setIsActive] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        setIsActive(0)
    }, []);


    const handleTabChange = (index: any) => {
        setIsActive(index);
        if (index === 1) {
            setIsModalOpen(true);
        }
        if (index === 2) {
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsActive(0)
    };


    // Popup Start Here

    const [isOpen, setIsOpen] = useState(true);
    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }


    return (
        <>
            <div className="container">
                <div className="flex commn-btn">
                    <div className="w-full">
                        <TabGroup onChange={handleTabChange} selectedIndex={isActive}>
                            <TabList className="tab-buttons flex justify-center md:justify-start gap-2 md:gap-4">
                                <Tab className="tab-btn data-[selected]:bg-black">
                                    Search by Specialisty
                                </Tab>
                                <Tab className="tab-btn data-[selected]:bg-black">
                                    Search by Alphabets
                                </Tab>
                                <Tab className="tab-btn data-[selected]:bg-black">
                                    Search by Catagory
                                </Tab>
                            </TabList>
                            <TabPanels className="mt-3">
                                <TabPanel className="">
                                    <Specialisty />
                                </TabPanel>
                                {/* <TabPanel className="" >
                                    <ModalCust isActive={isActive} />
                                </TabPanel>
                                <TabPanel className="" >
                                    <ModalCust isActive={isActive} />
                                </TabPanel> */}
                            </TabPanels>
                        </TabGroup>
                    </div>
                </div>
                <div className="">
                    <Dialog open={isOpen} as="div" className="relative z-[999]" onClose={close}>
                        <DialogBackdrop className="fixed inset-0 bg-black/30 " />
                        <div className="alpha-box mt-24 pt-24 fixed inset-0  w-screen overflow-y-auto">
                            <div className="flex items-center justify-center">
                                <DialogPanel className="alpha-popup relative location-popup">
                                    <DialogTitle className="alpha-heading">
                                        <div className="location-head">
                                            <h2 className="flex items-center">
                                                <SVGIcon.LocationIcon className="me-2" />
                                                Set Current Location
                                            </h2>
                                        </div>
                                        <div className="mt-5">
                                            <ul className="city-list">
                                                <li>
                                                    <a href="">
                                                        <div className="location-list inline-grid justify-center items-center">
                                                            <div className=" md:w-[70px] md:h-[70px] w-[50px] h-[50px] m-auto flex justify-center items-center">
                                                                <Image src={IMAGE.Delhi} alt="delhi" />
                                                            </div>
                                                            <p>Delhi / NCR</p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <div className="location-list inline-grid justify-center items-center">
                                                            <div className="md:w-[70px] md:h-[70px] w-[50px] h-[50px] m-auto flex justify-center items-center">
                                                                <Image src={IMAGE.Mumbai} alt="delhi" />
                                                            </div>
                                                            <p>Delhi / NCR</p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <div className="location-list inline-grid justify-center items-center">
                                                            <div className="md:w-[70px] md:h-[70px] w-[50px] h-[50px] m-auto flex justify-center items-center">
                                                                <Image src={IMAGE.Kolkata} alt="delhi" />
                                                            </div>
                                                            <p>Delhi / NCR</p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <div className="location-list inline-grid justify-center items-center">
                                                            <div className="md:w-[70px] md:h-[70px] w-[50px] h-[50px] m-auto flex justify-center items-center">
                                                                <Image src={IMAGE.Bangalore} alt="delhi" />
                                                            </div>
                                                            <p>Delhi / NCR</p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <div className="location-list">
                                                            <div className="md:w-[70px] md:h-[70px] w-[50px] h-[50px] m-auto flex justify-center items-center">
                                                                <Image src={IMAGE.Chennai} alt="delhi" />
                                                            </div>
                                                            <p>Delhi / NCR</p>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </DialogTitle>
                                    <div className="mt-4 absolute top-[-12px] right-1">
                                        <Button className="inline-flex items-center" onClick={close}>
                                            <Image src={IMAGE.CloseIcon} alt="closeicon" />
                                        </Button>
                                    </div>
                                </DialogPanel>
                            </div>
                        </div>
                    </Dialog>
                </div>
            </div>
            {isModalOpen && <ModalCust isActive={isActive} onClose={closeModal} />}
        </>
    )
}

export default TabButtons;