
$(document).ready(function() {
    // 計算並更新總價
    function updateTotal() {
        var total = 0;

        $('.product-cost').each(function() {
        var cost = parseFloat($(this).text().replace('NT$', ''));
        total += cost;
        });

        $('.subtotal p:last-child').text('NT$' + total);
        $('.total p:last-child').text('NT$' + (total + 60)); // 加上運費
    }

    // 更新小計和總價
    function updateCost() {
        var quantity = parseInt($(this).siblings('.input-num').val());
        var price = parseFloat(
        $(this).closest('.product-list').find('.product-price').text().replace('NT$', '')
        );
        var cost = quantity * price;

        $(this).closest('.product-list').find('.product-cost').text('NT$' + cost);

        updateTotal();
    }

    // 數量減少
    $('.minus').click(function() {
        var inputNum = $(this).siblings('.input-num');
        var quantity = parseInt(inputNum.val());
        if (quantity > 1) {
        inputNum.val(quantity - 1);
        updateCost.call(this);
        }
    });

    // 數量增加
    $('.plus').click(function() {
        var inputNum = $(this).siblings('.input-num');
        var quantity = parseInt(inputNum.val());
        if (quantity < 10) {
        inputNum.val(quantity + 1);
        updateCost.call(this);
        }
    });

    // 刪除商品
    $('.delete').click(function() {
        $(this).closest('.product-list').remove();
        updateTotal();
    });
    });
