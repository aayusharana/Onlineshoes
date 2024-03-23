import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import b1 from "../../image/b1.webp"
import b2 from "../../image/b2.avif"
import b3 from "../../image/b3.jpg"
import b4 from  "../../image/b4.png"

import b5 from"../../image/b5.jpg"
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { get } from "../../axios/Fetcher";
import React from "react";

const Carousel = () => {
  const [data, setData] = React.useState([]);

  
  React.useEffect(() => {
    const fetchData = async () => {
      const responseData = await get("products?limit=4");
      console.log("data", responseData);
      setData(responseData);
    };
    fetchData();
  }, []);
 
  return (
    <>
      <div className="flex ">
        <Swiper
        
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="w-full h-[500px] px-0 "
        >
          <div>
          <div>
            {data?.map((item) => (
              <div key={item?.id}>
                <SwiperSlide>
                  <img src={item?.image} alt="no image" />
                </SwiperSlide>
              </div>
            ))}
          </div>
          </div>

          <SwiperSlide>
            <div>
              
            </div>
            <a href="/">
              <img
                src={b1}
                alt="example"
                style={{ width: "100%", height: "100%" }}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img
                src={b2}
                alt="example"
                style={{ width: "100%", height: "100%" }}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              {" "}
              <img
                src={b4}
                alt="example"
                style={{ width: "100%", height: "100%" }}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={b5}
              alt="example"
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
        </Swiper>

        <div className="w-[40%] h-[500px] px-5">
          <div>
            <a href="/">
              <img className="pb-5" src={b2} alt="/" />
            </a>
          </div>
          <div>
            <a href="/">
              <img src={b3} alt="/" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Carousel;