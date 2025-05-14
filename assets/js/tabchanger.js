document.addEventListener('DOMContentLoaded', function() {
    const topProductsButton = document.querySelector('.top-products-button');
    const affOrdersButton = document.querySelector('.aff-orders-button');
    const topProducts = document.querySelector('.top-products');
    const affOrders = document.querySelector('.aff-orders');

    const dashboardButton = document.querySelector('.dashboard-button');
    const affiliateButton = document.querySelector('.affiliate-button');
    const dashboard = document.querySelector('.dashboard-wrap');
    const affiliate = document.querySelector('.affiliate-wrap');

    const historyButton = document.querySelector('.history-button');
    const requestButton = document.querySelector('.request-button');
    const history = document.querySelector('.history');
    const request = document.querySelector('.request');

    affOrdersButton.addEventListener('click', function(){
        topProducts.classList.add('hidden')
        affOrders.classList.remove('hidden')
        topProductsButton.classList.remove('active', 'black')
        affOrdersButton.classList.add('active', 'black')
    })

    topProductsButton.addEventListener('click', function(){
        affOrders.classList.add('hidden')
        topProducts.classList.remove('hidden')
        affOrdersButton.classList.remove('active', 'black')
        topProductsButton.classList.add('active', 'black')
    })

    affiliateButton.addEventListener('click', function(){
        dashboard.classList.add('hidden')
        affiliate.classList.remove('hidden')
        dashboardButton.classList.remove('active', 'green')
        affiliateButton.classList.add('active', 'green')
    })

    dashboardButton.addEventListener('click', function(){
        affOrders.classList.add('hidden')
        dashboard.classList.remove('hidden')
        affiliateButton.classList.remove('active', 'green')
        dashboardButton.classList.add('active', 'green')
    })

    requestButton.addEventListener('click', function(){
        history.classList.add('hidden')
        request.classList.remove('hidden')
        historyButton.classList.remove('active', 'black')
        requestButton.classList.add('active', 'black')
    })

    historyButton.addEventListener('click', function(){
        request.classList.add('hidden')
        history.classList.remove('hidden')
        requestButton.classList.remove('active', 'black')
        historyButton.classList.add('active', 'black')
    })
});
