    // convert all characters to lowercase to simplify testing
    var agt=navigator.userAgent.toLowerCase();

    // *** BROWSER VERSION ***
    // Note: On IE5, these return 4, so use is_ie5up to detect IE5.
    var is_major = parseInt(navigator.appVersion);
    var is_minor = parseFloat(navigator.appVersion);

    // Note: Opera and WebTV spoof Navigator.  We do strict client detection.
    // If you want to allow spoofing, take out the tests for opera and webtv.
    var is_nav  = ((agt.indexOf('mozilla')!=-1) && (agt.indexOf('spoofer')==-1)
                && (agt.indexOf('compatible') == -1) && (agt.indexOf('opera')==-1)
                && (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1));
    var is_nav2 = (is_nav && (is_major == 2));
    var is_nav3 = (is_nav && (is_major == 3));
    var is_nav4 = (is_nav && (is_major == 4));
    var is_nav4up = (is_nav && (is_major >= 4));
    var is_navonly      = (is_nav && ((agt.indexOf(";nav") != -1) ||
                          (agt.indexOf("; nav") != -1)) );
    var is_nav6 = (is_nav && (is_major == 5));
    var is_nav6up = (is_nav && (is_major >= 5));
    var is_gecko = (agt.indexOf('gecko') != -1);


    var is_ie     = ((agt.indexOf("msie") != -1) && (agt.indexOf("opera") == -1));
    var is_ie3    = (is_ie && (is_major < 4));
    var is_ie4    = (is_ie && (is_major == 4) && (agt.indexOf("msie 4")!=-1) );
    var is_ie4up  = (is_ie && (is_major >= 4));
    var is_ie5    = (is_ie && (is_major == 4) && (agt.indexOf("msie 5.0")!=-1) );
    var is_ie5_5  = (is_ie && (is_major == 4) && (agt.indexOf("msie 5.5") !=-1));
    var is_ie5up  = (is_ie && !is_ie3 && !is_ie4);
    var is_ie5_5up =(is_ie && !is_ie3 && !is_ie4 && !is_ie5);
    var is_ie6    = (is_ie && (is_major == 4) && (agt.indexOf("msie 6.")!=-1) );
    var is_ie6up  = (is_ie && !is_ie3 && !is_ie4 && !is_ie5 && !is_ie5_5);

    // KNOWN BUG: On AOL4, returns false if IE3 is embedded browser
    // or if this is the first browser window opened.  Thus the
    // variables is_aol, is_aol3, and is_aol4 aren't 100% reliable.
    var is_aol   = (agt.indexOf("aol") != -1);
    var is_aol3  = (is_aol && is_ie3);
    var is_aol4  = (is_aol && is_ie4);
    var is_aol5  = (agt.indexOf("aol 5") != -1);
    var is_aol6  = (agt.indexOf("aol 6") != -1);

    var is_opera = (agt.indexOf("opera") != -1);
    var is_opera2 = (agt.indexOf("opera 2") != -1 || agt.indexOf("opera/2") != -1);
    var is_opera3 = (agt.indexOf("opera 3") != -1 || agt.indexOf("opera/3") != -1);
    var is_opera4 = (agt.indexOf("opera 4") != -1 || agt.indexOf("opera/4") != -1);
    var is_opera5 = (agt.indexOf("opera 5") != -1 || agt.indexOf("opera/5") != -1);
    var is_opera5up = (is_opera && !is_opera2 && !is_opera3 && !is_opera4);

    var is_webtv = (agt.indexOf("webtv") != -1);

    var is_TVNavigator = ((agt.indexOf("navio") != -1) || (agt.indexOf("navio_aoltv") != -1));
    var is_AOLTV = is_TVNavigator;

    var is_hotjava = (agt.indexOf("hotjava") != -1);
    var is_hotjava3 = (is_hotjava && (is_major == 3));
    var is_hotjava3up = (is_hotjava && (is_major >= 3));

    // *** JAVASCRIPT VERSION CHECK ***
    var is_js;
    if (is_nav2 || is_ie3) is_js = 1.0;
    else if (is_nav3) is_js = 1.1;
    else if (is_opera5up) is_js = 1.3;
    else if (is_opera) is_js = 1.1;
    else if ((is_nav4 && (is_minor <= 4.05)) || is_ie4) is_js = 1.2;
    else if ((is_nav4 && (is_minor > 4.05)) || is_ie5) is_js = 1.3;
    else if (is_hotjava3up) is_js = 1.4;
    else if (is_nav6 || is_gecko) is_js = 1.5;
    // NOTE: In the future, update this code when newer versions of JS
    // are released. For now, we try to provide some upward compatibility
    // so that future versions of Nav and IE will show they are at
    // *least* JS 1.x capable. Always check for JS version compatibility
    // with > or >=.
    else if (is_nav6up) is_js = 1.5;
    // NOTE: ie5up on mac is 1.4
    else if (is_ie5up) is_js = 1.3

    // HACK: no idea for other browsers; always check for JS version with > or >=
    else is_js = 0.0;

    // *** PLATFORM ***
    var is_win   = ( (agt.indexOf("win")!=-1) || (agt.indexOf("16bit")!=-1) );
    // NOTE: On Opera 3.0, the userAgent string includes "Windows 95/NT4" on all
    //        Win32, so you can't distinguish between Win95 and WinNT.
    var is_win95 = ((agt.indexOf("win95")!=-1) || (agt.indexOf("windows 95")!=-1));

    // is this a 16 bit compiled version?
    var is_win16 = ((agt.indexOf("win16")!=-1) ||
               (agt.indexOf("16bit")!=-1) || (agt.indexOf("windows 3.1")!=-1) ||
               (agt.indexOf("windows 16-bit")!=-1) );

    var is_win31 = ((agt.indexOf("windows 3.1")!=-1) || (agt.indexOf("win16")!=-1) ||
                    (agt.indexOf("windows 16-bit")!=-1));

    var is_winme = ((agt.indexOf("win 9x 4.90")!=-1));
    var is_win2k = ((agt.indexOf("windows nt 5.0")!=-1));

    // NOTE: Reliable detection of Win98 may not be possible. It appears that:
    //       - On Nav 4.x and before you'll get plain "Windows" in userAgent.
    //       - On Mercury client, the 32-bit version will return "Win98", but
    //         the 16-bit version running on Win98 will still return "Win95".
    var is_win98 = ((agt.indexOf("win98")!=-1) || (agt.indexOf("windows 98")!=-1));
    var is_winnt = ((agt.indexOf("winnt")!=-1) || (agt.indexOf("windows nt")!=-1));
    var is_win32 = (is_win95 || is_winnt || is_win98 ||
                    ((is_major >= 4) && (navigator.platform == "Win32")) ||
                    (agt.indexOf("win32")!=-1) || (agt.indexOf("32bit")!=-1));

    var is_os2   = ((agt.indexOf("os/2")!=-1) ||
                    (navigator.appVersion.indexOf("OS/2")!=-1) ||
                    (agt.indexOf("ibm-webexplorer")!=-1));

    var is_mac    = (agt.indexOf("mac")!=-1);
    // hack ie5 js version for mac
    if (is_mac && is_ie5up) is_js = 1.4;
    var is_mac68k = (is_mac && ((agt.indexOf("68k")!=-1) ||
                               (agt.indexOf("68000")!=-1)));
    var is_macppc = (is_mac && ((agt.indexOf("ppc")!=-1) ||
                                (agt.indexOf("powerpc")!=-1)));

    var is_sun   = (agt.indexOf("sunos")!=-1);
    var is_sun4  = (agt.indexOf("sunos 4")!=-1);
    var is_sun5  = (agt.indexOf("sunos 5")!=-1);
    var is_suni86= (is_sun && (agt.indexOf("i86")!=-1));
    var is_irix  = (agt.indexOf("irix") !=-1);    // SGI
    var is_irix5 = (agt.indexOf("irix 5") !=-1);
    var is_irix6 = ((agt.indexOf("irix 6") !=-1) || (agt.indexOf("irix6") !=-1));
    var is_hpux  = (agt.indexOf("hp-ux")!=-1);
    var is_hpux9 = (is_hpux && (agt.indexOf("09.")!=-1));
    var is_hpux10= (is_hpux && (agt.indexOf("10.")!=-1));
    var is_aix   = (agt.indexOf("aix") !=-1);      // IBM
    var is_aix1  = (agt.indexOf("aix 1") !=-1);
    var is_aix2  = (agt.indexOf("aix 2") !=-1);
    var is_aix3  = (agt.indexOf("aix 3") !=-1);
    var is_aix4  = (agt.indexOf("aix 4") !=-1);
    var is_linux = (agt.indexOf("inux")!=-1);
    var is_sco   = (agt.indexOf("sco")!=-1) || (agt.indexOf("unix_sv")!=-1);
    var is_unixware = (agt.indexOf("unix_system_v")!=-1);
    var is_mpras    = (agt.indexOf("ncr")!=-1);
    var is_reliant  = (agt.indexOf("reliantunix")!=-1);
    var is_dec   = ((agt.indexOf("dec")!=-1) || (agt.indexOf("osf1")!=-1) ||
           (agt.indexOf("dec_alpha")!=-1) || (agt.indexOf("alphaserver")!=-1) ||
           (agt.indexOf("ultrix")!=-1) || (agt.indexOf("alphastation")!=-1));
    var is_sinix = (agt.indexOf("sinix")!=-1);
    var is_freebsd = (agt.indexOf("freebsd")!=-1);
    var is_bsd = (agt.indexOf("bsd")!=-1);
    var is_unix  = ((agt.indexOf("x11")!=-1) || is_sun || is_irix || is_hpux ||
                 is_sco ||is_unixware || is_mpras || is_reliant ||
                 is_dec || is_sinix || is_aix || is_linux || is_bsd || is_freebsd);

    var is_vms   = ((agt.indexOf("vax")!=-1) || (agt.indexOf("openvms")!=-1));

