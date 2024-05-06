document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.btn-outline-primary');

    buttons.forEach(button => {
        const productName = button.getAttribute('data-product');
        const productHoverImg = document.querySelector(`#${productName} .product-hover-img`);

        // Show the hover image
        if (productHoverImg) {
            productHoverImg.style.display = 'block';
        }
    });
});
