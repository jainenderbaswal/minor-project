document.addEventListener('DOMContentLoaded',()=>{
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    console.log("params: ",params, "productId: ",productId)

});