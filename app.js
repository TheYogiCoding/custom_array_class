import { Custom_Array } from "./Custom_Array.js";

let ar = new Custom_Array(3);

//Demonstrates dynamically resizing array

ar.insert(42);

ar.insert(41);

ar.insert(50);

ar.insert(51);

ar.insert(52);

ar.insert(53);

ar.removeAt(3);

ar.removeAt(4);

ar.print();

ar.indexOf(41);
