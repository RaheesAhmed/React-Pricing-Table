import React from 'react';
import './Pricing.css';
const PricingForm = () => {
	return (
		<div>
			<h1 className="pricing-table-title">
				Pricing Table <a href="http://rahees-ahmed.netlify.app/">rahees ahmed</a>
			</h1>
			<div className="pricing-table">
				<h3 className="pricing-title">Basic</h3>
				<div className="price">
					$60<sup>/ month</sup>
				</div>

				<ul className="table-list">
					<li>
						10 GB <span>Free Space</span>
					</li>
					<li>
						1 Domain <span>Space</span>
					</li>
					<li>
						25 GB <span>Extra Space</span>
					</li>
					<li>
						Service <span className="unlimited">Maintance</span>
					</li>
					<li>
						On Time <span className="unlimited">Response</span>
					</li>
					<li>
						CPanel <span>Maintance</span>
					</li>
				</ul>

				<div className="table-buy">
					<p>
						$60<sup>/ month</sup>
					</p>
					<a href="" className="pricing-action">
						Buy
					</a>
				</div>
			</div>
		</div>
	);
};

export default PricingForm;
