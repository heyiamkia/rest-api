$(search-button).on('click', function() {
    $.ajax({
        url: 'https://omdbapi.com',
        type: 'GET',
        dayaType: 'json',
        data: {
            'apikey': '8bf84afc',
            's': $('#search-input').val()
        },
        success: function(result) {
            console.log(result);
        },

    });
});

