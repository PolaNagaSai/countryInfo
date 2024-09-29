import { FaLongArrowAltRight } from 'react-icons/fa';


const HomeMainSection = () => {
  return (
    <section className='main'>
        <div className='main-container container'>
            <div className='content'>
                <h1 className="heading">
                    Explore the World, One Country at a Time.
                </h1>
                <p className="paragraph">
                    Discover the history, culture, and beauty of every nation. Sort,
                    search, and filter through countries to find the details you need.
                </p>
                <button className="content-btn btn">
                    Start Exploring <FaLongArrowAltRight />
                </button>
            </div>
            <div className='image'>
                <img src='/images/world.png' alt='world'/>
            </div>
        </div>
    </section>
  )
}

export default HomeMainSection