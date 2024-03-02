import React from 'react'
import './Dashboard.css'
import Card from './Card'
import Transactions from './Transactions'
import Loans from './Loans'
import { MdPieChart } from 'react-icons/md'
import { PieChart } from './Piechar'
import { PieChart1 } from './Piechart1'
import { Calendar } from './Calender'






const dashboard = () => {
  return (
    <>
    <div className='lsm'>
        <div className='lms1'>
        <Card/>
        
        </div>
        
        </div>

    <div className='lms2'>
    <div className='lms3'>
    <Transactions/>
    </div>
    </div>
      
    <div className='lms4'>
    <div className='lms3'>
    <Loans/>
    </div>
    </div>

    <div className='lms4'>
    <div className='lms3'>
    <Loans/>
    </div>
    </div>

    <div className='lms5'>
    <div className='lms6'>
    <PieChart/>
    <PieChart1/>
    </div>
    </div>

    <div className='lms7'>
    <div className='lms8'>
    <Calendar/>
    </div>
    </div>


   


   </>
  )
}

export default dashboard