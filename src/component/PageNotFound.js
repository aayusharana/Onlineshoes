import{ Button, Result } from "antd"
import React from "react"
import { useNavigate } from 'react-router-dom'


const PageNotFound = () => {
const navigate= useNavigate()
  return (
    <div>
      <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary" onClick={()=>navigate("/")}>Back Home</Button>}
  />
    </div>
    
  )
}

export default PageNotFound