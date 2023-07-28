// Interfaces para representar los objetos JSON
interface Direccion {
    calle: string;
    ciudad: string;
    codigoPostal: string;
}

interface Contacto {
    email: string;
    telefono: string;
}

interface Usuario {
    nombre: string;
    edad: number;
    direccion: Direccion;
    contacto: Contacto;
}

const usuarios: Usuario[] = []

const dir001: Direccion = {
    calle: "Calle Principal 123",
    ciudad: "Ciudad Ejemplo",
    codigoPostal: "12345"
};

const contac001: Contacto = {
    email: "usuario@example.com",
    telefono: "555-1234"
};

const juan: Usuario = {
    nombre: "Juan Pérez",
    edad: 30,
    direccion: dir001,
    contacto: contac001
};
usuarios.push(juan)


const dir002: Direccion = {
    calle: "Avenida Principal 456",
    ciudad: "Ciudad Ficticia",
    codigoPostal: "54321"
};

const contac002: Contacto = {
    email: "usuario@example.com",
    telefono: "555-5678"
};

const maria: Usuario = {
    nombre: "María López",
    edad: 25,
    direccion: dir002,
    contacto: contac002
};
usuarios.push(maria)


