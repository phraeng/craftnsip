        let slideIndex = 1;
        showSlides(slideIndex);

        // Next/previous controls
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("mySlides");

            // If no slide index is provided, set it to the current slideIndex
            if (!n) {
                n = slideIndex;
            }

            // Ensure slideIndex loops around if it exceeds the number of slides
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }

            // Hide all slides
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            // Display the specific slide
            slides[slideIndex - 1].style.display = "block";

            // Change slides automatically every 8 seconds
            setTimeout(() => {
                showSlides(slideIndex += 1);
            }, 8000); // 8000 milliseconds = 8 seconds
        }

        // Function to reveal the external link
        function revealLink() {
            let buttons = document.getElementsByClassName("reveal-button");
            let links = document.getElementsByClassName("external-link");
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].style.display = "none";
                links[i].style.display = "block";
            }
        }

// Function to open the shopping cart page
        function openCartPage() {
            window.location.href = "shopping-cart.html";
        }

// Function to add items to cart
function addToCart(itemName, price, imageSrc) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let itemExists = false;
    cartItems.forEach(item => {
        if (item.name === itemName) {
            item.quantity++;
            itemExists = true;
        }
    });
    if (!itemExists) {
        cartItems.push({ name: itemName, price: price, quantity: 1, image: imageSrc });
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartCount();
}



        // Function to update the cart count in the icon
        function updateCartCount() {
            let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            let totalCount = 0;
            cartItems.forEach(item => {
                totalCount += item.quantity;
            });
            document.getElementById('cart-count').innerText = totalCount;
        }

}