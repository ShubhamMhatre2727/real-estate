import { blogs } from "@/app/lib/placeholder-data"
import BlogCard from "./BlogCard"
import Testimonials from "./Testimonials"
import Banner from "./Banner"

export default function Trending() {
  return (
    <div className="py-12">
        <div className="bg-blue-900 text-white px-8 py-24">
        <p className="tracking-widest text-center sm:text-lg">WHAT&rsquo;S TRENDING</p>
        <h3 className="text-3xl sm:text-4xl font-semibold tracking-wide text-center pt-4 pb-14">
            Latest Blogs & Posts
        </h3>

        <div className="flex flex-wrap justify-center gap-8">
            {
                blogs.map((blog)=>{
                    return(
                        <BlogCard key={blog.title} blog={blog}/>
                    )
                })
            }
        </div>
        <button className="py-4 px-8 sm:hidden  bg-white text-blue-700 font-medium text-xl rounded-full my-8">View more blogs</button>
    </div>

    <Testimonials/>
    <Banner/>
    </div>
  )
}

