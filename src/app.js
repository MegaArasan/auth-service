import Fastify from "fastify";
import healthRoutes from "./routes/health.js";

// const  healthRoutes from

const buildServer=()=>{
    const  fastify=Fastify({
        logger:true,
    });

    fastify.register(healthRoutes,{ prefix: "/health" });

    fastify.get("/", (request, response) => {
        return {
            status: "ok",
            service: "auth-service",
        };
    });

    return fastify;
}

const start=async()=>{
    const fastify=buildServer();
    try{
        await fastify.listen({port:3001});
        console.log("server started");
    }catch (e) {
        fastify.log.error(e);
        process.exit(1);
    }
}

start();

export default buildServer;