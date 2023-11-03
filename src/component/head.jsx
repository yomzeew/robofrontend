import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from './images/nr.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const Head=()=>{
    const[displaymenu, setdisplaymenu]=useState(false)
    const handlemenu=()=>{
        setdisplaymenu(!displaymenu)

    }
    return(
           
                <div>
                <div className="lg:block hidden">
                    <div className="flex justify-between">
                        <div className='flex items-center gap-1'>
                           <img src={logo} className='w-16 h-16 object-contain' />
                           <div>
                           <div className="font-bold leading-3 text-2xl">NIGERIAN</div>
                           <div className="font-semibold text-amber-700 ">ROBOADVISOR</div>
                            
                           </div>
                          

                        </div>
                        <div className='flex justify-center gap-12 items-center'>
                            <div className='flex justify-evenly gap-5 font-bold'>
                            <div><a href="#">Cash</a></div>
                           <div><a href='#'>Bonds </a></div>
                           <div><a href='#'>Automated Investing</a></div>
                           <div> <a href='#'>Stocks</a></div>
                           <div><a href='#'>Learn</a></div>
                            </div>
                     
                           <div className='flex gap-5'>

                           <div >
                           <a href='#'><button className='bg-white text-amber-500 w-28 py-2 rounded-2xl shadow-lg shadow-amber-600'>Login</button></a>
                            </div>
                            <div>
                            <a href='#'><button className='bg-amber-700 text-white w-28 py-2 rounded-2xl shadow-lg shadow-amber-600'>Get Started</button></a>

                            </div>
                          


                           </div>
                           
                        </div>

                    </div>

                </div>
                <div className='lg:hidden md:block'>
                    <div className='flex justify-between'>
                         <div className='flex items-center gap-1'>
                           <img src={logo} className='w-12 h-12 object-contain' />
                           <div>
                           <div className="font-bold leading-3 text-xl">NIGERIAN</div>
                           <div className="font-semibold text-amber-700 text-sm">ROBOADVISOR</div>
                            
                           </div>
                          

                        </div>
                        <div onClick={handlemenu}>
                            <FontAwesomeIcon size="30" icon={faBars}/>
                        </div>
                        

                    </div>
                   {displaymenu &&<div className='absolute w-full right-0  bg-amber-500 rounded text-center 2xl py-5 px-3 mt-3'>
                           <div className='mt-3'><a href="#">Cash</a></div>
                           <div className='mt-3'><a href='#'>Bonds </a></div>
                           <div className='mt-3'><a href='#'>Automated Investing</a></div>
                           <div className='mt-3'> <a href='#'>Stocks</a></div>
                           <div className='mt-3'><a href='#'>Learn</a></div>
                           <div className='flex justify-center gap-5 mt-3'>

                           <div >
                           <a href='#'><button className='bg-white text-amber-500 w-28 py-2 rounded-2xl shadow-lg shadow-amber-600'>Login</button></a>
                            </div>
                            <div>
                            <a href='#'><button className='bg-amber-700 text-white w-28 py-2 rounded-2xl shadow-lg shadow-amber-600'>Get Started</button></a>

                            </div>
                          


                           </div>


                        </div>}

                </div>

                </div>
               



  
    )

}
export default Head