const Navbar = () => {
  return (
    <>
      <nav class="flex-container sidebar-container">
        <div class="flex-container">
          {/* <!-- div*2>img --> */}
          <div class="mr-10">
            <i class="fa-solid fa-bars"></i>
          </div>
          <div class="flex-container ml-10">
            <div>
              <i class="fa-brands fa-youtube" color="red"></i>
            </div>

            <div>
              <h4>YouTube</h4>
            </div>
          </div>
        </div>
        <div class="flex-container">
          <div class="mr-10">
            <input type="search" placeholder="Search" class="search" />
          </div>
          <div>
            <button>
              <i class="fa-light fa-magnifying-glass"></i>
            </button>
          </div>
          <div class="ml-10">
            <i class="fa-solid fa-microphone"></i>
          </div>
        </div>
        <div class="flex-container">
          <div class="mr-10">
            <i class="fa-solid fa-video"></i>
          </div>

          <div class="mr-10">
            <i class="fa-solid fa-bell"></i>
          </div>
          <div class="mr-10">
            <i class="fa-solid fa-circle-user"></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
