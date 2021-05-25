import Tile from "./Tile";
import FlipMove from "react-flip-move";

function ResultTile({ requests }) {
  return (
    <FlipMove>
      <div
        className="px-5 my-10 sm:grid
    md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
    
    "
      >
        {requests.map((result) => (
          <Tile key={result.id} results={result} />
        ))}
      </div>
    </FlipMove>
  );
}

export default ResultTile;
