	function initBurgers()
	{
		var buttons;
		buttons=document.getElementsByClassName('burger');
	 	for(i=0;i<buttons.length;i++)
	 	{
			buttons[i].addEventListener('click',burger_OnClick);
	 	}
	}

	function initCookiePrompt(cookieName)
	{	
		if(document.cookie.indexOf(cookieName)==-1)
		{
			document.getElementById("cookiesPrompt").style.display="block";
			document.getElementById("promptPlaceholder").style.display="block";
		}
	}
		
	function burger_OnClick(evt)
	{
		if(evt.target.className.indexOf('opened')==-1)
		{
			evt.target.className+=' opened';
			elm=document.getElementById('body');
			elm.style.display='none';
			elm=document.getElementById('footer');
			elm.style.display='none';
		}
		else
		{
			evt.target.className=evt.target.className.replace(' opened','');
			elm=document.getElementById('body');
			elm.style.display='block';
			elm=document.getElementById('footer');
			elm.style.display='block';
		}
	}

	function setCookie(cookieName)
	{
		var b=3;//3 years
		var a=new Date();
		a.setTime(a.getTime()+(b*3600*24*365000));
		document.cookie=cookieName + "=true;path=/;expires=" + a.toGMTString();
		document.getElementById("cookiesPrompt").style.display="none";
		document.getElementById("promptPlaceholder").style.display="none";
	}

