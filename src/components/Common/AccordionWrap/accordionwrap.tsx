import IMAGE from "@const/Image";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Image from "next/image";
import { log } from "node:console";
import React, { useEffect, useState } from "react";

// const AccordionWrap = ({ title, children, isOpen }: any) => {
//   // const [isAccordionOpen, setIsAccordionOpen] = useState(isOpen);

//   //   useEffect(() => {
//   //     setIsAccordionOpen(isOpen);
//   //   }, [isOpen]);
//     console.log(isOpen,'received');
    

//   return (
//     <>
//       <div className="w-full mb-5">
//         <div className="">
//           <Disclosure as="div" className="accord-drop" defaultOpen={isOpen}>
//             <DisclosureButton
//               onClick={() => {}}
//               className="accor-head group flex w-full items-center justify-between"
//             >
//               <span className="">{title}</span>
//               <Image
//                 src={IMAGE.AccordIcon}
//                 className={`${isOpen ? "group-data-[open]:rotate-180" : ""}`}
//                 alt="accordion-icon"
//               />
//             </DisclosureButton>
//             {isOpen && (
//               <DisclosurePanel className="accor-cont">
//                 <ul className="accordion-content">{children}</ul>
//               </DisclosurePanel>
//             )}
//           </Disclosure>
//         </div>
//       </div>
//     </>
//   );
// };

const AccordionWrap = ({ title, children, isOpen, onClick }: any) => {
    return (
      <>
        <div className="w-full mb-5">
          <div className="">
            <div className="accord-drop">
              <div
                onClick={onClick} // Trigger click handler passed as a prop
                className="accor-head group flex w-full items-center justify-between"
              >
                <span>{title}</span>
                <Image
                  src={IMAGE.AccordIcon}
                  className={`${isOpen ? "rotate-180" : ""}`}
                  alt="accordion-icon"
                />
              </div>
              {isOpen && (
                <div className="accor-cont">
                  <ul className="accordion-content">{children}</ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  };
  
  

export default AccordionWrap;

{
  /* <div className="w-full mb-5">
<div className="">
    <Disclosure as="div" className="accord-drop" defaultOpen={isOpen}>
        <DisclosureButton onClick={onClick} className="accor-head group flex w-full items-center justify-between">
            <span className="">
                {title}
            </span>
            <Image
                src={IMAGE.AccordIcon}
                className={`${isOpen ? 'group-data-[open]:rotate-180' : ''}`} // Rotate icon when open
                alt="accordion-icon"
            />
        </DisclosureButton>
        <DisclosurePanel className="accor-cont">
            {isOpen && <ul className="test-info">{children}</ul>}
        </DisclosurePanel>
    </Disclosure>
</div>
</div> */
}
