import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from './images/nr.png'
import mobile from './images/phone.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Head from './head'

const Body = () => {
    
    return (
       
            <div className="bg-hero-pattern  w-full bg-cover bg-no-repeat bg-bottom px-5 py-5">
                <Head />
                <div className='flex md:flex-row flex-col justify-between mt-10 px-5 md:px-10'>
                    <div className='pt-10 pb-5' >
                        <div>
                        <div className='text-5xl font-extrabold'> Invest and<span className='text-amber-700'>Relax</span>  </div>
                        <div className='text-2xl text-slate-600'>
                            we give you significant returns...
                        </div>
                        <div className="text-justify text-sm md:w-72">
                            Even with the inevitable ups and downs of the
                            market, our expert-built, globally-diversified
                            Automated Investing Account makes it easy to start
                            building long-term wealth by managing your risk,
                            maximizing returns, and minimizing taxes.
                        </div>

                        <div className='flex justify-center md:justify-start mt-4'>
                        <a href='#'>
                            <button className='bg-amber-700 text-white w-28 py-2 rounded-2xl shadow-lg shadow-amber-600'>Get Started</button>
                            </a>
                        </div>

                        </div>
                      
                    </div>
                    <div className='w-full flex md:justify-end justify-center'>
                        <img src={mobile} className='w-72 h-auto object-contain' />
                    </div>
                </div>
            </div>
       
    )

}
export default Body