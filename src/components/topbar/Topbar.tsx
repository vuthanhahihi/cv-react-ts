
import { Mail, Person } from '@material-ui/icons'
import  { useContext, useEffect } from 'react'
import { GetInforContext } from '../../contexts/GetInformationContext'
import { MenuOpenContext } from '../../contexts/MenuContext'
import "./topbar.scss"

const Topbar = () => {

  const {myInfor, getMyInfor} = useContext(GetInforContext)

  useEffect(() => {
    getMyInfor();
    // eslint-disable-next-line
  }, []); 

  const {menuOpen, setMenuOpen} = useContext(MenuOpenContext)
  return (
  
    <div className={"topbar " + (menuOpen && "active" )}>
      <div className="wrapper">
      <div className="left">
        <a href="#intro" className="logo">Vũ Nè</a>
        <div className="itemContainer">
          <Person className="icon"/>
          {myInfor.map((item) => (
                  <span key={item.id}>
                  {item.name}
                  </span>
                 ))}
          </div>
          <div className="itemContainer">
          <Mail className="icon"/>
          {myInfor.map((item) => (
                  <span key={item.id}>
                  {item.email}
                  </span>
                 ))}
          </div>
      </div>
      <div className="right">
      <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Topbar