import React from 'react'
import Layout from '../layout/layout'
import { Routes, Route } from 'react-router-dom'

const Router = () => {
  return (
    <>
      <Layout>
         <Routes>
            <Route path="/"/>
         </Routes>
      </Layout>
    </>
  )
}

export default Router
