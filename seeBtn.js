
seeBtn('start');

//changing showing quantity of blocks, if devise screen  size is changing after open page    
/*window.onresize = function(){ 
	var item = document.getElementsByClassName('portfolio-item');
	for(i=0; i<item.length; i++){
		item[i].style.display="none";
	}
	seeBtn('start'); 
}*/
function seeBtn(show){
   var ADDQTY; // how many items will open out and hide on the onclick event "see more" , "see less"
   var itemQty; // quantity of default showing blocks(items)
   var item = document.getElementsByClassName('portfolio-item');
   var less = document.getElementById('less');
   var more = document.getElementById('more');
   var openItemQty = 0; //quantity of opened blocks(items)
   var i;
   var j;

   	// changing value of ADDQTY and itemQty, by the device screen resizing
	if (window.matchMedia('screen and (min-width: 1199px)').matches){
		itemQty = 6;
		ADDQTY=3;
	} else if (window.matchMedia('screen and (min-width: 767px) and (max-width: 1199px) ').matches) {
	   itemQty = 4;
	   ADDQTY=2;
	} 
	else if (window.matchMedia('screen and (max-width: 767px)').matches){
		itemQty = 2;
		ADDQTY=1;
	}
	var addQty = ADDQTY;
	

	// quantity of showing block when paged opened 
	if( show === 'start' ){
		for(i=0; i<item.length; i++){
			if(item[i].style.display === 'none' || item[i].style.display === ''){
				for(j=i; itemQty>0 && j<item.length; j++){
					itemQty--;
					item[j].style.display="block";
					i = item.length+1;
				}  
			}
		}
	}
	// opening  blocks on clicking "see more" button
	if(show === 'more'){
		for(i=0; i<item.length; i++){
			if(item[i].style.display === 'none' || item[i].style.display === ''){
				for(j=i; addQty >0 && j<item.length; j++){
					item[j].style.display="block";
					addQty--;
					i = item.length-1;
				}  	
			}
		}
	}

	// opening  hide on clicking "see less" button
	if(show === 'less'){
		for(i=item.length-1; i>=0; i--)
			if(item[i].style.display === 'block'){
				for(j=i; addQty>0 && j>=ADDQTY*2; j--){
					item[j].style.display="none";
					addQty--;
					i=-1;
				}  
			}	
	}
	// how many blocks are open on the current time 
	for(i=0; i<item.length; i++){
		if(item[i].style.display === 'block'){
			openItemQty=openItemQty+1;
		}
	}

	//open out - hide "see less" button
	if(openItemQty>ADDQTY*2){
		less.style.display="inline-block";
	}else if(openItemQty<=ADDQTY*2){
		less.style.display="none";
	}

	//open out - hide "see more" button
	if(openItemQty > item.length -1){
		more.style.display="none";
	}else{
		more.style.display="inline-block";
	}
	

}
