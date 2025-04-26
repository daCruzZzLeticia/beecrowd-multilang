/**
 * @problem: 1001 - Extremely Basic
 * Source: Beecrowd
 *
 * @author: Letícia Cruz
 * @date: 2025-04-21
 *
 */

//Lendo entradas
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

//Declarando variáveis
var a = parseInt(lines.shift());
var b = parseInt(lines.shift());

console.log("X = " + (a + b)); //Imprimindo soma
