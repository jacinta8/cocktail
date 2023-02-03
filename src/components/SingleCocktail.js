const SingleCocktail = ({ drink, alcoholic, glass, img }) => {
  return (
    <li className="card">
      <img src={img} alt={glass} />
      <div className="cocktail-footer">
        <h1>{drink}</h1>
        <h3>{glass}</h3>
        <p>{alcoholic}</p>
        <button className="btn">details</button>
      </div>
    </li>
  )
}

export default SingleCocktail
