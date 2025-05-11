/**
 * Source: Beecrowd
 * @problem: 1049 - Animal
 * @subject: Selection
 *
 * @author: Letícia Cruz
 * @date: 2020-11-13
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(/\r?\n/);

let categoria1 = lines.shift();
let categoria2 = lines.shift();
let categoria3 = lines.shift();

let animal;

if (categoria1 === "vertebrado") {
    if (categoria2 === "ave") {
        if (categoria3 === "carnivoro") {
            animal = "aguia";
        } else {
            animal = "pomba";
        }
    } else {
        if (categoria3 === "onivoro") {
            animal = "homem";
        } else {
            animal = "vaca";
        }
    }
} else {
    if (categoria2 === "inseto") {
        if (categoria3 === "hematofago") {
            animal = "pulga";
        } else {
            animal = "lagarta";
        }
    } else {
        if (categoria3 === "hematofago") {
            animal = "sanguessuga";
        } else {
            animal = "minhoca";
        }
    }
}

console.log(animal);
