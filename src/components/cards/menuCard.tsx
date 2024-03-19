import styles from './menuCard.less';
// import Breakfast from "@/assets/canteen/breakfast.png";
interface props{
    
}

function MenuCard() {
    return (
      <div className={styles.menuPanel}>
        <div className={styles.tag}>
            <span className={styles.text}>自助餐 ￥15</span>
        </div>
         <div className={styles.image}>
             <img src={Breakfast}></img>
         </div>
         <div className={styles.title}>早餐</div>
         <div className={styles.time}>7:00-9:00</div>
      </div>
    );
  }
  export default MenuCard
  