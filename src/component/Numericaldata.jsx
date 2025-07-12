import React from 'react'

const Numericaldata = () => {
  return (
   <div className="px-6 md:px-20 pt-8 bg-white text-center">
      <p className="text-lg md:text-xl text-gray-800 max-w-4xl mx-auto mb-10">
        At Renovex we are committed to revolutionizing the construction industry
        with innovative, sustainable, and{" "}
        cost-effective solutions. With a
        proven track record of delivering exceptional projects, we combine{" "}
        state-of-the-art technology,{" "}
       skilled expertise, and{" "}
       customer-centric approaches to bring
        visions to life.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <h3 className="text-6xl font-bold text-black">150+</h3>
          <p className="text-md text-gray-600 mt-1">Complete Projects</p>
        </div>
        <div>
          <h3 className="text-6xl font-bold text-black">100+</h3>
          <p className="text-md text-gray-600 mt-1">Team Members</p>
        </div>
        <div>
          <h3 className="text-6xl font-bold text-black">200+</h3>
          <p className="text-md text-gray-600 mt-1">Client Reviews</p>
        </div>
        <div>
          <h3 className="text-6xl font-bold text-black">30</h3>
          <p className="text-md text-gray-600 mt-1">Winning Award</p>
        </div>
      </div>
    </div> )
}

export default Numericaldata