import React from 'react'

// import component 👇
import Drawer from 'react-modern-drawer'
import "./App.css"

//import styles 👇
import 'react-modern-drawer/dist/index.css'

export default function App() {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
  
    return (
      <div>
      <div className='navigation'>

      <button onClick={toggleDrawer}>Show</button>
      
      </div>
     
      <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction='right'
          className='drawer'
       
          lockBackgroundScroll={false}
      > 
          <div className='main'>

         

          <ul>
          <a href='https://www.amazon.in'><li>home</li></a>
          <li>service</li>
          <li>contact</li>
          <li>about</li>
          </ul>
          
          
          </div>
      </Drawer>
      </div>
    );
  }