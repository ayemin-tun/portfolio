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

$(document).ready(function () {
  $("#downloadCVBtn").click(function () {
    var fileURL = "additonal_file/personal_Resume.pdf";
    var a = $("<a>")
      .attr("href", fileURL)
      .attr("download", "Personal Resume for Aye Min Tun")
      .appendTo("body");
    a[0].click();
    a.remove();
  });
});
