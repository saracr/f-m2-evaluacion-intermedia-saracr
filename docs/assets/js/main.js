"use strict";const counter=document.querySelector(".page__main-counter"),insertNumber=document.querySelector(".page__main-insert"),btn=document.querySelector(".btn"),clue=document.querySelector(".page__main-clue");function getRandomNumber(e){return Math.ceil(100*Math.random())}console.log(">> Ready :)"),console.log("> "+getRandomNumber(100));const writeClue=()=>{clue.innerHTML=insertNumber.value,getRandomInt(100)&&console.log("Demasiado alto!")};btn.addEventListener("click",writeClue);