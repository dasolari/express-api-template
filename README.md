# Express + Prisma Template 🌚
An Express api template using Typescript and Prisma with Postgresql

## Requirements
- [Node 16](https://nodejs.org/en)
- [Postgresql](https://www.postgresql.org)

## Instalation Guide and Tutorial
1.  Create two enviroment files in the root of the project:
    - `.env`
    - `.env.test`
    It must contain the following variable:
    ```bash
    DATABASE_URL=postgresql://<USERNAME>:<PASSWORD>@<HOST>:<PORT>/<DATABASE_NAME>?schema=public
    ```
    An example would be:
    ```bash
    DATABASE_URL=postgresql://postgres:postgres@localhost:5432/template_dev?schema=public
    ```
    Keep in mind that the test database connection url (in `.env.test`) must have a different database name than the one in your `.env` file.
2. Install the project dependencies:  
    ```bash
    yarn install
    ```
3. Add a model to the schema in `src/prisma/schema.prisma`:
    ```prisma
    model Hello {
      id        String   @id @default(uuid()) @db.Uuid
      name      String   @db.VarChar
      createdAt DateTime @default(now()) @db.Timestamp(6)
      updatedAt DateTime @updatedAt @db.Timestamp(6)
    }
    ```
    All models have to be written in the same file (`schema.prisma`), so to keep a sort of order in your models, it's recommended that you write them in alphabetical order. To format your `schema.prisma`, press `Opt` + `Shift` + `F` on Mac and `Alt` + `Shift` + `F` on Windows. Then, run this command to save the Prisma types in your `node_modules` folder:
    ```bash
    yarn prisma:generate
    ```
4. Run a migration to reflect changes to your schema in the database:
    ```bash
    yarn db:migrate --name your-migration-name
    ```
    If you want to forcefully synchronize your schema into a database without running migrations, you can do:
    ```bash
    yarn db:sync:force
    ```
    If you want to reset your database, run:
    ```bash
    yarn db:reset
    ```
    More information about Prisma and migrations in their [docs](https://www.prisma.io/docs/concepts/components/prisma-migrate). Never edit your migration files; it's always better to just create new migrations.
5. Apply seeds to your database:
    ```bash
    yarn db:seed
    ```
6. Now you can create a controller that interacts with your model. Create a new route file inside the `src/handlers/routes` folder; then add a reference to that file in the `src/handlers/index.ts` file, creating the route itself. Then, create and outer bussiness layer for handling the route logic in each folder inside `src/handlers/controllers`. Finally, map each controller with an action inside the actions folder (this acts as the most inner bussiness logic of the app).
7. Finally, run your app with the command:
    ```bash
    yarn start
    ```
    Or, if you want your app to listen to changes, run:
    ```bash
    yarn dev
    ```
    
### Useful prisma commands
Open a database visualizer:
```bash
npx prisma studio
```
Pull the schema from an existing database into an empty schema:
```bash
npx db pull
```
