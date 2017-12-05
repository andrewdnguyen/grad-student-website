<!--Copy method made by Shaik Maqsood -->
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  alert("Email copied to clipboard!")
  $temp.remove();
}
