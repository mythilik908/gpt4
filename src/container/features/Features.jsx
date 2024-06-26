import React from 'react'
import './features.css'
import { Feature } from '../../components/'

const featuresData = [
  {
    title: "Training with human feedback",
    text: "We incorporated more human feedback, including feedback submitted by ChatGPT users, to improve GPT-4’s behavior. We also worked with over 50 experts for early feedback in domains including AI safety and security."
  },
  {
    title: "Continuous improvement from real-world use",
    text: "We’ve applied lessons from real-world use of our previous models into GPT-4’s safety research and monitoring system. Like ChatGPT, we’ll be updating and improving GPT-4 at a regular cadence as more people use it."
  },
  {
    title: "GPT-4-assisted safety research",
    text: "GPT-4’s advanced reasoning and instruction-following capabilities expedited our safety work. We used GPT-4 to help create training data for model fine-tuning and iterate on classifiers across training, evaluations, and monitoring."
  },
  {
    title: "Availability",
    text: "GPT-4 is available on ChatGPT Plus and as an API for developers to build applications and services."
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'> The Future is Now and You Just Need To Realize It.
          Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started </p>
      </div>
      <div className='gpt3__features-feature'>
        {featuresData.map((item, index) =>
          <Feature title={item.title} text={item.text} key={item.title + index} />)}
      </div>
    </div>
  )
}

export default Features
