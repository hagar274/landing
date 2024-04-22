let menuBtn = document.getElementById("menu-btn");
let navLinks = document.getElementById("nav-links");
let menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) =>{
    navLinks.classList.toggle("open");

    let isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) =>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

let scrollRevealOption ={
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};
scrollRevealOption().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right",
});
scrollRevealOption().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 500,
});
scrollRevealOption().reveal(".header_content .section_description", {
    ...scrollRevealOption,
    delay: 1000,
});
scrollRevealOption().reveal(".header_content .header_btn", {
    ...scrollRevealOption,
    delay: 1500,
});



scrollRevealOptionc().reveal(".explore_image img", {
    ...scrollRevealOption,
    origin: "left",
});
scrollRevealOption().reveal(".explore_content h1", {
    ...scrollRevealOption,
    delay: 500,
});
scrollRevealOption().reveal(".explore_content .section_description", {
    ...scrollRevealOption,
    delay: 1000,
});
scrollRevealOption().reveal(".explore_content .header_btn", {
    ...scrollRevealOption,
    delay: 1500,
});

scrollRevealOption().reveal(".banner_card", {
    ...scrollRevealOption,
    interval: 500,
});

scrollRevealOption().reveal(".chef_image img", {
    ...scrollRevealOption,
    origin: "right",
});
scrollRevealOption().reveal(".chef_content .section_header", {
    ...scrollRevealOption,
    delay: 500,
})
;scrollRevealOption().reveal(".chef_content .section_description", {
    ...scrollRevealOption,
    delay: 1000,
});
;scrollRevealOption().reveal(".chef_list li", {
    ...scrollRevealOption,
    delay: 1500,
    interval: 500,
});





let swiper = new Swiper(".swiper", {
    loop: true,

    pagination: {
        el: ".swiper-pagination",
    },
});