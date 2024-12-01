import React, { useEffect } from 'react'
import Card from '../components/Card2';
import LineChart from "../components/charts/LineChart";
import Filters from "../components/Filters";


const transactions = {
  count: 10000,
  anomaly: 3689,
  risk: 0.25,
  blocked: 2040
}

export default function HomePage({ messages }) {

  return (
    <div className='grid grid-cols-1 grid-rows-[50px_185px_1fr-1fr] gap-[25px] mt-[25px] h-[calc(100%-120px)]'>
      <h1 className='text-[32px] font-bold leading-[40px] text-[#202224]'>Главная</h1>
      <div className='w-full flex gap-20px justify-between items-center'>
        <Card isGrow={true} label="Всего транзакций" count={transactions.count} icon="all" percent={9} />
        <Card isGrow={true} label="Аномальные" count={transactions.anomaly} icon="anomaly" percent={1.2} />
        <Card isGrow={true} label="Средний риск" count={transactions.risk} icon="risk" percent={4.3} />
        <Card isGrow={true} label="Заблокированные" count={transactions.blocked} icon="blocked" percent={1.5} />
      </div>
      <div className='h-full flex flex-col gap-[25px] bg-white rounded-[12px] p-[20px] '>
        <div>
          <h2 className='text-[24px] font-bold leading-[20px] text-[#202224]'>Детали транзакций</h2>
          <div className="w-72">

          </div>
        </div>
        <LineChart
          series={lineChartDataOverallRevenue}
          options={lineChartOptionsOverallRevenue}
        />
      </div>
      <div className='h-full flex flex-col gap-[25px] bg-white rounded-[12px] p-[20px] '>
        <h2 className='text-[24px] font-bold leading-[20px] text-[#202224]'>Аномальные транзакции</h2>
        <Filters />
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto font-plus">
            <thead className="bg-[#F1F4F9] text-[#202224] font-bold text-[14px] leading-[18px]">
              <tr className='py-[8px]'>
                <th className="px-4 py-[10px] text-left rounded-tl-lg rounded-bl-lg">Id транзакции</th>
                <th className="px-4 py-[10px] text-left">Дата и время</th>
                <th className="px-4 py-[10px] text-left">Сумма операции</th>
                <th className="px-4 py-[10px] text-left">Id клиента</th>
                <th className="px-4 py-[10px] text-left">Тип операции</th>
                <th className="px-4 py-[10px] text-left">Тип карты</th>
                {/* <th className="px-4 py-[10px] text-left">Статус операции</th> */}
                <th className="px-4 py-[10px] text-left rounded-tr-lg rounded-br-lg">Риск</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((row, index) => (
                <tr key={index} className="bg-white text-[#202224] font-medium text-[14px]">
                  <td className="border-b border-[#F1F4F9] px-4 py-2">{row.transaction_id}</td>
                  <td className="border-b border-[#F1F4F9] px-4 py-2">{row.datetime}</td>
                  <td className="border-b border-[#F1F4F9] px-4 py-2">{row.sum}</td>
                  <td className="border-b border-[#F1F4F9] px-4 py-2">{row.client_id}</td>
                  <td className="border-b border-[#F1F4F9] px-4 py-2">{row.oper_type}</td>
                  <td className="border-b border-[#F1F4F9] px-4 py-2">{row.card_type === "DEBIT" ? "Дебетовая" : "Кредитная"}</td>
                  {/* <td className="border-b border-[#F1F4F9] px-4 py-2 text-red-500">{row.status}</td> */}
                  <td className={`border-b border-[#F1F4F9] px-4 py-2 ${row.pred > 0.5 ? "text-red-500" : "text-green-500"}`}>{row.pred.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export const lineChartDataOverallRevenue = [
  {
    name: "Заблокированные",
    data: [1050, 1940, 1500, 1200, 1000, 1800, 1734, 2040]
  },
  {
    name: "Аномальные",
    data: [4330, 2100, 1780, 2000, 1500, 3200, 3644, 3689]
  },
  {
    name: "Всего",
    data: [21900, 15500, 17895, 16543, 18449, 19260, 18470, 12491]
  }
];

export const lineChartOptionsOverallRevenue = {
  chart: {
    toolbar: {
      show: false
    },
    dropShadow: {
      enabled: true,
      top: 13,
      left: 0,
      blur: 10,
      opacity: 0.1,
      color: "#4318FF"
    }
  },
  colors: ["#ff2200", "#ebc014", "#39B8FF"],
  markers: {
    size: 0,
    colors: "white",
    strokeColors: "#7551FF",
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: "circle",
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    showNullDataPoints: true
  },
  tooltip: {
    theme: "dark"
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "smooth",
    type: "line"
  },
  xaxis: {
    type: "category",
    categories: ["Апрель", 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь'],
    labels: {
      style: {
        colors: "#A3AED0",
        fontSize: "12px",
        fontWeight: "500"
      }
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    show: true
  },
  legend: {
    show: true
  },
  grid: {
    show: false,
    column: {
      color: ["#7551FF", "#39B8FF"],
      opacity: 0.5
    }
  },
  color: ["#7551FF", "#39B8FF"]
};