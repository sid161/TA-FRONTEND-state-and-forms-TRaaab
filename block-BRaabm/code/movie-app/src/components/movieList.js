function List(props){
    return(
        <>
        <ul className = "rootElm">
            {props.data.map((movie) => {
                return <li>
                    <h2>{movie.title}</h2>
                    <img src= {movie.Images[0]} alt = ""/>
                    <h4>{movie.Actors}</h4>
                    <p>{movie.Released}</p>

                    <div className = "more">
                       <button onClick = {() => props.handleMovie(movie)} className = "btn" >More Info</button>
                    </div>
                </li>
            })}

        </ul>
        </>
    )
}






export default List;