var vernetsc4     = false;
var vernetsc6     = false;
var verexplorer   = false;
var veropera      = false;

if ( (navigator.userAgent.indexOf("Opera 5") > -1) || (navigator.userAgent.indexOf("Opera/5") > -1) )
{
  veropera = true;
}
else if ( navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.substring(0,1) >= "4" )
{
  verexplorer = true;
}
else if ( navigator.appName == "Netscape" && navigator.appVersion.substring(0,1) == "4" )
{
  vernetsc4 = true;
}
else if ( navigator.appName == "Netscape" && navigator.appVersion.substring(0,1) >= "5" )
{
  vernetsc6 = true;
}
else
{
  veropera = true;
}


var nn6menu, nn6menu2; // Buttons for extra nn6 speed

if (vernetsc4) {
	widthCheck = window.innerWidth
	heightCheck = window.innerHeight
	window.onResize = resizeFix
}
function resizeFix() {
	if (widthCheck != window.innerWidth || heightCheck != window.innerHeight)
	document.location.href = document.location.href
}

function CheckUIElements()
{
	var yMenuFrom, yMenuTo, yButtonFrom, yButtonTo, yOffset, timeoutNextCheck;
	
	if ( vernetsc4 ) {
		yButtonFrom = document["menu2"].top;
		yButtonTo   = top.pageYOffset + top.innerHeight - 85;
		yMenuFrom   = document["menu"].top;
		yMenuTo     = top.pageYOffset + 65;
	}
	else if ( verexplorer ) {
		yButtonFrom = parseInt (menu2.style.top, 10);
		yButtonTo   = document.body.scrollTop + document.body.clientHeight - 85;
		yMenuFrom   = parseInt (menu.style.top, 10);
		yMenuTo     = document.body.scrollTop + 65;
	}
	else if ( vernetsc6 ) {
		yButtonFrom = nn6menu2.style.top.replace(/px/,"");
		yButtonTo   = top.pageYOffset + top.innerHeight - 85;
		yMenuFrom   = nn6menu.style.top.replace(/px/,"");
		yMenuTo     = top.pageYOffset + 65;
	}
	else if ( veropera ) {
//		nn6menu = document.getElementById('menu');
		yButtonFrom = nn6menu2.style.top;
		yButtonTo   = top.pageYOffset + top.innerHeight - 85;
		yMenuFrom   = nn6menu.style.top;
		yMenuTo     = top.pageYOffset + 65;
	}
 if (yButtonTo<(yMenuTo+342)) {
    yButtonTo=yMenuTo+342;
 }

	
	timeoutNextCheck = 500;
	
//	if ( Math.abs(yButtonFrom - (yMenuTo + 222)) < 6 && yButtonTo < yButtonFrom ) {
//		setTimeout ("CheckUIElements()", timeoutNextCheck);
//		return;
//	}

	if ( yButtonFrom != yButtonTo ) {

		if ( vernetsc6 )
			yOffset = Math.ceil( Math.abs( yButtonTo - yButtonFrom ) / 10 );
		else
			yOffset = Math.ceil( Math.abs( yButtonTo - yButtonFrom ) / 20 );
			
		if ( yButtonTo < yButtonFrom )
			yOffset = -yOffset;
		
		timeoutNextCheck = 10;

		if ( vernetsc4 )
			document["divmenu2"].top += yOffset;
		else if ( verexplorer )
			menu2.style.top = parseInt (menu2.style.top, 10) + yOffset;
		else if ( veropera )
			nn6menu2.style.top += yOffset;
		else if ( vernetsc6 ) {
			nn6menu2.style.top = eval(nn6menu2.style.top.replace(/px/,"")) + yOffset;
//			document.getElementById('menu2').style.top = eval(document.getElementById('menu2').style.top.replace(/px/,"")) + yOffset;
			timeoutNextCheck = 50;
		}
		

	}
	if ( yMenuFrom != yMenuTo ) {
	
		if ( vernetsc6 )
			yOffset = Math.ceil( Math.abs( yMenuTo - yMenuFrom ) / 10 );
		else
			yOffset = Math.ceil( Math.abs( yMenuTo - yMenuFrom ) / 30 );
			
		if ( yMenuTo < yMenuFrom )
			yOffset = -yOffset;
		
		timeoutNextCheck = 10;

		if ( vernetsc4 )
			document["menu"].top += yOffset;
		else if ( verexplorer )
			menu.style.top = parseInt (menu.style.top, 10) + yOffset;
		else if ( veropera )
			nn6menu.style.top += yOffset;
		else if ( vernetsc6 ) {
			nn6menu.style.top = eval(nn6menu.style.top.replace(/px/,"")) + yOffset;
//			document.getElementById('menu').style.top = eval(document.getElementById('menu').style.top.replace(/px/,"")) + yOffset;
			timeoutNextCheck = 50;
		}

		timeoutNextCheck = 10;
	}

	setTimeout ("CheckUIElements()", timeoutNextCheck);
}

