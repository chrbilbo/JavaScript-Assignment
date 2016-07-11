/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 4
   Case Problem 1

   Author:  Christina Bilbo  
   Date:    November 9, 2015  

   Filename:  jemenus.js

   -------------------------------------------------------------
   Function List:
   setTabs()
      Initializes the contents of the printer.htm Web page, locating
      the tab menus and assigning event handler to the tabs.

   showTab()
      Shows the currently-select tab menu, bring it to the top
      of the stack


   -------------------------------------------------------------
   Global Variable List:

   currentTab
      An object variable pointing to the currently selected tab
   
   maxZ
      A variable containing maximum z-index value among the tab lists

   -------------------------------------------------------------
*/

//An object variable pointing to the currently selected tab
var currentTab = null;

//A variable containing maximum z-index value among the tab lists
var maxZ = 1;

//runs the setTabs() function after page is loaded
window.onload = setTabs;

//Initializes the contents of the printer.htm Web page, locating
//the tab menus and assigning event handler to the tabs.
function setTabs(){
	// create an array of all menu tabs in the document and to initialize 
	//the value of the currentTab object.
	var menuTabs = new Array();
	
	// store all elements in the document in an array
	var allElems = document.getElementsByTagName("*");
	
	//loop through allElems pushing all elements to menuTabs array
	for (var i = 0; i < allElems.length; i++) {
		if (allElems[i].className == "tab") menuTabs.push(allElems[i]);
	}
	
	//set currentTab = to first item in menuTabs array
	currentTab = menuTabs[0];
	
	//loops through items in menuTabs array and adds onclick event handler
	for (var i = 0; i < menuTabs.length; i++) {
		menuTabs[i].onclick = showTab;
	}
}


//Shows the currently-select tab menu, bring it to the top
//of the stack
function showTab(){
	// set background color of current (previously selected) tab object to white
	currentTab.style.backgroundColor = "white";
	
	// increase value of maxZ variable by 1
	maxZ++;
	
	// declare variable called tabList that references the first ul element nested
	// within the this object
	var tabList = this.getElementsByTagName ("ul")[0];
	
	//set z-index value of tabList to value of maxZ variable
	tabList.style.zIndex = maxZ;
	
	//currentTab points to tabList object
	currentTab = this;
	
	//set back ground color to (221,221,255)
	currentTab.style.backgroundColor = "rgb(221, 221, 255)";
}

