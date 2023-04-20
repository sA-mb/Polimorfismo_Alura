/*Importación de clases*/
import { Cliente } from "./Cliente.js";
import { Empleado } from "./Empleados/Empleado.js";
import { Gerente } from "./Empleados/Gerente.js";
import { Director } from "./Empleados/Director.js";
import { SistemaAutenticacion } from "./SistemaAutenticacion.js";

const cliente = new Cliente("Sebas", "13804050", "123224");
cliente.asignarClave("12312145");
console.log(SistemaAutenticacion.login(cliente, "12312145"));

//const cliente2 = new Cliente("María", "16979808", "8989");

const empleado = new Empleado("Patricio Estrella", "222222", 2000);
empleado.asignarClave("12345");
console.log(SistemaAutenticacion.login(empleado, "12345"));

/* const gerente = new Gerente("Calamardo Tentaculos", "000004562", 10000);
const director = new Director("Don Cangrejo", "00000002", 5000);
 */
