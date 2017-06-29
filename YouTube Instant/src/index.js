// Create a new component - produces some HTML
import _ from 'lodash'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyACB5oh0zli7ahe-6dGt13M09WnwUoJBRY'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {  videos: [],
                        selected: null
                     };
        
        this.videoSearch('surfboards')
    }
    
    videoSearch(term){
                YTSearch({key: API_KEY, term: term}, (videos) => {
            console.log(videos)
            console.log(videos.length)
            this.setState({ videos: videos,
                            selected: videos[0]
                          })
        });
    }
    
  render() { 
      //const videoSearch = _.debouce((term) => {this.videoSearch(term)}, 300);
      return (
            <div>
            <SearchBar onTermChange={(term) => this.videoSearch(term)}></SearchBar>
            <VideoDetail video={this.state.selected}></VideoDetail>
            <VideoList onSelect={(selected)=>this.setState({selected})} videos={this.state.videos}></VideoList>
            </div>
        );
    }
}

// Put the generated HTML in the DOM
ReactDOM.render(<App />, document.querySelector('.container'))