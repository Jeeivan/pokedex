import { Link } from "react-router-dom"
import classes from "./Header.module.scss"

const Header = () => {
  return (
    <div className={classes.header}>
      <Link to={'/pokemon'} data-testid="pokemon-link">
      <h3 className={classes.title}>Jeeivan's Pokédex</h3>
      </Link>
    </div>
  )
};

export default Header
