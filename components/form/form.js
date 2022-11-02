import styles from '../../styles/Contact.module.css';
import {useState} from "react";

const Form = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    let data = {
      name,
      email,
      message
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      console.log(res);
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setMessage('')
      }
    })
  }

  return (
    <form className={styles.main}>

      <div className={styles.container}>
        <formGroup className={styles.inputGroup}>
          <label className={styles.inputLabel} htmlFor='name'>Nom</label>
          <input type='text' onChange={(e) => {
            setName(e.target.value)
          }} name='name' className={styles.inputField}/>
        </formGroup>

        <formGroup className={styles.inputGroup}>
          <label className={styles.inputLabel} htmlFor='email'>Email</label>
          <input type='email' onChange={(e) => {
            setEmail(e.target.value)
          }} name='email' className={styles.inputField}/>
        </formGroup>

        <formGroup className={styles.inputGroup}>
          <label className={styles.inputLabel} htmlFor='message'>Message</label>
          <textarea id={styles["inputMessage"]} onChange={(e) => {
            setMessage(e.target.value)
          }} name='message' className={styles.inputField}/>
        </formGroup>

        <input className={styles.inputSubmit} type='submit' onClick={(e) => {
          handleSubmit(e)
        }} value="ENVOYER"/>
      </div>
    </form>
  )
}

export default Form;