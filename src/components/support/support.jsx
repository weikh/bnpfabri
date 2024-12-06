import React from "react";
import { support1, support2, support3, support4 } from "../../assets/icons/icons";
import { useTranslation } from "react-i18next";

const Support = () => {
  const { t } = useTranslation();

  const supportItems = [
    { img: support1, title: "shipping", text: "shipping-text" },
    { img: support2, title: "return", text: "return-text" },
    { img: support3, title: "support", text: "support-text" },
    { img: support4, title: "secure", text: "secure-text" },
  ];

  return (
    <div className="mt-[100px]">
      <ul className="flex justify-between items-center">
        {supportItems.map((item, index) => (
          <li key={index} className="max-w-[340px] max-h-[100px] flex justify-between items-center gap-5">
            <img src={item.img} alt={item.title} />
            <div>
              <h3 className="font-bold text-[#000] text-[18px] my-4">{t(item.title)}</h3>
              <p className="text-[#aaa] text-[14px] my-[14px]">{t(item.text)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Support;
