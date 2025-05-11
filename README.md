# Documentación

## Redes y Peticiones

Al utilizar docker compose se crea una red interna donde el único servicio expuesto es el frontend, por lo que el backend y la base de datos solamente estan accesibles dentro de la red de Docker. Esto quiere decir que desde el host no se puede acceder a ninguno de estos. Entonces la única forma de que el front pueda realizar peticiones a la API en el backend es por medio de peticiones del lado del servidor. En otras palabras, debemos usar SSR para aquellos componentes que requieran renderizar información que deba ser solicitada al backend.