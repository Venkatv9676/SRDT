// script.js

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.btn-outline-primary');

    buttons.forEach(button => {
        button.addEventListener('mouseover', function () {
            const productName = this.getAttribute('data-product');
            const productHoverImg = document.querySelector(`#${productName} .product-hover-img`);

            // Show the hover image on mouseover
            if (productHoverImg) {
                productHoverImg.style.display = 'block';
            }

            this.classList.add('hovered');
        });

        button.addEventListener('mouseout', function () {
            const productName = this.getAttribute('data-product');
            const productHoverImg = document.querySelector(`#${productName} .product-hover-img`);

            // Hide the hover image on mouseout
            if (productHoverImg) {
                productHoverImg.style.display = 'none';
            }

            this.classList.remove('hovered');
        });
    });
});
