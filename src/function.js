export const isNum = (number) => {
    try {
     
      if (isNaN(number)) {
        throw(`Ошибка`);
      }
      else {
        return Number(number);
      } 
    }
  
    catch(e){
      throw(`Данные не являются числом`);
    }
  }