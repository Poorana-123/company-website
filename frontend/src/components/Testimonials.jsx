import React from "react";
import "../styles/Testimonials.css";

const Testimonials = () => {

    const testimonials = [
        {
            name: "Arun Kumar",
            role: "Startup Founder",
            image: "/images/user1.jpg",
            review:
                "The team delivered an excellent website with modern design and great performance. Highly recommended!"
        },

        {
            name: "Priya Sharma",
            role: "Business Owner",
            image: "/images/user2.jpg",
            review:
                "Professional service, quick response, and innovative solutions. They helped us grow our online presence."
        },

        {
            name: "Rahul Verma",
            role: "Product Manager",
            image: "/images/user3.jpg",
            review:
                "Amazing development team with strong technical skills. The final product exceeded our expectations."
        }
    ];


    return (

        <section className="testimonial-section">

            <div className="testimonial-header">

                <h2>
                    What Our <span>Clients Say</span>
                </h2>

                <div className="testimonial-line"></div>

                <p>
                    Our clients trust us for delivering innovative,
                    reliable and scalable technology solutions.
                </p>

            </div>



            <div className="testimonial-container">


                {
                    testimonials.map((item,index)=>(

                        <div 
                        className="testimonial-card"
                        key={index}
                        >

                            <div className="quote">
                                "
                            </div>


                            <p>
                                {item.review}
                            </p>


                            <div className="client-info">

                                <img 
                                src={item.image}
                                alt={item.name}
                                />


                                <div>

                                    <h3>
                                        {item.name}
                                    </h3>

                                    <span>
                                        {item.role}
                                    </span>

                                </div>

                            </div>


                        </div>

                    ))
                }


            </div>


        </section>

    );
}


export default Testimonials;