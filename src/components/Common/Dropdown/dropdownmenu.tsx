import SVGIcon from '@const/SvgIcon';
import { useRouter } from 'next/router';

const Dropdown = ({ title, items, isOpen, toggleDropdown }:any) => {
  const router=useRouter()
  const handleClick=()=>{

    router.push('/test-list')

  }

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="nav-list w-full"
      >
        {title}
        <SVGIcon.Drop_Down_Icon
          className={`ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="nav-item-list origin-top-right z-10 absolute mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {items.map((item:any, index:any) => (
              <a
                key={index}
                href="#"
                className="block px-2 py-2 "
                role="menuitem"
                onClick={handleClick}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

