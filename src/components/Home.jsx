import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import SignUpBar from './SignUpBar'

const Home = ({ setCurrentPage }) => {
  return (
    <>
      <div className="flex gap-2 px-2">
        <LeftSection />
        <RightSection setCurrentPage={setCurrentPage} />
      </div>
      <SignUpBar setCurrentPage={setCurrentPage} />
    </>
  )
}

export default Home
