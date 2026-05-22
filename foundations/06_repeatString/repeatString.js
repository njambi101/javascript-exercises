const repeatString = function(word,num) {
   if(num < 0){
    return 'ERROR'
   }
   let s = "";
   for(let i = 0; i < num; i++){
    s += word;
   }
   return s;
};

// Do not edit below this line
module.exports = repeatString;
