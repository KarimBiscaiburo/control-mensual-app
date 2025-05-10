FROM node:23.11.0-alpine3.21

# Agregamos un grupo de usuarios y un usuario para ejecutar la aplicación
RUN addgroup gastos-group-front && adduser -S -G gastos-group-front gastos-user
# Cambiamos el propietario de los archivos de la aplicación al nuevo usuario
USER gastos-user

# Cambiar el directorio de trabajo
WORKDIR /app

# Copiamos los archivos de configuración de la aplicación y le asignamos el propietario al nuevo usuario
# COPY --chown=usuario:grupo archivo destino
# "." = directorio actual (/app)
COPY --chown=gastos-user:gastos-group-front package*.json .

# Instalamos las dependencias de la aplicación
# RUN se ejecuta cuando se contruye la imagen
RUN npm install

# Copiamos el resto de los archivos de la aplicación y le asignamos el propietario al nuevo usuario
COPY --chown=gastos-user:gastos-group-front . .

# Exponemos el puerto 3000 para la aplicación
# Como voy a definir todas las variables de entorno en el docker-compose, no es necesario definirlas aca
# ENV PORT=4000

# EXPOSE es solo un comentario, no es necesario para el funcionamiento del contenedor
EXPOSE 3000

# Comando para iniciar la aplicación
# CMD se ejecuta cuando se inicia el contenedor
CMD ["npm", "run", "dev"]

# Nextjs por defecto ya expone el puerto que declaramos en la network, por lo que no es necesario modificar algo en el package.json