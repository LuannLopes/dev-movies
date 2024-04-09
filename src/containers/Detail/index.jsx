import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Credits, Slider, SpanGenres } from '../../components'
import {
  getMovieById,
  getMovieCredits,
  getMovieSimilar,
  getMovieVideo
} from '../../services/getData'
import getImages from './../../utils/getImages'
import { Background, Container, ContainerVideos, Cover, Infos } from './styles'

export function Detail() {
  const { id } = useParams()
  const [movieVideo, setMovieVideo] = useState()
  const [movieCredits, setMovieCredits] = useState()
  const [movieSimilar, setMovieSimilar] = useState()
  const [movieById, setMovieById] = useState()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovieVideo(id),
        getMovieCredits(id),
        getMovieSimilar(id),
        getMovieById(id)
      ])
        .then(([movieVideo, movieCredits, movieSimilar, movieById]) => {
          setMovieVideo(movieVideo)
          setMovieCredits(movieCredits)
          setMovieSimilar(movieSimilar)
          setMovieById(movieById)
        })
        .catch((error) => console.error(error))
    }

    getAllData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {movieById && (
        <>
          <Background $image={getImages(movieById.poster_path)} />
          <Container>
            <Cover>
              <img
                src={getImages(movieById.poster_path)}
                alt={movieById.title}
              />
            </Cover>
            <Infos>
              <h2>{movieById.title}</h2>
              <SpanGenres genres={movieById.genres} />
              <p>{movieById.overview}</p>
              <div>
                <Credits credits={movieCredits} />
              </div>
            </Infos>
          </Container>
          <ContainerVideos>
            {movieVideo &&
              movieVideo.map((video) => (
                <div key={video.id}>
                  <h4>{video.name}</h4>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="YouTube video player"
                  ></iframe>
                </div>
              ))}
          </ContainerVideos>
          {getMovieSimilar && (
            <Slider info={movieSimilar} title="Filmes Similares" />
          )}
        </>
      )}
    </>
  )
}
