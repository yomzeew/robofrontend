import { useEffect, useState } from "react"
import api from '../component/api/services'

const RisckSore=()=>{
    const[valuehandle,setvaluehandle]=useState('')
    const [Data,setdata]=useState('')
    
    const handlefetch=async()=>{
        console.log(valuehandle)
        const data={risk:valuehandle}
        try {
            const response = await api.post('/getrecord',data);
            const responseData=response.data
            console.log(responseData[0])
            setdata(responseData[0])
           
          } catch (error) {
            console.error(error);
          }
    }
    useEffect(()=>{
        handlefetch()
        
    },[valuehandle])

    return(
        <div className=" bg-white rounded-3xl shadow-lg h-auto pb-5 shadow-amber-700 px-10 w-full lg:w-3/4">
                        <div className='rounded-2xl w-full h-20 bg-amber-900 px-10 -mt-10'>
                            <div>
                            <div className='text-amber-500 text-xl'>Risk score:<span className="font-bold text-lg text-white">{Data.RiskScore}</span></div>
                            </div>
                            <div>
                            <input 
                            onChange={(e)=>setvaluehandle(e.target.value)}
                            min={0}
                            max={10}
                            step={1}
                            type='range' 
                            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg "/>

                            </div>
                     
                            
                         

                        </div>
                        <div className='mt-5  font-bold text-slate-700'>
                        {Data.NigerianStocks>0&&<div className='flex justify-between mt-3'>
                       <div className='w-1/2 lg:text-lg text-xs  truncate overflow-ellipsis'> Nigerian Stocks</div>
                       <div style={{ width:`calc((${Data.NigerianStocks}/100*800px))` }} className=' bg-amber-200 h-6'>
                        {Data.NigerianStocks}%
                       </div>
                        </div>}
                        {Data.ForiegnStocks>0&&<div className='flex justify-between mt-3'>
                        <div className='w-1/2 lg:text-lg text-xs  truncate overflow-ellipsis'>
                        Foriegn Stocks
                       
                        </div>
                        <div style={{ width:`calc((${Data.ForiegnStocks}/100*800px))` }} className=' bg-amber-300 h-6'>
                        {Data.ForiegnStocks}%
                        </div>
                        </div>}
                        {Data.TechStocks>0 &&<div className='flex justify-between mt-3'>
                        <div className='w-1/2 lg:text-lg text-xs  truncate overflow-ellipsis'>
                        Tech Stocks
                        
                        </div>
                        <div style={{ width:`calc((${Data.TechStocks}/100*800px))` }} className=' bg-amber-500 h-6'>
                        {Data.TechStocks}%
                        </div>
                        </div>}
                        {Data.EmergingStocks>0&&<div className='flex justify-between mt-3'>
                        <div className='w-1/2 lg:text-lg text-xs truncate overflow-ellipsis'>
                        Emerging Stocks
                        
                        </div>
                        <div style={{ width:`calc((${Data.EmergingStocks}/100*800px))` }} className=' bg-amber-600 h-6'>
                            {Data.EmergingStocks}%
                        </div>
                        </div>}
                        {Data.NigerianBonds>0&&<div className='flex justify-between mt-3'>
                        <div className='w-1/2 lg:text-lg text-xs  truncate overflow-ellipsis'>
                        Nigerian Bonds
                        </div>
                        <div style={{ width:`calc((${Data.NigerianBonds}/100*800px))` }} className=' bg-amber-700 h-6 text-white'>
                            {Data.NigerianBonds}%
                        </div>
                        </div>}
                        {Data.ForiegnBonds>0&&<div className='flex justify-between mt-3'>
                        <div className='w-1/2 lg:text-lg text-xs  truncate overflow-ellipsis'>
                        Foriegn Bonds
                        </div>
                        <div style={{ width:`calc((${Data.ForiegnBonds}/100*800px))` }} className=' bg-amber-800 h-6 text-white'>
                            {Data.ForiegnBonds}%
                        </div>
                        </div>}
                        {Data.Commodities>0 &&<div className='flex justify-between mt-3'>
                        <div className='w-1/2 lg:text-lg text-xs  truncate overflow-ellipsis'>
                        Commodities
                        </div>
                        <div style={{ width:`calc((${Data.Commodities}/100*800px))` }} className=' bg-amber-900 h-6 text-white'>
                            {Data.Commodities}%
                        </div>
                        </div>}
                        {Data.RealEstate>0&&<div className='flex justify-between mt-3'>
                        <div className='w-1/2 lg:text-lg text-xs  truncate overflow-ellipsis'>
                        Real Estate
                        </div>
                        <div style={{ width:`calc((${Data.RealEstate}/100*800px))` }} className=' bg-amber-900 h-6 text-white'>
                            {Data.RealEstate}%
                        </div>
                        </div>}
                        {Data.TBills>0 &&<div className='flex justify-between mt-3'>
                        <div className='w-1/2 lg:text-lg text-xs  truncate overflow-ellipsis'>
                        T-Bills
                        </div>
                        <div style={{ width:`calc((${Data.TBills}/100*800px))` }} className=' bg-amber-950 h-6 text-white'>
                            {Data.TBills}%
                        </div>
                        </div>}
                        {Data.Alternative>0 &&<div className='flex justify-between mt-3'>
                        <div className='w-1/2 lg:text-lg text-xs  truncate overflow-ellipsis'>
                        Alternative
                        </div>
                        <div style={{ width:`calc((${Data.Alternative}/100*800px))` }} className=' bg-amber-950 h-6 text-white'>
                            {Data.Alternative}
                        </div>
                        </div>}
                            
                        </div>
                        


                    </div>
    )
}
export default RisckSore