var customer = {
    id:1,
    contactName :"Musa UYUMAZ"
};
 
customer.country ="Turkey";

customer.sayHello = function(){
    alert("Hello "+this.contactName); // this bu metodu barındıran nesne 
}
customer.sayHello();