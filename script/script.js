function id(id){
    return document.getElementById(id);
}

//Event Delegation
id('product-box').addEventListener('click', function(e){
    if(e.target.className.includes('card-btn')){
        const cardBtn = e.target;

        const productImg = cardBtn.parentNode.parentNode.children[0].children[0].src;
        const productTitle = cardBtn.parentNode.parentNode.children[1].children[1].children[0].innerText;
        const productPrice = cardBtn.parentNode.parentNode.children[1].children[1].children[1].children[0].innerText;

        //Calculation
            const initialPrice = id('Initial-Price').innerText;
            const total = Number(initialPrice) + Number(productPrice);
            id('Initial-Price').innerText = total.toFixed(2);

        // Get Parent COntainer
            const CardContainer = id('Add-Card-Container');
            const createCard = document.createElement('div')
            createCard.innerHTML = `
                <div class="bg-gray-200 rounded-lg flex items-center justify-between p-4 mb-4 gap-8">
                    <div class=""><img src="${productImg}" class="w-16 "></div>
                    <div>
                        <h2 class="text-[1rem] font-semibold">${productTitle}</h2>
                        <p class="text-[#797075] text-[0.85rem]">${productPrice}TK</p>
                    </div>
                </div>`;
            CardContainer.appendChild(createCard);

        // Quantity Calculation
            const quantity = id('Quantity').innerText;
            const currentQuantity = Number(quantity) +1 ;
            id('Quantity').innerText = currentQuantity;
    }
})

// Reset All card & Calculation
document.getElementById('Clear-btn').addEventListener('click', function(){
    id('Add-Card-Container').innerText = '';
    id('Quantity').innerText = 0;
    id('Initial-Price').innerText = 0;
})


//Traverse Technique
// const cardBtns = document.getElementsByClassName('card-btn');
    // for(const cardBtn of cardBtns){
    //     cardBtn.addEventListener('click',function(){
            // const productImg = cardBtn.parentNode.parentNode.children[0].children[0].src;
            // const productTitle = cardBtn.parentNode.parentNode.children[1].children[1].children[0].innerText;
            // const productPrice = cardBtn.parentNode.parentNode.children[1].children[1].children[1].children[0].innerText;

            //Calculation
            // const initialPrice = id('Initial-Price').innerText;
            // const total = Number(initialPrice) + Number(productPrice);
            // id('Initial-Price').innerText = total.toFixed(2);

            // Get Parent COntainer
//             const CardContainer = id('Add-Card-Container');
//             const createCard = document.createElement('div')
//             createCard.innerHTML = `
//                 <div class="bg-gray-200 rounded-lg flex items-center justify-between p-4 mb-4">
//                     <div class=""><img src="${productImg}" class="w-15 "></div>
//                     <div>
//                         <h2 class="text-xl font-semibold">${productTitle}</h2>
//                         <p class="text-[#797075]">${productPrice}TK</p>
//                     </div>
//                 </div>`;
//             CardContainer.appendChild(createCard);

            // // Quantity Calculation
            // const quantity = id('Quantity').innerText;
            // const currentQuantity = Number(quantity) +1 ;
            // id('Quantity').innerText = currentQuantity;
//         })
// }

// Reset All card & Calculation
// document.getElementById('Clear-btn').addEventListener('click', function(){
//     id('Add-Card-Container').innerText = '';
//     id('Quantity').innerText = 0;
//     id('Initial-Price').innerText = 0;
// })
