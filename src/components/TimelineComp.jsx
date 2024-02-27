import React, { useEffect } from 'react';
import './timeline.css'; // Make sure to import your CSS file

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

      // Clean up event listeners when component unmounts
      return () => {
        window.removeEventListener("load", callbackFunc);
        window.removeEventListener("scroll", callbackFunc);
      };
    }

    // Apply animation to both timelines
    applyTimelineAnimation("timeline");
    applyTimelineAnimation("timeline_2");
  }, []);

  return (
    <div className="text-[#610d83] pb-10 font-semibold text-[16px/1.5] leading-6 sans-serif min-h-screen flex flex-col">
      <section className="timeline">
        <ul>
        <li>
            <div>
              <time>9:00AM to 11:30AM</time>
              <div className="discovery">
                <h1>Inauguration</h1>
                <p>(auditorium)</p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <time>11:30AM to 1:00PM</time>
              <div className="discovery">
                <h1>Code Quest</h1>
                <p>(Computer Lab)</p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <time>12:00PM to 1:00PM</time>
              <div className="discovery">
                <h1>Movie Madness</h1>
                <p>(LH-30)</p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <time>12:30PM to 2:00PM</time>
              <div class="discovery">
                <h1>FOOD</h1>
                <p>(AB-2)</p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <time>2:00PM to 5:30PM</time>
              <div class="discovery">
                <h1>Genarative AI</h1>
                <p>(Auditorium)</p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <time>2:00PM to 5:30PM</time>
              <div class="discovery">
                <h1>Drone Technology</h1>
                <p>(English Lab)</p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <time>2:00PM to 2:30PM</time>
              <div class="discovery">
                <h1>Type Sprint</h1>
                <p>(CSE LAB)</p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <time>2:30PM to 4:30PM</time>
              <div class="discovery">
                <h1>IPL Auction</h1>
                <p>(LH-30)</p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <time>4:30PM to 5:30PM</time>
              <div class="discovery">
                <h1>Get Grab Gather</h1>
                <p>(AB-2)</p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <time>5:30PM to 9:00PM</time>
              <div class="discovery">
                <h1>Culturals</h1>
                <p>(Ground)</p>
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
                <h1>Ex-Quiz-Me</h1>
                <p>(LH-30)</p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <time>9:00AM to 12:00AM</time>
              <div className="discovery">
                <h1>Genarative AI</h1>
                <p>(Auditorium)</p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <time>9:00AM to 12:00AM</time>
              <div className="discovery">
                <h1>Drone Technology</h1>
                <p>(English Lab)</p>
              </div>
            </div>
          </li>
          <li>
          <div>
            <time>10:00AM to 11:00AM</time>
            <div class="discovery">
              <h1>Logic League</h1>
              <p>(CSE LAB)</p>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>11:00AM to 12:30PM</time>
            <div class="discovery">
              <h1>Cipher Chase</h1>
              <p>(CSE LAB)</p>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>12:30PM to 2:00PM</time>
            <div class="discovery">
              <h1>FOOD</h1>
              <p>AB-2</p>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>1:30PM to 3:00PM</time>
            <div class="discovery">
              <h1>Genarative AI</h1>
              <p>(Auditorium)</p>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>1:30PM to 3:00PM</time>
            <div class="discovery">
              <h1>Drone Technology</h1>
              <p>English Lab</p>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>2:00PM to 3:00PM</time>
            <div class="discovery">
              <h1>Crypto Venture</h1>
              <p>(CSE LAB)</p>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>3:00PM to 3:45PM</time>
            <div class="discovery">
              <h1>Hunt the Hint</h1>
              <p>()</p>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>3:30PM to 5:00PM</time>
            <div class="discovery">
              <h1>Valedictory</h1>
              <p>()</p>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>5:00PM to 6:30PM</time>
            <div class="discovery">
              <h1>Flash Mob</h1>
              <p>()</p>
            </div>
          </div>
        </li>

        </ul>
      </section>
    </div>
  );
};

export default YourComponent;
