import React from "react";
import { useTranslation } from "react-i18next";

const CollectionComponent = ({ winter, autumn, summer }) => {
  const { t } = useTranslation();
  return (
    <div className="mt-[100px] border border-black flex flex-col">
      <div className="text-center">
        <h1 className="text-[35px] font-bold my-[30px]">
          {t((winter || autumn || summer)?.[0]?.category)}
        </h1>
        <p className="font-medium">{t("product-title")}</p>
      </div>

      <div className="flex flex-wrap justify-between mt-[80px] gap-7">
        {(winter || autumn || summer)?.map((item, index) => (
          <div key={index} className="max-w-[266px] hover:text-[#ff0000]">
            <img
              src={item?.img}
              alt={item?.textKey}
              className="w-full rounded-2xl hover:scale-[1.1] transition duration-500 ease-in-out"
            />
            <p className="my-4 font-semibold">{t(item?.textKey)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionComponent;
