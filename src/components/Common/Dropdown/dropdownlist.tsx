import React, { useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import SVGIcon from '@const/SvgIcon';


const Dropdownlist = ({ icon, arrowIcon, title, items }: any) => {

    const [selectedItem, setSelectedItem] = useState(title);
    const [isOpen, setIsOpen] = useState(false); // Track if dropdown is open
    const handleChange = () => {
        setIsOpen(true); // Close the dropdown after selecting an item
    };
    const handleSelect = (item: any) => {
        setSelectedItem(item); // Set selected item
        setIsOpen(false); // Close the dropdown after selecting an item
    };
   
    return (
        <>
            <Menu>
                <div className="relative w-full">
                    <MenuButton className="relative locat-drop" onClick={handleChange}>
                        <div className="absolute start-2 top-2">
                            {!!icon && <span className="">{icon}</span>}
                        </div>
                        {selectedItem}
                        <div
                            className={`drop-arrow absolute end-2 bottom-4 cursor-pointer transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                                }`}
                        >
                            {arrowIcon || <SVGIcon.Drop_Down_Icon style={{height:"7px",}} />}
                        </div>
                    </MenuButton>

                    <MenuItems
                        transition
                        className="drop-box absolute transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                    >
                        {items?.map((item: any, index: any) => (
                            <MenuItem key={index}>
                                {({ active, close }) => (
                                    <button
                                        className={`flex w-full text-left items-center text-black gap-2 rounded-lg py-1.5 px-3 ${active ? 'bg-gray-100' : ''
                                            }`}
                                        onClick={() => handleSelect(item)} // Handle item selection and close menu
                                    >
                                        {item}
                                    </button>
                                )}
                            </MenuItem>
                        ))}
                    </MenuItems>
                </div>
            </Menu>
        </>
    )
}

export default Dropdownlist;