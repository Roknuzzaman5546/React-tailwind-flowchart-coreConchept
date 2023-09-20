import { useState } from "react";
import Li from "../Lilist/Li";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const Nav = () => {

    const routesData = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/blog', name: 'Blog' }
      ];
      const [open, setopen] = useState(false)
      
    return (
        <div className="text-black bg-blue-200 p-1">
            <div className=" text-3xl md:hidden" onClick={() => setopen(!open)}>
                {
                    open === true ?  <AiOutlineClose></AiOutlineClose> :
                    <AiOutlineMenu></AiOutlineMenu>
                }
            </div>
            <ol className={`md:flex md:justify-center duration-200 absolute bg-blue-200 px-6 md:static ${
                open? ' top-9' : ' -top-60'
            }`}>
            {
                routesData.map(route => <Li key={route.id} route={route}></Li>)
            }
            </ol>
        </div>
    );
};

export default Nav;