document.addEventListener('DOMContentLoaded',()=>{
//product object and product dynamic rendering
const productsObj = [
    {
        id: 'p1',
        image: 'images/products/f1.jpg',
        brand: 'adidas',
        name: 'Adidas Superstar Sneakers',
        rating: 4,
        price: '₹95'
    },
    {
        id: 'p2',
        image: 'images/products/f2.jpg',
        brand: 'adidas',
        name: 'Adidas Ultraboost 21',
        rating: 5,
        price: '₹180'
    },
    {
        id: 'p3',
        image: 'images/products/f3.jpg',
        brand: 'nike',
        name: 'Nike Air Max 270',
        rating: 4,
        price: '₹150'
    },
    {
        id: 'p4',
        image: 'images/products/f4.jpg',
        brand: 'nike',
        name: 'Nike ZoomX Vaporfly NEXT%',
        rating: 5,
        price: '₹250'
    },
    {
        id: 'p5',
        image: 'images/products/f5.jpg',
        brand: 'puma',
        name: 'Puma RS-X3 Puzzle',
        rating: 4,
        price: '₹120'
    },
    {
        id: 'p6',
        image: 'images/products/f6.jpg',
        brand: 'puma',
        name: 'Puma Future Rider',
        rating: 4,
        price: '₹130'
    },
    {
        id: 'p7',
        image: 'images/products/f7.jpg',
        brand: 'converse',
        name: 'Converse Chuck Taylor All Star',
        rating: 4,
        price: '₹65'
    },
    {
        id: 'p8',
        image: 'images/products/f8.jpg',
        brand: 'converse',
        name: 'Converse One Star Pro',
        rating: 4,
        price: '₹80'
    },
    {
        id: 'p9',
        image: 'images/products/n1.jpg',
        brand: 'new balance',
        name: 'New Balance 990v5',
        rating: 5,
        price: '₹185'
    },
    {
        id: 'p10',
        image: 'images/products/n2.jpg',
        brand: 'new balance',
        name: 'New Balance 574 Classic',
        rating: 4,
        price: '₹80'
    },
    {
        id: 'p11',
        image: 'images/products/n3.jpg',
        brand: 'new balance',
        name: 'New Balance 1080v12',
        rating: 5,
        price: '₹150'
    },
    {
        id: 'p12',
        image: 'images/products/n4.jpg',
        brand: 'new balance',
        name: 'New Balance Fresh Foam Beacon',
        rating: 4,
        price: '₹110'
    },
    {
        id: 'p13',
        image: 'images/products/n5.jpg',
        brand: 'adidas',
        name: 'Adidas NMD_R1',
        rating: 5,
        price: '₹140'
    },
    {
        id: 'p14',
        image: 'images/products/n6.jpg',
        brand: 'nike',
        name: 'Nike Air Force 1',
        rating: 4,
        price: '₹100'
    },
    {
        id: 'p15',
        image: 'images/products/n7.jpg',
        brand: 'puma',
        name: 'Puma Clyde Court',
        rating: 4,
        price: '₹130'
    },
    {
        id: 'p16',
        image: 'images/products/n8.jpg',
        brand: 'converse',
        name: 'Converse Jack Purcell',
        rating: 4,
        price: '₹75'
    }
];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const AddItemsInCart=document.getElementsByClassName('cart');
const productContainer = document.querySelector('.pro-container');
const addToCart = (image,brand,name,rating,price,id) =>{    
    const cartItemIndex = cart.findIndex(item => item.id === id);
        if (cartItemIndex !== -1) {
            console.log("inside cartItemINdex")
            cart[cartItemIndex].quantity++;
        } else {
            cart.push({
                id: id,
                Image:image,
                brand: brand,
                name: name,
                price: price,
                quantity: 1
            });
        }
        addToMemory();


};

    productsObj.forEach(product=>{
        const{image,brand,name,rating,price,id}=product;
        const productElement= document.createElement('div');
        productElement.className='pro'
        productElement.dataset.id=id;
        productElement.innerHTML = `
                <img src="${image}" alt="${name}">
                <div class="des">
                    <span>${brand}</span>
                    <h5>${name}</h5>
                    <div class="star">
                        ${'<i class="fas fa-star"></i>'.repeat(rating)}
                    </div>
                    <h4>${price}</h4>
                </div>
                <a href="#" ><i class="fal fa-shopping-cart cart"></i></a>
            `;

            // // Setting event to redirect to the product detail page
            // productElement.addEventListener('click', () => {
            //     window.location.href = `sproduct.html?id=${product.id}&name=${product.name}`;
            //     console.log("productelement",productElement)
            // });

            productContainer.appendChild(productElement);
    });


// Event delegation to handle cart icon clicks
productContainer.addEventListener('click', (e) => {
    if (e.target.closest('.cart')) {
        e.preventDefault();
        const productElement = e.target.closest('.pro');
        const id = productElement.dataset.id;
        const product = productsObj.find(p => p.id === id);

        if (product) {
            addToCart(product.image, product.brand, product.name, product.rating, product.price, product.id);
        }
    }
});

 // Function to save cart to localStorage
 function addToMemory() {
    localStorage.setItem('cart', JSON.stringify(cart));
}


});