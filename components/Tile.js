import { StarIcon, ThumbUpIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { forwardRef } from "react";

const Tile = forwardRef(({ results }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div
      ref={ref}
      className="group cursor-pointer m-4 
    transition duration-200 ease-in
     transform sm:hover:scale-105 hover:z-50 
    "
    >
      <Image
        layout="responsive"
        src={`${BASE_URL}${results.backdrop_path || results.poster_path}`}
        height={1080}
        width={1920}
      />

      <div className="p-2">
        <div className="truncate max-w-md">{results.overview}</div>
        <h2 className="mt-2 text-2xl transition all duration-100 ease-in-out group-hover:font-bold">
          {results.title || results.original_name}
        </h2>

        <p className="flex mt-10 items-center justify-evenly  space-x-8 opacity-0 group-hover:opacity-100">
          <span className="flex mr-2 whitespace-nowrap">
            {results.release_date || results.first_air_date}
          </span>

          <span className="flex ">
            <ThumbUpIcon className="mr-2 h-5" />
            {` ${results.vote_count}`}
          </span>
          <span className="flex">
            {results.vote_average >= 8.0 ? (
              <>
                <span className="flex whitespace:nowrap text-green-500">
                  {results.vote_average}
                </span>
                <StarIcon className="h-6 text-green-500  ml-2" />{" "}
              </>
            ) : results.vote_average >= 5.0 && results.vote_average < 8.0 ? (
              <>
                <span className="flex whitespace:nowrap text-yellow-500">
                  {results.vote_average}
                </span>
                <StarIcon className="h-6 text-yellow-500 ml-2" />{" "}
              </>
            ) : (
              <>
                <span className="flex whitespace:nowrap text-red-500">
                  {results.vote_average}
                </span>
                <StarIcon className="h-6 text-red-500 ml-2" />{" "}
              </>
            )}
          </span>
        </p>
      </div>
    </div>
  );
});
export default Tile;
