import React from 'react'

function Box1() {
  const row = {
    width: '99%',
    height: '320px'
  }
  const mainrow = {
    height: '320px',
    width: '87%'
  }
  return (
    <div>
      <div className="outerbox flex justify-center items-center mt-2">
        <div className="row flex bg-white" style={row}>
          <div className="box1_1 h-80 w-52 flex flex-col items-center">
            <p className='text-4xl mt-16 ml-10 mr-10 flex flex-col items-center'><p>Best of</p>
              <p>Electronics</p></p>
            <p className='h-9 w-24 mt-9 bg-blue-600 text-white text-center flex justify-center items-center text-xs font-normal rounded-sm' ><p>VIEW All</p></p>
            <img className='mt-2 h-24' src="flipkartimgs/lhs1_img.jpg" alt="" />
          </div>


          <div className="main-row flex bg-white place-content-evenly" style={mainrow}>


            <div className="box1_1 h-80 w-52 flex flex-col items-center  mt-5">
              <div className="imgbox h-52 w-auto flex justify-center items-center">

                <img className='' src="flipkartimgs/tv_img1.jpg" alt="" />
              </div>
              <p className='font-medium text-sm mt-1'>Double door refrigerator</p>
              <p className='text-green-600 font-normal my-1'>From ₹16,129</p>
              <p className='text-gray-400 '>Buy Now</p>

            </div>
            <div className="box1_2 h-80 w-52 flex flex-col items-center  mt-5">
            <div className="imgbox h-52 w-auto flex justify-center items-center">
              <img className='' src="flipkartimgs/tv_img2.jpg" alt="" />
              </div>
              <p className='font-medium text-sm mt-1'>Double door refrigerator</p>
              <p className='text-green-600 font-normalmy-1'>From ₹16,129</p>
              <p className='text-gray-400 '>Buy Now</p>

            </div>
            <div className="box1_3 h-80 w-52 flex flex-col items-center  mt-5">
            <div className="imgbox h-52 w-auto flex justify-center items-center">
              <img className='' src="flipkartimgs/tv_img3.jpg" alt="" />
              </div>
              <p className='font-medium text-sm mt-1'>Big washing Machine</p>
              <p className='text-green-600 font-normalmy-1'>From ₹13,900</p>
              <p className='text-gray-400 '>Buy Now</p>

            </div>
            <div className="box1_4 h-80 w-52 flex flex-col items-center  mt-5">
            <div className="imgbox h-52 w-auto flex justify-center items-center">
              <img className='' src="flipkartimgs/tv_img4.jpg" alt="" />
              </div>
              <p className='font-medium text-sm mt-1'>Samsung refrigerator</p>
              <p className='text-green-600 font-normalmy-1'>From ₹8,999</p>
              <p className='text-gray-400 '>Buy Now</p>

            </div>
            <div className="box1_5 h-80 w-52 flex flex-col items-center  mt-5">
            <div className="imgbox h-52 w-auto flex justify-center items-center">
              <img className='' src="flipkartimgs/tv_img5.jpg" alt="" />
              </div>
              <p className='font-medium text-sm mt-1 '>Godrej</p>
              <p className='text-green-600 font-normalmy-1'>From ₹8,999</p>
              <p className='text-gray-400'>Buy Now</p>

            </div>
            <div className="box1_1 h-80 w-52 flex flex-col items-center">
           
            <img className=' h-80' src="flipkartimgs/plane.jpg" alt="" />
          </div>
            

          </div>

        </div>
      </div>
      <div className="outerbox flex justify-center items-center mt-2">
        <div className="row flex bg-white" style={row}>
          <div className="box1_1 h-80 w-52 flex flex-col items-center">
            <p className='text-4xl mt-16 ml-10 mr-10 flex flex-col items-center'><p>Best of</p>
              <p>Electronics</p></p>
            <p className='h-9 w-24 mt-9 bg-blue-600 text-white text-center flex justify-center items-center text-xs font-normal rounded-sm' ><p>VIEW All</p></p>
            <img className='mt-2 h-24' src="flipkartimgs/lhs2_img.jpg" alt="" />
          </div>

          <div className="main-row flex bg-white place-content-evenly" style={mainrow}>

            <div className="box1_1 h-80 w-52 flex flex-col items-center mt-5">
            <div className="imgbox h-52 w-auto flex justify-center items-center">
              <img className='' src="flipkartimgs/td_img1.jpg" alt="" />
              </div>
              <p className='font-medium text-sm mt-1'>Marq refrigerator</p>
              <p className='text-green-600 font-normalmy-1'>From ₹8,999</p>
              <p className='text-gray-400'>Buy Now</p>

            </div>
            <div className="box1_2 h-80 w-52 flex flex-col items-center  mt-5">
            <div className="imgbox h-52 w-auto flex justify-center items-center">
              <img className='' src="flipkartimgs/td_img2.jpg" alt="" />
              </div>
              <p className='font-medium text-sm mt-1'>Double door refrigerator</p>
              <p className='text-green-600 font-normalmy-1'>From ₹16,129</p>
              <p className='text-gray-400 '>Buy Now</p>

            </div>
            <div className="box1_3 h-80 w-52 flex flex-col items-center  mt-5">
            <div className="imgbox h-52 w-auto flex justify-center items-center">
              <img className='' src="flipkartimgs/td_img3.jpg" alt="" />
              </div>
              <p className='font-medium text-sm mt-1'>Big washing Machine</p>
              <p className='text-green-600 font-normalmy-1'>From ₹13,900</p>
              <p className='text-gray-400 '>Buy Now</p>

            </div>
            <div className="box1_4 h-80 w-52 flex flex-col items-center  mt-5">
            <div className="imgbox h-52 w-auto flex justify-center items-center">
              <img className='' src="flipkartimgs/td_img4.jpg" alt="" />
              </div>
              <p className='font-medium text-sm mt-1'>Samsung refrigerator</p>
              <p className='text-green-600 font-normalmy-1'>From ₹8,999</p>
              <p className='text-gray-400 '>Buy Now</p>

            </div>
            <div className="box1_5 h-80 w-52 flex flex-col items-center  mt-5">
            <div className="imgbox h-52 w-auto flex justify-center items-center">
              <img className='' src="flipkartimgs/td_img5.jpg" alt="" />
              </div>
              <p className='font-medium text-sm mt-1 '>Godrej</p>
              <p className='text-green-600 font-normalmy-1'>From ₹8,999</p>
              <p className='text-gray-400'>Buy Now</p>

            </div>
            <div className="box1_6 h-80 w-52 flex flex-col items-center  mt-5">
            <div className="imgbox h-52 w-auto flex justify-center items-center">
              <img className='' src="flipkartimgs/td_img6.jpg" alt="" />
              </div>
              <p className='font-medium text-sm mt-1'>Motorola refrigerator</p>
              <p className='text-green-600 font-normalmy-1'>From ₹8,999</p>
              <p className='text-gray-400'>Buy Now</p>

            </div>


          </div>
        </div>
      </div>
      <div className="outerbox flex justify-center items-center mt-2">
        <div className="row flex bg-white" style={row}>
          <div className="box1_1 h-80 w-52 flex flex-col items-center">
            <p className='text-4xl mt-16 ml-10 mr-10 flex flex-col items-center'><p>Best of</p>
              <p>Electronics</p></p>
            <p className='h-9 w-24 mt-9 bg-blue-600 text-white text-center flex justify-center items-center text-xs font-normal rounded-sm' ><p>VIEW All</p></p>
            <img className='mt-2 h-24' src="flipkartimgs/lhs4_img.jpg" alt="" />
          </div>

          <div className="main-row flex bg-white place-content-evenly" style={mainrow}>

            <div className="box1_1 h-80 w-52 flex flex-col items-center mt-5">
            <div className="imgbox h-52 w-auto flex justify-center items-center">
              <img className='' src="flipkartimgs/sports_img1.jpg" alt="" />
              </div>
              <p className='font-medium text-sm mt-1'>Marq refrigerator</p>
              <p className='text-green-600 font-normalmy-1'>From ₹8,999</p>
              <p className='text-gray-400'>Buy Now</p>

            </div>
            <div className="box1_2 h-80 w-52 flex flex-col items-center  mt-5">
            <div className="imgbox h-52 w-auto flex justify-center items-center">
              <img className='' src="flipkartimgs/sports_img2.jpg" alt="" />
              </div>
              <p className='font-medium text-sm mt-1'>Double door refrigerator</p>
              <p className='text-green-600 font-normalmy-1'>From ₹16,129</p>
              <p className='text-gray-400 '>Buy Now</p>

            </div>
            <div className="box1_3 h-80 w-52 flex flex-col items-center  mt-5">
            <div className="imgbox h-52 w-auto flex justify-center items-center">
              <img className='' src="flipkartimgs/sports_img3.jpg" alt="" />
              </div>
              <p className='font-medium text-sm mt-1'>Big washing Machine</p>
              <p className='text-green-600 font-normalmy-1'>From ₹13,900</p>
              <p className='text-gray-400 '>Buy Now</p>

            </div>
            <div className="box1_4 h-80 w-52 flex flex-col items-center  mt-5">
            <div className="imgbox h-52 w-auto flex justify-center items-center">
              <img className='' src="flipkartimgs/sports_img4.jpg" alt="" />
              </div>
              <p className='font-medium text-sm mt-1'>Samsung refrigerator</p>
              <p className='text-green-600 font-normalmy-1'>From ₹8,999</p>
              <p className='text-gray-400 '>Buy Now</p>

            </div>
            <div className="box1_5 h-80 w-52 flex flex-col items-center  mt-5">
            <div className="imgbox h-52 w-auto flex justify-center items-center">
              <img className='' src="flipkartimgs/sports_img5.jpg" alt="" />
              </div>
              <p className='font-medium text-sm mt-1 '>Godrej</p>
              <p className='text-green-600 font-normalmy-1'>From ₹8,999</p>
              <p className='text-gray-400'>Buy Now</p>

            </div>
            <div className="box1_6 h-80 w-52 flex flex-col items-center  mt-5">
            <div className="imgbox h-52 w-auto flex justify-center items-center">
              <img className='' src="flipkartimgs/sports_img6.jpg" alt="" />
              </div>
              <p className='font-medium text-sm mt-1'>Motorola refrigerator</p>
              <p className='text-green-600 font-normalmy-1'>From ₹8,999</p>
              <p className='text-gray-400'>Buy Now</p>

            </div>


          </div>
        </div>
      </div>
      <div className="outerbox flex justify-center items-center mt-2">
        <div className="row flex bg-white" style={row}>
          <div className="box1_1 h-80 w-52 flex flex-col items-center">
            <p className='text-4xl mt-16 ml-10 mr-10 flex flex-col items-center'><p>Best of</p>
              <p>Electronics</p></p>
            <p className='h-9 w-24 mt-9 bg-blue-600 text-white text-center flex justify-center items-center text-xs font-normal rounded-sm' ><p>VIEW All</p></p>
            <img className='mt-2 h-24' src="flipkartimgs/lhs5_img.jpg" alt="" />
          </div>

          <div className="main-row flex bg-white place-content-evenly" style={mainrow}>

            <div className="box1_1 h-80 w-52 flex flex-col items-center mt-5">
            <div className="imgbox h-52 w-auto flex justify-center items-center">
              <img className='' src="flipkartimgs/home_img1.jpg" alt="" />
              </div>
              <p className='font-medium text-sm mt-1'>Marq refrigerator</p>
              <p className='text-green-600 font-normalmy-1'>From ₹8,999</p>
              <p className='text-gray-400'>Buy Now</p>

            </div>
            <div className="box1_2 h-80 w-52 flex flex-col items-center  mt-5">
            <div className="imgbox h-52 w-auto flex justify-center items-center">
              <img className='' src="flipkartimgs/home_img2.jpg" alt="" />
              </div>
              <p className='font-medium text-sm mt-1'>Double door refrigerator</p>
              <p className='text-green-600 font-normalmy-1'>From ₹16,129</p>
              <p className='text-gray-400 '>Buy Now</p>

            </div>
            <div className="box1_3 h-80 w-52 flex flex-col items-center  mt-5">
            <div className="imgbox h-52 w-auto flex justify-center items-center">
              <img className='' src="flipkartimgs/home_img3.jpg" alt="" />
              </div>
              <p className='font-medium text-sm mt-1'>Big washing Machine</p>
              <p className='text-green-600 font-normalmy-1'>From ₹13,900</p>
              <p className='text-gray-400 '>Buy Now</p>

            </div>
            <div className="box1_4 h-80 w-52 flex flex-col items-center  mt-5">
            <div className="imgbox h-52 w-auto flex justify-center items-center">
              <img className='' src="flipkartimgs/home_img4.jpg" alt="" />
              </div>
              <p className='font-medium text-sm mt-1'>Samsung refrigerator</p>
              <p className='text-green-600 font-normalmy-1'>From ₹8,999</p>
              <p className='text-gray-400 '>Buy Now</p>

            </div>
            <div className="box1_5 h-80 w-52 flex flex-col items-center  mt-5">
            <div className="imgbox h-52 w-auto flex justify-center items-center">
              <img className='' src="flipkartimgs/home_img5.jpg" alt="" />
              </div>
              <p className='font-medium text-sm mt-1 '>Godrej</p>
              <p className='text-green-600 font-normalmy-1'>From ₹8,999</p>
              <p className='text-gray-400'>Buy Now</p>

            </div>
            <div className="box1_6 h-80 w-52 flex flex-col items-center  mt-5">
            <div className="imgbox h-52 w-auto flex justify-center items-center">
              <img className='' src="flipkartimgs/home_img6.jpg" alt="" />
              </div>
              <p className='font-medium text-sm mt-1'>Motorola refrigerator</p>
              <p className='text-green-600 font-normalmy-1'>From ₹8,999</p>
              <p className='text-gray-400'>Buy Now</p>

            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Box1
