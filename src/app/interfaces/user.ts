export interface User {
  id: string;
  name: string;
  lastname: string;
 // addres: Address;
  //profile : Profile
}

export interface Address {
  street: string;
  number: number;

}

export interface Profile {
   id: string;
   description: string;   
  
  }

  const users: User[] = [
    {id:'1', name:'Test 1', lastname:'Test 1', },
    {id:'1', name:'Test 1', lastname:'Test 1', },
    {id:'1', name:'Test 1', lastname:'Test 1', }
  ]
