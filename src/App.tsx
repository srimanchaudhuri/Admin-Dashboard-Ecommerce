import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Products from "./pages/products/Products"
import Users from "./pages/users/Users"
import { 

  Outlet,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import "./styles/global.scss"
import User from "./pages/user/User";
import Product from "./pages/product/Product";

let isAdmin : boolean

const persistedDataString = localStorage.getItem("persist:root");
if (persistedDataString !== null) {
   isAdmin = JSON.parse(JSON.parse(persistedDataString).user).currentUser.isAdmin 
  console.log(isAdmin);
}

function App() {

  const admin = isAdmin

  const Layout = () => {
    return (
      admin ? (<>
      <div className="main">
        <Navbar/>
        <div className="container">
        <div className="menuContainer">
          <Menu/>
        </div>
        <div className="contentContainer">
          <Outlet/>
        </div>
        </div>
        <Footer/>
      </div>
      </>
    )
    :
    (
      <Login/>
    )
    )
  }
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/users',
          element:<Users/>
        },
        {
          path:'/products',
          element:<Products/>
        },
        {
          path:'/users/:id',
          element:<User/>
        },
        {
          path:'/products/:id',
          element:<Product/>
        },
      ]
    },
    {
      path:"/login",
      element:<Login/>
    }
  ])
  return <RouterProvider router={router}/>
}

export default App
