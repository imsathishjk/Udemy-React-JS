import header from "../assets/images/sale-img.jpg"


function SaleImage() {
    return (
      <div class="sale-img">
        <img src={header} alt=""></img>
        <div class="sale__offer">
          <h2>Udemy Flash Sale 24 hours to save</h2>
          <p>Get the top Courses for just Rs.499. Just one day to save but a lifetime to learn</p>
        </div>
      </div>
    )
  }
export default SaleImage