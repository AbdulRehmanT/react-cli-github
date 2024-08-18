import "./App.css";


function Navbar() {
  return(
    <header className="bg-gray-950 text-neutral-50">
      <nav className="flex justify-between px-10">
          <a href="#" className="flex text-base items-center mr-4 py-6 hover:underline"><img src="" alt="" />CLI</a>
        <div className="flex items-center justify-end">
          <a href="#" className="text-sm inline-block mr-6 py-6 hover:underline"><p>Manual</p></a>
          <a href="#" className="text-sm inline-block mr-6 py-6 hover:underline"><p>Release notes</p></a>
        </div>
      </nav>
    </header>
  )
}


export default Navbar;
