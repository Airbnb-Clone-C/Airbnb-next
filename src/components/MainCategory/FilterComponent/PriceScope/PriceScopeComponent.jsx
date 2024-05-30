import FilterEachComponent from '@/components/MainCategory/FilterComponent/FilterEachComponent'
import PriceInputBox from '@/components/MainCategory/FilterComponent/PriceScope/PriceInputBox'

function PriceScopeComponent() {
  return (
    <>
      <FilterEachComponent title={'가격 범위'} description={'1박 요금(수수료 및 세금 포함)'}>
        <div className='flex flex-row justify-center items-center h-auto mb-6'>
          <PriceInputBox type={'최저'} />
          <div className='text-4xl font-thin text-gray-400 mx-6'>-</div>
          <PriceInputBox type={'최고'} />
        </div>
      </FilterEachComponent>
    </>
  )
}

export default PriceScopeComponent
