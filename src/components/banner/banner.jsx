import React from "react";
import { banner } from "../../assets/icons/icons";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className="max-h-[607px] mt-[100px] flex justify-between relative rounded-[40px] bg-[#e9bb76]">
      <img src={banner} alt="banner" />
      <div className="absolute max-w-[524px] top-0 right-0 pt-[5%] pr-5 text-end">
        <h1 className="text-[25px] leading-[20px] text-[#7a5c33] font-bold">
          {t("banner-text1")}
        </h1>
        <p className="text-[55px] leading-[40px] text-[#a17f4a] mt-[30px] mb-[50px]">
          {t("banner-text2")}
        </p>
        <p className="text-[95px] leading-[40px] text-[#a17f4a]">
          {t("banner-text3")}
        </p>
      </div>
    </div>
  );
};

export default Banner;
