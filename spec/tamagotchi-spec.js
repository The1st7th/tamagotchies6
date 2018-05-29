import {Tamagotchi} from './../src/tamagotchi.js';

describe ('tamagotchi', function() {
    it ('should test whether returns a name of tamagotchi', ()=> {
        var newTamagotchi = new Tamagotchi("John", 20, 25);
        console.log(newTamagotchi.getName()); 
        expect(newTamagotchi.getName()).toEqual("John");
    });

});