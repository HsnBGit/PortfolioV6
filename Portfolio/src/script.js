var TYPED = new Typed("#typed", {
    strings: ['Software Engineer', "AI Engineer", "Front-end Developer"],
    typedSpeed: 50,
    backSpeed: 20,
    backDelay: 3000,
    showCursor: false,
    loop: true
});


function them(){
    const darkBtn = document.getElementById('darkBtn');
    const lightBtn = document.getElementById('lightBtn');

    document.body.classList.toggle('light');

    if (document.body.classList.contains('light')) {
        darkBtn.style.display = 'block';
        lightBtn.style.display = 'none';
    }else{
        darkBtn.style.display = 'none';
        lightBtn.style.display = 'block';
    }
}