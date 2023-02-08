import SearchBar from "./SearchBar/SearchBar";
import styles from './Nav.modules.css';
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
    return(
        <nav className={styles.nav}>
            <Link to='home' className='text-decoration-none' style={{display: 'inline-block'}}>
                <h1 className='text-start text-dark mx-2 my-2'>Rick and Morty <span className='text-warning'>App!</span></h1>
            </Link>

        <SearchBar onSearch={onSearch} />

        <div className={styles.buttonsContainer}>
            <Link to='favourites'><button className='btn btn-warning'>Favourites</button></Link>
            <Link to='about' ><button className='btn btn-warning mx-1'>About</button></Link>
            <Link to='/' ><button className='btn btn-warning'>Logout</button></Link>
        </div>
            
        </nav>
    )
}

export default Nav;