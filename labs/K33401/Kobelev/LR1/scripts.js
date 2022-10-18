$('#changeFilter').click(function() {
  $(this).find('i').toggleClass('fa-arrow-down-wide-short').toggleClass('fa-arrow-up-wide-short');
});

function selectTag(button) {
  $(button).toggleClass('btn-light').toggleClass('btn-secondary');
}

function collapseArea(button) {
  $(button).find('i').toggleClass('fa-burger').toggleClass('fa-xmark');
}

$(function() {
  $("#slider-range").slider({
    range: true,
    min: 1,
    max: 32,
    values: [2, 18],
    slide: function(event, ui) {
      $("#amount").val(ui.values[0] + " - " + ui.values[1]);
    }
  });
  $("#amount").val($("#slider-range").slider("values", 0) +
    " - " + $("#slider-range").slider("values", 1));
} );
