$('#search-button').on('click', function() {

        $,ajax({
            url: 'https://omdapi.com',
            type: 'GET',
            dataType: 'json',
            data: {
                'apikey' : '8bf84afc',
                s: $('#search-input').val()
            },
            success: function(result) {
                if (result.Response === "True") {

                } else {
                    $('#movie-list').html('<h1 class="text-center">Movie Bot Found!</h1>');
                }


            }
        });
});