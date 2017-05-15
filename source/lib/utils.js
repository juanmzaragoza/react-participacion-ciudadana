export const arrayUnion = (arr1, arr2, equalityFunc) => {

    var union = arr1.concat(arr2);

    for (var i = 0; i < union.length; i++) {
        for (var j = i+1; j < union.length; j++) {
            if (equalityFunc(union[i], union[j])) {
                union.splice(j, 1);
                j--;
            }
        }
    }

    return union;
}

export const areEntitiesEqual = (g1, g2) => {
    return (g1.id === g2.id && g1.tipo === g2.tipo);
}

export const shuffle = (array) => {
  var i = 0, j = 0, temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }

  return array;
}

export const getDateFormat = (date) => {

  var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
  var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
  
  var f=new Date(date);
  return diasSemana[f.getDay()] + "," + pad2(f.getDate()) + "-" + pad2(f.getMonth()+1) + "-" + f.getFullYear()

}

function pad2(number) {
   
     return (number < 10 ? '0' : '') + number
   
}

export const objectIsEmpty = (map) => {
   for(var key in map) {
      return !map.hasOwnProperty(key);
   }
   return true;
}