window.onload=()=>{
    const burger = document.querySelector('.burger')
    const burger_icon = document.querySelector('.burger i')
    const sidebar = document.querySelector('aside')

    const sidebar_links = document.querySelectorAll('aside ul a');

    const toggleSidebar=()=>{
        burger_icon.classList.toggle('bx-menu')
        burger_icon.classList.toggle('bx-x')
        sidebar.classList.toggle('active')
    }

    burger.addEventListener('click', ()=>{
        toggleSidebar()
    })

    sidebar_links.forEach(link => {
        link.addEventListener('click', ()=>{
            toggleSidebar()
        })
    });
}