import { hamburger } from '../assets/icons';
import { headerLogo } from '../assets/images';
import { navLinks } from '../../constant/index.js';
import ToggleBar from '../Components/ToggleBar';
import { useState } from 'react';

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between  max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 justify-center flex flex-row items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-serif leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <a href="/" className="text-lg font-montserrat max-lg:hidden">
            Sign in / Explore now
          </a>
        </div>
        <div className="lg:hidden hover:cursor-pointer" onClick={handleClick}>
          <img src={hamburger} alt="hamburger" width={30} height={30} />
        </div>
        {toggle && <ToggleBar />}
      </nav>
    </div>
  );
};

export default Nav;
