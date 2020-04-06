class Products {
    constructor(id, name, price, url){
        this.id = id;
        this.name = name;
        this.price = price;
        this.url = url;
    }
}

var productOperations = {
    products:[],
    read(){                                  // read: function(){}
        for(let i=1;i<=10;i++){
           var url = i%2==0?"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSpI-629kvCGWa7suQuhjY7TGFW09KqJl0NQK-y7b-XeNSaae-b2cjQ2gpbCuFj&usqp=CAc":"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQU2Dr-tDODzdTmqe-tvW6gHmbCSnIsCrLt-0t7pABTQjnjjZtTtexavjY6TZxy_-18qRwXAzmDvrG1yMR7RneZo3mVPwKDfzJvpFGqvaQ&usqp=CAc";
           var product = new Products(i, 'REALME ' +i, i*1000, url);
           this.products.push(product);
        }
        return this.products;
    },
    search(price){
        return this.products.filter(product=>product.price>=price);
    },
    addToCart(id){
        return this.products.find(product=>product.id==id);
    }
}