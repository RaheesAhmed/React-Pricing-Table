import React from 'react';
import './Pricing.css';
const PricingPremium = () => {
	return (
		<div>
			<div className="pricing-table recommended">
				<h3 className="pricing-title">Premium</h3>
				<div className="price">
					$100<sup>/ month</sup>
				</div>

				<ul className="table-list">
					<li>
						35 GB <span>Space</span>
					</li>
					<li>
						5 Domain <span>included</span>
					</li>
					<li>
						100 GB <span>Extra</span>
					</li>
					<li>
						Monthly <span className="unlimited">Backup</span>
					</li>
					<li>
						Customer Support <span className="unlimited">Fast</span>
					</li>
					<li>
						CPanel <span>Include</span>
					</li>
				</ul>

				<div className="table-buy">
					<p>
						$100<sup>/ month</sup>
					</p>
					<a href="" className="pricing-action">
						Buy
					</a>
				</div>
			</div>
		</div>
	);
};

export default PricingPremium;
