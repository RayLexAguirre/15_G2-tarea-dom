![Logo UCOL](img/ucol-logo.jpg)

![Portada](img/cover.jpg)
> London Aquatics Centre, London, United Kingdom. Funding from the National Lottery made this lovely space possible. Photo by <a href="https://unsplash.com/@dylan_nolte?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">dylan nolte</a> on <a href="https://unsplash.com/t/health?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
# Tarea DOM

El objetivo de este ejercicio es prácticar la interacción con HTML utilizando la api DOM de javascript

## Requerimientos funcionales

Programar una página web que permita a los usuarios agregar los datos de personas a una lista de contactos.

1. (25 Puntos) Programar la clase `BirthDate`. Deberá incluir los siguientes:
   - Atributos:
     - `Number day`  número de día de la fecha de nacimiento.
     - `Number month` número de mes de la fecha de nacimiento.
     - `Number year` año de la fecha de nacimiento
   - Métodos
     - `constructor()` recibe valores iniciales para `day`, `month` y `year`.
     - `getAge()` regresa la edad correspondiente a esa fecha de nacimiento.

2. (25 Puntos) Programar la clase `Contact`. Deberá incluir los siguientes:
   - Atributos:
     - `String name` nombre del nuevo contacto
     - `String email` correo electrónico de contacto
     - `BirthDate birthDate` edad del contacto
     - `String phoneNumber` número telefónico del contacto
     - `String address` dirección del contacto
   - Métodos:
     - `constructor()` recibe los valores iniciales para `name`, `email`, `birthDate`, `phoneNumber` y `address`.
     - De acceso de lectura para `name`, `email`, `birthDate`, `phoneNumber` y `address`.
     - getAge() regresa la edad del contacto
     - `static readForm()` obtiene el `name`, `email`, `birthDate`, `phoneNumber` y `address` de un formulario y regresa un objeto tipo Contact y deja el formulario en blanco. El campo `address` es opcional y todos los demás son obligatorios. En caso de que falte uno o más de los campos obligatorios el método regresa `false` y NO borra los datos del formulario; En ambos casos la página web deberá mostrar una notificación (alert) dependiendo del caso para informar si fue exitosa o no.
     - Para los inputs del formulario utilice los siguientes ids:  `name`, `email`, `birthDate`, `phoneNumber`, `address`. Para el botón utilice el id `btnAdd`

3. (25 Puntos) Programar la clase `List`. Deberá incluir los siguientes:
   - Atributos:
     - `Contact contacts[]` vector que guarda todos los contactos de esta lista.
   - Métodos:
     - `constructor()` inicia `contacts`
     - `add(contact)` agrega un `contact` al vector `contacts`. Si el `contact` no está registrado se agrega y regresa `true`. Si ya está registrado no se agrega y regresa `false`. Dos `contact` son iguales si tienen el mismo `email`.En ambos casos la página web deberá mostrar una notificación (alert) dependiendo del caso.
     - También, cuando se agrega un nuevo contacto deberá mostrarse su información en una tabla dentro de la página web. La información que deberá mostrarse son: nombre, correo, edad, número de teléfono y dirección.

4. (25 Puntos) Programar la clase `App`. Deberá estar dentro del archivo main.js e incluir los siguientes:
   - Métodos:
     - `constructor()` inicia el botón del formulario para que cuando el usuario haga `click` sobre de el obtenga los datos del formulario y si todo está bien agregue el nuevo contacto a la lista `List`, los muestre en la tabla de la página web y muestre un mensaje de alerta al usuario indicando que el contacto se agregó de manera correcta. Si hubo algún problema (no se capturaron todos los campos obligatorios o el contacto ya estaba registrado). Deberá mostrar una alerta informando al usuario
     - `_addContact()` método que se ejecuta cuando se hace `click` sobre el botón.

## Requerimientos no funcionales

- Las clases, métodos y atributos deberán tener el nómbre que se indica y el número y tipo de parámetros que se especifica.
- Las clases deberán estar encapsuladas.
- Se deberán utilizar las convenciones de estilo para clases, métodos, atributos, parámetros y variables

## Entregable

- Código fuente en este repositorio
  
## Evaluación

- Para que la tarea sea considerada como válida, el repositorio deberá tener por lo menos 1 commit por cada método.
- Los repositorios que no tengan una historia de commits considerable NO serán considerados como válidos y obtendrán cero como calificación.
