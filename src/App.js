import n2 from './assets/images/avatar-angela-gray.webp';
import n7 from './assets/images/avatar-anna-kim.webp';
import n3 from './assets/images/avatar-jacob-thompson.webp';
import n5 from './assets/images/avatar-kimberly-smith.webp';
import n1 from './assets/images/avatar-mark-webber.webp';
import n6 from './assets/images/avatar-nathan-peterson.webp';
import n4 from './assets/images/avatar-rizky-hasanuddin.webp';
import chess from './assets/images/image-chess.webp';

import './App.scss';
import { useState } from 'react';

function App() {

  const [read, isRead] = useState(false);

  const handleRead = () =>{
    isRead(!read);
  };

  return (
    <section className='noti-card'>
      <header className='noti-card-header'>
        <h1>Notifications <strong>3</strong></h1>
        <button onClick={handleRead}>Mark all as read</button>
      </header>
      <article className={ read ? 'nc-notification n1 read' : 'nc-notification n1 unread'}>
        <img src={n1} alt=''/>
        <div className='n-info'>
          <p><strong>Mark Webber </strong> reacted to your recent post <span>My first tournament today!</span><span className='reddot'><i class="fa-solid fa-circle"></i></span></p>
          <span>1m ago</span>
        </div>
      </article>
      <article className={ read ? 'nc-notification n2 read' : 'nc-notification n2 unread'}>
        <img src={n2} alt=''/>
        <div className='n-info'>
          <p><strong>Angela Gray </strong>followed you<span className='reddot'><i class="fa-solid fa-circle"></i></span></p>
          <span>5m ago</span>
        </div>
      </article>
      <article className={ read ? 'nc-notification n3 read' : 'nc-notification n3 unread'}>
        <img src={n3} alt=''/>
        <div className='n-info'>
          <p><strong>Jacob Thompson </strong>has joined your group <a href='/'>Chess Club</a><span className='reddot'><i class="fa-solid fa-circle"></i></span></p>
          <span>1 day ago</span>
        </div>
      </article>
      <article className='nc-notification n4 read'>
       <img src={n4} alt=''/>
       <div className='n-info'>
          <p><strong>Rizky Hasanuddin </strong>sent you a private message<span className='reddot'><i class="fa-solid fa-circle"></i></span></p>
          <span>5 days ago</span>
          <p id='msg'>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.</p>
        </div> 
      </article>
      <article className='nc-notification n5 read'>
        <img src={n5} alt=''/>
        <div className='n-info'>
          <p><strong>Kimberly Smith </strong>commented on your picture<span className='reddot'><i class="fa-solid fa-circle"></i></span></p>
          <span>1 week ago</span>
        </div>
        <img src={chess} alt=''/>
      </article>
      <article className='nc-notification n6 read'>
        <img src={n6} alt=''/>
        <div className='n-info'>
          <p><strong>Nathan Peterson </strong>reacted to your recent post 5 end-game strategies to increase your win rate<span className='reddot'><i class="fa-solid fa-circle"></i></span></p>
          <span>2 weeks ago</span>
        </div>
      </article>
      <article className='nc-notification n7 read'>
        <img src={n7} alt=''/>
        <div className='n-info'>
          <p><strong>Anna Kim</strong> left the group <a href='/'>Chess Club</a><span className='reddot'><i class="fa-solid fa-circle"></i></span></p>
          <span>2 weeks ago</span>
        </div>
      </article>
    </section>
  );
}

export default App;

// Users should be able to:

// - Distinguish between "unread" and "read" notifications
// - Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
// - View the optimal layout for the interface depending on their device's screen size
// - See hover and focus states for all interactive elements on the page