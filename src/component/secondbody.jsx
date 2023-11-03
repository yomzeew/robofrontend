import RisckSore from './riskscore'
const Second=()=>{
    return(
        <div className='h-auto py-10 bg-amber-100'>
                <div className='flex justify-evenly text-center font-bold text-amber-700  mt-10  flex-row flex-wrap'>
                    <div className='lg:w-1/4 w-1/2'>
                        <div>790K+</div>
                        <div>Trusted Clients</div>
                    </div>
                    <div className='lg:w-1/4 w-1/2'>
                        <div>$53B</div>
                        <div>In assets managed</div>
                    </div>
                    <div className='lg:w-1/4 w-1/2'>
                        <div>4.5</div>
                        <div>Google Play Store 2</div>
                    </div>
                    <div className='lg:w-1/4 w-1/2'>
                        <div>4.7</div>
                        <div>Apple App Store 2</div>
                    </div>

                </div>
                <div className='flex justify-center gap-20 lg:flex-row w-full items-center flex-col px-2 lg:px-10 mt-20'>
                    <RisckSore/>
                    <div className='px-5'>
                        <div className='text-6xl font-extrabold'>Better</div>
                        <div className='text-5xl font-extrabold text-slate-800'>investment,</div>
                        <div className='text-4xl font-extrabold text-slate-800'>masterfully</div>
                        <div className='text-3xl font-extrabold text-slate-800'>tailored.</div>
                        <div className='lg:w-72 text-justify'>
                            Just answer a few questions, and we’ll
                            build you a personalized portfolio
                            of low-cost index funds from up to 17
                            global asset classes. Our software handles
                            all the trading, rebalancing, and other
                            busywork to help grow your wealth for the
                            long term.
                        </div>
                        <div className='flex justify-center'>
                        <a href='#'><button className='bg-amber-700 text-white w-28 py-2 rounded-2xl shadow-lg shadow-amber-600'>Get Started</button></a>
                            </div>
                    </div>
                </div>

            </div>

    )
}
export default Second