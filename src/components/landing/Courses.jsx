import React from "react";

const Courses = () => {
    const coursesDetails = [
        {
            img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
            name: "Web Development",
            mentorName: "Tushar Chaudhary",
            duration: "3 months",
            dateStarted: "21/8/2025",
            star: 3,
            alt: "course1",
        },
        {
            img: "https://media.istockphoto.com/id/2205982417/photo/web-ui-ux-design-web-development-concept-a-web-developer-works-on-a-website-surrounded-by.webp?a=1&b=1&s=612x612&w=0&k=20&c=VvjLoz98ur0OYeq-4K2rIRVCzopXrfEVoLUfPPTcCFs=",
            name: "Web Development using Python",
            mentorName: "Tushar Chaudhary",
            duration: "3 months",
            dateStarted: "21/8/2025",
            star: 5,
            alt: "course1",
        },
        {
            img: "https://media.istockphoto.com/id/1432637898/photo/button-with-the-python-on-the-yellow-keyboard-of-modern-laptop.webp?a=1&b=1&s=612x612&w=0&k=20&c=zYwoMVcRi91ZJZU3df5X38dS51H9N645WkiKURaiVow=",
            name: "Python Programming (Beginner to Advance)",
            mentorName: "Tushar Chaudhary",
            duration: "3 months",
            dateStarted: "21/8/2025",
            star: 2,
            alt: "course1",
        },
        {
            img: "https://images.unsplash.com/photo-1542744095-0d53267d353e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
            name: "Graphic Designing",
            mentorName: "Tushar Chaudhary",
            duration: "3 months",
            dateStarted: "21/8/2025",
            star: 3,
            alt: "course1",
        },
        {
            img: "https://media.istockphoto.com/id/2155202623/photo/data-science-businessman-holding-the-data-network-connecting-icon-linking-business-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=04eX5YYOegMir9b6LNIYHlqGFpzohvNpxpjWkggtaM8=",
            name: "Data Science and Machine Learning",
            mentorName: "Tushar Chaudhary",
            duration: "3 months",
            dateStarted: "21/8/2025",
            star: 3,
            alt: "course1",
        },
        {
            img: "https://images.unsplash.com/photo-1707157281599-d155d1da5b4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RhdGlzdGljc3xlbnwwfHwwfHx8MA%3D%3D",
            name: "Data Analysis",
            mentorName: "Tushar Chaudhary",
            duration: "3 months",
            dateStarted: "21/8/2025",
            star: 4,
            alt: "course1",
        },
    ];
    return (
        <div className="h-[100%] w-full flex flex-col justify-between max-md:gap-3 ">
            <div className="h-[14%] flex flex-col items-center justify-center">
                <h1 className="text-xl font-semibold md:text-2xl">
                    Courses designed for fast changing world
                </h1>
                <p className="text-md font-md">
                    Courses build to prepare you for the real tech world
                </p>
            </div>
            <div className="h-[86%] w-full grid grid-cols-3 grid-rows-2 gap-6 p-3 max-md:grid-cols-1 max-md:grid-rows-6 max-md:h-auto ">
                {coursesDetails.map((course) => (
                    <div className="h-full w-full flex flex-col">
                        <img
                            className="h-7/12 border-3 rounded-xl border-[#03989E]"
                            src={course.img}
                        />
                        <div className="h-2/12 w-full flex justify-between items-center px-1">
                            <div className="h-full w-auto flex">
                                {(() => {
                                    let stars = [];
                                    for (
                                        let index = 0;
                                        index < course.star;
                                        index++
                                    ) {
                                        stars.push(
                                            <img
                                                className="h-full w-auto"
                                                src="star.png"
                                                alt="star"
                                            />
                                        );
                                    }
                                    return stars;
                                })()}
                            </div>
                            <p className="text-sm">
                                {course.mentorName}
                            </p>
                        </div>
                        <h3 className="h-/12 w-full flex justify-start items-center text-md font-semibold px-2">
                             {course.name}
                        </h3>
                        <div className="h-1/12 w-full flex px-1 items-center ">
                            <div className="h-full w-[50%] flex gap-1">
                                <img
                                    className="w-auto h-full"
                                    src="clock.png"
                                    alt="clock"
                                />
                                <h1 className="text-sm font-md">
                                    {course.duration}
                                </h1>
                            </div>
                            <div className="h-full w-[50%] flex gap-1 justify-end">
                                <img
                                    className="w-auto h-full"
                                    src="calender.png"
                                    alt="clock"
                                />
                                <h1 className="text-sm font-md">
                                    {course.dateStarted}
                                </h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
