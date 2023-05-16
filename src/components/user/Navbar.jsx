import React from 'react'
import {HiLightBulb} from 'react-icons/hi'
import Container from '../../Container'
import { Link } from 'react-router-dom'
import { useTheme } from '../../hooks'
const Navbar = () => {
  const {toogleTheme} = useTheme()
  return (
    <div className="bg-secondary shadow-sm shadow-gray-500">
      <Container className="max-w-screen-xl mx-auto  text-white  p-2">
        <div className="flex justify-between items-center">
        <Link to='/'><img src="./logo.jpg" alt='MRP' className='h-10' /></Link>
        <ul className='flex items-center space-x-4'>
            <li>
                <button className='dark:bg-white bg-dark-subtle p-1 rounded' onClick={toogleTheme}>
                    <HiLightBulb className='text-secondary ' size={24} />
                </button>
            </li>
            <li>
                <input type="text" className='border-2 border-dark-subtle rounded bg-transparent outline-none text-xl text-white focus:border-white transition p-1' placeholder='search...' />
            </li>
            <li ><Link className='text-white text-lg font-semibold' to='/auth/signin'>Login</Link></li>
        </ul>
        
        </div>
    </Container>
        
    </div>
  )
}

export default Navbar
// import React from "react";

// export default function Navbar() {
//   return (
//     <div className="bg-red-200">
//       <div className=" bg-black max-w-screen-xl mx-auto p-2 text-white">
//         Hello
//         {/* <div className="flex justify-between items-center">
//           <img src="./logo.png" alt="" className="h-10" />

//           <ul>
//             <li>Login</li>
//           </ul>
//         </div> */}
//       </div>
//     </div>
//   );
// }
