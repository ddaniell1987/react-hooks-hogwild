import react from "react";

function Hogs({name, weight, specialty, image, highest, greased }) {
    return (
        <div className="parent-container ui card eight wide column">
            <div className="hog_image_container">
                <div className="hog_image" src={image} alt={`${image.name}.jpg`} />
            </div>
            <div className="details-container">
                <h3>{name}</h3>
                <h5>{specialty}</h5>
                <p>{weight}</p>
                <p>{greased}</p>
                <p>{highest}</p>
            </div>
        </div>
    )
}
export default Hogs