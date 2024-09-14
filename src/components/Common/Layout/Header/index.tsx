import Link from "next/link";
import Image from "next/image";
import IMAGE from "@const/Image";
import SVGIcon from "@const/SvgIcon";
import Dropdown from "@components/Common/Dropdown/dropdownmenu";
import Dropdownlist from "@components/Common/Dropdown/dropdownlist";
import { useEffect, useState } from "react";
import Searchinput from "@components/Common/SearchBox/searchinput";



const Header = () => {

  // Start Header Responsive
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup on unmount or when the menu closes
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);
  // End Header Responsive

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown: any) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      // If the click is outside of any dropdown, close it
      if (!event.target.closest('.dropdown')) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);




  return (
    <>
      <header>
        <div className="main-head">
          <div className="">
            <div className="head-sec">
              <div className="top-head">
                <div className="relative flex items-center justify-between">
                  {/* Hamburger Icon for Mobile */}
                  <div className="lg:hidden absolute">
                    <button
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="inline-flex items-center justify-center "
                    >
                      <SVGIcon.HamburgerIcon className="" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Logo */}
                  <div className="logo">
                    <Link href="/">
                      <Image src={IMAGE.Logo} alt="logo" width={150} height={50} className="web-logo" />
                      <Image src={IMAGE.MobileLogo} alt="logo" width={100} height={50} className="mob-logo" />
                    </Link>
                  </div>

                  {/* Search and Dropdown (only visible on larger screens) */}
                  <div className="lg:flex lg:items-center">
                    <div className="hidden lg:block head-search-drop">
                      <Searchinput />
                    </div>
                    <div className="head-loca-drop ml-4">
                      <Dropdownlist title="Ahmedabad" 
                      items={['Ahmedabad', 'Akola', 'Amritsar', 'Gangarampur ', 'Ghaziabad', 'Goa', 'Hyderabad', 'Indore', 'Jabalpur', 'Kannur', 'Navsari', 'Pune', 'Raipur', 'Satara', 'Sirsa', 'Surat', 'Tamluk', 'Vadodara', 'Noida', 'Delhi',]}
                      icon={<SVGIcon.Map_Icon />} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Navigation Menu */}
            <div className="bg-white w-full">
              <div
                className={`nav-items w-full bg-white inset-y-0 left-0 top-[64px] fixed lg:static lg:w-auto lg:flex lg:bg-transparent lg:py-3 
          ${isMenuOpen ? 'block' : 'hidden'} lg:block`}
              >
                <div className="head-nav py-3 lg:py-0 bg-white lg:bg-transparent lg:shadow-none">
                  <div className="">
                    <nav className="space-y-1 lg:space-y-0 lg:inline-flex lg:space-x-8">
                      <div onClick={() => toggleDropdown('testCatalog')} className="dropdown">
                        <Dropdown
                          title="Test Catalog"
                          items={['Allergy', 'Cardiology', 'Oncology', 'Orthopedics', 'Dermatology', 'Gastroenterology']}
                          isOpen={openDropdown === 'testCatalog'}
                        />
                      </div>
                      <div onClick={() => toggleDropdown('specialitySegment')} className="dropdown">
                        <Dropdown
                          title="Speciality Segment"
                          items={['Chronic', 'Gastromet', 'Genomexpert', 'Infectious Disease (Microxpert)', 'Microxpert', 'Radiology Services', 'Osteoxpert', 'Oncomet', 'Wellness', 'Veterinary']}
                          isOpen={openDropdown === 'specialitySegment'}
                        />
                      </div>
                      <div onClick={() => toggleDropdown('testForms')} className="dropdown">
                        <a href="#">Test Requisition & Consent Forms</a>
                      </div>
                      <div onClick={() => toggleDropdown('faqs')} className="dropdown">
                        <a href="#">FAQ's</a>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

    </>
  );
};

export default Header;

