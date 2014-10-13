$(document).ready(function()
{
	var pagenum = 0;
	var name = prompt("Entrer votre nom :");
	$("#hello").append("<h2><strong>Bonjour " + name + "</strong></h2>");
	$("#params").click(function()
	{
		$("#settings").css("display", "inline");
		$("#back1").click(function()
		{
			$("#backgr").empty()
			$("#backgr").append("<img id=firstimg src=./img/background1.jpeg>");
		});
		$("#back2").click(function()
		{
			$("#backgr").empty()
			$("#backgr").append("<img id=firstimg src=./img/background2.jpg>");
		});
		$("#back3").click(function()
		{
			$("#backgr").empty()
			$("#backgr").append("<img id=firstimg src=./img/background3.jpg>");
		});
		$("#back4").click(function()
		{
			$("#backgr").empty()
			$("#backgr").append("<img id=firstimg src=./img/background4.jpg>");
		});

		$("#close").click(function()
		{
			$("#settings").css("display", "none");
		});
	});
	$("#greenbutton").click(function()
	{
		if (pagenum < 3)
		{
			pagenum = pagenum + 1;
			var page = prompt("Entrer l'URL.");
			var pagename = prompt("Entrer le Nom");
			$("#unorder").append("<li><a href="+ page +">"+ pagename + "</a></li>");
		}
		else
		{
			confirm("Vous ne pouvez pas avoir plus de 3 marques pages.");
		}
	});
	$("#second").mouseenter(function()
	{
		$("#second").css("border", "solid white 5px");
	});
	
	$("#first").mouseenter(function()
	{
		$("#first").css("border", "solid white 5px");
	});

	$("#fourbis").mouseenter(function()
	{
		$("#fourbis").css("border", "solid white 5px");
	});

	$("#third").mouseenter(function()
	{
		$("#third").css("border", "solid white 5px");
	});

	$("#four").mouseenter(function()
	{
		$("#four").css("border", "solid white 5px");
	});

	$("#five").mouseenter(function()
	{
		$("#five").css("border", "solid white 5px");
	});

	$("#six").mouseenter(function()
	{
		$("#six").css("border", "solid white 5px");
	});

	$("#fourbis, #first, #second, #third, #four, #five, #six").mouseleave(function()
	{
		$("#fourbis, #first, #second, #third, #four, #five, #six").css("border", "none");
	});
});
