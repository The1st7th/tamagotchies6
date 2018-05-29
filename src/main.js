import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Tamagotchi} from './../src/tamagotchi.js';

$(document).ready(function() {

    $('#tamagotchi').submit(function(event) {
        event.preventDefault();

        var tamagotchiName = $("#tamagotchiName").val();
        var tamagotchiHunger = parseInt($("#hunger").val());
        var tamagotchiSleep = parseInt($("#sleep").val());
        var growhungry = setInterval( ()=> {
            newTamagotchi.hunger = newTamagotchi.hunger- 5;
            console.log(newTamagotchi.hunger);
            if(newTamagotchi.hunger == 0){
                clearInterval(growhungry);
            }
            $("#tamago").text(newTamagotchi.getName() + ", " + newTamagotchi.getHunger() + ", " + newTamagotchi.getSleep() );
           }, 5000);
           var growsleepy = setInterval( ()=> {
            newTamagotchi.sleep = newTamagotchi.sleep- 5;
            console.log(newTamagotchi.sleep);
            if(newTamagotchi.sleep == 0){
                clearInterval(growsleepy);
            }
            $("#tamago").text(newTamagotchi.getName() + ", " + newTamagotchi.getHunger() + ", " + newTamagotchi.getSleep() );
           }, 5000);
        var newTamagotchi = new Tamagotchi(tamagotchiName, tamagotchiHunger, tamagotchiSleep);
        console.log(newTamagotchi);
        $("ul#tamagotchi-list").append("<li><span id ='tamago'>" + newTamagotchi.getName() + ", " + newTamagotchi.getHunger() + ", " + newTamagotchi.getSleep() + "</span><br><button type='click' class='btn btn-dark' id='feed-tamagotchi'>Feed tamagotchi!</button><button type='click' class='btn btn-light' id='rest-tamagotchi'>Give tamagotchi rest!</button></li>");

        $("#feed-tamagotchi").on('click',function() {
            newTamagotchi.giveFood();
            $("#tamago").text(newTamagotchi.getName() + ", " + newTamagotchi.getHunger() + ", " + newTamagotchi.getSleep() );
        });

        $("#rest-tamagotchi").on('click',function() {
            newTamagotchi.giveRest();
            $("#tamago").text(newTamagotchi.getName() + ", " + newTamagotchi.getHunger() + ", " + newTamagotchi.getSleep() );
        });
     

    });
});