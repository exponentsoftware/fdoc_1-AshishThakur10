
// 1.a.Write a function which count the number of occurrence of words in a paragraph or a sentence.The function `countWords` takes a paragraph and two words as parameters.It compare  which word is most frequently occurred in the paragraph.
// ```js
// const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';
// console.log(countWords(paragraph,'love', 'you'));
// The word love more frequently occurred than you.

const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';

function countWords(paragraph, word, word2) {

    var x = 0, y =0, y1 = 0, z=0;

    for(i = 0; i < paragraph.length; i++){
        if(paragraph[i] == word[0]){
            for(j = i; j< i + word.length; j++){
                if (paragraph[j] == word[j - i]) {
                    y++;
                }
                if (y == word.length) {
                    x++;
                }
            }
            y = 0
        }
    }

    for(i = 0; i < paragraph.length; i++){
        if(paragraph[i] == word2[0]){
            for(j = i; j< i + word2.length; j++){
                if (paragraph[j] == word2[j - i]) {
                    y1++;
                }
                if (y1 == word2.length) {
                    z++;
                }
            }
            y1 = 0
        }
    }

    if (x > z) {
        console.log('first word is greater')
    }
    else if (x < z) {
        console.log('second  word is greater')
    } else {
        console.log('equl')
    }

    return  "'"+word+"' was found "+x+" times and '"+word2+"' was found "+z+" times";;

}

console.log(countWords(paragraph,'love', 'you'));
