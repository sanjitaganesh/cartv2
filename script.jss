alert("JS loaded");
const items=[
    {price:10,qty:1},
    {price:15,qty:1}
];

function updateTotal(){
    let total=0;
   for(let item of items){
        total+=item.qty*item.price;
   }

   items.forEach((item, index)=>{document.getElementById("qty-${index}").textContent=item.qty;
});
   document.getElementById("total").textContent=total.toFixed(2);
}
   function increase(index){
        items[index].qty++;
        updateTotal();
   }

   function decrease(index){
        if(items[index].qty<=1) return;
        items[index].qty--;
        updateTotal();
   }
    updateTotal();
