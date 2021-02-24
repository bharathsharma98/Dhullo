export const ServicePrice = (service) => {
    let servicePrice = 0;
    switch (service) {
        case 'ONETIME': {
            return servicePrice = 300;
             
        }
             case 'SILVER': {
            return servicePrice = 400;
             
        }
             case'GOLD': {
              return servicePrice = 500;
             
            
        }
             case 'PLATINUM': {
            return servicePrice = 600;
            
        }
             case 'SANITIZATION': {
            return servicePrice = 300;
            
        }
             case 'EXTERIOR': {
            return servicePrice = 200;
             
        }
             case 'INTERIOR': {
            return servicePrice = 500;
             
        }
        default: {
            return servicePrice=0
            }
    }
}
export const CarTypePrice = (category) => {
     let cartypePrice = 0;
     switch (category) {
       case "HATCHBACK": {
         return (cartypePrice = 300);
       }
       case "SEDAN": {
         return (cartypePrice = 400);
       }
       case "SUV": {
         return cartypePrice = 500;
       }
       case "PREMIUM": {
         return (cartypePrice = 600);
       }
       
       default: {
         return (cartypePrice = 0);
       }
     }
}