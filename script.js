function searchMovies() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let movies = document.querySelectorAll('.movie');
    
    let found = false;
    movies.forEach(movie => {
        let title = movie.getAttribute('data-title').toLowerCase();
        if (title.includes(input)) {
            movie.style.display = "block";
            found = true;
        } else {
            movie.style.display = "none";
        }
    });
    
    if (!found && input.length > 0) {
        alert("Nenhum filme encontrado");
    }
}

function assistirFilme(titulo) {
    alert("Assistindo ao filme: " + titulo);
}
