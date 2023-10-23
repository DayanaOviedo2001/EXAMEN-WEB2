import { PrismaClient } from '@prisma/client';


export const prisma = new PrismaClient();

async function main() {

const buscreate = await prisma.route.createMany ({
    data: [
        {    
         id: 1,
        start: "",
        destination: "",
        distance: 2,
        busId: 1,
        }  
        ]     
      })

      data: [
        {    
         id: 2,
        start: "",
        destination: "",
        distance: 3,
        busId: 2,
    
        }  
        ]     
      }

      data: [
        {    
         id: 3,
        start: "",
        destination: "",
        distance: 4,
        busId: 9,
        }  
        ]     




const mostraroute = await prisma.route.update ({
  where:{
    id: 1
  },
  data: {
    id: 1,
    start:  "ELIMINADO",
  }
 })
 console.log(mostraroute)

    main()
    .then(async()=> {
      await prisma.$disconnect()
    })
    .catch(async (e)=> {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })
    