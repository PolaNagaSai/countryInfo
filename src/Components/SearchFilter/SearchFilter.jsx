import React from 'react'

function SearchFilter({search,setSearch,filter,setFilter}) {

    const handleInputChange=(e)=>{
        e.preventDefault();
        setSearch(e.target.value)
    }

    const handleSelectChange = (e) => {
        e.preventDefault();
        setFilter(event.target.value);
    };
    
  return (
    <section className='search-section container'>
        <input type='text' placeholder='search' value={search} onChange={handleInputChange}/>

        <div>
        <select
          className="select-section"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

    </section>
  )
}

export default SearchFilter