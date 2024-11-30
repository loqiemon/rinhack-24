import React from 'react'
import Blocked from "../assets/blocked.svg"
import All from "../assets/all.svg"
import Risk from "../assets/risk.svg"
import Anomaly from "../assets/anomaly.svg"
import Arrow from "../assets/arrow.svg"

export default function Card({
  label,
  count,
  icon,
  isGrow,
  percent
}) {
  const icons = {
    blocked: Blocked,
    all: All,
    risk: Risk,
    anomaly: Anomaly
  }

  const color = () => {
    if (isGrow) {
      return icon === "blocked" || icon === "anomaly" || icon === "risk" ? false : true
    }
    return false
  }
  // "#E31A1A" : "#00B574"

  return (
    <div className='w-[262px] p-[21px] bg-white rounded-[12px] flex flex-col gap-6'>
      <div className='flex justify-between gap-[10px] items-center'>
        <div className='flex flex-col gap-4'>
          <span className='text-[#606060]'>{label}</span>
          <span className='text-[#202224] leading-[36px] font-semibold text-[28px]'>{count}</span>
        </div>
        <img src={icons[icon]} alt={label} className='transform translate-y-[-6px]' />
      </div>
      <div className='flex gap-[4px] items-center'>
        <div className={`flex gap-[6px] items-center ${!color() ? "text-[#E31A1A]" : "text-[#00B574]"}`}>
          <img src={Arrow} alt="arrow" className={`${!color() ? 'filter-red' : 'filter-green'
            }`} />
          <span>{percent}%</span>
        </div>
        <span className='text-[#606060]'>Выше, чем вчера</span>
      </div>
    </div>
  )
}
