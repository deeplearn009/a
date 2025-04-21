import React from 'react'
import styles from './ShopMethods.module.scss'
import { GoPackage } from "react-icons/go";
import { CiUnlock } from "react-icons/ci";
import { IoReload } from "react-icons/io5";

const ShopMethods = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.card}>
                <GoPackage id={styles.icon}/>
                <h6>Free Shipping Method</h6>
                <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
            </div>
            <div className={styles.card}>
                <CiUnlock id={styles.icon}/>
                <h6>Free Shipping Method</h6>
                <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
            </div>
            <div className={styles.card}>
                <IoReload id={styles.icon}/>
                <h6>Free Shipping Method</h6>
                <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
            </div>
        </div>
    </div>
  )
}

export default ShopMethods
