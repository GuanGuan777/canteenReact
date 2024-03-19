import styles from "./storeCard.less";
import { Image,Rate, Space, Toast ,Divider,Tag} from 'antd-mobile'
import location from "@/assets/canteen/location.png"; 
import time from "@/assets/canteen/time.png"; 
import telphone from "@/assets/canteen/telphone.png"; 
const demoSrc2 =
  'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'



const StoreCard = () => {

    return (
      <div className={styles.storeCard}>
        <div className={styles.top}>
          <div className={styles.left}>
          <Image lazy src={demoSrc2} width={48}
            height={48} style={{ borderRadius: 4 }}/>
          </div>
         <div className={styles.center}>
          <div className={styles.title}>老乡鸡（智慧园区店）</div>
          <div className={styles.info}>月售300+</div>
         </div>
         <div className={styles.right}>
         <div className={styles.mark}>暂无评分</div>
          <div className={styles.stars}><Rate style={{
              '--star-size': '12px',
              // '--active-color': '#ff7f7f',
            }}
            onChange={val => Toast.show(val.toString())} /></div>
         </div>
        </div>
        <div className={styles.tags}>
          <Tag className={styles.tagItem} color='#FAF1D9' style={{'--text-color':'#B87F37'}}>自助餐</Tag>
          <Tag color='#FAF1D9' style={{'--text-color':'#C78550'}}>可堂食</Tag>
        </div>
        <Divider />
        <div className={styles.foolter}>
          <div className={styles.info}>
            <img src={location} className={styles.icon}></img>
            <div className={styles.title}>智慧园区1号楼3楼1号店铺</div></div>
          <div className={styles.info}><img src={telphone} className={styles.icon}></img><div className={styles.title}>13789403990</div></div>
          <div className={styles.info}> <img src={time} className={styles.icon}></img><div className={styles.title}>每天7:00~20:00</div></div>
        </div>
      </div>
    );
  };
  
  export default StoreCard;
  