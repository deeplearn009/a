import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
      <div className={styles.footer_column}>
        <h3>Time Zone</h3>
        <p>
          Asorem ipsum adipolor sit amet, consectetur adipiscing elitcf sed do
          eiusmod tem.
        </p>
      </div>

      <div className={styles.footer_column}>
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Offers & Discounts</a></li>
          <li><a href="#">Get Coupon</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>

      <div className={styles.footer_column}>
        <h3>New Products</h3>
        <ul>
          <li><a href="#">Woman Cloth</a></li>
          <li><a href="#">Fashion Accessories</a></li>
          <li><a href="#">Man Accessories</a></li>
          <li><a href="#">Rubber made Toys</a></li>
        </ul>
      </div>

      <div className={styles.footer_column}>
        <h3>Support</h3>
        <ul>
          <li><a href="#">Frequently Asked Questions</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Report a Payment Issue</a></li>
        </ul>
      </div>
    </footer>
    </div>
  )
}

export default Footer