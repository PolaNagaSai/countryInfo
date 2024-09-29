import { NavLink } from "react-router-dom";

function CountryCard({country}) {
     const { flags, name, population, region, capital } = country;
  return (
    <li className="card">
        <div className="card-info">
            <img src={flags.svg} alt={flags.alt}/>

            <div className="countryInfo">
          <p className="card-title">
            {name.common}
          </p>
          <p>
            <span className="card-description">Population:</span>
            {population.toLocaleString()}
          </p>
          <p>
            <span className="card-description">Region:</span> {region}
          </p>
          <p>
            <span className="card-description">Capital:</span>
            {capital[0]}
          </p>

          <NavLink to={`/country/${name.common}`}>
            <button className="btn">Read More</button>
          </NavLink>
        </div>
        </div>

        
    </li>
  )
}

export default CountryCard