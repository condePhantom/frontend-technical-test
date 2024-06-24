# Maxi Send Frontend Technical Test

## Welcome to my application for the Maxi Send test.

The application was created with React JS + Typescript as is suggested in te requirements. The application consists of 3 pages: **Home**, **Movies** and **Series**. The Home page shows two blocks which redirect to the Movies and Series page. Inside the other two pages, a list of movies is shown on screen with only the image and the title, to which if you click on one of them, a modal will open and show the information of the movie/series in more detail.

The application was deployed with the help of Vercel at the following link:

Open [https://frontend-technical-test-sigma.vercel.app/](https://frontend-technical-test-sigma.vercel.app/) to view in the browser.

## Pre requirements

You need to have node js installed.

## Scripts and commands

In the project directory, you can execute the following commands:

### `npm start`

Runs the app in the development mode.\

Open [http://localhost:3000/](http://localhost:3000) to view it in the browser.

### `npm test`

### `npm test -- --watch` (watch mode)

You will be able to run the tests and see all the process with the interactive watch mode.\

## Libraries used

- Material UI (MUI)
- react-redux
- reduxjs/toolkit
- react-router-dom
- testing-library

## Additional notes

I was hesitant to handle the url of the json from an ENV file but since it is only a single link and it is dummy data, I decided to handle it directly from the file.

### 1.- How did you decide on the technical and architectural choices used as part of your solution?

- Based on the requirements and recommendations made in the challenge, I personally find Material UI a useful tool for component design as it allows us to make detailed configurations. As requested I used MUI in combination with CSS Modules to fulfill one of the requirements.
- I decided to use the Atomic Design Architecture, because it allows us to have a better organization and distribution of our components, which helps us to be more reusable.
- I also decided to do the data fetch from the url provided to avoid more steps of running the json-server when running the code locally. Besides that by querying the url there may be more chance to test the fetching errors.

- Me base en los requerimientos y recomendaciones que hicieron en el challenge, personalmente Material UI me parece una herramienta util para el diseño de componentes ya que nos permite realizar configuraciones detalladas. De igual forma como lo solicitaba use MUI en combinación con CSS Modules para cumplir con uno de los requerimientos.
- Decidí usar la Arquitectura de Atomic Design, ya que con esta nos permite tener una mejor organización y distribución de nuestros componentes, lo cual nos ayuda a que sea más reutilizables.
- También decidí hacer el fetch de datos desde la url proporcionada para evitar más pasos de ejecutar el json-server al correr el código de manera local. Además de que al consultar la url puede haya mas probabilidad de probar los errores de fetching.

### 2.- Are there any improvements you could make to your submission?

- I would like to implement the 3rd consideration of pagination, but since there is no API as such the data is loaded on the home page by a simulation of an API, and in view there is a validation on the Movies and Series pages in case the data is not loaded in Redux redirects to Home, taking data from the url for the moment would not be possible since to have data you first have to go through the home page. It would be more feasible if the API came from a remote server.
- Me gustaría implementar la 3ra consideración de la paginación, pero ya que no existe una API como tal los datos se cargan en la pagina principal por una simulación de una API, y en vista existe una validación en las paginas de Movies y Series en caso que los datos no sean cargados en Redux redireccione a Home, el tomar datos de la url de momento no seria posible ya que para tener datos primero hay que pasar por la pagina principal. Sería mas factible si la API viniera de un servidor remoto.

### 3.- What would you do differently if you were allotted more time?

- I would have liked to create a specific API to design the pagination and data filtering as a real API, which according to the requirements could be performed in a more optimal way, plus the information could be added to more data which would give us more visual options in the frontend.
- I would also like to implement the tests for the pages that use Redux and API calls simulating a provider or a mock service worker.

- Me hubiera gustado crear una API especifica para diseñar el paginado y el filtrado de datos como una API real, lo cual de acuerdo a los requerimientos se pudieran realizar de manera mas optimas, además de que a la información se le pudiera agregar mas datos lo que nos daria mas opciones visuales en el frontend.
- También me gustaría implementar los test para las paginas que usan Redux y llamadas a API simulando un provider o un mock service worker.
