import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { StyledMainContainer } from './Styles';
import { MovieList, TvList, PlayingList, VideoList } from './Sections';
import { ListContext, SearchContext } from '../context';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const myApi = '64f9385d47c970d860ccd6c147841242';
const baseImgUrl = 'https://image.tmdb.org/t/p/w500';
const baseMovieUrl = 'https://api.themoviedb.org/3/search/movie';
const baseTvUrl = 'https://api.themoviedb.org/3/search/tv';
const baseVideoUrl = 'https://api.themoviedb.org/3/movie/200/videos';
const baseNowPlayingUrl = 'https://api.themoviedb.org/3/movie/now_playing';
const baseYouTubeUrl = 'https://www.youtube.com/embed';

const useStyles = makeStyles((theme) => ({
	paginationBar: {
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: 'brown',
		position : "fixed",
		zIndex : 1
	},
	root: {
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
}));

export const Home = () => {
	const [currentPage, setCurrentPage] = useState(10);
	const [movieList, setMovieList] = useState([]);
	const [tvList, setTvList] = useState([]);
	const [videoList, setVideoList] = useState([]);
	const [nowPlayingList, setNowPlayingList] = useState([]);

	const { inputVal, query } = useContext(SearchContext);
	const classes = useStyles();

	console.log('Home -> videoList', videoList);

	useEffect(() => {
		axios
			.get(baseMovieUrl, {
				params: {
					api_key: myApi,
					query: inputVal || 'a',
					page: currentPage,
				},
			})
			.then((res) => {
				console.log('movielist', res.data.results);
				setMovieList(res.data.results);
			})
			.catch((err) => console.log(err))
			.finally();
	}, [inputVal, currentPage]);

	useEffect(() => {
		axios
			.get(baseTvUrl, {
				params: {
					api_key: myApi,
					query: inputVal || 'a',
				},
			})
			.then((res) => setTvList(res.data.results));
	}, [inputVal]);

	useEffect(() => {
		axios
			.get(baseNowPlayingUrl, {
				params: {
					api_key: myApi,
					page: { currentPage },
				},
			})
			.then((res) => setNowPlayingList(res.data.results));
	}, [inputVal, currentPage]);

	useEffect(() => {
		axios
			.get(baseVideoUrl, {
				params: {
					api_key: myApi,
				},
			})
			.then((res) => setVideoList(res.data.results))
			.catch()
			.finally();
	}, [inputVal]);

	const handleChange = (event, value) => {
		setCurrentPage(value);
	};
	return (
		<StyledMainContainer>
			<Container className={classes.paginationBar}>
				<Pagination
					count={50}
					siblingCount={1}
					boundaryCount={1}
					defaultPage={6}
					color="primary"
					onChange={handleChange}
				/>
			</Container>
			<div style = {{height : "2rem"}}></div>
			<ListContext.Provider
				value={{
					movieList,
					baseImgUrl,
					tvList,
					nowPlayingList,
					videoList,
					baseYouTubeUrl,
				}}
			>
				<MovieList />
				<TvList />
				<PlayingList />
			</ListContext.Provider>
		</StyledMainContainer>
	);
};
