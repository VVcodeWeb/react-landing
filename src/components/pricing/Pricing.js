import React from "react"
import PricingCard from "../global/PricingCard"
import Card from "../global/Card"

import TitleAndText from "../global/TitleAndText"
import "./Pricing.scss"

const Pricing = () => {
    const features_starter = ["Basic Features", "Up to 5 products", "50 User Panels"]
    const features_proffesional = ["Basic Features", "Up to 100 products", "100 User Panels"]
    const features_advanced = ["Extented Features", "Unlimited products", "Unlimited User Panels"]
    return(
        <section className="pricing">
            <div className="pricing_wrapper">
                <PricingCard features={features_starter}>
                <Card icon="icon-chemistry" >
                        <TitleAndText title="Starter Kit 49" span=" - $" text="Ras pretium cursus velit, a dictum metus condimentum sed." />
                    </Card>
                </PricingCard>
                <PricingCard features={features_proffesional}>
                    <Card icon="icon-magic-wand" >
                    <TitleAndText title="Professional Kit 149" span=" - $" text="Sas pretium cursus velit, a dictum metus condimentum sed." />
                    </Card>
                </PricingCard>
                <PricingCard features={features_advanced}>
                    <Card icon="icon-shield">
                        <TitleAndText title="Advanced Kit 249" span=" - $" text="Kas pretium cursus velit, a dictum metus condimentum sed." />
                    </Card>
                </PricingCard>
            </div>
        </section>
    )
}


export default Pricing