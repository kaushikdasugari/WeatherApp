import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GetAppLatLon from './GetAppLatLon.jsx'
import GetAppCity from './GetAppCity.jsx'

import GetAppCityForecast from './GetAppCityForecast'

function App() {
  

  return (
    <>
          <div>
          <GetAppLatLon />
          </div>
          <div>
          <GetAppCity />
          </div>

          <div>
          <GetAppCityForecast />
          </div>

    </>
  )
}

export default App
