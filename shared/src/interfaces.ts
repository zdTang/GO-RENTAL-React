// Actually, these are not interfaces, they are constants. But it's a good practice to keep them in a separate file and export them from there. This way, you can reuse them in different parts of your application. In this case, you can use them in the server/models/car.model.ts file and in the client/src/components/CarForm.tsx file.
export const CarsStatus=["Draft","Active"];
export const CarBrand=[
    "Audi",
    "BMW",  
    "Chevrolet",
    "Ford",
    "Honda",    
    "Hyundai",
    "Mercedes Benz",
    "Nissan",
    "Toyota",
    "Volkswagen",
    "Volvo"
];
export const CarCategories=["Sedan","Coupe","SUV","Truck","Van","Wagon","Convertible","Hatchback"];
export const CarFuelType=["Gasoline","Diesel","Electric","Hybrid","Petrol"];
export const CarTransmission=["Automatic","Manual"];
export const CarSeats=[2,4,5,7,9,12];
export const CarDoors=[2,3,4,5];

export interface ICar{
  id:string;
  name:string;
  description:string;
  status: string;
  rentPerDay:number;
  address:string;
  images: [{ url: string, public_id: string }];
  brand: string;
  year:number;
  transmission: string;
  doors: number;
  fuelType: string;
  category: string;
  ratings:{
    value:number;
    count:number
  };
  power:number;
  milleage:number;
  seats: number;
  createdAt:string;
  updatedAt:string;
  reviews: string[];
}

// This is a interface
/* 
interface Car {
    status: "Draft" | "Active";
    brand: "Audi" | "BMW" | "Chevrolet" | "Ford" | "Honda" | "Hyundai" | "Mercedes Benz" | "Nissan" | "Toyota" | "Volkswagen" | "Volvo";
    category: "Sedan" | "Coupe" | "SUV" | "Truck" | "Van" | "Wagon";
    fuelType: "Gasoline" | "Diesel" | "Electric" | "Hybrid";
    transmission: "Automatic" | "Manual";
    seats: 2 | 4 | 5 | 7 | 9 | 12;
    doors: 2 | 3 | 4 | 5;
  }
*/
