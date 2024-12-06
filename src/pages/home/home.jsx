import React from 'react'
import Banner from '../../components/banner/banner'
import Support from '../../components/support/support'
import Ubanner from '../../components/uBanner/uBanner'
import CollectionComponent from '../../components/collection/collectionComponent'
import {data} from '../../data/data'

const Home = () => {
  const winter = data.filter(item => item.category === 'product-title1')
  const autumn = data.filter(item => item.category === 'product-title2')
  const summer = data.filter(item => item.category === 'product-title3')

  return (
    <div className='mt-5'>
      <Banner />
      <Support />
      <Ubanner />
      <CollectionComponent winter={winter}/>
      <Ubanner/>
      <CollectionComponent autumn={autumn}/>
      <Ubanner/>
      <CollectionComponent summer={summer}/>
    </div>
  )
}

export default Home
