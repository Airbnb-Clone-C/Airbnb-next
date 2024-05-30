import Image from 'next/image'

import filterIcon from '/public/images/filterIcon.svg'

function FilterButton({ setIsFilterModal }) {
  return (
    <button
      className='flex flex-row place-items-center place-content-center 
    hover:bg-gray-100 hover:border-black w-20 h-12 border-gray-300 border rounded-xl transition-all'
      onClick={() => {
        setIsFilterModal(prev => !prev)
      }}
    >
      <div className='p-1'>
        <Image src={filterIcon} alt='filter' />
      </div>
      <div className='whitespace-nowrap p-1'>
        <div className='text-xs'>필터</div>
      </div>
    </button>
  )
}

export default FilterButton
