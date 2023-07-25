import React, { useEffect } from 'react'

export default function ImageSlider() {

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex justify-center mx-6 gap-3 animate-carousel">
        <div className="">
          <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/de53aa36-9cec-421f-8978-4ada55821881/blazer-mid-77-vintage-mens-shoes-nw30B2.png" className='w-[400px] h-auto' alt="" />
        </div>
        <div className="embla__slide">
          <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/de53aa36-9cec-421f-8978-4ada55821881/blazer-mid-77-vintage-mens-shoes-nw30B2.png" className='w-[400px] h-auto' alt="" />
        </div>
        <div className="embla__slide">
          <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/de53aa36-9cec-421f-8978-4ada55821881/blazer-mid-77-vintage-mens-shoes-nw30B2.png" className='w-[400px] h-auto' alt="" />
        </div>
        
        {/* <div className="embla__slide">
          <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/de53aa36-9cec-421f-8978-4ada55821881/blazer-mid-77-vintage-mens-shoes-nw30B2.png" className='w-[200px] h-auto' alt="" />
        </div>
        <div className="embla__slide">
          <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/de53aa36-9cec-421f-8978-4ada55821881/blazer-mid-77-vintage-mens-shoes-nw30B2.png" className='w-[200px] h-auto' alt="" />
        </div> */}
      </div>
    </div>
  )
}