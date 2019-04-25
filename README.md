# practica1

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
``` 
# Api
-----------------------
## Registro - Post
```
 /registro
```
### Envio
```json
{
  "apellido": "Apellido",
  "correo": "Correo",
  "nombre": "Nombre",
  "password": "Passowrd"
}
```
### Respuesta
Registro exitoso
```json
{
  "respuesta": 1
}
```
Registro fallido
```json
{
  "respuesta": 0
}
```
-----------------------
## Login - Post
```
 /login
```
### Envio
```json
{
  "correo": "Apellido", 
  "password": "Passowrd"
}
```
### Respuesta
Registro exitoso
```json
{
  "respuesta": 1,
  "idUsuario":32
}
```
Registro fallido
```json
{
  "respuesta": 0
}
```