function printable() {
 if ( vernetsc4 ) {
  //document["menu"].top = -200;
  document["menu"].visibility = "hidden";
  //document["menu2"].top = -200;
  document["menu2"].visibility = "hidden";
  document["bodytext"].left=10;
  document["bodytext"].width=600;
 }
 else if ( verexplorer ) {
  //menu.style.top = -200;
  menu.style.visibility = "hidden";
  //menu2.style.top = -200;
  menu2.style.visibility = "hidden";
  bodytext.style.left=10;
  bodytext.style.width=600;
 }
 else if ( vernetsc6 || veropera ) {
  nn6menu = document.getElementById('menu');
  //nn6menu.style.top = -200;
  nn6menu.style.visibility = "hidden";
  nn6menu2 = document.getElementById('menu2');
  //nn6menu2.style.top = -200;
  nn6menu2.style.visibility = "hidden";
  nn6bodyText = document.getElementById('bodytext');
  nn6bodyText.style.left = 10;
  nn6bodyText.style.width = 600;
 }
}

function OnLoad()
{
	var y;
	
	// we're not gonna be loaded in frames, no sir!
//	if ( top.frames.length )
//		top.location.href = self.location.href;
		
	// setting initial UI elements positions
	if ( vernetsc4 ) {
		document["menu"].top = top.pageYOffset + 65;
		document["menu"].visibility = "visible";
		document["menu2"].top = top.pageYOffset + top.innerHeight - 85;
		document["menu2"].visibility = "visible";
	}
	else if ( verexplorer ) {
		menu.style.top = document.body.scrollTop + 65;
		menu.style.visibility = "visible";
		menu2.style.top = document.body.scrollTop + document.body.clientHeight - 85;
		menu2.style.visibility = "visible";
		// and fixing incorect css property handling in msie
		// bodyText.style.right = -150;
	}
	else if ( vernetsc6 || veropera ) {
		nn6menu = document.getElementById('menu');
		nn6menu.style.top = top.pageYOffset + 65;
		nn6menu.style.visibility = "visible";
		nn6menu2 = document.getElementById('menu2');
		nn6menu2.style.top = top.pageYOffset + top.innerHeight - 85;
		nn6menu2.style.visibility = "visible";

//		document.getElementById('menu').style.top = top.pageYOffset + 65;
//		document.getElementById('menu').style.visibility = "visible";
//		document.getElementById('menu2').style.top = top.pageYOffset + top.innerHeight - 85;
//		document.getElementById('menu2').style.visibility = "visible";
	}

	// initializing UI update timer
	CheckUIElements();
	return true;
}

