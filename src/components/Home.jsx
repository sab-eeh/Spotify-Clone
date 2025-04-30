import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import SignUpBar from './SignUpBar'

const Home = () => {
  return (
    <>
    <div className="flex gap-4">
        <LeftSection/>
        <RightSection />
    </div>
    <SignUpBar/>
    </>
  )
}

export default Home
