/**
 * Source: Beecrowd
 * @problem: 1001 - Extremely Basic
 * @subject: Sequential
 *
 * @author: Letícia Cruz
 * @date: 2025-04-21
 */

//Lê entradas
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

//Declara variáveis
var a = parseInt(lines.shift());
var b = parseInt(lines.shift());

console.log("X = " + (a + b)); //Imprime soma
