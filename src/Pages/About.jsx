import countryData from '../api/countryData.json';

function About() {
  return (
    <section className='about-container container'>
      <h2 className='title'>Here are the Interesting Facts <br/> we are proud of</h2>
        <div className='card-container'>
        {countryData.map((country)=>{
          const {id,countryName,capital,population,interestingFact}=country;
          return (
                <div className="card" key={id}>
                  <p className='card-title'>{countryName}</p>
                  <p className='info'>
                    <span className='card-description'>Capital:</span>{capital}
                  </p>
                  <p className='info'>
                    <span className='card-description'>Population:</span>{population}
                  </p>
                  <p className='info'>
                    <span className='card-description'>Intersting Fact:</span>{interestingFact}
                  </p>
                </div>
          )
        })}

        </div>  
    </section>
  )
}

export default About