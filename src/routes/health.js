async function healthRoutes(fastify, _opts) {
fastify.get("/",async ()=>{
    return {
        status: 200,
        uptime: process.uptime,
        timestamp:new Date().toISOString(),
    }
})
}

export default healthRoutes;