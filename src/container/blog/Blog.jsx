import React from 'react'
import './blog.css'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-containter-groupA'>
          <Article imgUrl={blog01} date="June 21, 2024" title="OpenAI acquires Rockset" />
        </div>
        <div className='gpt3__blog-containter-groupB'>
          <Article imgUrl={blog02} date="June 20, 2024" title="Empowering defenders through our Cybersecurity Grant Program" />
          <Article imgUrl={blog03} date="June 15, 2024" title="Improved Techniques for Training Consistency Models" />
          <Article imgUrl={blog04} date="June 14, 2024" title="A Holistic Approach to Undesired Content Detection in the Real World" />
          <Article imgUrl={blog05} date="June 14, 2024" title="Paf’s engineering team creates 85 custom GPTs to surge developer productivity" />
        </div>
      </div>
    </div>
  )
}

export default Blog
