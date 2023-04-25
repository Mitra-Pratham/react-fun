export default function CopyButton(props){
    return(
        <button className="btn btn-new btn-sm ms-3 border-0" onClick={()=>copyToClipboard(props.text)}><i class="fa-regular fa-copy"></i></button>
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