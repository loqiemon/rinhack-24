import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { io } from 'socket.io-client';
import Home from './pages/HomePage'
import Filters from "./components/Filters";
// export const socket = io('ws://95.31.212.16:9009/ws');

const data = [
  {
    id: 1157921,
    date: "2022-03-09 09:56:51",
    amount: 510.22,
    clientId: 969838140,
    type: "Перевод",
    cardType: "Дебетовая",
    status: "Отклонено",
    risk: 0.98,
  },
  {
    id: 1157921,
    date: "2022-03-09 09:56:51",
    amount: 510.22,
    clientId: 969838140,
    type: "Перевод",
    cardType: "Дебетовая",
    status: "Отклонено",
    risk: 0.98,
  },
  {
    id: 1157921,
    date: "2022-03-09 09:56:51",
    amount: 510.22,
    clientId: 969838140,
    type: "Перевод",
    cardType: "Кредитная",
    status: "Отклонено",
    risk: 0.98,
  },
  {
    id: 1157921,
    date: "2022-03-09 09:56:51",
    amount: 510.22,
    clientId: 969838140,
    type: "Перевод",
    cardType: "Дебетовая",
    status: "Отклонено",
    risk: 0.98,
  },
  {
    id: 1157921,
    date: "2022-03-09 09:56:51",
    amount: 510.22,
    clientId: 969838140,
    type: "Перевод",
    cardType: "Дебетовая",
    status: "Отклонено",
    risk: 0.98,
  },
  {
    id: 1157921,
    date: "2022-03-09 09:56:51",
    amount: 510.22,
    clientId: 969838140,
    type: "Перевод",
    cardType: "Кредитная",
    status: "Отклонено",
    risk: 0.98,
  },
  {
    id: 1157921,
    date: "2022-03-09 09:56:51",
    amount: 510.22,
    clientId: 969838140,
    type: "Перевод",
    cardType: "Дебетовая",
    status: "Отклонено",
    risk: 0.98,
  },
  {
    id: 1157921,
    date: "2022-03-09 09:56:51",
    amount: 510.22,
    clientId: 969838140,
    type: "Перевод",
    cardType: "Дебетовая",
    status: "Отклонено",
    risk: 0.98,
  },
  {
    id: 1157921,
    date: "2022-03-09 09:56:51",
    amount: 510.22,
    clientId: 969838140,
    type: "Перевод",
    cardType: "Кредитная",
    status: "Отклонено",
    risk: 0.98,
  },
];
const List = () => {
  return <div className='h-full flex flex-col gap-[25px] bg-white rounded-[12px] p-[20px] mt-[35px]'>
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
            <th className="px-4 py-[10px] text-left">Статус операции</th>
            <th className="px-4 py-[10px] text-left rounded-tr-lg rounded-br-lg">Риск</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="bg-white text-[#202224] font-medium text-[14px]">
              <td className="border-b border-[#F1F4F9] px-4 py-2">{row.id}</td>
              <td className="border-b border-[#F1F4F9] px-4 py-2">{row.date}</td>
              <td className="border-b border-[#F1F4F9] px-4 py-2">{row.amount}</td>
              <td className="border-b border-[#F1F4F9] px-4 py-2">{row.clientId}</td>
              <td className="border-b border-[#F1F4F9] px-4 py-2">{row.type}</td>
              <td className="border-b border-[#F1F4F9] px-4 py-2">{row.cardType}</td>
              <td className="border-b border-[#F1F4F9] px-4 py-2 text-red-500">{row.status}</td>
              <td className="border-b border-[#F1F4F9] px-4 py-2 text-red-500">{row.risk.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
};
const Saved = () => <div>Сохраненные</div>;

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = new WebSocket('ws://95.31.212.16:9009/ws');
    socket.onopen = () => {
      console.log('Соединение установлено');
    };

    // Обработчик получения сообщения от сервера
    socket.onmessage = (event) => {

      const parsedMessage = JSON.parse(JSON.parse(JSON.parse(event.data)));
      console.log('Получено сообщение:', parsedMessage)
      setMessages((prevMessages) => [parsedMessage, ...prevMessages]);
    };

    socket.onclose = (event) => {
      console.log(`Соединение закрыто (код: ${event.code}, причина: ${event.reason})`);
    };

    socket.onerror = (error) => {
      console.error('Ошибка WebSocket:', error);
    };

    return () => {
      socket.close(1000, 'Компонент размонтирован');
    };
  }, []);

  return (
    <Router>
      <div className='w-full max-w-[1140px] mx-auto py-[15px] font-plus h-full pb-[30px]'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home messages={messages} />} />
          <Route path="/menu" element={<List />} />
          <Route path="/server" element={<Saved />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
