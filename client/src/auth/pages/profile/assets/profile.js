$(function () {
  $(document).on("click", "#change_picture_btn", function () {
    $("#admin_image").click();
  });

  $("#admin_image").ijaboCropTool({
    preview: " .admin_picture",
    setRatio: 1,
    allowedExtensions: ["jpg", "jpeg", "png"],
    buttonsText: ["Crop", "Cancel"],
    buttonsColor: ["#30bf7d", "#ee5155", -15],
    processUrl: "",
    withCSRF: ["_token", "csrf_token()"],
    onSuccess: function (message, element, status) {
      // updateModal();
    },
    onError: function (message, element, status) {
      // errorModal();
    },
  });
});
