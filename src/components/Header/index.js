import "./styles.css"
import pokeLogo from "../../assets/img/poke-logo.png"
import { Link } from "react-router-dom";


const Header  = () => {

    return(
        <header>
            <nav>
                <section className="Nav__pokeball-logo">
                    <img src={pokeLogo} alt="Pokeball logo" />
                    <span>PokeFinder</span>
                </section>
                <section className="Nav__pokemon-search">
                    <div>
                        <Link to={"/BuildYourTeam"}>BuildYourTeam</Link>
                        <span>Region</span>
                        <span>Type</span>
                    </div>
                    <form>
                        <input type="text" placeholder="Search Pokemon"></input>
                        <button><ion-icon name="search"></ion-icon></button>
                    </form>
                </section>
            </nav>

        </header>

    );


} 

export default Header;