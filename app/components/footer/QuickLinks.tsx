function QuickLinks() {
  return (
    <div className="hidden sm:block">
        <strong className="text-xl">Quick Links</strong>
        <div className="flex flex-col items-start [&>a]:text-gray-500">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Listings</a>
            <a href="">Services</a>
            <a href="">Blogs</a>
            <a href="">Become a Agent</a>
        </div>
    </div>
  )
}

export default QuickLinks