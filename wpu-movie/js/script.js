function searchMovies() {
     $('#movie-list').html('');

        $.ajax({
            url: 'https://omdbapi.com',
            type: 'GET',
            dataType: 'json',
            data: {
                'apikey' : '8bf84afc',
                's' : $('#search-input').val()
            },
            success: function(result) {
                if (result.Response === "True") {
                    let movies = result.Search;
                    
                    $.each(movies, function(i, data){
                    $('#movie-list').append(`
                        <div class="col-md-4">
                            <div class="card">
                                <img src=`+ data.Poster +` class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">`+ data.Title +`</h5>
                                <h6 class="card-subtitle mb-2 text-muted">`+ data.Year + `</h6>
                                <a href="#" class="card-link">See Detail</a>
                            </div>
                        </div>
                    `);
                });
                
                $('#search-input').val('');
            
                } else {
                    $('#movie-list').html('<div class="col"><h1 class=text-center">'+ result.Error +'</h1></div>');
                }
            },
            error: function() {
                $('#results').html('<p>Error retrieving data.</p>');
            }
        });
}

$('#search-button').on('click', function() {
   searchMovies
});

$('#search-input').on('keyup', function(e) {
    if (e.wich === 13) {
        searchMovies();
    }
});
