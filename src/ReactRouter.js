import Home from './Home'
import About from './About'
import Services from './Services'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

function ReactRouter(){
    return(
        <div>
        <BrowserRouter>
          <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/services'>Services</Link></li>
          </ul>
          
            <Routes>
              <Route path='/home' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/services' element={<Services/>}/>
            </Routes>    
          </BrowserRouter>  
        </div>
    )
}

export default ReactRouter