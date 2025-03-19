    var myIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = document.getElementsByClassName("Slide");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
        x[myIndex-1].style.display = "block";  
        setTimeout(carousel, 5000); // Change image every 5 seconds
    }
    
    
    const words = ["Web Developer", "Designer", "Problem Solving"];  
    let wordIndex = 0;  
    let charIndex = 0;  
    let isDeleting = false;  
    const speed = 150;  
    const eraseSpeed = 100;  
    const delayBetweenWords = 1000;  
    const typingElement = document.getElementById("typing");  

    function typeEffect() {  
        let currentWord = words[wordIndex];  
          
        if (isDeleting) {  
            typingElement.textContent = currentWord.substring(0, charIndex--);  
        } else {  
            typingElement.textContent = currentWord.substring(0, charIndex++);  
        }  

        if (!isDeleting && charIndex === currentWord.length + 1) {  
            isDeleting = true;  
            setTimeout(typeEffect, delayBetweenWords);  
        } else if (isDeleting && charIndex === 0) {  
            isDeleting = false;  
            wordIndex = (wordIndex + 1) % words.length;  
            setTimeout(typeEffect, speed);  
        } else {  
            setTimeout(typeEffect, isDeleting ? eraseSpeed : speed);  
        }  
    }  
      
    typeEffect();  
