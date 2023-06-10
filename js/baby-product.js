//加入購物車
        const quantityElements = document.querySelectorAll('.quantity-value');
    
        document.querySelectorAll('.minus').forEach((button, index) => {
            button.addEventListener('click', () => {
                decrementQuantity(index);
            });
        });
    
        document.querySelectorAll('.plus').forEach((button, index) => {
            button.addEventListener('click', () => {
                incrementQuantity(index);
            });
        });
    
        document.querySelectorAll('.car').forEach((button) => {
            button.addEventListener('click', () => {
                addToCart();
            });
        });
    
        function decrementQuantity(index) {
            let quantity = parseInt(quantityElements[index].textContent);
            if (quantity > 1) {
                quantity--;
                quantityElements[index].textContent = quantity;
            }
        }
    
        function incrementQuantity(index) {
            let quantity = parseInt(quantityElements[index].textContent);
            if (quantity < 10) {
                quantity++;
                quantityElements[index].textContent = quantity;
            }
        }
    
        function addToCart() {
            window.alert("已經加入購物車");
        }
    
        // 防止表單提交
        document.querySelector('form').addEventListener('submit', (event) => {
            event.preventDefault();
        });