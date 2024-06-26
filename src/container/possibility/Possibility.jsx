import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
    return (
        <div className='gpt3__possibility section__padding' id='possibility'>
            <div className='gpt3__possibility-image'>
                <img src={possibilityImage} alt="possibility" />
            </div>
            <div className='gpt3__possibility-content'>
                <h4>Request early access to get started</h4>
                <h1 className='gradient__text'>GPT-4 is OpenAI’s most advanced system, producing safer and more useful responses</h1>
                <p>Following the research path from GPT, GPT-2, and GPT-3, our deep learning approach leverages more data and more computation to create increasingly sophisticated and capable language models.</p>
                <h4>GPT-4 outperforms GPT-3.5 by scoring in higher approximate percentiles among test-takers.</h4>
            </div>
        </div>
    )
}

export default Possibility
