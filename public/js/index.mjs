// This is a module. No need to put 'use strict'

// grab elements
const searchTxt = document.querySelector('#searchTxt')
const searchBtn = document.querySelector('#searchBtn')
const searchOption = document.querySelector('#searchOption')

// onload - request all images
fetch('/api/v0/gallery')
  .then( res => res.json())
  .then( data => data!=0? displayImages(data):noImagesFound())
  
searchBtn.addEventListener('click',()=>{
  switch(searchOption.value){
    case 'id':
      searchById(searchTxt.value)
      break;
    case 'name':
      searchReultByName(searchTxt.value)
      break;
    case 'all':
      displayAllimages()
      break;
    default:  
       console.log('Choose option') 
  }
})

// display all 
const displayAllimages = ()=>{
  fetch('/api/v0/gallery')
  .then( res => res.json())
  .then( data => data!=0? displayImages(data):noImagesFound())
}

// search by id
const searchById = (id) => {
  fetch(`/api/v0/gallery/id/${id}`)
    .then( res => {
      if(!res.ok){
        throw new Error(res.statusText)
      }
      return res.json()
    })
    .then( data => data!=0? displayImages(data):noImagesFound())
    .catch((err) =>{ 
      console.log(err)
    } )
}

// search by name*
const searchReultByName = (name)=>{
  fetch(`/api/v0/gallery/name/${name}`)
    .then( res => {
      if(!res.ok){
        throw new Error('File Not Found')
      }
      return res.json()
    })
    .then( data => data!=0? displayImages(data):noImagesFound())
    .catch((err) => {
      console.log(err)
    })
}


// callBack to display images
const displayImages = (images) => {

  const imageGallery = document.querySelector('.wrapper .gallery');
  
  // clear image gallery
  imageGallery.innerHTML =''

  images.forEach(image => {

    // image container
    const newImageCon = document.createElement("div");
    newImageCon.classList.add("image-container");
    
    // image container child
    const newImg = document.createElement("img");
    newImg.loading='lazy';
    newImg.alt = image.title;
    newImg.src = image.path_url;
    newImg.width = image.width;
    newImg.height = image.height;

    // create new fig caption
    const newFigcaption = document.createElement("figcaption");
    newFigcaption.innerHTML = image.title;

    // create new figure
    const newFigure = document.createElement("figure");
    newFigure.append(newImg,newFigcaption);

    // append child
    newImageCon.appendChild(newFigure);

    // info section
    const newInfoCon = document.createElement('div');
    newInfoCon.classList.add('info');

    // using innerHtml to add childs
    const template = `
                      <p><b>ID:</b> ${image.id}</p>
                      <p><b>Description:</b> ${image.description}</p>
                      <p><b>More Info: </b><a href="${image.link_url}" target="_blank">${image.link_url}</a></p>
                      <p><b>Credit:</b> <a href = "${image.credit_url}" target="_blank"> ${image.credit}</a></p>
                      <p><b><a href="/image/${image.id}">View comments</a></b></p>
                    `
    newInfoCon.innerHTML = template
    newImageCon.appendChild(newInfoCon)


    // gallery section / parent element
    imageGallery.appendChild(newImageCon);
  })
}  

// No images found callback
const noImagesFound = () => {
  const imageGallery = document.querySelector('.wrapper .gallery').innerHTML = `<h2 class="no-data-found">No images Found</h2>`
}