
import { SearchBar, Swiper, Toast, Popup, Divider ,Button } from "antd-mobile";
import styles from "./mealPopop.less";

interface iProps {
    active?: String
    changeAttend: (param:any) => void,
}

function MealPopup({ active, changeAttend }: iProps) {
    function changePanel(state:boolean) {
      changeAttend(state)
    }
  return (
    <div>
     <div className={styles.topTitle}>餐段选择</div>
               <div className={styles.topContent}>
                    <div className={styles.tagItem}>
                        全部
                    </div>
                    <div className={`${styles.tagItem} ${styles.active}`}>
                        早餐
                    </div>
                    <div className={styles.tagItem}>
                        午餐
                    </div>
                    <div className={styles.tagItem}>
                        下午茶
                    </div>
                    <div className={styles.tagItem}>
                        晚餐
                    </div>
                    <div className={styles.tagItem}>
                        夜宵
                    </div>
                </div>
                <Divider />
                <div className={styles.foolter}>
                <Button fill='none' onClick={() => {changePanel(false)}}>
                    重置
                </Button>
                <Divider direction='vertical' className={styles.line}/>
                <Button color='warning' fill='none' onClick={() => {changePanel(false)}}>
                    确定
                </Button>
               </div>
    </div>
  );
}
export default MealPopup