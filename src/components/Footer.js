import React from 'react';
import './css/Footer.css';

class Footer extends React.Component {

  render() {
    return (
			<div className="container">
				<div className="site-footer">
					<div className="row">
							<div className="col-md-4">
							<span><h2>Logo</h2></span>
								<p>lorem ipsum</p>
								<p>© 2018 BS3 UI Kit, All rights reserved</p>
							</div>
							<div className="col-md-4">
								<span>Contact</span>
								<li>
									
								</li>
								<li>

								</li>
								<li>

								</li>
							</div>
							<div className="col-md-4">
							<span>Newsletter</span>
                <p>
                    <div class="input-group">
                      <input type="text" className="form-control" placeholder="Search for..."/>
                      <span class="input-group-btn">
                        <button class="btn btn-default" type="button"><span className="glyphicon glyphicon-envelope"></span></button>
                      </span>
                    </div>
                 </p>
							</div>
					</div>
				</div>
			</div>
    );
  }
}

export default Footer;