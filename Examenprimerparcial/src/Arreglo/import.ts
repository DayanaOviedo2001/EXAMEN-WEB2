import { IBus } from "../Interfaces/Interfaz";

const fases : IBus  [] =[
    {
    id: 1,
    busNumber: 1,
    brand: "",
    model: "",
    capacity: 2,
    routes : [
    {
    id: 1,
    start: "",
    destination: "",
    distance: 2,
    busId: 1,

    },
    {
        id: 2,
        start: "",
        destination: "",
        distance: 3,
        busId: 2,
    
        }, 
        {
            id: 3,
            start: "",
            destination: "",
            distance: 4,
            busId: 9,
            }
]

}]
const fasesFind = (id: number): IBus | undefined =>{
    const dato = fases.find(
        (dato:IBus) => {return dato.id == id}
    )
    if (dato){
        dato.model="ELIMINADO"
        return dato
    }
    else{
        throw new Error('error')
    }
}
const datoEncontrado = fasesFind(2)
console.log(datoEncontrado)




 
    