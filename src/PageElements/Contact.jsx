import GreenThingy from "./GreenThingy"
import '../Stylesheets/Contact.css'

function Contact(){
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

                    <label for="fname">Naam</label>
                    <input type="text" id="fname" name="firstname" placeholder="Naam..."/>

                    <label for="lname">Email</label>
                    <input type="text" id="lname" name="lastname" placeholder="Email..."/>

                    
                    <label for="lname">Telefoonnummer</label>
                    <input type="text" id="lname" name="lastname" placeholder="Telefoonnummer"/>


                    <label for="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." style={{"height":"200px"}}></textarea>

                    <input type="submit" value="Submit"/>

                </form>
            </div>
        </div>
    </>)
}

export default Contact