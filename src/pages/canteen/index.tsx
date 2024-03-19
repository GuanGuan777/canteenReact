import React, { ReactNode, useEffect, useState } from 'react'
import { StickyContainer, Sticky } from 'react-sticky';
import { SearchBar, Swiper, Toast, Popup, Divider ,Button, InfiniteScroll } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import { DownOutline  } from 'antd-mobile-icons'
import CardItem from "@/components/cards/cardItem";
import styles from "./index.less";
import discount from "@/assets/canteen/discount.png";
import wallet from "@/assets/canteen/wallet.png";
import humanFace from "@/assets/canteen/humanFace.png";
import feedback from "@/assets/canteen/feedback.png";
import Bg from "@/assets/canteen/bg.png";
import SerachIcon from "@/assets/canteen/search.png";
import MealPopup from '@/components/popups/mealPopup';
import AutoFixed from "@/components/common/autoFixed";

import { mockRequest } from './mock'
const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];

const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div
      className={styles.content}
      style={{ background: color }}
      onClick={() => {
        Toast.show(`你点击了卡片 ${index + 1}`);
      }}
    >
    </div>
  </Swiper.Item>
));
const CanteenPage = () => {
  const navigate = useNavigate();
  const [visible2, setVisible2] = useState(false)
  const [data, setData] = useState<Object[]>([{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},])
  const [hasMore, setHasMore] = useState(true);
  // useEffect(()=> {
  //   window.addEventListener('scroll', compute);
  // },[])
  // function compute(){ 
  //   let ele:any = document.getElementById('header'); 
  //   console.log(ele.getBoundingClientRect().top)
  //    if(ele.getBoundingClientRect().top <= 60){ 
  //     ele.style.position = "sticky"; 
  //     ele.style.top = 80; 
  //    } else{

  //    }
  //   } 
  async function loadMore() {
    const append = await mockRequest()
    setData(val => [...val, ...append])
    setHasMore(append.length > 0)
  }
  function changeAttend() {
    setVisible2(false);
  }
  return (
    <StickyContainer>
       <div className={styles.canteenContainer}>
       <Sticky>{({ style }) => <div className={styles.serachWrap} style={style}>
          <SearchBar placeholder='搜索食堂名称' style={{'--placeholder-color': '#CCCCCC'}}/>
        </div>}
      </Sticky>
        <div className={styles.swiperPanel}>
          <Swiper className={styles.swiperWrap} indicatorProps={{
              color: 'white',
            }}>{items}</Swiper>
        </div>
        <div className={styles.iconWrap}>
            <div className={styles.iconItem}>
              <img src={wallet}></img>
              <div className={styles.title}>钱包充值</div>
            </div>
            <div className={styles.iconItem}>
              <img src={humanFace}></img>
              <div className={styles.title}>人脸信息</div>
            </div>
            <div className={styles.iconItem}>
              <img src={discount}></img>
              <div className={styles.title}>优惠券</div>
            </div>
            <div className={styles.iconItem}>
              <img src={feedback}></img>
              <div className={styles.title}>问题反馈</div>
            </div>
        </div>
        <div className={styles.canteenList}>
          <AutoFixed
            // 距离顶部为 20px 吸顶
            top="56px"
            // 占位高度，也就是 children 的高度
            height="20x"
            // fixed状态改变时
            onFixedChange={(isFixed) => {
              console.log(`isFixed: ` + isFixed);
            }}
            // fixed状态需要添加的className
            fixedClassName="hello"
            // fixed状态需要添加的style
            fixedStyle={{ width:'100%' }}
        >
            <div>
            <div className={styles.header} id="header">
            <div className={styles.canteen}>
                <div className={styles.title}>
                  <img src={Bg} className={styles.imgIcon}></img>
                  <span className={styles.text}>全部食堂</span>
                </div>
                <span className={styles.top}>销量排行</span>
            </div>
            <div className={styles.right} onClick={() => {
            setVisible2(true)
          }}>
                <span className={styles.time}>餐段选择</span>
               <DownOutline className={styles.arrow}/>
            </div>
            <Popup
            visible={visible2}
            onMaskClick={() => {
              setVisible2(false)
            }}
            onClose={() => {
              setVisible2(false)
            }}
            position='top'
            >
            <MealPopup changeAttend={()=> {changeAttend()}}></MealPopup>
            </Popup>
          </div>
            </div>
          </AutoFixed>
            <div className={styles.lists}>
                {data.map((item, index) => (
                <CardItem key={index}></CardItem>
                 ))
                }
            </div>
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
        </div>
    </div>
    </StickyContainer>
   
  );
};

export default CanteenPage;
