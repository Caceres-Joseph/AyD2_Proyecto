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
### Envío
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
### Envío
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

-----------------------
## Saldo - Post
```
 /saldo
```
### Envío
```json
{
  "idUsuario": 32,  
}
```
### Respuesta 
```json
{
  "saldo": 32.23, 
}
``` 
-----------------------
## Acreditar - Post
```
 /acreditar
```
### Envío
```json
{
  "monto": 23.43,  
  "idUsuario":32
}
```
### Respuesta
Acreditación exitosa
```json
{
  "respuesta": 1, 
}
```
Acreditación fallida
```json
{
  "respuesta": 0
}
```

-----------------------
## Debitar - Post
```
 /debitar
```
### Envío
```json
{
  "monto": 23.43,  
  "idUsuario":32
}
```
### Respuesta
Debito exitoso
```json
{
  "respuesta": 1, 
}
```
Debito fallido
```json
{
  "respuesta": 0
}
```