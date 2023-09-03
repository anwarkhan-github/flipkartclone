import React from 'react'

function Navbar() {
    const searchbar = {
        width: '500px',
        height: '32px'
    }

    return (
        <header>
            <div className="navbar bg-blue-600 h-14 flex justify-center items-center">
                <div className="innerbox h-14 w-full mr-28 ml-11 flex place-content-evenly items-center">

                <div className="2box flex  rounded-sm">
                    <div className="logo-box ml-28 mr-3 ">
                        <div className="nav-logo h-5 w-20 pl-14 bg-cover" style={{ backgroundImage: "url('/flipkartimgs/logo1.png')" }}></div>
                        <div className="line flex">
                            <p className='text-white text-xs'>Explore</p>
                            <p className='text-yellow-400 font-medium text-xs'>Plus</p><i class="fa-solid fa-plus text-yellow-400 text-xs"></i>
                        </div>
                    </div>
                    <div className="searchbar flex justify-center items-center h-9 bg-white rounded-l-sm  ">
                        
                        <input className='pl-4 text-gray-400 border-none' type='text' style={searchbar} placeholder='Search for product,brands and more' />
                        
                    </div>
                    <div className="search-iconn flex items-center justify-center h-9 w-14 bg-white rounded-r-sm">
                        <i class="fa-solid fa-magnifying-glass text-lg text-blue-600 "></i>
                    </div>
                </div>
                <div className="loginBox h-8 w-28 bg-white text-blue-600 font-semibold flex items-center justify-center  rounded-sm">Login</div>
                <div className="box2"><p className=' text-white font-bold'>Become a Seller</p></div>
                <div className="box3 text-white font-bold"><p>More</p></div>
                <div className="box4 flex items-center">
                    <i class="fa-solid fa-cart-shopping  text-white"></i>
                    <p className='font-bold text-white ml-2'>Cart</p>

                </div>

                </div>
            </div>
        </header>

    )
}

export default Navbar
