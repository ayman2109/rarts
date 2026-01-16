import React from 'react'
import Projects from '@/components/Projects'
const page = () => {
  return (
    <div className='pt-32 mx-10'>
       <div className="mb-24 flex flex-col items-center gap-6">
          <h1 className="text-center text-3xl font-semibold lg:max-w-3xl lg:text-5xl">
            {`Some of Our Recent Projects`}
          </h1>
          
        </div>

        <Projects />
    </div>
  )
}

export default page