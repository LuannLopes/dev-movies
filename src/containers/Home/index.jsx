import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import {
  getMovies,
  getPopularPeople,
  getPopularSeries,
  getTopMovies,
  getTopSeries
} from '../../services/getData'
import getImages from '../../utils/getImages'
import { Background, Container, ContainerButtons, Info, Poster } from './styles'

function Home() {
  const [showModal, setShowModal] = useState(false)
  const [movies, setMovies] = useState()
  const [topMovies, setTopMovies] = useState()
  const [topSeries, setTopSeries] = useState()
  const [popularSeries, setPopularSeries] = useState()
  const [popularPeople, setPopularPeople] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getPopularSeries(),
        getPopularPeople()
      ])
        .then(
          ([movies, topMovies, topSeries, popularSeries, popularPeople]) => {
            setMovies(movies)
            setTopMovies(topMovies)
            setTopSeries(topSeries)
            setPopularSeries(popularSeries)
            setPopularPeople(popularPeople)
          }
        )
        .catch((error) => console.error(error))
    }

    getAllData()
  }, [])

  return (
    <>
      {movies && (
        <Background $img={getImages(movies.backdrop_path)}>
          {showModal && (
            <Modal movieId={movies.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movies.title}</h1>
              <p>{movies.overview}</p>
              <ContainerButtons>
                <Button
                  onClick={() => navigate(`/detalhe/${movies.id}`)}
                  $otherColor
                >
                  Assista Agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img src={getImages(movies.poster_path)} alt={movies.title} />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
      {topMovies && <Slider info={topSeries} title={'Top Séries'} />}
      {topMovies && <Slider info={popularSeries} title={'Séries Populares'} />}
      {topMovies && <Slider info={popularPeople} title={'Artista Populares'} />}
    </>
  )
}

export default Home
