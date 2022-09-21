var updateBtns = document.getElementsByClassName("update-cart")
for(i=0; i<updateBtns.length; i++){
    updateBtns[i].addEventListener('click', function(){
        var productid = this.dataset.product
        var action = this.dataset.action
        console.log(productid, action) 
        if (user=="AnonymousUser"){
            console.log("not user")
        }
        else{
            updateUserOrder(productid, action)
        }
    })
}

function updateUserOrder(productID, action){
    console.log("User logged in, sending data...")
    var url = '/update_item/'

    fetch(url, {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            'X-CSRFToken' : csrftoken},
        body:JSON.stringify({'productID': productID, 'action': action}),
    })

    .then((response)=>{
        return response.json()
    })
    
    .then((data)=>{
        console.log('data:', data)
        location.reload()
    })


}