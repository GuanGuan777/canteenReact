import React, { ReactNode, useState } from 'react'
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
  const [hasMore, setHasMore] = useState(true)
  async function loadMore() {
    const append = await mockRequest()
    setData(val => [...val, ...append])
    setHasMore(append.length > 0)
  }
  function changeAttend() {
    setVisible2(false);
  }
  return (
    <div className={styles.canteenContainer}>
        <div className={styles.serachWrap}>
          <SearchBar placeholder='搜索食堂名称' style={{'--placeholder-color': '#CCCCCC'}}/>
        </div>
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
            <div className={styles.header}>
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
                // bodyStyle={{ height: '40vh' }}
              >
               <MealPopup changeAttend={()=> {changeAttend()}}></MealPopup>
              </Popup>
            </div>
            <div className={styles.lists}>
                {data.map((item, index) => (
                <CardItem key={index}></CardItem>
                 ))
                }
            </div>
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
        </div>
    </div>
  );
};

export default CanteenPage;
