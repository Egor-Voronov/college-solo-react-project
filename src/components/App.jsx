import {Route, Routes} from 'react-router-dom'
import {GeneralPage} from '../pages/GeneralPage'
import {ProductsPage} from '../pages/ProductsPage'
import {NavigationPage} from '../pages/NavigationPage'
import {Footer} from '../pages/Footer'


function App() {

  return (
    <div className='App'>
    <NavigationPage />
    <Routes >
      <Route path='/' element={ <GeneralPage /> } />
      <Route path='/products' element={ <ProductsPage /> } />
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
