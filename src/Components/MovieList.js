import React, { useRef } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 300; // Adjust scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 300; // Adjust scroll distance as needed
    }
  };

  return (
    <div className='px-6'>
      <h1 className='text-2xl font-bold py-2 text-white inline-block' >{title}</h1>
      <div className='relative'>
        <div className='absolute top-0 bottom-0 flex items-center' style={{ left: 0 }}>
          <button
            onClick={scrollLeft}
            className='z-10 bg-gray-800 text-white absolute top-22 rounded-full w-10 h-10 flex items-center justify-center'>
            {'<'}
          </button>
        </div>
        <div ref={containerRef} className='flex overflow-x-hidden mr-12'>
          {movies?.map(movie => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
        <div className='absolute top-0 bottom-0 flex items-center' style={{ right: 0 }}>
          <button
            onClick={scrollRight}
            className='z-10 bg-gray-800 text-white absolute top-22 rounded-full w-10 h-10 flex items-center justify-center right-10'>
            {'>'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
