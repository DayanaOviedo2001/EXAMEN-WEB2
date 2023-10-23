export interface IBus {
    id: number ; 
    busNumber: number;
    brand: string;
    model: string;
    capacity: number; 
    routes: IRoute [];
} 
export interface IRoute {
    id: number; 
    start: String;
    destination: String;
    distance: number;   
    busId:  number;
  }
