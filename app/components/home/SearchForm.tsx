import Image from "next/image"

const SearchForm = () => {
  return (
    <form action="" className="border w-full sm:w-[30%] bg-white flex flex-col rounded-3xl my-4 py-2 mx-8">
        <div className="border-b-2 text-gray-400 flex justify-center font-bold">
          <div className="p-4 translate-y-0.5">
            <input
              type="radio"
              id="option1"
              name="options"
              className="peer hidden"
              defaultChecked
            />
            <label
              htmlFor="option1"
              className="cursor-pointer border-b-4 border-transparent peer-checked:text-blue-900 peer-checked:border-blue-900 p-4"
            >
              For Sale
            </label>
          </div>

          <div className="p-4 translate-y-0.5">
            <input
              type="radio"
              id="option2"
              name="options"
              className="peer hidden"
            />
            <label
              htmlFor="option2"
              className="cursor-pointer border-b-4 border-transparent peer-checked:text-blue-900 peer-checked:border-blue-900 p-4"
            >
              For Rent
            </label>
          </div>
        </div>

        <div className="flex flex-col h-full justify-center gap-6 py-8 px-6">
          <input
            type="text"
            placeholder="New York, Sen Fransisco, etc"
            className="bg-gray-100 rounded-2xl h-14 px-4"
          />
          <select className="bg-gray-100 rounded-2xl h-14 px-4">
            
            <option value="">Select property type</option>
          </select>
          <select className="bg-gray-100 rounded-2xl h-14 px-4">
            <option value="">Select rooms</option>
          </select>
          <button className="border p-5 my-4 rounded-full bg-blue-900 grid place-content-center">
            <Image
              src="/search.svg"
              alt="search-icon"
              width={100}
              height={100}
            />
          </button>
        </div>
      </form>
  )
}

export default SearchForm