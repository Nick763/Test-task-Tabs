    var products = [ 
        {productId:1, productName: 'Товар 1', categoryId:1}, 
        {productId:2, productName: 'Товар 2', categoryId:2}, 
        {productId:3, productName: 'Товар 3', categoryId:3}, 
        {productId:4, productName: 'Товар 4', categoryId:4}, 
        {productId:5, productName: 'Товар 5', categoryId:5}, 
        {productId:6, productName: 'Товар 6', categoryId:1}, 
        {productId:7, productName: 'Товар 7', categoryId:2}, 
        {productId:8, productName: 'Товар 8', categoryId:3}, 
        {productId:9, productName: 'Товар 9', categoryId:4}, 
        {productId:10, productName: 'Товар 10', categoryId:5}, 
        {productId:11, productName: 'Товар 11', categoryId:1}, 
        {productId:12, productName: 'Товар 12', categoryId:2}, 
        {productId:13, productName: 'Товар 13', categoryId:3}, 
        {productId:14, productName: 'Товар 14', categoryId:4}, 
        {productId:15, productName: 'Товар 15', categoryId:5}, 
        {productId:16, productName: 'Товар 16', categoryId:1}, 
        {productId:17, productName: 'Товар 17', categoryId:2}, 
        {productId:18, productName: 'Товар 18', categoryId:3}, 
        {productId:19, productName: 'Товар 19', categoryId:4}, 
        {productId:20, productName: 'Товар 20', categoryId:5}, 
        {productId:21, productName: 'Товар 21', categoryId:1}, 
        {productId:22, productName: 'Товар 22', categoryId:2}, 
        {productId:23, productName: 'Товар 23', categoryId:3}, 
        {productId:24, productName: 'Товар 24', categoryId:4}, 
        {productId:25, productName: 'Товар 25', categoryId:5} 
        ]; 
        var categories = [
        {categoryId:1, categoryName: 'Футболки'}, 
        {categoryId:2, categoryName: 'Майки'}, 
        {categoryId:3, categoryName: 'Носки'}, 
        {categoryId:4, categoryName: 'Джинсы'}, 
        {categoryId:5, categoryName: 'Брюки'}, 
        ]; 
  

    const content = document.querySelector(".content");

    const tabs = document.createElement("div");
    tabs.className = "tabs";
    content.append(tabs);


    function createTabs(){
        let tabNav = document.createElement("div");
        tabNav.className = "tab-nav";
        tabs.append(tabNav);
        
        for (let i of categories) {
            let tabButton = document.createElement("button");
            tabButton.className = "tab-btn";
            tabButton.setAttribute('type', 'button');
            tabButton.setAttribute("id", 'tabCategory' + i.categoryId);    
            tabButton.innerText = i.categoryName;
            tabNav.append(tabButton);
        };
            
        let newTab = document.createElement("div");
        newTab.className = "tab-content";                
        tabs.append(newTab);
            
    };createTabs()    
        
     
    const tabsBtn = document.querySelectorAll('.tab-btn');
    
    function createTabsContent(e) {
        currentCategory = products.filter(cat => ('tabCategory' + cat.categoryId) == e.target.id)
        
        let newTab = document.createElement("div");
        newTab.className = "tab-content";
        newTab.setAttribute("id", e.target.id);        
        tabs.append(newTab);

        for (let i of currentCategory) {
            let newProduct = document.createElement("div");
            newProduct.className = "product";
            newProduct.setAttribute("id", 'productCategory' + i.categoryId);
            newProduct.innerText = i.productName;
            newTab.append(newProduct);

            let newImg = document.createElement("img");
            newImg.className = "tab-image";
            newImg.setAttribute("src", "http://rrstatic.retailrocket.net/test_task/tovar.jpg");
            newProduct.prepend(newImg);
        };
            
        let conetent = document.querySelectorAll(".tab-content");
        if (conetent.length > 1) {
                document.querySelector(".tab-content").remove();
        }
        
           
        tabsBtn.forEach(function(item) {
            item.addEventListener('click', function() {
                let currentBtn = item;
                if (!currentBtn.classList.contains('active') ) {
                    tabsBtn.forEach(function(item) {
                        item.classList.remove('active');
                    });
        
                    currentBtn.classList.add('active');
                }
            });
        });
    }
  
        
    tabsBtn.forEach(function(item) {
        item.addEventListener('click', createTabsContent);
    });
    


   


        
  

