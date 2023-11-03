import { faBars } from '@fortawesome/free-solid-svg-icons'
import mobile from './images/phone.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Head from './head'
import Body from './body'

import Second from './secondbody'
import Footer from './footer'

const Home = () => {
    const [displaymenu, setdisplaymenu] = useState(false)
    const handlemenu = () => {
        setdisplaymenu(!displaymenu)

    }
    return (
        <div className="w-screen h-auto bg-amber-100 ">
            <Body />
            <Second />
            <Footer/>
            
        </div>
    )

}
export default Home