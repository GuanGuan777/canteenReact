import { Checkbox, Input, Button, NavBar,Divider,JumboTabs } from "antd-mobile";
import { useState } from "react";
import { connect } from "umi";
import { getCaptcha, getCaptchaMock } from "@/api/user.js";
import { useNavigate } from "react-router-dom";
import StoreCard from "@/components/cards/storeCard";
import styles from "./index.less";
import menu from "@/assets/canteen/menu.png";
import MenuCard from "@/components/cards/menuCard"; 
interface props{
    
}
function StorePage(props:any) {
  const { user, dispatch } = props;
  const getCaptchaFunc = () => {
    getCaptcha();
    getCaptchaMock();
  };
  const navigate = useNavigate();
  return (
    <>
      <NavBar
        back="返回"
        style={{
          "--height": "64px",
        }}
        onBack={() => navigate(-1)}
      >
        餐厅信息
      </NavBar>
      <div className={styles.storeContainer}>
        <StoreCard></StoreCard>
        <div className={styles.menuPanel}>
           <div className={styles.top}>
               <img src={menu} className={styles.iconWrap}></img>
               <div className={styles.label}>查看菜谱</div>
           </div>
           <Divider className={styles.line}/>
           <div className={styles.timeList}>
            <div className={styles.month}><span className={styles.num}>08</span>月</div>
              <JumboTabs defaultActiveKey='1' className={styles.days}>
                <JumboTabs.Tab title='06' description='周一' key='1'>
                </JumboTabs.Tab>
                <JumboTabs.Tab title='07' description='周二' key='2'>
                </JumboTabs.Tab>
                <JumboTabs.Tab title='08' description='周三' key='3'>
                </JumboTabs.Tab>
                <JumboTabs.Tab title='09' description='周四' key='4'>
                </JumboTabs.Tab>
                <JumboTabs.Tab title='10' description='周五' key='5'>
                </JumboTabs.Tab>
                <JumboTabs.Tab title='11' description='周六' key='6'>
                </JumboTabs.Tab>
                <JumboTabs.Tab title='12' description='周日' key='7'>
                </JumboTabs.Tab>
              </JumboTabs>
           </div>
           <div className={styles.content}>
            <MenuCard></MenuCard>
            <MenuCard></MenuCard>
            <MenuCard></MenuCard>
            <MenuCard></MenuCard>
            <MenuCard></MenuCard>
           </div>
        </div>
      </div>
    </>
  );
}
const stateToProps = ({ user }) => {
    return {
      user,
    };
};
export default connect(stateToProps)(StorePage);
  