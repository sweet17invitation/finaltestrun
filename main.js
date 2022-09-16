
window.addEventListener("load", () => {
    const finalDate = new Date("Sept 22, 2022 18:00:00").getTime();

    const output = document.querySelector("#cd");

    setInterval(function() {
        const now = new Date().getTime();
        const distance = finalDate - now;
    
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        output.textContent = days + " : " + hours + " : " + minutes + " : " + seconds;
    });
});


