import React, { useEffect, useState } from 'react'
import styles from "./index.module.css";
import Card from '../Card';
import { toast } from 'react-toastify';


const ContactUs = ({setFilteredProducts}) => {

    useEffect(() => {
      setFilteredProducts([]);
    } , [])
    

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        toast.success(`پیامت دریافت شد ${formData.name} عزیز! به زودی پاسخ به ایمیلت ارسال میشه.`);
        setFormData({ name: '', email: '', message: '' });
      };
    
      return (
        <div className={styles.contactContainer}>
          <h2 className={styles.contactTitle}>تماس با ما</h2>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="نام"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="ایمیل"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="پیام شما"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">ارسال</button>
          </form>
        </div>
      );
}

export default ContactUs
