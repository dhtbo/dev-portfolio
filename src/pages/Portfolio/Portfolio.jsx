import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import PortfolioContent from '../../components/Portfolio/Portfolio'
import './Portfolio.css'

export default function Portfolio() {
  return (
    <div>
      <Navbar />
      <PortfolioContent />
      <Footer />
    </div>
  )
}