function funcSwapImage(imageName, bHilite) {
// DUMB Netscape (prior to v6) doesn't see img names if they're inside a <div> that has an id
// if they're just in <div></div> - it's okay, but that's not the case :\
	if ( verexplorer || vernetsc6 || veropera ) {
		document.images[imageName].src = "usefiles/" + imageName + (bHilite == 1 ? "_hi.gif" : "_lo.gif");
	}
	else if ( vernetsc4 ) {
		document.layers["menu"].document.images[imageName].src = "usefiles/" + imageName + (bHilite == 1 ? "_hi.gif" : "_lo.gif");
	}
	return false;
}

function PreloadMenuRollovers() {
if (!(vernetsc4 && is_unix)) {
 	// preloading misc images
 	img_temp10=new Image;
 	img_temp10.src="usefiles/null.gif";
 	img_temp11=new Image;
 	img_temp11.src="usefiles/h_ruler.jpg";
 	img_temp12=new Image;
 	img_temp12.src="usefiles/backg1.jpg";
 	
 	// preloading rollovers
 	img_temp1=new Image;
 	img_temp1.src="usefiles/menu_contents_hi.gif";
 	img_temp2=new Image;
 	img_temp2.src="usefile/menu_introduction_hi.gif";
 	img_temp3=new Image;
 	img_temp3.src="usefiles/menu_background_hi.gif";
 	img_temp4=new Image;
 	img_temp4.src="usefiles/menu_research_hi.gif";
 	img_temp5=new Image;
 	img_temp5.src="usefiles/menu_publications_hi.gif";
 	img_temp6=new Image;
 	img_temp6.src="usefiles/menu_demonstrations_hi.gif";
 	img_temp7=new Image;
 	img_temp7.src="usefiles/menu_interests_hi.gif";
 	img_temp8=new Image;
 	img_temp8.src="usefiles/menu_links_hi.gif";
 	img_temp9=new Image;
 	img_temp9.src="usefiles/menu_contact_hi.gif";
 }
}

/* Coupla MSIE only routines to make page header flash after the document is loaded */
function StartTitleFlash()
{

	if ( verexplorer )
		setTimeout ( "FlashTitleStepIt(190)", 10 );

	return true;
}

function FlashTitleStepIt( fptItersLeft )
{
	var str;
	var str2;
	str = fptItersLeft.toString(16);
	str2= 288-fptItersLeft;
	str2=str2.toString(16);
	str = eval ( "\"#" + "E0" + str + str2 + "\"" );
	
	pageTitle.style.color = str;

	fptItersLeft--;
	if ( fptItersLeft>64 )
		setTimeout ( eval ( "\"FlashTitleStepIt(" + fptItersLeft + ")\"" ), 10 );
}
