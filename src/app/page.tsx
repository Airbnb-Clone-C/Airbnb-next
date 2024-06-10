'use client'

import Footer from '@/components/Footer/Footer'
import { Provider } from 'react-redux'

import Header from '@/components/Header/Header'
import Category from '@/components/MainCategory/Category'
import PlaceList from '@/components/PlaceList/PlaceList'
import filterStore from '@/app/redux/filterStore'

//searchParam을 받아서 list 업데이트
export default function Home({ searchParams }) {
  const categoryId = searchParams.category

  return (
    <div className='flex w-full flex-col items-center transition-all'>
      <div className='sticky top-0 z-10 flex w-full flex-col bg-white'>
        <div className='item-center flex w-full justify-center'>
          <Header />
        </div>
        <div className='flex w-full items-center justify-center  overflow-auto sm:px-8 lg:px-10 xl:px-20'>
          <Category />
        </div>
      </div>
      <section className='h-[1200px] w-full overflow-auto sm:px-8 lg:px-10  xl:px-20'>
        <PlaceList categoryId={categoryId} />
      </section>
      <Footer />
    </div>
  )
}
