import React from "react";
import { useTranslation } from "react-i18next";

const Ubanner = ({ img1, img2, img3 }) => {
  const { t } = useTranslation();

  const bgColor = img1
    ? "bg-[#464351]"
    : img2
    ? "bg-[#7f54b3]"
    : "bg-[#236f48]";

  return (
    <div
      className={`mt-[100px] p-[70px] flex justify-between rounded-[30px] items-center ${bgColor} text-white hover:shadow-[0_0_30px_#ff0000] transition duration-300 ease-in-out`}
    >
      <div>
        <h2 className="text-[90px] font-extrabold">100%</h2>
        <p className="text-[20px] font-bold">{t("ubanner-text1")}</p>
      </div>
      <img className="max-h-[300px]" src={img1 || img2 || img3} alt="img" />
      <div>
        <h3 className="max-w-[500px] mb-5 text-[30px] font-semibold">
          "{t("ubanner-text2")}"
        </h3>
        <p className="max-w-[400px] mb-5 font-semibold">{t("ubanner-text3")}</p>
        <button className="py-3 px-[35px] bg-white text-[#000] font-semibold rounded-[15px]">
          {t("ubanner-text4")}
        </button>
      </div>
    </div>
  );
};

export default Ubanner;
