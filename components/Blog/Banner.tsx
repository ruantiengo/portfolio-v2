import { filosyPhrases } from "../../data/phrases";

type Quotes = {

}
const Banner = () => {
    
  const randomIndex = Number((Math.random() * 172).toFixed())

    return (
      <div className='flex flex-col lg:flex-col lg:space-x-5 items-center justify-center font-semibold px-10 py-2 mb-10'>
       
  
        <p className='mt-5 md:mt-2 text-gray-400 max-w-lg text-center italic'>
          {`"`}{filosyPhrases[randomIndex].quote}{`"`}
        </p>
        <span className="text-center max-w-lg text-sm">
          {filosyPhrases[randomIndex].author}
        </span>
      </div>
    );
  };


  
  export default Banner;