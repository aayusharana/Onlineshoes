import React from 'react'
import UserItem from './UserItem'
import { get } from '../../axios/Fetcher';
import { trendingVender } from '../../services/user';


const TrendingVender = () => {
  const [data, setData] = React.useState([]);
  
  React.useEffect(() => {
  
    trendingVender().then((response)=>{
      return setData(response)
    })
  }, []); 
  return (
    <div>
<UserItem  data={data.filter((item,index)=>index>4)} title="Trending Vender"/>
    </div>
  );
}

export default TrendingVender;