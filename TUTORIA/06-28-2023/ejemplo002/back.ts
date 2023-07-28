// Interface para representar la dirección
interface Direccion {
    calle: string;
    ciudad: string;
    codigoPostal: string;
  }
  
  // Interface para representar el contacto
  interface Contacto {
    email: string;
    telefono: string;
  }
  
  // Interface para representar al usuario
  interface Usuario {
    nombre: string;
    edad: number;
    direccion: Direccion;
    contacto: Contacto;
  }
  
  // Clase para implementar la dirección
  class DireccionClass implements Direccion {
    constructor(
      public calle: string,
      public ciudad: string,
      public codigoPostal: string
    ) {}
  }
  
  // Clase para implementar el contacto
  class ContactoClass implements Contacto {
    constructor(public email: string, public telefono: string) {}
  }
  
  // Clase para implementar al usuario
  class UsuarioClass implements Usuario {
    constructor(
      public nombre: string,
      public edad: number,
      public direccion: Direccion,
      public contacto: Contacto
    ) {
        this.nombre = nombre.toLowerCase() // demostración de métodos
    }
  }
  
  const usuarios: Usuario[] = [];
  
  // Creamos instancias de las clases y las agregamos al arreglo usuarios
  const dir001 = new DireccionClass("Calle Principal 123", "Ciudad Ejemplo", "12345");
  const contac001 = new ContactoClass("usuario@example.com", "555-1234");
  const juan = new UsuarioClass("Juan Pérez", 30, dir001, contac001);
  usuarios.push(juan);
  
  const dir002 = new DireccionClass("Avenida Principal 456", "Ciudad Ficticia", "54321");
  const contac002 = new ContactoClass("maria@example.com", "555-5678");
  const maria = new UsuarioClass("María López", 25, dir002, contac002);
  usuarios.push(maria);
  