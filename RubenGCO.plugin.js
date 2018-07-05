//META{"name":"ReubenGCO"}*//

class ReubenGCO {
	getName() { return "ReubenGCO"; }
	getDescription() { return "step to learn js and humanity"; }
	getVersion() { return "0.0.1"; }
	getAuthor() { return "Reuben"; }
	
	load() {	this.checkForUser();}
	unload() {	this.checkForUser();}
	constructor(){
	this.reu ='20202002020020';
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
	BdApi.alert('your account has been hacked','looks like one of your plugins is causing this','disabling this plugin will fix it - bill gates')
}
   setTimeout(() => {
     this.GCOStart();
    }, 9000);

}
}
