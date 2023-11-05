import logo from './images/nr.png'
const Footer=()=>{
    return(
        <div className='bg-herotwo-pattern h-auto w-screen bg-no-repeat relative   bg-cover'>
                <div className='pt-36 px-10'>
                    <div className='flex items-center gap-1'>
                        <img src={logo} className='w-12 h-12 object-contain' />
                        <div>
                            <div className="font-bold leading-3 text-xl">NIGERIAN</div>
                            <div className="font-semibold text-amber-700 text-sm">ROBOADVISOR</div>

                        </div>


                    </div>
                    <div className='flex mb-5 flex-wrap flex-row w-full'>
                        <div className='text-sm leading-5 lg:w-1/4 w-1/2'>
                            <span className='font-bold text-2xl'>Investing</span><br></br>
                            Automated Investing<br></br>
                            Stock Investing<br></br>
                            Explore all investments<br></br>
                            Retirement<br></br>
                            College<br></br>
                            Socially Responsible
                            Pricing<br></br>
                            Tax-loss Harvesting<br></br>
                            Historical Performance<br></br>
                            Whitepapers<br></br>
                        </div>
                        <div className='text-sm leading-5 lg:w-1/4 w-1/2'>
                            <span className='font-bold text-2xl'>Save</span><br></br>
                            Cash<br></br>
                            ATM Locator<br></br>
                            Bonds<br></br>
                            Automated Bond Portfolio<br></br>
                            Borrow<br></br>
                        </div>
                        <div className='text-sm leading-5 lg:w-1/4 w-1/2'>
                            <span className='font-bold text-2xl'>Learn</span><br></br>

                            Blog<br></br>
                            Help Center<br></br>
                            What level of risk?<br></br>
                            Home Planning Guide<br></br>
                            Financial Health Guide<br></br>
                            Equity and IPO Guide<br></br>
                            IRA Contributions Calculator<br></br>
                        </div>
                        <div>
                            <span className='font-bold text-2xl lg:w-1/4 w-1/2'>About</span><br></br>
                            About Us<br></br>
                            Newsroom<br></br>
                            Reviews<br></br>
                            Careers<br></br>
                            Legal<br></br>
                            Sitemap<br></br>
                        </div>
                    </div>
                    <div className='border-2 border-b w-full border-amber-900 mt-5'>

                    </div>

                </div>
                <div className=' w-full justify-center flex  pb-5'>© 2023 Nigerian RoboAdvisor. All rights reserved.</div>


            </div>
    )
}
export default Footer