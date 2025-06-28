import { memo } from 'react'

interface CardProps {
  count: number,
  movies: {
    title: string,
    age: number
  },
  updateMovieAge: () => void
}

function Card({ count, movies, updateMovieAge }: CardProps) {
  console.log("Card Render")
  return (
    <div>
      <br/>
      <h4><b>Card: </b></h4> 
      Count: {count} <br />
      Movie Title: {movies.title} <br />
      Movie Age: {movies.age} <br />

      <button type='button' onClick={updateMovieAge}>Update Age Movie</button>
    </div>
  )
}
export default memo(Card);

// export default memo(Card, customEqual);

// function customEqual(prevProps: any, nextProps: any) {
//   console.log('customEqual: ', {
//     prevProps,
//     nextProps
//   })
//   // return false -> component re-render
//   // return true -> component get from memory (don't render)
//   return prevProps.count === nextProps.count && prevProps.movies.title === nextProps.movies.title;
// }