'use client'

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const SimpleInfo = () => {
  const [roomData, setRoomData] = useState(null);
  const pathname = usePathname();
  const id = pathname.slice(7);

  useEffect(() => {
    fetch(`/apis/rooms/${id}`)
    .then(response => response.json())
    .then(data => {
      setRoomData(data)
    })
    .catch(error => console.error('Error fetching room data:', error));
  }, []);

  if (!roomData) {
    return (
      <></>
    );
  }
  
  const briefInfo = roomData.briefRoomInfo.map((item, index) => `${item} ${index !== roomData.briefRoomInfo.length - 1 ? '· ' : ''}`);

  return (
    <div className="w-full grid gap-2 pb-5">
      <h1 className="text-2xl font-bold">{roomData.locationName}</h1>
      <p className="text-gray-700">{briefInfo}</p>
      {!roomData.guestFavorite && (
        <div className="flex items-center gap-1">
          <Image src="/images/star.svg" alt='' width={12} height={12} />
          <span className="text-gray-700 font-bold">{roomData.rating}</span>
          <span className="text-gray-500 mx-2">·</span>
          <a href="#" className="text-gray-700 underline">후기 {roomData.reviewCount}개</a>
        </div>
      )}
    </div>
  )
}
export default SimpleInfo
