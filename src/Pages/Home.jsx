import React from 'react'
const Home = () => {
  return (
  <div>
    <div id="carouselExampleInterval" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src="https://i.postimg.cc/QMcR9ybH/slider1.jpg" class="d-block w-100" alt="slider1"></img>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://i.postimg.cc/L81WwbGN/slider2.jpg" class="d-block w-100" alt="slider2"></img>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://i.postimg.cc/FKX64x4m/slider3.jpg" class="d-block w-100" alt="slider3"></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
  <div>
  <p className='text-center fs-3 text-uppercase pt-2 bg-white border-bottom border-danger'>Destacados</p>
    <div className='container d-flex justify-content-center '>
      <div className='row '>
        <div className='col-3'>
          <div style={styles.img}>
            <img src="https://i.postimg.cc/1zMrj0Rv/1.gif" className='card-img-top' alt='producto1'></img>
          </div>
          </div>
          <div className='col-3'>
          <div style={styles.img}>
            <img src="https://i.postimg.cc/C11sTZzS/2.gif" className='card-img-top' alt='producto1'></img>
          </div>
          </div>
          <div className='col-3'>
          <div style={styles.img}>
            <img src="https://i.postimg.cc/3RcCKKvp/3.gif" className='card-img-top' alt='producto1'></img>
          </div>
          </div>
          <div className='col-3'>
          <div style={styles.img}>
            <img src="https://i.postimg.cc/bYBBmPdK/4.gif" className='card-img-top' alt='producto1'></img>
          </div>
          </div>
          </div>
  </div>
  </div>
  </div>

  )
}

export default Home

const styles = { 
  img : {
    width: '100%',
  }
}