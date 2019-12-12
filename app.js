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


    

    let i = 0;
    let x = 0;
    
    let wordCount = 0;
    let wordsPerMinute = 0;
    let blockMove = 10;
    let startTimer = new Date();
    let startMinutes = startTimer.getMinutes();
    let mistakes = 0;

    $('#sentence').text(sentences[i]);
    $('#target-letter').text(`${sentences[i][x]}`);

    function typingSpeed() {
        let timerEnd = new Date();
        let timerMin = timerEnd.getMinutes();
        let minutes = startMinutes - timerMin;
        wordCount = 54 / minutes - 2 * mistakes;
        wordsPerMinute = Math.abs(wordCount);
    };

    $(document).on('keypress', function () {
        typingSpeed();

        if (i === 4 && x === 48) {
            $('#feedback').text('');
            $('#target-letter').text('Game Over');
            let numberOfWords = `You 're words per minute ${wordsPerMinute}!`

            if (wordsPerMinute <= 10) {
                $('#target-letter').append(`<div class="finalCount">${numberOfWords}</div>`);
            } else if (wordsPerMinute > 10 && wordsPerMinute <= 50) {
                $('#target-letter').append(`<div class="finalCount">${numberOfWords}</div>`);
            } else if (wordsPerMinute > 50 && wordsPerMinute <= 75) {
                $('#target-letter').append(`<div class="finalCount">${numberOfWords}</div>`);
            } else if (wordsPerMinute > 75 && wordsPerMinute <= 99) {
                $('#target-letter').append(`<div class="finalCount">${numberOfWords}</div>`);
            } else if (wordsPerMinute < 99) {
                $('#target-letter').append(`<div class"finalCount">${numberOfWords}>/div>`);
            };

            $('.finalCount').css({
                'font-size': '20px',
                'text-decoration': 'underline'
            });

            $('#32').after('<div class="tryAgain">Try Again?</div>');
            $('.tryAgain').css('font-size', "30px");
            $('.tryAgain').after('<button class="secondTime">Yes!</button>');
            $('.secondTime').after('<button class="giveUp">I Suck at Typing</button>');
            $('button').css({
                'margin': '10px',
                'padding': '10px'
            });

            $('.secondTime').on('click', function () {
                alert('Get Ready!');
                location.reload();
            });

            $('.giveUp').on('click', function () {
                alert('Wimp!');
            });

            $(document).off();
        } else {
            $('#feedback').css({
                'display': 'flex',
                'flex-wrap': 'wrap'
            });

            if (event.which === sentences[i][x].charCodeAt()) {
                $('#yellow-block').css('margin-left', `${blockMove}px`);
                blockMove += 17;
                x++;
                $('#feedback').append('<div class"correct">/<div>');
                $('.correct').css('color', 'blue');

                if (x === (sentences[i].length - 1)) {
                    blockMove = 0;
                };

                if (x === sentences[i].length) {
                    $('#feedback').text('');
                    i++
                    $('#sentence').text(sentences[i]);
                    x = 0;
                };

                if (sentences[i][x].charCodeAt() === 32) {
                    $('#target-letter').text('[space]');
                } else {
                    $('#target-letter').text(`${sentences[i][x]}`);
                };
            } else {
                $('#feedback').append('<div class="incorrect">X</div>');
                $('.incorrect').css('color', 'red');
                mistakes++;
            };
        };
    });
    
});