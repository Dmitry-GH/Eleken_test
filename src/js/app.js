let table_view_btn = document.getElementById("table_view");
let card_view_btn = document.getElementById("card_view");
let view_target =  document.getElementById("view_target");

table_view_btn.addEventListener("click", toggleView);
card_view_btn.addEventListener("click", toggleView);

function toggleView() {
    
    if (this.id === 'table_view') {
        
        view_target.classList.remove('card_view');
        this.style.opacity = "1";
        card_view_btn.style.opacity = "0.5";
    } else {
        view_target.classList.add('card_view');
        this.style.opacity = "1";
        table_view_btn.style.opacity = "0.5";
    }
}