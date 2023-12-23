import course1 from "../assets/images/Course 1.jpg"
import course2 from "../assets/images/Course 2.jpg"
import course3 from "../assets/images/Course 3.jpg"
import course4 from "../assets/images/Course 4.jpg"

function Popular() {
    return (
      <div class="pop-sec">
        <h1 class="pop-title">Most Popular</h1>
        <p>Pick the best fit</p>
        <div class="pop-img-container">
          <div class="pop-cards">
            <img src={course1} alt=''></img>
            <h3>2023 Python Data Visualisation Masterclass</h3>
            <p>Col Steele</p>
            <p>4.5⭐⭐⭐⭐</p>
            <p>499 <del>999</del></p>
          </div>
          <div class="pop-cards">
            <img src={course2} alt=''></img>
            <h3>Basic to Advance Programming with EMC</h3>
            <p>Col Steele</p>
            <p>5⭐⭐⭐⭐⭐</p>
            <p>499 <del>999</del></p>
          </div>
          <div class="pop-cards">
            <img src={course3} alt=''></img>
            <h3>Web Development Bootcamp 2023</h3>
            <p>Col Steele</p>
            <p>3.5⭐⭐⭐</p>
            <p>499 <del>999</del></p>
          </div>
          <div class="pop-cards">
            <img src={course4} alt=''></img>
            <h3>Master UI/UX Designing with Figma</h3>
            <p>Col Steele</p>
            <p>4.0⭐⭐⭐⭐</p>
            <p>499 <del>999</del></p>
          </div>
          <div class="pop-cards">
            <img src={course4} alt=''></img>
            <h3>2023 Python Data Visualisation Masterclass</h3>
            <p>Col Steele</p>
            <p>4.5⭐⭐⭐⭐</p>
            <p>499 <del>999</del></p>
          </div>
          <div class="pop-cards">
            <img src={course3} alt=''></img>
            <h3>Basic to Advance Programming with EMC</h3>
            <p>Col Steele</p>
            <p>5⭐⭐⭐⭐⭐</p>
            <p>499 <del>999</del></p>
          </div>
          <div class="pop-cards">
            <img src={course2} alt=''></img>
            <h3>Web Development Bootcamp 2023</h3>
            <p>Col Steele</p>
            <p>3.5⭐⭐⭐</p>
            <p>499 <del>999</del></p>
          </div>
          <div class="pop-cards">
            <img src={course1} alt=''></img>
            <h3>Master UI/UX Designing with Figma</h3>
            <p>Col Steele</p>
            <p>4.0⭐⭐⭐⭐</p>
            <p>499 <del>999</del></p>
          </div>
        </div>
      </div>
    )
  }
  export default Popular