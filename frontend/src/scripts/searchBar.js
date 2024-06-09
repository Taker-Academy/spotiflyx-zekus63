function deleteContent() {
    const input = document.getElementById('ProductsSearch');

    if (input) {
        input.value = '';
    }
}

function initSearchBar() {
    const icon = document.querySelector('.icon');
    const search = document.querySelector('.search');
    const navbar = document.querySelector('.navbar');

    if (icon && search) {
        icon.onclick = function() {
            search.classList.toggle('active');
            navbar.classList.toggle('active');
            deleteContent();
        }  
    }
}
