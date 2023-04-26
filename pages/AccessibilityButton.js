export default function AccessibilityButton(props){
    return(
        <button className="btn btn-new btn-sm ms-3 border-0" onClick={(e)=> {AccessibilityMenu(e.target); props.updateSidePanel(props)}}><i className="fa-solid fa-circle-half-stroke"></i></button>
    )
}

function AccessibilityMenu(el){
   const activeCard = document.getElementsByClassName('active-card')[0];
    activeCard != undefined ? activeCard.classList.remove('active-card') : '';
    el.closest('.card').classList.add('active-card');
    const ContrastMenu = document.getElementById('ContrastMenu');
    ContrastMenu.classList.add('show');
}