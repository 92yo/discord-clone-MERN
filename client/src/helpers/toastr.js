import toastr from "toastr";

export function ErrMsg(message) {
  toastr.options = {
    closeButton: false,
    debug: false,
    positionClass: "toast-top-center",
    newestOnTop: false,
    showDuration: 100,
    timeOut: 1500,
    progressBar: true,
    preventDuplicates: true,
    showMethod: "slideDown",
    hideMethod: "slideUp",
    closeMethod: "slideUp",
  };
  toastr.error(message);
}
