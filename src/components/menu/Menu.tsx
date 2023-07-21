import { Link } from "react-router-dom"
import { menu } from "../../data"
import "./menu.scss"

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => ( 
      <div className="item" key={item.id}>
        <span className="title">{item.title}</span>
        <Link to={item.listItems[0].url} className="listItem">
        <img src={item.listItems[0].icon} alt="" />
        <span className="listItemTitle">{item.listItems[0].title}</span>
        </Link>
        <Link to={item.listItems[1].url} className="listItem">
        <img src={item.listItems[1].icon} alt="" />
        <span className="listItemTitle">{item.listItems[1].title}</span>
        </Link>
      </div>
    ))  
    }
    </div>
  )
}

export default Menu
