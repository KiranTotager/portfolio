export default function ProjectMediaSlider({ media }){
    const [current, setCurrent] = useState(0);
  
    const next = () => setCurrent((current + 1) % media.length);
    const prev = () => setCurrent((current - 1 + media.length) % media.length);
  
    return (
      <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-xl shadow-lg bg-gray-900">
        <img
          src={media[current]}
          alt={`Slide ${current}`}
          className="w-full h-full object-cover transition-all duration-500"
        />
  
        <button onClick={prev} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white p-2 rounded-full">
          ◀
        </button>
        <button onClick={next} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white p-2 rounded-full">
          ▶
        </button>
  
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
          {media.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
      </div>
    );
  };
  