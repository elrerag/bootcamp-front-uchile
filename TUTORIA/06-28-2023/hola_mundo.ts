// Definimos la interfaz para representar el objeto JSON del usuario con dirección
interface UsuarioConDireccion {
  nombre: string;
  edad: number;
  direccion: Direccion;
}

// Definimos la interfaz para representar el objeto JSON de la dirección
interface Direccion {
  calle: string;
  ciudad: string;
  codigoPostal: string;
}

// Creamos un objeto JSON para el usuario con dirección
const usuario: UsuarioConDireccion = {
  nombre: "Juan Pérez",
  edad: 30,
  direccion: {
    calle: "Calle Principal 123",
    ciudad: "Ciudad Ejemplo",
    codigoPostal: "12345"
  }
};

// Convertimos el objeto JSON a una cadena JSON para visualización
const usuarioJSON: string = JSON.stringify(usuario, null, 2);

console.log(usuarioJSON);
