import React from "react";
import { logo } from "../../assets/icons/icons";
import { useTranslation } from "react-i18next";
import { FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom"; // NavLink ni import qilamiz

const Header = () => {
  const language = localStorage.getItem("i18nextLng");
  const { t, i18n } = useTranslation();
  const handleChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="h-[80px] py-[10px] flex justify-between items-center border border-black">
      <ul>
        <li>
          <img className="w-[180px] h-[55px]" src={logo} alt="logo" />
        </li>
      </ul>
      <ul className="flex justify-between items-center gap-4 text-[#00000098] text-[20px] font-light cursor-pointer">
        <li>
          <NavLink
            to="/" // Manzilni kiritish
            className={({ isActive }) =>
              isActive
                ? "py-[5px] px-[8px] hover:text-[#a17f4a] text-[#a17f4a] font-bold"
                : "py-[5px] px-[8px] hover:text-[#a17f4a]"
            }
          >
            {t("home")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/collection" // Manzilni kiritish
            className={({ isActive }) =>
              isActive
                ? "py-[5px] px-[8px] hover:text-[#a17f4a] text-[#a17f4a] font-bold"
                : "py-[5px] px-[8px] hover:text-[#a17f4a]"
            }
          >
            {t("collection")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about" // Manzilni kiritish
            className={({ isActive }) =>
              isActive
                ? "py-[5px] px-[8px] hover:text-[#a17f4a] text-[#a17f4a] font-bold"
                : "py-[5px] px-[8px] hover:text-[#a17f4a]"
            }
          >
            {t("about")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts" // Manzilni kiritish
            className={({ isActive }) =>
              isActive
                ? "py-[5px] px-[8px] hover:text-[#a17f4a] text-[#a17f4a] font-bold"
                : "py-[5px] px-[8px] hover:text-[#a17f4a]"
            }
          >
            {t("contacts")}
          </NavLink>
        </li>
        <li className="py-[5px] px-[8px] flex items-center justify-center relative">
          <FaHeart size={20} color={"#ff0000"} />
          <p className="absolute flex items-center justify-center -top-[5%] -right-[5%] text-[12px] bg-black text-white w-[18px] h-[17px] rounded-[50%]">
            0
          </p>
        </li>
        <li className="py-[5px] px-[8px] flex items-center justify-center font-semibold bg-[#a17f4a] rounded-[10px]">
          <select
            onChange={handleChange}
            value={language}
            className="bg-transparent outline-none rounded-[10px] py-[5px] px-[7px] text-white"
          >
            <option className="bg-[#a17f4a]" value="uz">
              UZ
            </option>
            <option className="bg-[#a17f4a]" value="ru">
              RU
            </option>
            <option className="bg-[#a17f4a]" value="en">
              ENG
            </option>
          </select>
        </li>
      </ul>
    </div>
  );
};

export default Header;
