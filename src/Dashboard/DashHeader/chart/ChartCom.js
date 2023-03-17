import React, { useState } from 'react';
import {Chart, ArcElement} from 'chart.js'
import {Doughnut} from 'react-chartjs-2'
import './Chart.css'
import Form from '../expenseForm/Form';

Chart.register(ArcElement)

  const config={
    data:{
      datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4,
        borderRadius:30,
        spacing:10
      }]
    },
    options:{
      cutout:110
    }
  }

const ChartCom = ({total}) => {


    return (
      <div className="">
        <div className='chart-header'>
           <div className="chart relative py-10">
            <Doughnut {...config}>
               </Doughnut>
              <h2 className='mb-0 font-bold title'>Total
            <span className='block text-3xl text-emerald-400'>$100</span>
            </h2>
           </div>
           <div className="chart-info">
            <div className="info1">
              <div className="flex">
                <div className="w-2 h-2 rounded py-3 bg-primary "></div>
                 <p className='mx-2'>Expense</p>
              </div>             
             <span>{45}%</span>
            </div>
            <div className="info1 py-4">
            <div className="flex">
                <div className="w-2 h-2 rounded py-3 bg-sky-600 "></div>
                 <p className='mx-2'>Saving</p>
              </div> 
             <span>{25}%</span>
            </div>
            <div className="info1">
            <div className="flex">
                <div className="w-2 h-2 rounded py-3 bg-yellow-400"></div>
                 <p className='mx-2'>Invensment</p>
              </div> 
             <span>{30}%</span>
            </div>
            
           </div>
         
        </div>
         <Form />
        </div>
    );
};

export default ChartCom;