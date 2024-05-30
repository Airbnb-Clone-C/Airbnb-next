import { useState } from 'react'

import FilterEachComponent from '@/components/MainCategory/FilterComponent/FilterEachComponent'
import BedroomEachComponent from '@/components/MainCategory/FilterComponent/Bedroom/BedroomEachComponent'

function BedroomComponent() {
  const [countBedroom, setCountBedroom] = useState('상관없음')
  const [countBed, setCountBed] = useState('상관없음')
  const [countBathroom, setCountBathroom] = useState('상관없음')

  return (
    <>
      <FilterEachComponent title={'침실과 침대'}>
        <div>
          <BedroomEachComponent type={'침실'} setCount={setCountBedroom} count={countBedroom} />
          <BedroomEachComponent type={'침대'} setCount={setCountBed} count={countBed} />
          <BedroomEachComponent type={'욕실'} setCount={setCountBathroom} count={countBathroom} />
        </div>
      </FilterEachComponent>
    </>
  )
}

export default BedroomComponent
