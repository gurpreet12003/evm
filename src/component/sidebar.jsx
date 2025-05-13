import React from 'react'
import { UserRoundPlus } from 'lucide-react';
import {  LayoutDashboard } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { Settings } from 'lucide-react';
const Sidebar=()=> {
    const data=[
         
             {name:"Dasbord",icons:<LayoutDashboard/>,path:"/"},
             {name:"Add Emplyoee",icons:<UserRoundPlus/>,path:"/addEmp"},
             {name:"Emplyoee",icons:<UserRound/>,path:"/view"},
             {name:"Setting",icons:<Settings/>,path:""},
             
      ]
return (
    <>
    <div className='bg-blue-700 h-screen p-2 shadow-lg text-white'>
        <div className='border-b border-b-gray-400'>
            <h2 className='text-4xl'>EVM</h2>
        </div>
        <div>
            {data.map((data, index) => {
                return (
                    <div 
                        key={index} 
                       
                    >
                        <a href={data.path} className='flex gap-2  border-1 border-amber-50 mb-2.5 text-2xl mt-2.5 p-2 hover:bg-blue-400 hover:text-white transition-all duration-300 ease-in-out cursor-pointer shadow-md hover:shadow-xl'><span className='relative top-1'>{data.icons}</span>{data.name}</a>
                    </div>
                );
            })}
        </div>
    </div>
    </>
);
}

export default Sidebar
