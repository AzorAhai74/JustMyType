$(document).ready(function() {
    $('#keyboard-upper-container').hide();
    $(document).keydown(function (e) {
    if (e.keyCode == 16) {
        $('#keyboard-upper-container').show();
        $('#keyboard-lower-container').hide();
    }
    });
    $(document).keyup(function(e) {
    if (e.keyCode == 16) {
        $('#keyboard-upper-container').hide();
        $('#keyboard-lower-container').show();
    }
    });

    $(document).on('keypress', function () {

        let clickedKeys = event.which;
        $(`#${event.which}`).css('background', 'yellow');
    
        $(document).on('keyup', function () {
    
        $(`#${clickedKeys}`).css('background', '');
    
        });
    
    });

    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    
    function addSentence() {
        $('#sentence').text(sentences[0]);
    };

    addSentence();
});