import React from 'react';
import PricingForm from './PricingForm';
import Premium from './PricingPremium';
import Ultimate from './PricingUltimate';
import './App.css';
import './Pricing.css';

function App() {
	return (
		<div className="App pricing-wrapper clearfix">
			<PricingForm />
			<Premium />
			<Ultimate />
		</div>
	);
}

export default App;
