import react, {useState} from "react";
import Hogs from "./Hogs"
import Tile from "./Tile"

function HogList({hogs}) {
    const [greased, setGreased] = useState(false)
    const [currentTile, setCurrentTile] = useState("name")


    function handleSort(event) {
        setCurrentTile(event.target.value)
    }

    function handleGreased(event) {
        setGreased(event.target.checked)
    }

    const filterGreased = hogs
        .filter(hog => {
            const filtered = greased ? hog.greased : hogs
            return filtered
        })
        .sort((a, b) => {
            if(currentTile === "name") {
                return a.name.localeCompare(b.name)

            }
            if(currentTile === "weight") {
                return a.weight - b.weight
            }
        })
        return(
            <div>
                <Tile sort={handleSort} greased={greased} handleGreased={handleGreased} />
                <div className="cards">
                    {filterGreased.map((hog) => (
                        <Hogs key={hog.name} hog={hog} name={hog.name} specialty={hog.specialty} image={hog.image} greased={hog.greased} weight={hog.weight} highest={hog["highest medal achieved"]} />
                    ))}
                </div>
            </div>
        )
}
export default HogList