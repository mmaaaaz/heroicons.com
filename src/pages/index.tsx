import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Main from '@/components/Main'
import { NextPage } from 'next'
import { Suspense } from 'react'

const HomePage: NextPage = () => {
  return (
    <>
      <Header />

      <Suspense fallback={null}>
        <Main />
      </Suspense>

      <Footer />
    </>
  )
}

export default HomePage
