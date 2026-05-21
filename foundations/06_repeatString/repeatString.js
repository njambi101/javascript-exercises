const repeatString = function(word,num) {
    if(num > 0){
        let repeated = word.repeat(num);
        console.log(repeated) 
    }else{
        console.log('error')
    }
};

// Do not edit below this line
module.exports = repeatString;
