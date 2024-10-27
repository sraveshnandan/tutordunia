import { Search } from "lucide-react"
const SearchBar = () => {
    return (
        <div className=' w-full flex flex-row  items-center justify-between bg-white rounded-md shadow-md shadow-black/20  mt-4 mb-2'>
            <Search className="ml-2 text-primary" />
            <input className='p-2 outline-none flex-grow text-lg font-semibold' type="text" placeholder='What do you want to learn ?' />
            <button className='bg-primary w-[55%] hover:hue-rotate-60 duration-300  hover:transform-cpu sm:w-1/3 py-3  text-white font-semibold rounded-r-md'>Book Demo</button>
        </div>
    )
}

export default SearchBar