import React from 'react'
import Home from "../assets/home.svg"
import List from "../assets/list.svg"
import Server from "../assets/server.svg"
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const items = [
    { id: 0, label: "Главная", icon: Home, path: "/" },
    { id: 1, label: "Меню", icon: List, path: "/menu" },
    { id: 2, label: "Сервер", icon: Server, path: "/server" },
  ];

  return (
    <div className='w-full flex justify-center bg-white p-[10px] rounded-[10px] font-nunito '>
      <div className='w-[550px] bg-[#E9EDF7] px-[80px] py-[5px] rounded-[10px] flex gap-4 items-center '>
        {items.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `relative overflow-hidden flex items-center gap-[8px] justify-center w-12 h-12 transition-all duration-300 ease-in-out rounded-[15px] ${isActive
                ? "bg-green-500 text-white w-32"
                : "bg-transparent border border-[#A3AED0]"
              } hover:transform hover:scale-105`
            }
          >
            {({ isActive }) => (
              <>
                <img
                  src={item.icon}
                  alt={item.label}
                  className={`transition-colors ${isActive ? 'filter-white' : 'filter-gray'
                    }`}
                />
                {isActive && (
                  <span className="text-[16px] font-semibold text-white">
                    {item.label}
                  </span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  )
}
