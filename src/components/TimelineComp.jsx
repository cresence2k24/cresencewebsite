import React, { useEffect } from 'react';
import './timeline.css'; 

const YourComponent = () => {
  useEffect(() => {
    function applyTimelineAnimation(className) {
      var items = document.querySelectorAll("." + className + " li");

      function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= -150 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight + 100 || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }

      function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
          if (isElementInViewport(items[i])) {
            if (!items[i].classList.contains("in-view")) {
              items[i].classList.add("in-view");
            }
          } else if (items[i].classList.contains("in-view")) {
            items[i].classList.remove("in-view");
          }
        }
      }

      window.addEventListener("load", callbackFunc);
      window.addEventListener("scroll", callbackFunc);

      callbackFunc()
      return () => {
        window.removeEventListener("load", callbackFunc);
        window.removeEventListener("scroll", callbackFunc);
      };
    }


    applyTimelineAnimation("timeline");
    applyTimelineAnimation("timeline_2");
  }, []);

  return (
    <div className="text-[#610d83] pb-10 font-semibold text-[16px/1.5] leading-6 sans-serif min-h-screen flex flex-col">
      <h1 className='h2 text-gradient text-center'>
        Our Timeline
      </h1>
      <section className="timeline">
        <ul>
        <li>
            <div>
              <time>9:00AM to 11:30AM</time>
              <div className="discovery">
                <h1 className='text-[30px]'>Inauguration</h1>
                <p className='text-2xl'>(auditorium)</p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <time>11:30AM to 1:00PM</time>
              <div className="discovery">
                <h1 className='text-[30px]'>Code Quest</h1>
                <p className='text-2xl'>(Computer Lab)</p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <time>12:00PM to 1:00PM</time>
              <div className="discovery">
                <h1 className='text-[30px]'>Movie Madness</h1>
                <p className='text-2xl'>(LH-30)</p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <time>12:30PM to 2:00PM</time>
              <div class="discovery">
                <h1 className='text-[30px]'>FOOD</h1>
                <p className='text-2xl'>(AB-2)</p>
              </div>
            </div>
          </li>
          
          <li>
            <div>
              <time>2:00PM to 2:30PM</time>
              <div class="discovery">
                <h1 className='text-[30px]'>Type Sprint</h1>
                <p className='text-2xl'>(CSE LAB)</p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <time>2:30PM to 4:30PM</time>
              <div class="discovery">
                <h1 className='text-[30px]'>IPL Auction</h1>
                <p className='text-2xl'>(LH-30)</p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <time>4:30PM to 5:30PM</time>
              <div class="discovery">
                <h1 className='text-[30px]'>Get Grab Gather</h1>
                <p className='text-2xl'>(AB-2)</p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <time>5:30PM to 9:00PM</time>
              <div class="discovery">
                <h1 className='text-[30px]'>Culturals</h1>
                <p className='text-2xl'>(Ground)</p>
              </div>
            </div>
          </li>

        </ul>
      </section>
      <section className="timeline_2">
        <ul>
        <li>
            <div>
              <time>9:00AM to 11:00AM</time>
              <div className="discovery">
                <h1 className='text-[30px]'>Ex-Quiz-Me</h1>
                <p className='text-2xl'>(LH-30)</p>
              </div>
            </div>
          </li>
          
          <li>
          <div>
            <time>10:00AM to 11:00AM</time>
            <div class="discovery">
              <h1 className='text-[30px]'>Logic League</h1>
              <p className='text-2xl'>(CSE LAB)</p>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>11:00AM to 12:30PM</time>
            <div class="discovery">
              <h1 className='text-[30px]'>Cipher Chase</h1>
              <p className='text-2xl'>(CSE LAB)</p>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>12:30PM to 2:00PM</time>
            <div class="discovery">
              <h1 className='text-[30px]'>FOOD</h1>
              <p className='text-2xl'>(AB-2)</p>
            </div>
          </div>
        </li>
        
        <li>
          <div>
            <time>2:00PM to 3:00PM</time>
            <div class="discovery">
              <h1 className='text-[30px]'>Crypto Venture</h1>
              <p className='text-2xl'>(CSE LAB)</p>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>3:00PM to 3:45PM</time>
            <div class="discovery">
              <h1 className='text-[30px]'>Hunt the Hint</h1>
              {/* <p className='text-2xl'>()</p> */}
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>3:30PM to 5:00PM</time>
            <div class="discovery">
              <h1 className='text-[30px]'>Valedictory</h1>
              {/* <p className='text-2xl'>()</p> */}
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>5:00PM to 6:30PM</time>
            <div class="discovery">
              <h1 className='text-[30px]'>Flash Mob</h1>
              {/* <p className='text-2xl'>()</p> */}
            </div>
          </div>
        </li>

        </ul>
      </section>
    </div>
  );
};

export default YourComponent;
