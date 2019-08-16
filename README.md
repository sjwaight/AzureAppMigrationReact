# Migrating your apps to Azure

> Note: the original source of this project can be found in the [GitHub repository](https://github.com/microsoft/IgniteTheTour/tree/master/DEV%20-%20Building%20your%20Applications%20for%20the%20Cloud/DEV10/src/frontend) for Microsoft Ignite | The Tour 2018.

## React SPA - Inventory Frontend

This project requires Node.js 8+ to build. It won't work well without the [product-service](https://github.com/sjwaight/AzureAppMigrationNode) and [inventory-service](https://github.com/sjwaight/AzureMigrationDotNet) running.

## To Setup

1. Create a file called `.env` in the root folder of this project
1. Put two variables in it, `PRODUCT_SERVICE_BASE_URL` and `INVENTORY_SERVICE_BASE_URL` with the correct URLs to your two REST services.
   - If running locally, copy the snippet below.
   - If running in production, make sure the URLs match where the services are
   - Make sure CORS headers are set correctly in other services.

```
PRODUCT_SERVICE_BASE_URL=http://localhost:8000
INVENTORY_SERVICE_BASE_URL=http://localhost:5000
```
1. (Optional) Set `APPINSIGHTS_INSTRUMENTATIONKEY` with Applications Insights key (enables Application Insights)
1. (Optional) Set `DISPLAY_SQL_INFO`=`true` to display SQL Server information from Inventory Service. **Leave empty if you don't want to show this.**

## To Develop

1. In the root folder run `npm install`
1. `npm run dev`
1. Open http://localhost:1234 in your browser
1. Adhere to the Prettier and ESLint rules before checking in

## To Build for Production

1. In the root folder run `npm install`
1. `npm run build`
1. The deployable project will be built in `<project>/dist`

## Debugging

- Parcel (the bundler used here) has a hard time when you change `.env` variables on it. When you change you `.env`, delete the `.cache/` and `dist/` directories and then run a new build.

## Running in Docker

You can build this app super easily with Docker:

```console
docker build -t twt-fe .
```

That will build and minimize all assets for you. Then you can run it with:

```console
docker run --rm -d -p 8080:8080 -e PRODUCT_SERVICE_BASE_URL=https://product-service-base-url -e INVENTORY_SERVICE_BASE_URL=https://inventory-service-base-url twt-fe
```

Pass in the proper product and inventory service base URLs at startup. Then you can go check it out at `http://localhost:8080`.

