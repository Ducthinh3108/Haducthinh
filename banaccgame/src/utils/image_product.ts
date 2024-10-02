 var slideIndex = 1;
// showSlides(slideIndex);

export function plusSlides(n:any) {
    showSlides(slideIndex += n);
}

export function currentSlide(n:any) {
    showSlides(slideIndex = n);
}

export function showSlides(n:any) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    for (i = 0; i < slides.length; i++) {
      (slides[i] as HTMLElement).style.display = "none";
    }
    (slides[n - 1] as HTMLElement).style.display = "block";
    // (captionText as HTMLElement).innerHTML = (dots[slideIndex - 1] as HTMLElement).alt;
}