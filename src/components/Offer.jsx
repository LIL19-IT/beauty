import { Chairs } from "./Chairs";
import { OfferHeading } from "./OfferHeading";

export function Offer({ offerHeading, chairs }) {
    return (
        <div className="Offer">
            <div className="container">
                <OfferHeading offerHeading={offerHeading} />
                <Chairs chairs={chairs} />
            </div>
        </div>
    )
}
