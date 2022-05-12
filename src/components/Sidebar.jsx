const Sidebar = () => {
  return (
    <>
      <aside>
        <div class="sidebar-container">
          <div class="flex-container hover">
            <div class="mr-10">
              <i class="fa-solid fa-house"></i>
            </div>
            <div class="ml-10">Home</div>
          </div>
          <div class="flex-container hover">
            <div class="mr-10">
              <i class="fa-solid fa-compass"></i>
            </div>
            <div class="ml-10">Explore</div>
          </div>
          <div class="flex-container hover">
            <div class="mr-10">
              <i class="fa-solid fa-radio"></i>
            </div>
            <div class="ml-10">Shorts</div>
          </div>
          <div class="flex-container hover">
            <div class="mr-10">
              <i class="fa-solid fa-circle-play"></i>
            </div>
            <div class="ml-10">Subscriptions</div>
          </div>
        </div>
        {/* <!-- shift+alt+downarrow --> */}
        <div class="sidebar-container">
          <div class="flex-container hover">
            <div class="mr-10">
              <i class="fa-regular fa-book"></i>
            </div>
            <div class="ml-10">Library</div>
          </div>
          <div class="flex-container hover">
            <div class="mr-10">
              <i class="fa-solid fa-clock-rotate-left"></i>
            </div>
            <div class="ml-10">History</div>
          </div>
          <div class="flex-container hover">
            <div class="mr-10">
              <i class="fa-solid fa-circle-play"></i>
            </div>
            <div class="ml-10"></div>
            Your Videos
          </div>

          <div class="flex-container hover">
            <div class="mr-10">
              <i class="fa-solid fa-radio"></i>
            </div>
            <div class="ml-10">Watch later</div>
          </div>
          <div class="flex-container hover">
            <div class="mr-10">
              <i class="fa-solid fa-thumbs-up"></i>
            </div>
            <div class="ml-10">Liked videos</div>
          </div>
          <div class="flex-container hover">
            <div class="mr-10">
              <i class="fa-solid fa-angle-down"></i>
            </div>
            <div class="ml-10">Show more</div>
          </div>
        </div>
        <div class="sidebar-container">
          <div class="flex-container hover">
            <div class="mr-10">
              <i class="fa-solid fa-clock-rotate-left"></i>
            </div>
            <div class="ml-10">Settings</div>
          </div>
          <div class="flex-container hover">
            <div class="mr-10">
              <i class="fa-solid fa-circle-play"></i>
            </div>
            <div class="ml-10">Help</div>
          </div>
          <div class="flex-container hover">
            <div class="mr-10">
              <i class="fa-solid fa-radio"></i>
            </div>
            <div class="ml-10">Report History</div>
          </div>
          <div class="flex-container hover">
            <div class="mr-10">
              <i class="fa-solid fa-thumbs-up"></i>
            </div>
            <div class="ml-10">Send Feedback</div>
          </div>
        </div>
        <div>
          {/* <!-- ul>li*8>a --> */}
          <ul class="footer">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Press</a>
            </li>
            <li>
              <a href="">Copyright</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Creator</a>
            </li>
            <li>
              <a href="">Advertise</a>
            </li>
            <li>
              <a href="">Developers</a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
