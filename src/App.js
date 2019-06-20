import React from 'react'

import Almanac from './components/Almanac'

import './App.css'

const Grays = () => (
  <h2 className="almanac__header almanac__header--grays">
    <span>✩</span>
    <span>✩</span>
    <span>✩</span>
    <span>GRAYS</span>
    <span>✩</span>
    <span>✩</span>
    <span>✩</span>
  </h2>
)

const App = () => (
  <div className="wrapper">
    <Grays />
    <h1 className="almanac__header--sports">SPORTS</h1>
    <h1 className="almanac__header--title">ALMANAC</h1>
    <h4 className="almanac__header--sports">COMPLETE SPORTS STATISTICS</h4>
    <Almanac />
  </div>
)

export default App
