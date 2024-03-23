import React from 'react'
import UserItem from './UserItem'
// import { HotPrductdata} from '../../utlis/UserItem'
import { get } from '../../axios/Fetcher';
import { hotProduct} from "../../services/user"



const HotProduct = () => {

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
  
    hotProduct().then((response)=>{
      return setData(response)
    })
  }, []); 
 

  return (
   <div >
   <UserItem data={data} title="Hot Product"/>
   </div>
  )
}

export default HotProduct