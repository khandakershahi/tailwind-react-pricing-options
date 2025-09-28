import React, { use } from 'react';
import PricingCards from '../PricingCard/PricingCards';

const PricingOptions = ({ pricingPromise }) => {

    const pricingData = use(pricingPromise);
    // console.log(pricingData);

    return (
        <div>
            <h2 className='text-4xl'>Get our Membership</h2>
            <div className='grid md:grid-cols-3 gap-3'>
                {
                    pricingData.map(pricing => <PricingCards
                        key={pricing.id}
                        pricing={pricing}></PricingCards>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;