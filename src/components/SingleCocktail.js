import { Link } from "react-router-dom"
import { useGlobalContext } from "../context"
const SingleCocktail = ({ id, drink, alcoholic, glass, img }) => {
  return (
    <li className="card">
      <img src={img} alt={glass} />
      <div className="cocktail-footer">
        <h1>{drink}</h1>
        <h3>{glass}</h3>
        <p>{alcoholic}</p>
        <Link to={`/cocktail/${id}`} className="btn">
          details
        </Link>
      </div>
    </li>
  )
}

export default SingleCocktail
