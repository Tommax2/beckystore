let previewContainer = document.querySelector('.product-reviews');
let previewBox = previewContainer.querySelectorAll('.previews');
 document.querySelectorAll('.product-container .product').forEach(product =>{
  product.onclick = () =>{
    console.log( product.getAttribute('data-name'))
    previewContainer.style.display = 'flex'
    let name = product.getAttribute('data-name')
    previewBox.forEach(preview =>{
        let target = preview.getAttribute('data-target');
         if  (name == target){
            
          preview.classList.add('active'); 
          console.log(preview)
          console.log(previewContainer)

         }  
    });
  };
 });

 previewBox.forEach(close =>{
    close.querySelector('.previews i.bx').onclick = () =>{
        close.classList.remove('active');
         previewContainer.style.display = 'none'
    }
 });





 let previewContainer1 = document.querySelector('.product-reviews1');
let previewBox1 = previewContainer1.querySelectorAll('.previews1');
 document.querySelectorAll('.product-containers .product1').forEach(product =>{
  product.onclick = () =>{
    console.log( product.getAttribute('data-name'))
    previewContainer1.style.display = 'flex'
    let name = product.getAttribute('data-name')
    previewBox1.forEach(preview =>{
        let target = preview.getAttribute('data-target');
         if  (name == target){
            
          preview.classList.add('active'); 
         

         }  
    });
  };
 });

 previewBox1.forEach(close =>{
    close.querySelector('.previews1 i.bx').onclick = () =>{
        close.classList.remove('active');
         previewContainer1.style.display = 'none'
    }
 });