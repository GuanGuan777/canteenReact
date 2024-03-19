import styles from "./cardItem.less";
import yay from "../../assets/yay.jpg";
import { useNavigate } from "react-router-dom";
import { Image } from 'antd-mobile';

interface isProps{

}
const IconCard = () => {
  const navigate = useNavigate();
    return (
      <div className={styles.cardItem} onClick={() => {
        navigate("/store");
      }}>
          <div className={styles.left}>
            <Image lazy src={yay} className={styles.cover}/>
            {/* <img src={yay} className={styles.cover}></img> */}
          </div>
          <div className={styles.center}>
            <div className={styles.title}>
            老乡鸡（智慧园区店）
            </div>
            <div className={styles.mark}>
            暂无评分
            </div>
            <div className={styles.location}>
            智慧园区1号楼3楼1号店铺
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.label}>自助餐</div>
            <div className={styles.count}>月售300+</div>
          </div>
      </div>
    );
  };
  
  export default IconCard;
  