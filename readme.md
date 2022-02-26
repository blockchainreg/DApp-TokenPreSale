DOCUMENTACION PARA IMPLEMENTACION:



-Descargar repositorio
-Instalar dependencias ( npm i en el directorio donde estamos trabajando)
-Activar ganache y configurar puertos en truffle-config.js
-Crear archivo .env para resguardar nuestras credenciales privadas (infura y mnemonic)
-Crear cuenta en ethereum api
-Poner api de ethereum en el .env

-Setear nombre / total Supply / Precio del token a gusto

-Modificar index a gusto
 

 A la hora de las pruebas:
 - truffle compile 
 // Ese comando va a compilar nuestros contratos
 - truffle migrate --network rinkeby (o la que hayan configurado en el truffle-config.js como network de deploy)
 - truffle run verify DappToken DappTokenSale --network rinkeby 
 // Comando para verificar los contratos 
