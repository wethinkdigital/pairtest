"use strict";

const ac = {

    alphabet: 'abcdefghijklmnopqrstuvwxyz .',

    charIndex: char => {
        return ac.alphabet.indexOf(char);
    },

    charArray: index => {
        if(index === -1){
            return false;
        } else if(index === 27){ // full stop
            var carray = new Array(27).fill(1);    
        } else {
            var carray = new Array(27).fill(0);
            carray[index] = 1;
        }
        return carray;
    },

    stringArray: string => {
        var indexArray = string.toLowerCase().split('').map(ac.charIndex);
        var output = indexArray.map(ac.charArray);    
        return output.indexOf(false) < 0 ? output : false;
    },

    render: string => {

        var messageArray = ac.stringArray(string);
        if(messageArray){
        let i = 1;
        messageArray.map(function(el){
            setTimeout(function(){
                console.log(el)
            }, i*1000);
            i++;
        });
        } else {
            console.log('This message contains unsupported characters');
        }
    }

}

module.exports = ac;