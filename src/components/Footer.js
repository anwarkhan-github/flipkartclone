import React from 'react'

function Footer() {
    return (
        <div>
            <footer>
                

                    <div className="main-boxx h-56 w-auto bg-gray-900 flex place-content-evenly items-center">
                        <div className="box1">

                            <p className='text-gray-400 text-xs'>ABOUT US</p>
                            <p className='text-white text-xs mt-2'>Contact Us</p>
                            <p className='text-white text-xs'>Careers</p>
                            <p className='text-white text-xs'>Flipkart Stories</p>
                            <p className='text-white text-xs'>Press</p>
                            <p className='text-white text-xs'>Flipkart Wholesale</p>
                            <p className='text-white text-xs'>Corporate Information</p>
                        </div>
                        <div className="box2">
                            <p className='text-gray-400 text-xs '>HELP</p>
                            <p className='text-white text-xs mt-2'>Payments</p>
                            <p className='text-white text-xs'>Shipping</p>
                            <p className='text-white text-xs'>Cancellation & Returns</p>
                            <p className='text-white text-xs'>FAQ</p>
                            <p className='text-white text-xs'>Report Infringement</p>
                        </div>
                        <div className="box3">
                            <p className='text-gray-400 text-xs '>CONSUMER POLICY</p>
                            <p className='text-white text-xs mt-2'>Cancellation & Returns</p>
                            <p className='text-white text-xs'>Terms Of Use</p>
                            <p className='text-white text-xs'>Security</p>
                            <p className='text-white text-xs'>Privacy</p>
                            <p className='text-white text-xs'>Sitemap</p>
                            <p className='text-white text-xs'>Grievance Redressal</p>
                            <p className='text-white text-xs'>EPR Compliance</p>
                        </div>
                        <div className="box4">
                            <p className='text-gray-400 text-xs '>SOCIAL</p>
                            <p className='text-white text-xs mt-2'>Facebook</p>
                            <p className='text-white text-xs'>Twitter</p>
                            <p className='text-white text-xs'>YouTube</p>
                        </div>
                    </div>
                
                <hr className='bg-gray-500' />
                <div className="lastbox bg-gray-900 flex place-content-evenly h-16">
                    <div className="box1 flex items-center">

                        <i className="fa-solid fa-bag-shopping text-yellow-500"></i>
                        <p className='ml-2 text-white font-medium text-sm'>become a Seller</p>
                    </div>
                    <div className="box2 flex items-center ">

                        <i className="fa-solid fa-star text-yellow-500"></i>
                        <p className='ml-2 text-white font-medium text-sm'>Advertise</p>

                    </div>
                    <div className="box3 flex items-center">

                        <i className="fa-solid fa-gift text-yellow-500"></i>
                        <p className='ml-2 text-white font-medium text-sm'>Gift Card</p>

                    </div>
                    <div className="box4 flex items-center">

                        <i className="fa-regular fa-circle-question text-yellow-500"></i>
                        <p className='ml-2 text-white font-medium text-sm'>Help Center</p>

                    </div>
                    <div className="box5 flex items-center">
                        <p className='text-white font-medium text-sm'>&copy; 2007-2023 Flipkart.com</p>

                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Footer
