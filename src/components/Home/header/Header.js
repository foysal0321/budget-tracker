import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Style.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Header = () => {

     //aos libary
     useEffect(()=>{
        Aos.init({duration: 800})
      },[])

    return (
        <div>
            <div className="header-info">
                <div className="infos lg:mx-12 sm:mx-1 md:mx-1" data-aos="fade-down">
                    <h2 className='py-4'>Create Your Budget <br /> tracker sheet!</h2>
                    <p>BudgetTracker is a complete online money management tool designed to keep track of all your transactions and bank accounts from your computer, mobile phone, or iPad. Receive reminders to your phone or email when your bills are due.</p>
                     <button className='btn btn-sm mt-6 btn-outline'>Get Start</button>
                    {/* <Link to='/dashbord'>
                        
                    </Link> */}
                   
                </div>
                 <img src="https://cdni.iconscout.com/illustration/premium/thumb/sales-growth-4472488-3838672.png" alt="" />
            </div> <hr />
            {/* anather-section */}
            <div className="section2 py-12">
            <div className="main2">
                <div className="item one">
                <img className='' src="https://cdn-icons-png.flaticon.com/512/43/43517.png" />
                    <h2>Schoole expenses</h2>
                    <p>Expenses Management provides schools the tool to manage expenses. It provides flexibility to add expense types and associated expenses as needed.</p>
                </div>
                <div className="item ">
                <img src="https://www.pngfind.com/pngs/m/5-53023_employee-avatar-png-download-image-transparent-background-employee.png" />
                    <h2>Employees</h2>
                    <p>Employment Expenses means all costs, expenses, debts, liabilities and obligations related to or incurred in respect of employment, including salaries, </p>
                </div>
                <div className="item">
                <img src="https://www.pngkit.com/png/detail/608-6082721_business-man-icon-png-clipart-computer-icons-businessperson.png" />
                    <h2>Business</h2>
                    <p>Business expenses are ordinary and necessary costs a business incurs in order for it to operate. Businesses need to track and categorize </p>
                </div>
            </div>
           </div>
           {/* section3 */}
            <h1 className='text-center py-4 font-semibold text-2xl'>Budget Pie Chart</h1> 
           <div className="section3 py-12">
                   
            <img src="http://atlas-content-cdn.pixelsquid.com/stock-images/multicolored-pie-chart-WyPRQ65-600.jpg" alt=""  />
            <div className="section3-info">
                 <h2 className='py-2'>Invensment</h2>
                    <p>Business expenses are ordinary and necessary costs a business incurs in order for it to operate. Businesses need to track and categorize </p>
                 <h2 className='pt-6 py-2'>Saving</h2>
                    <p>BudgetTracker is a complete online money management tool designed to keep track of all your transactions </p>
                 <h2 className='pt-4 py-2'>Expenses</h2>
                    <p>Accounts from your computer, mobile phone, or iPad. Receive reminders to your phone or email when your bills are due. </p>
            </div>
           </div>
           {/* section4 */}
           <div className="section4 py-10">
            <div className="section4-infos" >
            <h2>Invensment</h2>
                    <p>Business expenses are ordinary and necessary costs a business incurs in order for it to operate. Businesses need to track and categorize </p>
                    <button className='btn btn-xs btn-success mt-4'>Get Start</button>
            </div>
           </div>
           {/* section5 */}
           <div className="section5 py-12">
            <img src="https://binaries.templates.cdn.office.net/support/templates/en-us/lt03427588_quantized.png" alt="" />
            <div className="section5-infos">
            <h2 >Expense Management</h2>
                    <p className='py-4'>An expense is a cost that businesses incur in running their operations. Expenses include wages, salaries, maintenance, rent, and depreciation. Expenses are deducted from revenue to arrive at profits. </p>
                    <button className='btn btn-xs btn-success mt-4'>Get Start</button>
            </div>
           </div>
           {/* section6 */}
           <div className="section6 py-12">
            <div className="section6-info">
                <p>Expense tracking is part of creating a budget and is simply a way for teams to monitor how much they are spending. Budget tracking helps teams monitor how much budget has been spent.</p>
                
            </div>
           </div>
        </div>
    );
};

export default Header;