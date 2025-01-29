import { useState } from "react";

    const Contact = () => {
        const [formData, setFormData] = useState({
            name: "",
            email: "",
            message: "",
        });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
    };
 
 
 

    return (
        <>
            <div className="hero-img-cont">
                <div className="hero-img-main">
                    <h1>Contact Us!</h1>
                    <p className="hero-img-txt">
                        We'd love to hear any ideas or concerns you have. We'll see your message at the finish line!
                    </p>
                </div>
                <img 
                    src="https://global.discourse-cdn.com/forza/original/4X/5/5/2/5520d16472f8eaef1fbf83c240d246e67b861646.png" 
                    alt="Porsche Badge"
                />
            </div>
            <div className="contact">
           <form onSubmit={handleSubmit}>
               <div className="input-group">
                   <label htmlFor="name">Name</label>
                   <input
                       type="text"
                       id="name"
                       name="name"
                       value={formData.name}
                       onChange={handleChange}
                       required
                   />
               </div>

               <div className="input-group">
                   <label htmlFor="email">Email</label>
                   <input
                       type="email"
                       id="email"
                       name="email"
                       value={formData.email}
                       onChange={handleChange}
                       required
                   />
               </div>

               <div className="input-group">
                   <label htmlFor="message">Message</label>
                   <textarea
                       id="message"
                       name="message"
                       value={formData.message}
                       onChange={handleChange}
                       required
                   />
               </div>

               <button type="submit">Send Message</button>
           </form>
       </div>

        </>
    );
};

export default Contact;
