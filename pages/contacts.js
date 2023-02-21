import React, { useState } from 'react'
import styles from '../styles/Contacts.module.css'

export default function Contacts() {
  const [contacts, setContacts] = useState({ name: "", description: "", email: "", phone: "" });

  const onChange = (e) => {
    setContacts({ ...contacts, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    // some Event to trigger after clicking the submit button
    e.preventDefault();
    // console.log(contacts);

    // fetching the data from the api created to post contacts and get the Contacts
    fetch("http://localhost:3000/api/contact", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contacts)
    })
      .then((response) => response.json())
      .then((data) => {
        setContacts({ name: "", description: "", email: "", phone: "" });
      })
      .catch((error) => console.error(error));
  }



  return (
    <>
      <style jsx>
        {`
      .form-text{
        font-size: 20px;
        margin-left: 12px;
        font-weight: bold;
      }
      `}
      </style>
      <main className={styles.main}>
        <h1 className={styles.pageHeading}>Contact Form :</h1>
        <hr className={styles.afterPageHeading} />
        <form className={styles.form}>
          <div className={styles.name}>
            <label htmlFor="name" className={styles.formLabels}>Name :</label>
            <input type="text" className={styles.formControls} name="name" id="name" aria-describedby="nameHelp" value={contacts.name} onChange={onChange} />
          </div>
          <div className={styles.description}>
            <label htmlFor="description" className={styles.formLabels}>Description : </label>
            <textarea className={styles.formControls} name="description" id="description" rows="3" value={contacts.description} onChange={onChange}></textarea>
          </div>
          <div className={styles.email}>
            <label htmlFor="email" className={styles.formLabels}>Email address : </label>
            <input type="email" className={styles.formControls} name="email" id="email" aria-describedby="emailHelp" value={contacts.email} onChange={onChange} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className={styles.phone}>
            <label htmlFor="phoneNumber" className={styles.formLabels}>Phone Number : </label>
            <input type="tel" className={styles.formControls} name="phone" id="phoneNumber" value={contacts.phone} onChange={onChange} />
          </div>
          <div className={styles.btnbody}>
            <button type="submit" className={styles.submitButton} onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </main>
    </>
  )
}
