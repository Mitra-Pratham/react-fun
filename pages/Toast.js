export default function Toast(){
    return (
        <div className="toast-container position-fixed top-0 end-0 p-3">
  <div id="liveToast" className="toast align-items-center text-bg-primary border-0 " role="alert" aria-live="assertive" aria-atomic="true">
    <div id="liveToastMsg" className="toast-body">
      Copied!
    </div>
  </div>
</div>
    )
}