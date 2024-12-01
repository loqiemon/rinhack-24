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
import Select from "./Select2"


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

  const handleApply = (selectedOption) => {
    alert(`Вы выбрали: ${selectedOption}`);
  };

  return (
    <div className='w-[985px] mx-auto flex items-center border border-[#D5D5D5] rounded-[14px] '>
      <div className='flex items-center gap-4 justify-center px-[18px] py-[10px]'>
        <img src={Filter} alt="" />
      </div>
      <div className='w-[1px] h-full bg-[#D5D5D5]'></div>
      <div className='flex items-center gap-4 justify-center py-[9px] px-[12px] text-[#000000]'>
        <Select
          options={[

          ]}
          placeholder="25.11. 12:00 - 
01.12. 12:00 "
          onApply={handleApply}
        />
      </div>
      <div className='w-[1px] h-full bg-[#D5D5D5]'></div>
      <div className='flex items-center gap-4 justify-center py-[9px] px-[12px]'>
        <Select
          options={[
            "Перевод",
            "Перевод за границу",
            "Пополнение счета",
            "Снятие со счета",
            "Оплата",
            "Ошибка",
            "Заблокировано",
          ]}
          placeholder="Тип операции"
          onApply={handleApply}
        />
      </div>
      <div className='w-[1px] h-full bg-[#D5D5D5]'></div>
      <div className='flex items-center gap-4 justify-center py-[9px] px-[12px]'>
        <Select
          options={[
            "Выполнено",
            "Отклонено",
            "В ожидании",
            "Заблокировано",
            "Ошибка",
          ]}
          placeholder="Статус операции"
          onApply={handleApply}
        />
      </div>
      <div className='w-[1px] h-full bg-[#D5D5D5]'></div>
      <div className='flex items-center gap-4 justify-center py-[9px] px-[12px] w-[130px]'>
        <Select
          options={[
            "Кредитная",
            "Дебетовая",
          ]}
          placeholder="Карта"
          onApply={handleApply}
        />
      </div>
      <div className='w-[1px] h-full bg-[#D5D5D5]'></div>
      <div className='flex items-center gap-4 justify-center py-[9px] px-[12px] w-[130px]'>
        <Select
          options={[
            "Низкий",
            "Средний",
            "Высокий",
          ]}
          placeholder="Риск"
          onApply={handleApply}
        />
      </div>
      <div className='w-[1px] h-full bg-[#D5D5D5]'></div>
      <div className='flex items-center gap-4 justify-center py-[9px] px-[12px]'>
        <img src={CircleArrow} alt="" />
        <span className='text-[#E31A1A] font-medium text-[14px]'>Сбросить</span>
      </div>
    </div >
  )
}
