import React from 'react'
import './AboutSection.css'

function AboutSection() {
  return (
    <div className='about'>
      <div className="about-wrapper">
        <div className="about-image">
          <img 
            src="https://media.istockphoto.com/id/186579070/photo/positive-attitudes-are-the-foundation-to-their-success.jpg?s=612x612&w=0&k=20&c=ssOGrcWa9t6EH8JBbMPkTrvhZZgvjRyDXrWnGRq15mo="
            alt='A man and a woman stand against each other smiling.'
            >
          </img>
        </div>
        <div className="about-text">
          <h1>About</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin dolor sit amet orci tincidunt pulvinar. Etiam tempor sollicitudin urna, ac lacinia enim laoreet eu. Sed auctor velit tempor sapien ullamcorper placerat. Duis vestibulum ligula at aliquam tristique. Vivamus gravida rutrum tellus, at malesuada tellus finibus quis. Sed egestas, nisl id elementum ultrices, mi leo rutrum justo, ut hendrerit purus metus condimentum quam. Mauris vulputate lacus lacus, quis posuere purus feugiat vitae. Maecenas et justo lobortis, consectetur tortor vitae, iaculis dolor. </p>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
