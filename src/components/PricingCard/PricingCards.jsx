import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCards = ({ pricing }) => {
    const { plan, price, features } = pricing;

    return (
        <div className='border p-5 bg-teal-700 rounded-xl'>
            {/* card header  */}
            <div>
                <h1 className='text-5xl'>{plan}</h1>
                <h4 className='text-3xl'>${price}/month</h4>
            </div>
            {/* card body  */}
            <div className='mt-4'>

                {
                    features.map((feature, index) => <PricingFeature
                        key={index}
                        feature={feature}></PricingFeature>)
                }
            </div>
        </div>
    );
};

export default PricingCards;