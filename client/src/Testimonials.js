import React from 'react';

import './Testimonials.css';

class Testimonials extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className = "Testimonials">
            <p className = "TestimonialsHeading"> Testimonials </p>
                <p className = "TestimonialsText1">
                InShape really helped me turn my lifestyle around! I always put my health on the back burner because of how busy I was 
                with academics in college and then with work once I graduated. It wasn’t until a friend mentioned InShape to me that I 
                started to look into the importance of exercise and nutrition. The benefits were too good to ignore, so I started using 
                InShape to create my exercise and nutrition plans. Thanks, InShape!
                </p>
                <p className = "TestimonialGiver1">
                - Caroline 
                </p>

                <p className = "TestimonialsText2">
                I’m so grateful for InShape. When I finally admitted I needed to make a lifestyle change, I went right to InShape. It 
                helped me combine exercise and nutrition to create a version of myself that I am so proud of! I lost 20 pounds by paying
                more careful attention to my diet and exercising in ways that focused on more than only cardio. I’ve never looked or felt 
                so good! 
                </p>
                <p className = "TestimonialGiver2">
                - Liv 
                </p>

                <p className = "TestimonialsText3">
                I never thought InShape would change my life. I never even thought nutrition would change me! But using InShape improved 
                my energy levels, productivity, and self-esteem. I’ve never felt this good before! InShape was an enjoyable way to focus
                on my food choices. It makes it so easy to find recipes that I’ll enjoy and that are good for what my body really needs. 
                I don’t know where I’d be without InShape! 
                </p>
                <p className = "TestimonialGiver3">
                - Jack 
                </p>
            </div>
        )
    }
}

export default Testimonials;