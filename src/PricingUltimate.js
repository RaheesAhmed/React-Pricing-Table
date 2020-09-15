import React from 'react';
import './Pricing.css';
const PricingUltimate = () => {
	return (
		<div>
			<div className="pricing-table">
				<h3 className="pricing-title">Ultimate</h3>
				<div className="price">
					$200<sup>/ month</sup>
				</div>

				<ul className="table-list">
					<li>
						100 GB <span>Space</span>
					</li>
					<li>
						8 Domain <span>Added</span>
					</li>
					<li>
						200 GB <span>Extra</span>
					</li>
					<li>
						Quick <span className="unlimited">Support</span>
					</li>
					<li>
						vip customer <span className="unlimited">Support</span>
					</li>
					<li>
						CPanel <span>Included</span>
					</li>
				</ul>

				<div className="table-buy">
					<p>
						$200<sup>/ month</sup>
					</p>
					<a href="#" className="pricing-action">
						Buy
					</a>
				</div>
			</div>
		</div>
	);
};

export default PricingUltimate;
