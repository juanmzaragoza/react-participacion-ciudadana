export const selectMultipleFilters = (items, id) => {
  items.forEach(function(item, index){
    if(item.id == id){ 
      item.active = item.active? false:true;
      items[index] = item;
    }    

  });
  return items;
}

export const selectOnefilter = (items, id) => {
  items.forEach(function(item, index){
    //no permito que se puedan seleccionar mas de 2 items a la vez
    if(item.id == id){ 
      item.active = item.active? false:true;
    } else{
      item.active = false;
    }
    items[index] = item;

  });
  return items;
}