import React from 'react';
import './App.css';




const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src="https://uc.agronews.com/sitelogomain/i/1579001627_21339116715e1da71b0ff535.71571325.png" />
      </header>
      <nav className='nav'>
        <div><a>Profile</a></div>
        <div><a>Messages</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Setting</a></div>
      </nav>
      <div className='content'>
        <img src='https://farming.org.ua/files/rye/%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F%20%D0%B2%D1%8B%D1%80%D0%B0%D1%89%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%BE%D0%B7%D0%B8%D0%BC%D0%BE%D0%B9%20%D1%80%D0%B6%D0%B8.jpg'/>
        <div>ava + description</div>
        <div>My post</div>
        <div>Posted
          <div>post-1</div>
          <div>post-2</div>
        </div>
      </div>
    </div>
  )
}

export default App;
