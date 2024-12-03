import {testimonials} from "../constants/index"
const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">Stages</span>
        <h2 className="text-3xl sm:text-5x lg:text-6xl mt-10 lg:mt-20 tracking-wide">Easily build 
        <span className="bg-gradient-to-r from-purple-500 to-red-800 text-transparent bg-clip-text">{" "}your code</span>
        </h2>
      </div>
      
    </div>
  )
}

export default FeatureSection

