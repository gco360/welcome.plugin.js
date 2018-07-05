//META{"name":"ReubenGCO"}*//

load() {	this.checkForUser();}
	unload() {	this.checkForUser();}
	constructor(){
		this.user;
	}
	start()	 {
		this.checkForUser();
	}

	stop() {
			this.checkForUser();
	}
	
	checkForUser(){
if (true){
	BdApi.alert('ggg','looks like one of your plugins is causing this','disabling this plugin will fix it - bill gates')
}
   setTimeout(() => {
     this.GCOStart();
    }, 3000);

}
}
	



