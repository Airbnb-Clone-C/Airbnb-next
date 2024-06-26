import DetailModal from '@/components/ReviewModal/DetailModal.jsx'
import ReviewModalContent from '@/components/ReviewModal/ReviewModalContent.jsx'
import GuestFavorite from '@/components/GuestFavorite/GuestFavorite.jsx'
import ReviewOverall from '@/components/ReviewMeta/ReviewOverall.jsx'
import ReviewModalCategory from '@/components/ReviewModal/ReviewModalCategory'
import ReviewModalHeader from '@/components/ReviewHeader/ReviewModalHeader'

const CleanlinessIcon = '/images/Cleanliness.svg'
const AccuracyIcon = '/images/Accuracy.svg'
const CheckInIcon = '/images/CheckIn.svg'
const CommunicationIcon = '/images/Communication.svg'
const LocationIcon = '/images/Location.svg'
const ValueIcon = '/images/Value.svg'
const XIcon = '/images/XIcon.svg'

import Image from 'next/image'
import averageRatings from '@/utils/averageRatings'

const ReviewModal = ({
  reviewMetaData,
  reviewData,
  isOpen,
  closeModal,
  averageRating,
  reviewOverall,
  guestFavorite,
}) => {
  const ReviewMeta = [
    { category: '청결도', icon: CleanlinessIcon, value: reviewMetaData.Cleanliness },
    { category: '정확도', icon: AccuracyIcon, value: reviewMetaData.Accuracy },
    { category: '체크인', icon: CheckInIcon, value: reviewMetaData.CheckIn },
    { category: '의사소통', icon: CommunicationIcon, value: reviewMetaData.Communication },
    { category: '위치', icon: LocationIcon, value: reviewMetaData.Location },
    { category: '가격 대비 만족도', icon: ValueIcon, value: reviewMetaData.Value },
  ]

  if (!isOpen) return null
  return (
    <DetailModal>
      <div className='px-auto flex h-full w-[72vw] flex-col justify-center overflow-hidden rounded-3xl bg-white text-sm'>
        <div className='flex justify-between px-5 py-8'>
          <button onClick={closeModal} className=' rounded-full hover:bg-gray-200'>
            <div className='h-8 w-8 p-2 text-black'>
              <Image
                src={XIcon}
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: 'auto' }}
                alt='XIcon'
              />
            </div>
          </button>
        </div>
        <div className='flex h-full flex-grow gap-8 overflow-y-auto px-16'>
          <div className=' grid grid-cols-1 gap-8 lg:grid-cols-2'>
            <div>
              <div className='sticky top-0 z-10 flex flex-col bg-white'>
                {guestFavorite ? (
                  <GuestFavorite data={averageRating} />
                ) : (
                  <ReviewModalHeader data={averageRating} />
                )}
                <ReviewOverall ratings={reviewOverall} />
                {ReviewMeta.map(({ category, value, icon }, index) => (
                  <ReviewModalContent key={index} category={category} value={value} icon={icon} />
                ))}
              </div>
            </div>
            <ReviewModalCategory reviewData={reviewData} />
          </div>
        </div>
      </div>
    </DetailModal>
  )
}

export default ReviewModal
