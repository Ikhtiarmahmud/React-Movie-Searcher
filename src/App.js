import React, { Component } from 'react';
import MovieRow from "./component/MovieRow";
import './App.css';
import $ from "jquery";

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {}

    // const movies = [
    //   {
    //     id : 0,
    //     title : "Avengers : infinity war",
    //     poster_src : "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    //     overview : "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain."
    //   },
    //   {
    //     id : 1,
    //     title : "Avengers : End Game",
    //     poster_src : "https://image.tmdb.org/t/p/w600_and_h900_bestv2/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    //     overview : "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain."
    //   }
    // ];

    // this.state = {
    //   rows : [
    //     <p key="1">This is First Row</p>
    //   ]
    // }

    // let moviesRow = [];
    // movies.forEach((movie) => {
    //     const movieRow = <MovieRow movie={movie}/>

    //     moviesRow.push(movieRow);
    // })
    // this.state = {
    //   rows : moviesRow
    // }
    this.performSearch('avengers')
  }

  performSearch(searchTerm) {
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1b5df76a72a13bad99b8fc0c68cb085&query=" + searchTerm;
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        const results = searchResults.results;

        let moviesRow = [];

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          const movieRow = <MovieRow key={movie.id} movie={movie} />
          moviesRow.push(movieRow);
        })

        this.setState({ rows: moviesRow })
      },
      error: (xhr, status, err) => {
        console.log('failed');
      }
    })
  }

  searchHandler(e) {
    const boundobject = this;
    const searchTerm = e.target.value;
    boundobject.performSearch(searchTerm);
  }


  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img src="green_icon.svg" alt="icon img" width="50" />
              </td>
              <td width="8" />
              <td>
                <h1>MoviesDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input type="text" onChange={this.searchHandler.bind(this)} placeholder="Enter Search Term" className="inputType" />

        {this.state.rows}
      </div>
    );
  }
}

export default App;
