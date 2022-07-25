import React from 'react'
import imagenes from '../assets/imagenes'
const Home = () => {
  return (
  <div>
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={imagenes.slider1} class="d-block w-100" alt="slider1"></img>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={imagenes.slider2} class="d-block w-100" alt="slider2"></img>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={imagenes.slider3} class="d-block w-100" alt="slider3"></img>
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
    <div className='container'>
      <div className='row '>
        <div className='col-md-4'>
          <div className=''>
            <img src={imagenes.gif1} className='card-img-top' alt='producto1'></img>
          </div>
          </div>
          <div className='col-md-4'>
          <div className=''>
            <img src={imagenes.gif2} className='card-img-top' alt='producto1'></img>
          </div>
          </div>
          <div className='col-md-4'>
          <div className=''>
            <img src={imagenes.gif3} className='card-img-top' alt='producto1'></img>
          </div>
          </div>
          </div>
  </div>
  </div>
  </div>

  )
}

export default Home