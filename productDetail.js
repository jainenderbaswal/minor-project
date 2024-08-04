document.addEventListener('DOMContentLoaded',()=>{
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const Productname=params.get('name')

    console.log("params: ",params, "productId: ",productId,"productname: ",Productname)

});