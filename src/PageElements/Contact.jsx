import GreenThingy from "./GreenThingy"
import '../Stylesheets/Contact.css'
import emailjs from '@emailjs/browser'
import { useEffect, useState } from "react"

const initialForm = {
    to_name : "",
    to_email: "",
    phone : "",
    subject: "" 
}

function Contact(){

    useEffect(() => {
        window.scrollTo(0, 0)
        }, [])
        
    var date = new Date()
    const [hasSend, setHasSend] = useState(false)
    const [formData, setFormData] = useState({...initialForm})
    function send_contact(e){
        e.preventDefault()
        
        if (validateInput(formData)){
            console.log("Stuur email")
            setHasSend(true)
        emailjs.send('service_k9kb5ue', 'template_jt5cuxb',
        {
          to_name: formData.to_name,
          to_email: formData.to_email,
          phone: formData.phone,
          date: date.toDateString(),
          subject: formData.subject
        }).then(
          (response) => {
            console.log('Succes!', response.status, response.text)
            setHasSend(true)
          },
          (error) => {
            console.log('Error', error)
          })
         }

    }

    function validateInput(form){
        if (!form.to_name) return false
        if (!form.to_email) return false
        if (!form.to_email.includes("@")) return false
        if (!form.to_email.split("@")[0]) return false
        if (!form.to_email.split("@")[1]) return false        
        if (form.to_email.split("@")[2]) return false
        if (!form.subject) return false

        return true
    }

    emailjs.init({
        publicKey: 'JKfJpovNNiVJINLud'
    })

    const handleInput = (event) =>{
        const {name, value} = event.target
        if (name){
            setFormData({...formData, [name] : value})
        }   
    }

    return (<>
        <GreenThingy text='Contact' format='../Assets/Images/cast_image.jpg'/>
        <div className="contact_page">
            <div className="contact_info">
                <h3>Contactgegevens</h3>
                <div>
                    <p>@Pandemoniumtheater</p>
                    <p>theaterpandemonium@gmail.com</p>
                </div>
                <div>
                    <p>Cultuurcampus Vleuten</p>
                </div>
            </div>
            <div>
                {
                    hasSend ? 
                    <form action="action_page.php" className="contact_form">
                    <p>Bedankt voor je reactie {formData.to_name}</p>
                    <p>Wij nemen zo snel mogelijk contact met je op!</p>
                     </form> 
                    :
                    <form action="action_page.php" className="contact_form">
                    <p>Heb je een vraag of opmerking?</p>
                    <p>Neem contact met ons op</p>
                    <label for="to_name">Naam  *</label>
                    <input required type="text" id="to_name" name="to_name" value={formData.to_name}  onChange={handleInput} placeholder="Naam..."/>

                    <label for="to_email">Email  *</label>
                    <input required type="email" id="to_email" name="to_email" value={formData.to_email} onChange={handleInput} placeholder="Email..."/>

                    
                    <label for="phone">Telefoonnummer</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInput} placeholder="Telefoonnummer..."/>


                    <label for="subject">Opmerking  *</label>
                    <textarea required id="subject" name="subject" placeholder="" onChange={handleInput} value={formData.subject} style={{"height":"200px"}}></textarea>

                    <button disabled={!validateInput(formData)} className="submit" onClick={(e)=> send_contact(e)}>Verzenden</button>

                     </form> 
                }

            </div>
        </div>
    </>)
}

export default Contact