$(function () {

    
    // Variables
    let sentences = [
        'ten ',
        'ate neite ate nee enet ite ate inet ent eate ', 
        'Too ato too nOt enot one totA not anot tOO aNot ', 
        'oat itain oat tain nate eate tea anne inant nean ', 
        'itant eate anot eat nato inate eat anot tain eat ', 
        'nee ene ate ite tent tiet ent ine ene ete ene ate '];

    let i = 0;
    let j = 0;
    let targetLetter = (sentences[i][j]);
    counter = 0;

    let sentenceDisplay = $('#sentence');
    sentenceDisplay.append(sentences[i]);

    $('#target-letter').text(targetLetter);
        

    // Objective 1
    $('#keyboard-upper-container').hide();

    // Objective 2
    // Always make sure you have the .hide and .show in the right place.
    // You can also use e.KeyCode === 16 and get the same result. 
    $(function() {

        $(document).keydown(function(e) {
            if (e.key === "Shift") {
                $('#keyboard-lower-container').hide();
                $('#keyboard-upper-container').show();
            }
            if (e.key.charCodeAt(0) === targetLetter.charCodeAt(0)) { // this is for objective 4
                $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>'); 
                $('#yellow-block').css({ // this allows the yellow block to move down the sentence
                    'left': '+=17.6' 
                });
                $('#target-letter').text(sentences[i][j]); // displays the current letter expected
                j++; // increments the letter
                targetLetter = (sentences[i][j]); // prints the new letter
            } 
            else if (e.key.charCodeAt(0) != targetLetter.charCodeAt(0)) {
                $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
            }
            if (j == sentences[i].length) {
                sentenceDisplay.empty();
                j = 0;
                i++;
                $('#feedback').empty();
                $('#yellow-block').css({ // this allows the yellow block to move down the sentence
                    'left': '5px' 
                });
                $('#target-letter').empty();
                targetLetter = (sentences[i][j]);
                $('#sentence').append(sentences[i]);
            }
          });

          
          
          $(document).keyup(function(e) {
            if (e.key === "Shift") {
                $('#keyboard-lower-container').show();
                $('#keyboard-upper-container').hide();
            }
            $('.highlight').removeClass('highlight'); // This is used for objective 3
          });
      });

      // Objective 3

      $(document).keypress(function (e) {
        $('#' + e.keyCode).addClass('highlight');
    })

    // Objective 4
        




    

})
