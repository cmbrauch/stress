$(document).ready(function() {
    $("form#stress-form").submit(function(event) {
      event.preventDefault();
      $("input:checkbox[name=stress-signs]:checked").each(function() {
        const stressMode = $(this).val();
        $('#stress-relievers').append(stressMode + "<br>");
    
        $("#stress-relievers").show();
      });
      $('#stress-form').hide();
    });
  });