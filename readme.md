# Spike

- 1._ ```git clone https://github.com/MartinFitS/api_spike.git ```

- 2._ ```git branch nuevarama```
- 3._ ```git checkout nuevarama```
- 4._ ```git pull origin main```
- 5._ ```npm i```


### For Migrations:
```bash
npx prisma migrate dev --name init
```
# API de Gestión de Veterinarias

API Spike para la gestión de veterinarias, que permite crear y administrar datos relacionados con clínicas veterinarias.

## Endpoints

### 2. Crear Usuario

- **Endpoint:** `POST /createUser`
- **Descripción:** Crea un nuevo usuario en la base de datos.
- **Parámetros del cuerpo de la solicitud:**

```json
    
{
    "firstName": "Martin",
    "lastName": "Serna",
    "email": "msd@gmail.com",
    "phone": "3143386885",
    "password": "Martinsd2004?",
    "role": "PET_OWNER",
    "city": "New York",
    "number_int": 45,
    "cp": 10002
}

```
### 2. Crear Veterinaria

- **Endpoint:** `POST /createVeterinary`
- **Descripción:** Crea una nueva veterinaria en la base de datos.
- **Parámetros del cuerpo de la solicitud:**

```json
    
{
    "veterinarieName": "Veterinaria perracos",
    "street": "Calle Falsa 123",
    "email": "veterinarisdsdsa@example.com",
    "phone": "1234567891",
    "password": "martinSd2004?",
    "role": "VETERINARY_OWNER",
    "city": "New York",
    "locality": "Manhattan",
    "cologne": "Central",
    "number_int": 42,
    "cp": 10001,
    "rfc": "ABC123456789"
}

```
### 3. Listar usuarios

- **Endpoint:** `GET /getUsers`
- **Descripción:** Listar usuarios de veterinarias y usuarios.
- **Parámetros del cuerpo de la solicitud:**

```

