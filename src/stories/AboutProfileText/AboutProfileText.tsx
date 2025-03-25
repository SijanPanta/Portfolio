import React from 'react';
import './AboutProfileText.css';

interface AboutProfileTextProps {}

export const AboutProfileText = ({ ...props }: AboutProfileTextProps) => {
  return (
    <>
      <article className="about-profile-text">
        <p>Hey there you super awesome person!</p>
        <p>
          My name is Sijan, and I am a Frontend Developer from Kathmandu, Nepal.
        </p>
        <p>
          I work as a Frontend Developer using the JavaScript and React
          technical stacks. I excel at building full-stack apps, and I spend
          most of my programming time working on backends and frontend UI with
          React. Communication skills and teamworks are two of my strongest
          soft skills. I enjoy contributing back to the developer community.
        </p>
        <p>
          My programming skills are quite good as are my design skills. In fact
          I designed this website using the design tool Figma. 
        </p>
        <p>Peace out </p>
      </article>
    </>
  );
};

export default AboutProfileText;
