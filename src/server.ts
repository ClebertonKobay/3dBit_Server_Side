import fastify from "fastify";
import dotenv from 'dotenv'; 
import cors from '@fastify/cors';
const app = fastify()

dotenv.config();
const port = Number(process.env.PORT) ?? 3000

 app.register(cors); 

try{
    app.listen({
        port
    }).then(()=>{
        console.log(`Server Running on port ${port}`)
    })
}catch(e){
    app.log.error(e)
    process.exit(1)
}
