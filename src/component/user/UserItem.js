import React from "react";
import { Button, Card, } from "antd";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../ContextApi";

const UserItem = ({ data, title }) => {
  const {appState,updateState} = useAppContext ();
  // console.log("data", data, title);
  const navigate= useNavigate();
  const handleClick=(item)=>{

    updateState({  ...appState, detail:item});
navigate(`/userdetail/${item.id}`);


  localStorage.setItem ('UserDetail',JSON.stringify(item))
  };
  const addTocart = (item) => {
    updateState({ ...appState, addtocard: [...appState.addtocard, ...[item]] });
  };
  return (
    <div style={{ paddingLeft: "25px" }}>
      <div className="text-xl font-bold p-2">{title}</div>

      <div className="flex justify-start gap-7">
        {data?.map((item) => (
          <div key={item.id}>
            <Card
              hoverable
              style={{
                width: 300,
              }}
            >
              <Card
                style={{}}
                cover={
                  <img className="h-[200px]" alt="example" src={item.image} />
                }
                onClick={() => handleClick(item)}
              >
                <div>Name:{item.name}</div>
                <div>Price:{item.price}</div>
                <div>Brand:{item.brand}</div>
              </Card>
              <div>
                <Button
                  className="w-full bg-slate-900 text-white"
                  onClick={() => addTocart(item)}
                >
                  Add to card
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )

};

export default UserItem;