const fs = require('fs');
const lineReader = require('line-reader');
var shuffle = require('shuffle-words');
 


lineReader.eachLine('./wordtoshuffle.txt', function(line) {
    var shuffledWord=shuffle(line.toUpperCase(),true);
    fs.appendFile('shuffledword.txt', `\n${shuffledWord}`, (err) => {
        if (err) throw err;
        console.log('The lyrics were updated!');
    });
});


// add a line to a lyric file, using appendFile
