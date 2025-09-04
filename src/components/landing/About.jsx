import React from "react";

const About = () => {
    const abouts = [
        {
            heading:"Our Mission..",
            description:"At Launchpad, our mission is to make quality tech education accessible and practical. We focus on equipping learners with real-world skills in web development, graphic design, data analysis, and more to prepare them for future opportunities."
        },
        {
            heading:"Who we are!",
            description:"We are a team of passionate educators and industry experts dedicated to transforming learning. By combining knowledge, creativity, and innovation, we help learners gain skills that truly matter in today’s digital world."
        },
        {
            heading:"What we offer!",
            description:"Launchpad provides hands-on courses in web development, graphic designing, data analysis, and other in-demand fields. Each program blends theory with practical projects, ensuring learners build confidence and career-ready skills."
        },
        {
            heading:"Why Launchpad!",
            description:"We offer expert mentorship, flexible learning, and project-based training designed to boost career growth. With a supportive community and industry-relevant courses, Launchpad is the ideal place to begin or advance your digital journey."
        },
        {
            heading:"Our Vision..",
            description:"Our vision is to empower learners worldwide with future-ready skills. We aim to create a global learning community where creativity, technology, and innovation open doors to endless opportunities."
        },
        {
            heading:"Join the Movement..",
            description:"At Launchpad, learning isn’t just about courses it’s about growth, community, and creating impact. Join us today and take your first step toward shaping the future with digital skills that matter."
        },

    ]
    return (
        <div className="h-[100%] w-full flex flex-col items-center">
            <p className="h-auto w-fit flex text-2xl font-semibold mt-6">
                About the launchpad
            </p>

            <div className="flex-1 p-6 grid grid-cols-3 gap-6 items-center max-md:grid-cols-1">
                {
                    abouts.map((about)=>(
                        <div className="h-full flex flex-col px-6 py-4 border-3 rounded-xl border-[#03989E]">
                            <h1 className="text-lg font-semibold">
                                {about.heading}
                            </h1>
                            <p className="text-md font-md">
                                {about.description}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default About;
