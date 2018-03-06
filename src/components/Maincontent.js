import React from 'react';
import './css/Maincontent.css';

class Maincontent extends React.Component {

  render() {
    return (
			<div>
				<div className="container">
					
						<div className="carousel fade-carousel slide" data-ride="carousel" data-interval="4000" id="bs-carousel">
							<div className="overlay"></div>

							<ol className="carousel-indicators">
								<li data-target="#bs-carousel" data-slide-to="0" className="active"></li>
								<li data-target="#bs-carousel" data-slide-to="1"></li>
								<li data-target="#bs-carousel" data-slide-to="2"></li>
							</ol>
							
							<div className="carousel-inner">
								<div className="item slides active">
									<div className="slide-1"></div>
									<div className="hero">
										<button className="btn btn-hero btn-lg" role="button">See all features</button>
									</div>
								</div>
								<div className="item slides">
									<div className="slide-2"></div>
									<div className="hero">        
										<button className="btn btn-hero btn-lg" role="button">See all features</button>
									</div>
								</div>
								<div className="item slides">
									<div className="slide-3"></div>
									<div className="hero">        
										<button className="btn btn-hero btn-lg" role="button">See all features</button>
									</div>
								</div>
							</div>

						</div>
					
				</div>

				<div className="container prod1">
					
					<div className="col-md-4">
						<figure className="snip1174 navy col-md-4">
							<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample33.jpg" alt="sq-sample33" />
							<figcaption>
								<h2>Tees</h2>
								<p>
									Summer
								</p>
								<a href="">Details</a>
							</figcaption>
						</figure>
					</div>

					<div className="col-md-4">
						<figure className="snip1174 navy col-md-4">
							<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample33.jpg" alt="sq-sample33" />
							<figcaption>
								<h2>Tees</h2>
								<p>
									Summer
								</p>
								<a href="">Details</a>
							</figcaption>
						</figure>
					</div>

					<div className="col-md-4">
						<figure className="snip1174 navy col-md-4">
							<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample33.jpg" alt="sq-sample33" />
							<figcaption>
								<h2>Tees</h2>
								<p>
									Summer
								</p>
								<a href="">Details</a>
							</figcaption>
						</figure>
					</div>
				</div>

				<div className="container">
				<div className="product">
					<div className="product-card">
						<div className="product-image">
							<img src="https://instagram.fcgk10-1.fna.fbcdn.net/vp/9054a1af03f7c93926ee786e44a72e63/5B3B25CB/t51.2885-15/e35/24327324_155477195073193_7940119350218850304_n.jpg"/>
						</div>
						<div className="product-info">
							<h5>Sweater</h5>
							<h6>$600</h6>
						</div>
					</div>
					<div className="product-card">
						<div className="product-image">
							<img src="https://instagram.fcgk10-1.fna.fbcdn.net/vp/9054a1af03f7c93926ee786e44a72e63/5B3B25CB/t51.2885-15/e35/24327324_155477195073193_7940119350218850304_n.jpg"/>
						</div>
						<div className="product-info">
							<h5>Sweater</h5>
							<h6>$600</h6>
						</div>
					</div>
					<div className="product-card">
						<div className="product-image">
							<img src="https://instagram.fcgk10-1.fna.fbcdn.net/vp/9054a1af03f7c93926ee786e44a72e63/5B3B25CB/t51.2885-15/e35/24327324_155477195073193_7940119350218850304_n.jpg"/>
						</div>
						<div className="product-info">
							<h5>Sweater</h5>
							<h6>$600</h6>
						</div>
					</div>
					<div className="product-card">
						<div className="product-image">
							<img src="https://instagram.fcgk10-1.fna.fbcdn.net/vp/9054a1af03f7c93926ee786e44a72e63/5B3B25CB/t51.2885-15/e35/24327324_155477195073193_7940119350218850304_n.jpg"/>
						</div>
						<div className="product-info">
							<h5>Sweater</h5>
							<h6>$600</h6>
						</div>
					</div>
					<div className="product-card">
						<div className="product-image">
							<img src="https://instagram.fcgk10-1.fna.fbcdn.net/vp/9054a1af03f7c93926ee786e44a72e63/5B3B25CB/t51.2885-15/e35/24327324_155477195073193_7940119350218850304_n.jpg"/>
						</div>
						<div className="product-info">
							<h5>Sweater</h5>
							<h6>$600</h6>
						</div>
					</div>
					<div className="product-card">
						<div className="product-image">
							<img src="https://instagram.fcgk10-1.fna.fbcdn.net/vp/9054a1af03f7c93926ee786e44a72e63/5B3B25CB/t51.2885-15/e35/24327324_155477195073193_7940119350218850304_n.jpg"/>
						</div>
						<div className="product-info">
							<h5>Sweater</h5>
							<h6>$600</h6>
						</div>
					</div>
				</div>
				</div>
					
			</div>
	
    );
  }
}

export default Maincontent;