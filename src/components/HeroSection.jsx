import video1 from "../assets/st.mp4"
import video2 from "../assets/neko.mp4"

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-5">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Get to know 
            <span className="bg-gradient-to-r from-purple-500 to-red-800 text-transparent bg-clip-text">
                {" "}S.T Sơn Thạch and Neko Lê
            </span>        
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
            
        </p>
        {/* <div className="flex justify-center my-10">
            <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
                Save it
            </a>
        </div> */}
        <div className="flex mt-10 justify-center">
            <video autoPlay loop muted className="rounded-lg w-1/2 border border-black-700 shadow-purple-400 mx-2 my-4">
                <source src={video1} type="video/mp4"></source>
            </video>
            <video autoPlay loop muted className="rounded-lg w-1/2 border border-black-700 shadow-purple-400 mx-2 my-4">
                <source src={video2} type="video/mp4"></source>
            </video>
        </div>
    </div>
  )
}

export default HeroSection