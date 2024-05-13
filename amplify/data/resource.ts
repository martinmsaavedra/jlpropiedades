import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
  Property: a
    .model({
      name: a.string(), // Nombre de la propiedad
      location: a.string(), // Dirección de la propiedad
      country: a.string(), // País donde se encuentra la propiedad
      city: a.string(), // Ciudad o localidad
      bathrooms: a.integer(), // Número de baños
      bedrooms: a.integer(), // Número de dormitorios
      size: a.integer(), // Tamaño de la propiedad en metros cuadrados
      description: a.string(), // Descripción detallada de la propiedad
      price: a.integer(), // Precio de la propiedad
      images: a.string(), // Lista de URLs de imágenes
      status: a.enum(["AVAILABLE", "SOLD", "PENDING", "UNLISTED", "RENTED"]), // Estado de la propiedad
    })
    .authorization((allow) => [allow.publicApiKey()]), // Autorización con clave API pública
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
