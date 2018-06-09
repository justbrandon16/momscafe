
//=================== JAVASCRIPT ===================//
$ = document.querySelector.bind(document);
$id = document.getElementById.bind(document);


//=================== DECLEARING VARIBLE ===================//


//=================== SECTION 1 START ===================//
caption = $('.caption');
pic = $('#pic-1')


switch1 = () => {
  pic.src = 'cake1.jpg';
  caption.style.opacity = 0;
  setTimeout(function() {
  caption.innerHTML = 'From &pound2 per serving (min. 20 serv)<br><br>	Moist and flavorfull cake<br><br>	Carrot taste so juicy<br><br>	You cannot go wrong with this cake.';
  	caption.style.opacity = 1;}, 250);
}
switch2 = () => {
  $id('pic-1').src = 'cake2.jpg';
  caption.style.opacity = 0;
  setTimeout(function() {
  caption.innerHTML = 'From &pound1.50 per serving (min. 20 serv)<br><br>	Modern New York<br><br>	Carrot taste so juicy<br><br>	You cannot go wrong with this cake.';
  	caption.style.opacity = 1;}, 250);
  

}
switch3 = () => {
  $id('pic-1').src = 'cake3.jpg';
  caption.style.opacity = 0;
  setTimeout(function() {
  caption.innerHTML = 'From &pound1.50 per serving (min. 20 serv)<br><br>	Classic chocolate.<br><br>	Carrot taste so juicy<br><br>	You cannot go wrong with this cake.';
  	caption.style.opacity = 1;}, 250);
  

}
switch4 = () => {
  $id('pic-1').src = 'cake4.jpg';
  caption.style.opacity = 0;
  setTimeout(function() {
  caption.innerHTML = 'From &pound1.50 per serving (min. 20 serv)<br><br>	Luxurious red velvet<br><br>	Carrot taste so juicy<br><br>	You cannot go wrong with this cake.';
  	caption.style.opacity = 1;}, 250);
  

}







//=================== SECTION 1 END ===================//
