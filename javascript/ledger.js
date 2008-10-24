$(document).ready(function() {
  balanceLedger();
  
  $('a.recalculate').click(function(){
    balanceLedger();
  });
});

function balanceLedger(){
  $('.widel-ledger').each(function(){
    var balance=0;
    $(this).find('.widel-amount').each(function(){balance+=parseAmount($(this).text())});
    $(this).find('.widel-balance').text('$'+formatCurrency(balance));
  });  
}
function parseAmount(string){
  var matches=string.match(/(-?)\$?(\d{1,3},?(\d{3},?)*\d{3}(\.\d{0,2})?|\d{1,3}(\.\d{0,2})?|\.\d{1,2}?)/)
  if (matches){
    var positive=parseFloat(matches[2]);
    if (matches[1])
      return -positive;
    else
      return positive;
  } else 
    return 0;
}
function formatCurrency(num) {
	num = isNaN(num) || num === '' ? 0.00 : num;
	return parseFloat(num).toFixed(2);
}
