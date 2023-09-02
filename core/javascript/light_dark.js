$(document).ready(function () {
  $("#flexSwitchCheckDefault").change(function () {
    if ($(this).is(":checked")) {
      $("#moon").css("display", "none");
      $("#sun").css("display", "block");
    } else {
      $("#moon").css("display", "block");
      $("#sun").css("display", "none");
    }
  });
});
