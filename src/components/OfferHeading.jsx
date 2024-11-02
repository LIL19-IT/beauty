
export function OfferHeading({ offerHeading }) {
    return (
        <div className="OfferHeading">
            <h2>{offerHeading.title}</h2>
            <img src={offerHeading.img_url} alt={offerHeading.alt} />
        </div>
    )
}
