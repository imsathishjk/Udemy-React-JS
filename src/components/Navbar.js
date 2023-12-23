
function Navbar() {
    return (
      <div class="header">
        <div class="navbar">
          <h1>Udemy</h1>
        </div>
        <div class="navbar2">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input placeholder="Search for anything here, Tech, Business, Art..."></input>
        </div>
        <div class="navbar3">
          <p> Trending Courses</p>
          <div class="mylearning">
            <p>My Learning</p>
            <div class="mylearning__popup">
              You did not Purchase anything yet!
            </div>
          </div>
          <i class="fa-solid fa-cart-shopping"></i>
          <i class="fa-solid fa-bell"></i>
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="navbar4">
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>
    )
  }
  export default Navbar