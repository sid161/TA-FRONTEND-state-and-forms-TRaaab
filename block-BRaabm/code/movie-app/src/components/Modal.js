function Modal(props){
    return(
        <div className = "modal">
            <h3 className = "title">{props.movie.title}</h3>
            <button className = "btn" onClick = {props.handleClear}>X</button>
            <img src= {props.movie.Images[0]} alt = ""/>
            <p className = "year">{props.movie.Year}</p>
            <p className="release">{props.movie.Released} </p>
            <p className="runtime">{props.movie.Runtime}</p>
            <p className="gener">{props.movie.Gener}</p>
            <p className="director"> Directed by: {props.movie.Director}</p>
            <p className="actor">cast: {props.movie.Actors}</p>
            <p className="writer">written by:{props.movie.Writer} </p>
            <p className="plot">{props.movie.Plot}</p>
            <p className="country">{props.movie.Country}</p>
            <p className="lang">{props.movie.Language}</p>
            {props.movie.Images.map((movieImg) => {
                return <img src= {movieImg} alt=""/>
            })}
        </div>
    )
}



export default Modal