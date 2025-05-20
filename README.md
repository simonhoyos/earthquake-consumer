# Earthquake consumer micro-service

This is a micro services project example based on the book hands on microservices with JavaScript [GitHub](https://github.com/PacktPublishing/Hands-on-Microservices-with-JavaScript/tree/main/Ch08/earthquakeConsumer)

## How to run

> [!NOTE]
> This project depends on the earthquake consumer micro-service project. Go to this repository and follow the instructions to run it. [GitHub](https://github.com/simonhoyos/earthquake-consumer)

1. Clone this repository
2. Run `nvm use` to set the node version
3. Run `pnpm install` to install the dependencies
4. Make sure you have defined all the environment variables in the `.env` file. You can use the `.env.example` file as a reference.
5. Make sure `KAFKA_TOPIC` is the same in both services.
6. Run `pnpm dev` to start the development server
