// JavaScript Document

$(document).ready(function (e){
	document.addEventListener("deviceready", function(){
		$('#disp table td').eq(3).text(device.model);
		$('#disp table td').eq(5).text(device.cordova);
		$('#disp table td').eq(7).text(device.platform);
		$('#disp table td').eq(9).text(device.version);
		$('#disp table td').eq(11).text(device.uuid);
		document.addEventListener("pause", function(){
			escribehistoria ('la app se pausó');
		},false); //pause
		document.addEventListener("resume", function(){
			escribehistoria ('la app se reinició');
		},false); //resume
		document.addEventListener("online", function(){
			escribehistoria ('la app se conectó a la red');
		},false); //se conectó
		document.addEventListener("offline", function(){
			escribehistoria ('la app se desconectó de la red');
		},false); //se desconectó
		
	},false); //ready device
	
}); //ready document

function escribehistoria(accion){
	$('#eHistoria').append('<li>'+accion+'</li>');
}
