const navbar=document.querySelector("#navbar");
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener("scroll",(e)=>{
if(window.scrollY>100){
   navbar.classList.add("fixed-navbar");
      scrollToTopBtn.style.display = 'block';
}else{
      scrollToTopBtn.style.display = 'none';

}
})


// Function to scroll to the top of the page
  function scrollToTop() {
    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

