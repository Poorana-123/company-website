import React from "react";
import "../styles/Why.css";

const Why = () => {

    return (
        <section className="why-section">

            <div className="why-header">

                <h2>
                    Our <span>Values</span>
                </h2>

                <div className="underline"></div>

                <p>
                    Abservetech provides creative websites, native mobile apps,
                    innovative technology services, and custom web mobile app
                    solutions, from startup companies to huge organizations.
                </p>

            </div>


            <div className="why-container">


                {/* LEFT CONTENT */}

                <div className="why-content">


                    <div className="line"></div>


                    <div className="why-text">


                        <div className="value-box">

                            <h3>
                                Latest Technology
                            </h3>

                            <p>
                                We are very adaptive to leading-edge technologies.
                                Our products have built on the latest technologies
                                like MEAN stack, MERN stack, Swift, GraphQL.
                                It is one of the unbeatable aspects that make our
                                clients have a trendy and secured business.
                            </p>

                        </div>



                        <div className="value-box second">

                            <h3>
                                Team of Experts
                            </h3>

                            <p>
                                Our experienced developers and designers work
                                together to deliver scalable, secure and
                                innovative digital solutions.
                            </p>

                        </div>


                        <div className="value-box">

                            <h3>
                                Customer Satisfaction
                            </h3>

                            <p>
                                We focus on understanding customer needs and
                                delivering solutions that create long-term value.
                            </p>

                        </div>


                    </div>


                </div>




                {/* RIGHT IMAGE */}


                <div className="why-image">


                    <div className="glow"></div>


                    <img 
                    src="/images/team.jpg"
                    alt="team"
                    />


                    <div className="shape">
                        ◆
                    </div>


                </div>


            </div>


        </section>
    )
}


export default Why;