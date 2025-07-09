function hidesidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display ='none';
}
function showsidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display ='flex';
    const menubutton = document.querySelector(".menubtn");
    menubutton.style.display ='none';
}

