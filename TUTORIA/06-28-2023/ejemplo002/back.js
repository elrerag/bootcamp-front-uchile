"use strict";
// Clase para implementar la dirección
class DireccionClass {
    constructor(calle, ciudad, codigoPostal) {
        this.calle = calle;
        this.ciudad = ciudad;
        this.codigoPostal = codigoPostal;
    }
}
// Clase para implementar el contacto
class ContactoClass {
    constructor(email, telefono) {
        this.email = email;
        this.telefono = telefono;
    }
}
// Clase para implementar al usuario
class UsuarioClass {
    constructor(nombre, edad, direccion, contacto) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
        this.contacto = contacto;
        this.nombre = nombre.toLowerCase(); // demostración de métodos
    }
}
const usuarios = [];
// Creamos instancias de las clases y las agregamos al arreglo usuarios
const dir001 = new DireccionClass("Calle Principal 123", "Ciudad Ejemplo", "12345");
const contac001 = new ContactoClass("usuario@example.com", "555-1234");
const juan = new UsuarioClass("Juan Pérez", 30, dir001, contac001);
usuarios.push(juan);
const dir002 = new DireccionClass("Avenida Principal 456", "Ciudad Ficticia", "54321");
const contac002 = new ContactoClass("maria@example.com", "555-5678");
const maria = new UsuarioClass("María López", 25, dir002, contac002);
usuarios.push(maria);
