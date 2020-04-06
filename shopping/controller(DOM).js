window.addEventListener('load',init);

function init(){
    printProducts();
    document.getElementById('searchBt').addEventListener('click',searchProducts);
    document.getElementById('load').addEventListener('click',printProducts);
}

function printProducts(){
    document.getElementById('price').focus();
    var products = productOperations.read();
    for(let product of products){
        var ul = document.getElementById('products');
        var li = document.createElement('li');
        li.appendChild(createImage(product.url));
        li.appendChild(createSpan(product.name, product.price));
        ul.appendChild(li);
        li.appendChild(createBtn(product.id));
     }
}

function searchProducts(){
    var input = document.getElementById('price').value;
    var searchedpros = productOperations.search(input);
    var ul = document.getElementById('products');
    ul.innerHTML='';
    for(let searchedpro of searchedpros){
        var li = document.createElement('li');
        li.appendChild(createImage(searchedpro.url));
        li.appendChild(createSpan(searchedpro.name, searchedpro.price));
        ul.appendChild(li);
        li.appendChild(createBtn(searchedpro.id));
    }
}

function createImage(url){
    var img = document.createElement('img');
    img.src = url;
    img.className = 'size';
    return img;
} 

function createSpan(name, price){
    var span = document.createElement('span');
    span.innerText = name+' '+'Rs.'+price;
    return span;
}

function createBtn(id){
    var btn = document.createElement('button');
    btn.innerText='ADD TO CART';
    btn.setAttribute('product-id',id);
    var attribute = btn.getAttribute('product-id');
    cartItems(attribute, btn);   
    return btn;
}

function cartItems(attribute, btn){
btn.addEventListener('click',function(){
    for(let j = 1;j<=productOperations.products.length;j++){
        if(j==attribute){
        var ul = document.getElementById('products');
        var li = document.createElement('li');
        var item = productOperations.addToCart(j);
        document.getElementById('items').addEventListener('click',function(){
            ul.innerHTML='';
            li.appendChild(createImage(item.url));
            li.appendChild(createSpan(item.name, item.price));    
            ul.appendChild(li);
        })
        };
    }

})
}
