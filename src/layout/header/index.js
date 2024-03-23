import React, { useState } from "react";
import { Auth, HeaderItem } from "../../utlis/Item";
import {  Link, useNavigate } from "react-router-dom";
import logo1 from "../../image/logo.webp"
import {
  DeleteFilled,
  MinusCircleOutlined,
  PlusCircleOutlined,
  ShoppingCartOutlined, 
} from "@ant-design/icons";
import { useAppContext } from "../../ContextApi";
import {  Badge, Button, Drawer, Image, message,} from "antd";
import Order from "../../component/user/Order";
import {  Token } from "../../utlis/Storage";
import UserHeader from "./UserHeader";

const Index = () => {
  const { appState } = useAppContext();
  const [myOrder, setMyOrder] = React.useState([]);
  const {token,name}=Token();
  console.log("appState" ,Token());

  const [open, setOpen] = useState(false); 
  const navigate = useNavigate();

  const handleClick = (e) => {
    console.log("data", e);
    navigate(e);
  };
  const onclose= () => {
    setOpen(false);
  };

  const handelDesplayOrder = () => { 
    if (myOrder.length>0){
    setOpen(true);
    }
    
  };
  const handelAdd=(id)=>{
    console.log("myOrder",myOrder);
    const updateAdddata=myOrder?.map((item)=>{
      if(id===item.id) {
        return{
          ...item,
          qty: item.qty + 1,  
        };
      }else{
        return{
          ...item,
        };
      }
    });
    setMyOrder(updateAdddata);
    console.log(id,"plus");
  };
  const handelMinus=(id)=>{
    console.log(id,"minus");
  const updateMinusdata = myOrder?.map((item) => {
    if (id === item.id) {
      const minusQty = item.qty - 1 >= 1 ? item.qty - 1 : 1;
      return {
        ...item,
        qty: minusQty
      };
    } else {
      return {
        ...item,
        
      };
    }
  });
  setMyOrder(updateMinusdata);
  console.log(id, "minus");
};
  const handelDelete = (id)=>{
    const updatedata = myOrder.filter((item)=>item.id !==id);
    setMyOrder(updatedata);
  };
React.useEffect(() => {
  setMyOrder([...new Set(appState?.addtocard)]);
}, [appState?.addtocard]);
const [isModalOpen, setIsModalOpen] = useState(false);
const showModal = () => {
  if (token) {
    setIsModalOpen(true);
  } else {
    message.info("You are not Login please login First!");
  }
};
//   setIsModalOpen(true);
// };

 const sumNetTotal = myOrder?.reduce((sum, service) => {
  console.log("sum", sum, service);
  return sum + parseFloat(service.price*service.qty);
}, 0);
console.log("sumNetTotal", sumNetTotal);

const sumQty = myOrder?.reduce((sum, service) => {
  console.log("sum", sum, service);
  return sum + parseFloat(service.qty);
}, 0);
console.log("sumQTY", sumQty);


  return (
    <div className="flex justify-between cursor-pointer">
      <div>
      <div>
        <Link to="/">
          <div className="flex items-center gap-2">
            <div>
              <img
                style={{
                  width: "100px",
                  height: "60px",
                }}
                src={logo1}
                alt="Logo"
              />
            </div>
          </div>
        </Link>
      </div>
      </div>
     
      <div className="text-white font-bold ">
       
      </div>

      <div className="flex gap-20">

        {HeaderItem?.map((item) => (
          <div
            key={item.link}
            className=" cursor-pointer"
            onClick={() => handleClick(item.link)}
          >
            {item.name}
          </div>
        ))}
        <div className="flex items-center gap-2">
            {token && (
              <div className="flex items-center gap-2">
                 <div>
                  <UserHeader/>
                </div> 
                <div>
                  {name}
                </div>
              </div>
            )}
          </div>
        <div className=" flex item ">

        </div>
      </div>
      <div className="flex gap-5 items-center">
        <div className="mt-[5px]">
          <Badge count={myOrder?.length}>
            <ShoppingCartOutlined
              className=" text-white text-2xl  "
              onClick={handelDesplayOrder}
            />
          </Badge>
    
        </div>
         {open && (
        <div>
          <Drawer title="Display Item" onClose={onclose} open={open}>
            <div>
              {myOrder?.map((item) => (
                <div key={item.id} className="flex place-items-baseline">
                  <div className="w-20 h-20">
                    <Image src={item.image} alt="noimage" />
                  </div>
                  <div>
                    <div>Name:{item.name}</div>
                    <div>Price:{item.price*item.qty}</div>
                    <div>Qty:{item.qty}</div>
                    <div>Brand:{item.brand}</div>
                    <div className="flex gap-3">
                      <div>
                        <PlusCircleOutlined 
                        onClick={()=>handelAdd(item.id)} />
                      </div>
                      <div>
                        <MinusCircleOutlined
                         onClick={()=>handelMinus(item.id)}/>
                      </div>
                    </div>
                    <div>
                      <DeleteFilled
                       onClick={()=>handelDelete(item.id)}/>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full">
              <Button 
              type="pramiry" 
              className="bg-[green] w-full"
               onClick={showModal}
               >
                Order Now

              </Button>
            </div>
            {
              isModalOpen && (
                <Order isModalOpen={isModalOpen}
                setIsModalOpen={(e)=>setIsModalOpen(e)}sumNetTotal={sumNetTotal} sumQty={sumQty}myOrder={myOrder}/>
            
                )
            }

          </Drawer>
          </div>
        )}
        <div>
          {/* <UserHeader /> */}
        </div>

        <div>{token && <UserHeader />}</div>

{!token &&
  Auth?.map((item) => (
    <div
      key={item.link}
      className="text-white font-bold"
      onClick={() => handleClick(item.link)}
    >
      {item.name}
    </div>
  ))}
        

         
      </div>
    </div>
  );
};

export default Index;
