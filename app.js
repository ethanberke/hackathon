let conductor = new BandJS();
conductor.setTimeSignature(4,4);
conductor.setTempo(120);

let playButton = document.querySelector(".playButton");
playButton.addEventListener('click', function() {
    player.play()
})

let trumpet = conductor.createInstrument();
let trumpet2 = conductor.createInstrument();
let pianoLH = conductor.createInstrument();
let pianoRH = conductor.createInstrument();
let bass = conductor.createInstrument();
//Measure 1
trumpet.rest('whole');
trumpet2.rest('whole');

pianoLH.note('quarter', 'Bb2')
    .note('eighth', 'F3')
    .note('eighth', 'F3')
    .note('quarter', 'F2')
    .note('eighth', 'F3')
    .note('eighth', 'F3');

pianoRH.rest('whole');

bass.note('half', 'Bb2')
     .note('half', 'F2');


//Measure 2
trumpet.rest('whole');
trumpet2.rest('whole');

pianoLH.note('quarter', 'Bb2')
    .note('eighth', 'F3')
    .note('eighth', 'F2')
    .rest('eighth')
    .note('eighth', 'F2')
    .note('quarter', 'F3');
    
pianoRH.rest('whole');

bass.note('half', 'Bb2')
     .note('half', 'F2');

//Measure 3
trumpet.rest('whole');
trumpet2.rest('whole');

pianoLH.note('quarter', 'Bb2')
    .note('eighth', 'F3')
    .note('eighth', 'F3')
    .note('quarter', 'F2')
    .note('eighth', 'F3')
    .note('eighth', 'F3');

pianoRH.rest('whole');

bass.note('half', 'Bb2')
     .note('half', 'F2');

//Measure 4
trumpet.rest('half')
    .rest('eighth')
    .note('eighth', 'D4')
    .note('eighth', 'Eb4')
    .note('eighth', 'E4')

trumpet2.rest('whole');

pianoLH.note('quarter', 'Bb2')
    .rest('half')
    .rest('quarter');

pianoRH.rest('whole');

bass.note('quarter', 'Bb2')
     .rest('half')
     .rest('quarter');

//Measure 5, Rehearsal A

trumpet.note('quarter', 'F4')
    .note('eighth', 'D5')
    .note('eighth', 'F4')
    .note('eighth', 'D5')
    .note('eighth', 'C5')
    .rest('eighth')
    .note('quarter', 'B4');

trumpet2.rest('whole');

//Measure 6

trumpet.rest('half')
    .note('eighth', 'G4')
    .note('eighth', 'F#4')
    .note('eighth', 'F4')

trumpet2.rest('whole');
//Measure 7

trumpet.note('quarter', 'E4')
    .note('eighth', 'C5')
    .note('eighth', 'E4')
    .note('eighth', 'C5')
    .note('eighth', 'Bb4')
    .rest('eighth')
    .note('quarter', 'A4');

trumpet2.rest('whole');
//Measure 8
trumpet.rest('half')
    .note('eighth', 'F4')
    .note('eighth', 'E4')
    .note('eighth', 'Eb4');

trumpet2.rest('whole');
//Measure 9
trumpet.note('eighth', 'D4')
    .note('eighth', 'F4')
    .note('eighth', 'Bb4')
    .note('eighth', 'G4')
    .rest('eighth')
    .note('eighth', 'Bb4')
    .note('quarter', 'C5');

trumpet2.rest('whole');
//Measure 10
trumpet.note('eighth', 'F4')
    .note('eighth', 'Ab4')
    .note('eighth', 'Db5')
    .note('eighth', 'Bb4')
    .rest('eighth')
    .note('eighth', 'Db5')
    .note('quarter', 'Eb5');

trumpet2.rest('whole');
//Measure 11
trumpet.note('whole', 'F5');

trumpet2.rest('whole');
//Measure 12
trumpet.rest('quarter')
    .note('eighth', 'F5')
    .note('eighth', 'F5')
    .note('eighth', 'G5')
    .note('eighth', 'F5')
    .note('sixteenth', 'Db5')
    .note('dottedEighth', 'C5');

trumpet2.rest('whole');


let player = conductor.finish();


