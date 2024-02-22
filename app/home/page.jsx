import React from 'react'
import Calendar from '@/app/components/calendar/CustomCalendar';

const Home = () => {
  return (
    <div className='border border-[#F2B277] p-[15px] rounded-[10px] bg-[#FFF4EB]'>
      <Calendar className='calendar-component-front bg-white rounded-[10px]'/>
      <Calendar/>
    </div>
  )
}

export default Home;