import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt4'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT4?" text="GPT-4 can solve difficult problems with greater accuracy, thanks to its broader general knowledge and problem solving abilities." />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p> Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Creativity" text="GPT-4 is more creative and collaborative than ever before. It can generate, edit, and iterate with users on creative and technical writing tasks, such as composing songs, writing screenplays, or learning a user’s writing style. " />
        <Feature title="Visual Input" text="GPT-4 can accept images as inputs and generate captions, classifications, and analyses." />
        <Feature title="Longer context" text="GPT-4 is capable of handling over 25,000 words of text, allowing for use cases like long form content creation, extended conversations, and document search and analysis." />
      </div>
    </div>
  )
}

export default WhatGPT3
