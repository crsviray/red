var i;

$.ajax({
	url:"https://api.spotify.com/v1/search?q=artist:the%20red%20jumpsuit%20apparatus&type=album"
}).done(function(res1){
	console.log(res1);

});

$.ajax({
	url:"https://api.spotify.com/v1/albums/6TyPSzd5rA2rQ9yLJJ1Gg2"
}).done(function(res2){
	console.log(res2);
	let html = `<p><audio controls><source src="${res2.tracks.items[0].preview_url}" type="audio/ogg"><audio></p>`;

	document.querySelector('#album0').innerHTML = html;
});

$.ajax({
	url:"https://api.spotify.com/v1/albums/7t59YwZE0h2fBajhTSSDE0"
}).done(function(res3){
	console.log(res3);
	let html2 = `<p><audio controls><source src="${res3.tracks.items[1].preview_url}" type="audio/ogg"><audio></p>`;

	document.querySelector('#album1').innerHTML = html2;
});

$.ajax({
	url:"https://api.spotify.com/v1/albums/6TyPSzd5rA2rQ9yLJJ1Gg2"
}).done(function(res4){
	console.log(res4);
	let html3 = `<p><audio controls><source src="${res4.tracks.items[2].preview_url}" type="audio/ogg"><audio></p>`;

	document.querySelector('#album2').innerHTML = html3;
});

$.ajax({
	url:"https://api.spotify.com/v1/albums/6TyPSzd5rA2rQ9yLJJ1Gg2"
}).done(function(res5){
	console.log(res5);
	let html4 = `<p><audio controls><source src="${res5.tracks.items[3].preview_url}" type="audio/ogg"><audio></p>`;

	document.querySelector('#album3').innerHTML = html4;
});

$.ajax({
	url:"https://api.spotify.com/v1/albums/6TyPSzd5rA2rQ9yLJJ1Gg2"
}).done(function(res6){
	console.log(res6);
	let html5 = `<p><audio controls><source src="${res6.tracks.items[4].preview_url}" type="audio/ogg"><audio></p>`;

	document.querySelector('#album4').innerHTML = html5;
});

$.ajax({
	url:"https://api.spotify.com/v1/albums/6TyPSzd5rA2rQ9yLJJ1Gg2"
}).done(function(res7){
	console.log(res7);
	let html6 = `<p><audio controls><source src="${res7.tracks.items[5].preview_url}" type="audio/ogg"><audio></p>`;

	document.querySelector('#album5').innerHTML = html6;
});

$.ajax({
	url:"https://api.spotify.com/v1/albums/6TyPSzd5rA2rQ9yLJJ1Gg2"
}).done(function(res8){
	console.log(res8);
	let html7 = `<p><audio controls><source src="${res8.tracks.items[6].preview_url}" type="audio/ogg"><audio></p>`;

	document.querySelector('#album6').innerHTML = html7;
});

$.ajax({
	url:"https://api.spotify.com/v1/albums/6TyPSzd5rA2rQ9yLJJ1Gg2"
}).done(function(res9){
	console.log(res9);
	let html8 = `<p><audio controls><source src="${res9.tracks.items[7].preview_url}" type="audio/ogg"><audio></p>`;

	document.querySelector('#album7').innerHTML = html8;
});

$.ajax({
	url:"https://api.spotify.com/v1/albums/4HCbx9t285e5iZpOgf2THS"
}).done(function(res10){
	console.log(res10);
	let html9 = `<p><audio controls><source src="${res10.tracks.items[0].preview_url}" type="audio/ogg"><audio></p>`;

	document.querySelector('#album8').innerHTML = html9;
});

$.ajax({
	url:"https://api.spotify.com/v1/albums/19gS3BTRjbeTV9FUciAd6Y"
}).done(function(res11){
	console.log(res11);
	let html10 = `<p><audio controls><source src="${res11.tracks.items[0].preview_url}" type="audio/ogg"><audio></p>`;

	document.querySelector('#album10').innerHTML = html10;
});

$.ajax({
	url:"https://api.spotify.com/v1/albums/2MZohsALUFIoy8WdlkKBbS"
}).done(function(res12){
	console.log(res12);
	let html11 = `<p><audio controls><source src="${res12.tracks.items[0].preview_url}" type="audio/ogg"><audio></p>`;

	document.querySelector('#album11').innerHTML = html11;
});

$.ajax({
	url:"https://api.spotify.com/v1/albums/4IakEWHn3SGJs8hh8nIEsa"
}).done(function(res13){
	console.log(res13);
	let html12 = `<p><audio controls><source src="${res13.tracks.items[0].preview_url}" type="audio/ogg"><audio></p>`;

	document.querySelector('#album12').innerHTML = html12;
});