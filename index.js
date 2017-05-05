"use strict";

const ac = {

    alphabet: 'abcdefghijklmnopqrstuvwxyz .',

    charIndex: char => {
        return ac.alphabet.indexOf(char);
    },

    charArray: index => {
        if(index === 27){ // full stop
            var carray = new Array(27).fill(1);    
        } else {
            var carray = new Array(27).fill(0);
            carray[index] = 1;
        }
        return carray;
    },

    stringArray: string => {
        var indexArray = string.split('').map(ac.charIndex);
        return indexArray.map(ac.charArray);    
    },

    render: string => {

        var messageArray = ac.stringArray(string);
        let i = 1;
        messageArray.map(function(el){
            setTimeout(function(){
                console.log(el)
            }, i*1000);
            i++;
        });
    }

}

module.exports = ac;