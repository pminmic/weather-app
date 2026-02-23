import { Link } from 'react-router-dom';

const Navbar = () => {

    return(
        <nav className='bg-cyan-300 py-3'>
            <ul className='flex justify-center mx-20 text-cyan-700'>
                <li class="bg-cyan-500 border-2 mx-10 w-40 h-12 hover:scale-105 transform-border rounded-xl"><Link className="flex flex-row justify-center items-center w-full h-full font-bold" to="/">Inicio</Link></li>
                <li class="bg-cyan-500 border-2 mx-10 w-40 h-12 hover:scale-105 transform-border rounded-xl"><Link className="flex flex-row justify-center items-center w-full h-full font-bold" to="/about">Acerca</Link></li>
                <li class="bg-cyan-500 border-2 mx-10 w-40 h-12 hover:scale-105 transform-border rounded-xl"><Link className="flex flex-row justify-center items-center w-full h-full font-bold" to="/contact">Contacto</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;