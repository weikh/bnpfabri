import React from 'react'
import { useTranslation } from 'react-i18next'
import {news1, news2, news3} from '../../assets/icons/icons'

const News = () => {
   const {t} = useTranslation()

  return (
    <div className='pt-[70px] border border-black'>
      <div className='flex flex-col items-center'>
        <h1 className='text-[35px] font-bold my-[30px]'>{t("news")}</h1>
        <p className='text-[#a5a1a1] mb-[70px]'>{t('product-title')}</p>
      </div>

      <div className='flex justify-between'>
         <div className='max-w-[400px]'>
            <img src={news1} className='w-full max-h-[225px] rounded-[20px]' alt="img" />
            <div className='flex gap-6 items-center mt-3'>
              <p className='text-[#000] font-semibold'>10/05/2024</p>
              <p className='text-xs font-medium text-[#616060]'>{t('news1-text1')}</p>
            </div>
            <p className='my-5 text-[20px] font-bold'>{t('news1-text2')}</p>
            <p className='text-[#5b5a5a]'>{t('news1-text3')}</p>
         </div>

         <div className='max-w-[400px]'>
            <img src={news2} className='w-full max-h-[225px] rounded-[20px]' alt="img" />
            <div className='flex gap-6 items-center mt-3'>
              <p className='text-[#000] font-semibold'>10/05/2024</p>
              <p className='text-xs font-medium text-[#616060]'>{t('news1-text1')}</p>
            </div>
            <p className='my-5 text-[20px] font-bold'>{t('news2-text2')}</p>
            <p className='text-[#5b5a5a]'>{t('news2-text3')}</p>
         </div>

         <div className='max-w-[400px]'>
            <img src={news3} className='w-full max-h-[225px] rounded-[20px]' alt="img" />
            <div className='flex gap-6 items-center mt-3'>
              <p className='text-[#000] font-semibold'>10/05/2024</p>
              <p className='text-xs font-medium text-[#616060]'>{t('news1-text1')}</p>
            </div>
            <p className='my-5 text-[20px] font-bold'>{t('news3-text2')}</p>
            <p className='text-[#5b5a5a]'>{t('news3-text3')}</p>
         </div>
      </div>
    </div>
  )
}

export default News
