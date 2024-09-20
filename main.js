onload = () =>{
        document.body.classList.remove("container");
};
onload = () =>{
        document.body.classList.remove("container");
        const hearts = document.querySelectorAll('.heart');
        
        hearts.forEach((heart, index) => {
            setTimeout(() => {
                heart.style.animation = `grow-heart 4s infinite`;
            }, index * 1000); // Aparece uno tras otro
        });
    };
    