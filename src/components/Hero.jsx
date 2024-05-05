import img from '../assets/hero-app-img.png'


function Hero() {
    return (
      <section className="hero" id="home">
        <div className="hero-content">
          <h1 className="hero-title"><span className='color'>Increase</span>  Sales <br /> <span className='color'>Boost</span> Online Reviews</h1>
          <p className="hero-subtitle">Help your customers discover your <span className='color'><b>local</b></span> restaurant <br /> and seamlessly place orders</p>
          <div className="cta-buttons">
            <a href="#online-ordering"><button className="hero-btn">Online ordering</button></a>
            <a href="#payment"><button className="hero-btn">Payment processing</button></a>
            <a href="#customer-reviews-features"><button className="hero-btn">Customer reviews</button></a>
            <a href="#performance"><button className="hero-btn">Performance reporting</button></a>
            <a href="#branding"><button className="hero-btn">Customized Branding</button></a>
            <a href="#loyalty"><button className="hero-btn">Increased Loyalty</button></a>
          </div>
        </div>
        <div className="hero-img">
            <img src={img} alt='' />
        </div>
      </section>
    );
  }
  
  export default Hero;
