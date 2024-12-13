import GreenThingy from "./GreenThingy"
import '../Stylesheets/Contact.css'
import emailjs from '@emailjs/browser'
import { useState } from "react"

const initialForm = {
    to_name : "",
    to_email: "",
    phone : "",
    message: "" 
}

function Contact(){

    const [formData, setFormData] = useState({...initialForm})
    // function send_contact(e){
    //     e.preventDefault()
    //     console.log("Stuur email")
    //     emailjs.send('service_qm5zcoh', 'template_t60l20l',
    //     {
    //       to_name: formData.firstName,
    //       to_email: formData.email,
    //       phone: formData.phone,
    //       date: dateTime.toDateString(),
    //       time: dateTime.toLocaleTimeString(),
    //       subject: formData.message
    //     }).then(
    //       (response) => {
    //         console.log('Succes!', response.status, response.text)
    //       },
    //       (error) => {
    //         console.log('Error', error)
    //       })
    //     }


    // emailjs.init({
    //     publicKey: 'JKfJpovNNiVJINLud'
    // })

    return (<>
        <GreenThingy text='Contact' format='../Assets/Images/cast_image.jpg'/>
        <div className="contact_page">
            <div className="contact_info">
                <h3>Contactgegevens</h3>
                <div>
                    <p>@Pandemoniumtheater</p>
                    <p>06-21472515</p>
                    <p>theaterpandemonium@gmail.com</p>
                </div>
                <div>
                    <p>Cultuurcampus Vleuten</p>
                </div>
            </div>
            <div>
                <form action="action_page.php" className="contact_form">
                    <p>Heb je een vraag of opmerking?</p>
                    <p>Neem contact met ons op</p>
                    <label for="fname">Naam</label>
                    <input type="text" id="fname" name="firstname" placeholder="Naam..."/>

                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email..."/>

                    
                    <label for="phone">Telefoonnummer</label>
                    <input type="tel" id="phone" name="phone" placeholder="Telefoonnummer"/>


                    <label for="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." style={{"height":"200px"}}></textarea>

                    <button className="submit" onClick={(e)=> (e)}>Verzenden</button>

                </form>
            </div>
        </div>
    </>)
}

export default Contact