import { useLocation } from 'react-router-dom'
import Single from '../../components/single/Single'

import './product.scss'
import { useSelector } from 'react-redux'

const Product = () => {
  const location = useLocation()
  const productId = location.pathname.split("/")[2];

  const product = useSelector((state: any) => state.product.products.find((product : any) => product._id === productId))
  return (
    <div>
      <Single {...product}/>
    </div>
  )
}

export default Product
