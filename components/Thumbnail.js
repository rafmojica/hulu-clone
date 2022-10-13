import Image from "next/image";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";

const Thumbnail = ({ result }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const mediaTypeUpperCase = () => {
    if (result.media_type === "tv") {
      return result.media_type.toUpperCase() + " •";
    } else if (result.media_type === "movie") {
      return (
        result.media_type.charAt(0).toUpperCase() +
        result.media_type.slice(1) +
        " •"
      );
    } else {
      return null;
    }
  };
  return (
    <div
      className="p-2 group cursor-pointer 
    transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        layout="responsive"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        height={1080}
        width={1920}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2
          className="mt-1 text-2xl text-white transition-all 
        duration-100 ease-in-out group-hover:font-bold"
        >
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {mediaTypeUpperCase()}&nbsp;
          {result.release_date || result.first_air_date} •&nbsp;
          <HandThumbUpIcon className="h-5 mx-1" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
};

export default Thumbnail;
