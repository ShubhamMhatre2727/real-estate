import Estates from "./Estates"

const Listings = () => {
  return (
    <div className="px-8 sm:pl-24 sm:pr-0 py-10">
        <div className="flex flex-wrap justify-between items-center sm:pr-24">
        <div>
        <h2 className="heads sm:text-lg">
            CHECKOUT OUR NEW
        </h2>
        <h1 className="text-2xl sm:text-4xl font-semibold">Latest Listed Properties</h1>
        <p className="text-gray-400 text-sm sm:text-base tracking-wide py-4">
        Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. 
        </p>
        </div>

        <div className="flex gap-4 py-4">
        <div className="">
            <input type="checkbox" id="checkbox1" name="checkboxes" className="peer hidden"/>
            <label htmlFor="checkbox1" className="cursor-pointer peer-checked:bg-blue-900 text-blue-900 peer-checked:text-white border-2 border-blue-900 px-6 py-2 rounded-full">All</label>
        </div>
        <div className="">
            <input type="checkbox" id="checkbox2" name="checkboxes" className="peer hidden" defaultChecked/>
            <label htmlFor="checkbox2" className="cursor-pointer peer-checked:bg-blue-900 text-blue-900 peer-checked:text-white border-2 border-blue-900 px-6 py-2 rounded-full">Sell</label>
        </div>
        <div className="">
            <input type="checkbox" id="checkbox3" name="checkboxes" className="peer hidden"/>
            <label htmlFor="checkbox3" className="cursor-pointer peer-checked:bg-blue-900 text-blue-900 peer-checked:text-white border-2 border-blue-900 px-6 py-2 rounded-full">Rent</label>
        </div>
        </div>
        </div>

        <div className="w-full overflow-auto">
        <Estates/>
        </div>
        <div className="text-center sm:hidden">
        <button className="cursor-pointer border-2 text-blue-900 border-blue-900 px-6 py-2 rounded-full active:bg-blue-900 active:text-white">View more properties</button>
        </div>
    </div>
  )
}

export default Listings