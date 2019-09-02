import React, { Component } from 'react';

class MovieRow extends Component {
    viewMovie() {
        const url = "http://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url;
    }

    render() {
        return (
            <table key={this.props.movie.id}>
                <tbody>
                    <tr>
                        <td>
                            <img src={this.props.movie.poster_src} alt="poster" width="120" />
                        </td>
                        <td>
                            <h3 style={textStyle}>{this.props.movie.title}</h3>
                            <p style={textStyle}>{this.props.movie.overview}</p>
                            <input style={viewStyle} onClick={this.viewMovie.bind(this)} type="submit" value="View" />
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

var textStyle = {
    textAlign: "justify",
    paddingLeft: "10px",
}
var viewStyle = {
    float: "left",
    textAlign: "justify",
    marginLeft: "10px",
    borderRadius: "15%",
    backgroundColor: "green",
    color: "white",
}

export default MovieRow;