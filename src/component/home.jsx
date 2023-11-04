import { faBars } from '@fortawesome/free-solid-svg-icons'
import mobile from './images/phone.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Head from './head'
import Body from './body'

import Second from './secondbody'
import Footer from './footer'
import Preloader from './preloade'

const Home = () => {
    const [displaymenu, setdisplaymenu] = useState(false)
    const [load,setload]=useState(true)
    const handlemenu = () => {
        setdisplaymenu(!displaymenu)

    }
    useEffect(() => {
        
        setTimeout(() => {
          setload(false); 
        }, 3000); 
      }, []);
    return (
       <div>
         {load?Preloader:
         <div  className="w-screen h-auto bg-amber-100 ">
            <Body />
            <Second />
            <Footer/>
            
        </div>}

       </div>
    )

}
export default Home