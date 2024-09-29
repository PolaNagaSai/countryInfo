import { useEffect, useTransition } from "react"
import {getCountryData} from "../api/postApi";
import { useState } from "react";
import Loader from "../Components/Loader/Loader";
import CountryCard from "../Components/CountryCard/CountryCard";
import SearchFilter from '../Components/SearchFilter/SearchFilter';

function CountryPage() {

  const[isPending,startTransition]=useTransition();
  const [countries,setCountries]=useState([]);

  const[search,setSearch]=useState();
  const[filter,setFilter]=useState('all');

  useEffect(()=>{
    startTransition(async ()=>{
      const res=await getCountryData();
      setCountries(res.data);
      console.log(res);
      
    })
  },[])

  if(isPending) return <Loader/>

  const searchCountry=(country)=>{
    if(search){
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  }

  const filterContinent=(country)=>{
    if(filter==='all') return country;
    return country.region===filter;
  }

  const filterCountries=countries.filter((country)=>searchCountry(country) && filterContinent(country))

  return (

    <section className=" container country-section">
    <SearchFilter search={search} setSearch={setSearch} filter={filter}  setFilter={setFilter}  />
      <ul className="card-container">
        {filterCountries.map((currCountry,index)=>{
          return <CountryCard  country={currCountry} key={index}/>
        })}
      </ul>
    </section>
  )
}

export default CountryPage