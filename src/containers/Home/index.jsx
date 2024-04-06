import { useEffect, useState } from 'react'

import Button from '../../components/Button'
import Slider from '../../components/Slider'
import api from '../../services/api'
import getImages from '../../utils/getImages'
import { Background, Container, ContainerButtons, Info, Poster } from './styles'

function Home() {
  const [movies, setMovies] = useState()
  const [topMovies, setTopMovies] = useState()

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results }
      } = await api.get('/movie/popular')

      setMovies(results[0])
    }

    async function getTopMovies() {
      const {
        data: { results }
      } = await api.get('/movie/top_rated')

      setTopMovies(results)
    }

    getMovies()
    getTopMovies()
  }, [])

  return (
    <>
      {movies && (
        <Background $img={getImages(movies.backdrop_path)}>
          <Container>
            <Info>
              <h1>{movies.title}</h1>
              <p>{movies.overview}</p>
              <ContainerButtons>
                <Button $otherColor>Assista Agora</Button>
                <Button>Assista o Trailer</Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img src={getImages(movies.poster_path)} alt={movies.title} />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
    </>
  )
}

export default Home
