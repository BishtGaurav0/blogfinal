import React from "react";
import styles from '../AppStyles.module.css';
import FirstTile from "./FirstTile";
import Fourth from "./Fourth";
import SecondTile from "./SecondTile";
import ThirdTile from "./ThirdTile";


const Home = () => {
    return(
        <div className={styles.commonStyle}>
             <FirstTile/>
            <SecondTile/>
            <ThirdTile/>
            <Fourth/>
        </div>
    )
}

export default Home;