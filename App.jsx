import logo from './logo.svg';
import React, { useState } from 'react';
import { myMenu } from './components/constants';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import './App.css';

function App() {
  const [menu, setMenu] = useState(false);
  const openuSubItems = () => {
    setMenu(!menu);

  };
  return (
    // <div className='body' >
    //   <div className='navbar'>
    //     <GiHamburgerMenu onClick={onMenu} />
    //     <a className="link abc" href='https://www.google.com'>Menu</a>
    //     <a className="link abc" href='https://www.google.com'>Home</a>

    //   </div>
    //   {/* <div class="container text-center">
    //       <div className="row">
    //         <div className="col-4">
    //           <label>Username</label>
    //         </div>
    //         <div className="col-8">
    //           <input type="text" value="name" name="name"></input>
    //         </div>
    //       </div>
    //       <div className="row">
    //         <div className="col-4">
    //           <label>Email</label>
    //         </div>
    //         <div className="col-8">
    //           <input type="email" value="email" name="email_id"></input>
    //         </div>
    //       </div>
    //     </div> */}
    //   <div className="content-input">
    //     <label>Email ID :</label>
    //     <input type="email" value="email" name="email_id" placeholder='Enter your Email ID'></input>
    //     <label>Password :</label>
    //     <input type="password" value="password" name="password" placeholder='Enter your password'></input>
    //     <button type='button'>Submit</button>
    //   </div>

    //   {menu && (
    //     <div className='menu'>

    //     </div>
    //   )}


    // </div>
    <div>
      <div className='navbar1'>
        <div className="top-details-icon" />
        <IoIosNotifications className='notification' />
      </div>

      <div className='content'>
        {myMenu.map((menuItem, index) => (
          <div key={index} className='menu-item'>
            <div>{menuItem.menuItems}
              {menuItem.subItems?<RiArrowDropDownLine onClick={openuSubItems} className='dropdown' />:"" }
              
            </div>
            {menuItem.subItems &&menu && (
              <div className='submenu'>
                {menuItem.subItems.map((subItem, subIndex) => (
                  <div key={subIndex} className='submenu-item'>
                    <span>
                      {subItem.menuItems}
                      
                      
                    </span>
                    
                  </div>
                  
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

    </div >


  );
}

export default App;
