import { createListCollection } from "@chakra-ui/react"
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "./ui/select"
import React from 'react'
import CircleArrow from "../assets/circleArrow.svg"
import Filter from "../assets/filter.svg"
import BasicSelect from "./Select"


export default function Filters() {
  const [filters, setFilters] = React.useState({
    "operType": ""
  })

  const frameworks = createListCollection({
    items: [
      { label: "React.js", value: "react" },
      { label: "Vue.js", value: "vue" },
      { label: "Angular", value: "angular" },
      { label: "Svelte", value: "svelte" },
    ],
  })

  return (
    <div className='max-w-[985px] mx-auto flex items-center border border-[#D5D5D5] rounded-[14px] '>
      <div className='flex items-center gap-4 justify-center px-[18px] py-[10px]'>
        <img src={Filter} alt="" />
      </div>
      <div className='w-[1px] h-full bg-[#D5D5D5]'></div>
      <div className='flex items-center gap-4 justify-center p-[18px] text-[#000000]'>
        <SelectRoot collection={frameworks} size="sm">
          <SelectLabel>Select framework</SelectLabel>
          <SelectTrigger>
            <SelectValueText placeholder="Select movie" />
          </SelectTrigger>
          <SelectContent>
            {frameworks.items.map((movie) => (
              <SelectItem item={movie} key={movie.value}>
                {movie.label}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>
      </div>
      <div className='w-[1px] h-full bg-[#D5D5D5]'></div>
      <div className='flex items-center gap-4 justify-center p-[18px]'>
        <BasicSelect options={[{ text: "Тип операции", value: "all" }]} text="Тип операции" state={filters.operType} setState={() => { }} />
      </div>
      <div className='w-[1px] h-full bg-[#D5D5D5]'></div>
      <div className='flex items-center gap-4 justify-center p-[18px]'>
        <BasicSelect options={[{ text: "Статус операции", value: "all" }]} text="Статус операции" state={filters.operType} setState={() => { }} />
      </div>
      <div className='w-[1px] h-full bg-[#D5D5D5]'></div>
      <div className='flex items-center gap-4 justify-center p-[18px]'>
        <BasicSelect options={[{ text: "Карта", value: "all" }]} text="Карта" state={filters.operType} setState={() => { }} />
      </div>
      <div className='w-[1px] h-full bg-[#D5D5D5]'></div>
      <div className='flex items-center gap-4 justify-center p-[18px]'>
        <BasicSelect options={[{ text: "Риск", value: "all" }]} text="Риск" state={filters.operType} setState={() => { }} />
      </div>
      <div className='w-[1px] h-full bg-[#D5D5D5]'></div>
      <div className='flex items-center gap-4 justify-center p-[18px]'>
        <img src={CircleArrow} alt="" />
        <span className='text-[#E31A1A] font-medium text-[14px]'>Сбросить</span>
      </div>
    </div >
  )
}
