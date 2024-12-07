import React from 'react'
import Banner from '../../components/banner/banner'
import Support from '../../components/support/support'
import Ubanner from '../../components/uBanner/uBanner'
import CollectionComponent from '../../components/collection/collectionComponent'
import News from '../../components/news/news'
import {data} from '../../data/data'
import { Ubanner1, Ubanner2, Ubanner3 } from '../../assets/icons/icons'

const Home = () => {
  const winter = data.filter(item => item.category === 'product-title1')
  const autumn = data.filter(item => item.category === 'product-title2')
  const summer = data.filter(item => item.category === 'product-title3')

  return (
    <div className='mt-5'>
      <Banner />
      <Support />
      <Ubanner img1={Ubanner1} />
      <CollectionComponent winter={winter}/>
      <Ubanner img2={Ubanner2} />
      <CollectionComponent autumn={autumn}/>
      <Ubanner img3={Ubanner3} />
      <CollectionComponent summer={summer}/>
      <News />
    </div>
  )
}

export default Home
