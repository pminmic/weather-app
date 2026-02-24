import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className='bg-gray-800/60 m-2 rounded-2xl border-4 border-gray-700'>
            <ul className='flex justify-start text-gray-500 w-full h-full '>
                <li className="
                   hover:bg-gray-900/10 hover:text-gray-900 text-gray-800 transition-transform 
                     w-25 h-12 hover:scale-105 transform-border rounded-2xl
                ">
                    <Link className="flex flex-row justify-center items-center w-full h-full font-bold" to="/">Inicio</Link>
                </li>
                <li className="flex-1"></li>
                <li className="
                    hover:bg-gray-900/10 hover:text-gray-900 text-gray-800 transition-transform 
                     w-25 h-12 hover:scale-105 transform-border rounded-2xl
                ">
                    <Link className="flex flex-row justify-center items-center w-full h-full font-bold" to="/about">Acerca de</Link>
                </li>
                <li className="
                   hover:bg-gray-900/10 hover:text-gray-900 text-gray-800 transition-transform 
                     w-25 h-12 hover:scale-105 transform-border rounded-2xl ml-2
                ">
                    <Link className="flex flex-row justify-center items-center w-full h-full font-bold" to="/contact">Contacto</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;