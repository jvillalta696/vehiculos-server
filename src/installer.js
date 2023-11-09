// Importar el módulo node-windows
import { Service } from 'node-windows';

// Crear un nuevo objeto de servicio
const svc = new Service({
  name:'AUTH USER VEHICULO API',
  description: 'Api para el manejo de usuarios en VEHICULO App',
  script: '',
  nodeOptions: [
    '--harmony',
    '--max_old_space_size=4096'
  ]
  //, workingDirectory: '...'
  //, allowServiceLogon: true
});

// Escuchar el evento "install", que indica que el
// proceso está disponible como un servicio.
svc.on('install',function(){
  svc.start();
});

// Instalar el servicio
svc.install();
