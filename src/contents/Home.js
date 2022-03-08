import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social'

export default function Home() {
    return <div className="condiv home">
        <h1><mark>mkrkru</mark></h1>
        <ReactTypingEffect className="typingeffect" text={['Full-stackoverflow Developer', 'Average TypeScript enjoyer', 'Just a good person :)']} speed={100} eraseDelay={900} />
        <div className="hr_line glass"><div className="hr_inner"></div></div>
        <Social />
    </div>
}
