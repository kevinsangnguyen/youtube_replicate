import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCOhrnVCgknLCvu235TzvW_nzEmwHQkRgs';



class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			videos: [],
			selected_video: null
		};

		const topics = ['nba','nfl','trailers','skateboarding','jcole','gopro'];
		const random = Math.floor((Math.random() * topics.length));

		this.videoSearch(topics[random]);
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos : videos,
				selected_video: videos[0],
			 });
		});
	}

	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selected_video} />
				<VideoList
					onVideoSelect = {selected_video => this.setState({selected_video}) }
					videos={this.state.videos} />
			</div>
		);
	}
}


ReactDOM.render(<App />,document.querySelector('.container'))
