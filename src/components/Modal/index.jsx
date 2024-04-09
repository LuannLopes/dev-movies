import { useEffect, useState } from 'react'

import { getMovieVideo } from '../../services/getData'
import { Background, Container } from './styles'

export function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState()

  useEffect(() => {
    async function getMovie() {
      setMovie(await getMovieVideo(movieId))
    }

    getMovie()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Background onClick={() => setShowModal(false)}>
      {movie && (
        <Container>
          <button onClick={() => setShowModal(false)}>X</button>
          <iframe
            src={`https://www.youtube.com/embed/${movie[0].key}`}
            title="Youtube Video Player"
            height="500px"
            width="100%"
          ></iframe>
        </Container>
      )}
    </Background>
  )
}
