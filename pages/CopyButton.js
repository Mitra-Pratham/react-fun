export default function CopyButton(props){
    return(
        <button className="btn btn-new btn-sm ms-2 border-0 hide-btn" onClick={()=>copyToClipboard(props.text)}><i className="fa-regular fa-copy"></i></button>
    )
}

function copyToClipboard(text){
    navigator.clipboard.writeText(text);
    const toast = document.getElementById('liveToast');
    const toastMessage = document.getElementById('liveToastMsg');
    toastMessage.innerText = `Copied ${text} successfully!`
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 5000);
}