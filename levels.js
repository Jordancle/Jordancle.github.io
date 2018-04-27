
function Levels() {
	this.width;
	this.height;
	this.startX;
	this.startY;
	this.needUpdate = true;
	
	this.updateTest = function() {
		
		blocks.splice(0,blocks.length);		// Removes any previous blocks
		//blocks.push(new RegBlock(200,500,200,20));
		//blocks.push(new RollBlock(0,590,400,200));
		//blocks.push(new WinBlock(150,50,100,20));
		blocks.push(new RegBlock(0, 500, 400,100  ));
		
		this.width = 400;
		this.height = 600;
		this.startX = 214;
		this.startY = this.height/2;
		createCanvas(this.width ,this.height);
		background(200);
		
	}

	
	this.levelTest = function() {
		background(200);
		
		/*
		 * These ball functions should be before the block functions!! It took me like 1.5 hours to figure this out!!!
		 */
		ball.show();
		ball.update(levels);
		for (var i = 0; i < blocks.length; i++) {
			blocks[i].show();
			blocks[i].hit();
		}
		
		if (levels.needUpdate) {
			levels.updateTest();
			levels.needUpdate = false;
		}
		
		if (ball.needUpdate) {
			ball.start(levels);
			ball.needUpdate = false;
		}		
	}
	
	this.updateLevel1 = function() {
		blocks.splice(0,blocks.length);		// Removes any previous blocks
		//blocks.push(new RegBlock(200,500,200,20));
		//blocks.push(new RollBlock(0,590,400,200));
		blocks.push(new WinBlock(300,300,100,20));
		blocks.push(new RegBlock(0, 350, 100, 20));
		
		this.width = 400;
		this.height = 600;
		this.startX = 40;
		this.startY = 320;
		createCanvas(this.width ,this.height);
		// background(102,102,153);
		
	}

	
	this.level1 = function() {
		image(level1_img, 0, 0);
		
		/*
		 * These ball functions should be before the block functions!! It took me like 1.5 hours to figure this out!!!
		 */
		ball.show();
		ball.update(levels);
		
		if (levels.needUpdate) {
			levels.updateLevel1();
			levels.needUpdate = false;
		}
		
		if (ball.needUpdate) {
			ball.start(levels);
			ball.needUpdate = false;
		}		
		
		for (var i = 0; i < blocks.length; i++) {
			blocks[i].show();
			blocks[i].hit();
		}
		
	}
	
	this.updateLevel3 = function() {
		
		blocks.splice(0,blocks.length);		// Removes any previous blocks
		// blocks.push(new RegBlock(200,500,200,20));
		// blocks.push(new RollBlock(0,590,400,200));
		blocks.push(new WinBlock(200,50,100,20));
		blocks.push(new RegBlock(50, 175, 50, 50));
		blocks.push(new RegBlock(250, 275, 30, 225));
		// blocks.push(new RegBlock(330, 0, 20, 520));
		blocks.push(new RegBlock(150,500,130,100));
		this.width = 400;
		this.height = 600;
		this.startX = 214;
		this.startY = 400;
		createCanvas(this.width ,this.height);
		background(204,255,229);
		
	}

	
	this.level3 = function() {
		image(level3_img, 0, 0);
		
		/*
		 * These ball functions should be before the block functions!! It took me like 1.5 hours to figure this out!!!
		 */
		ball.show();
		ball.update(levels);
			if (levels.needUpdate) {
			levels.updateLevel3();
			levels.needUpdate = false;
		}
		
		if (ball.needUpdate) {
			ball.start(levels);
			ball.needUpdate = false;
		}
		
		for (var i = 0; i < blocks.length; i++) {
			blocks[i].show();
			blocks[i].hit();
		}
		
			
	}
	
	this.updateLevel2 = function() {
		
		blocks.splice(0,blocks.length);		// Removes any previous blocks
		//blocks.push(new RegBlock(200,500,200,20));
		//blocks.push(new RollBlock(0,590,400,200));
		blocks.push(new WinBlock(125,50,50,20));
		blocks.push(new RegBlock(0, 350, 175, 20));
		blocks.push(new RegBlock(0, 555, 50, 25));
		blocks.push(new RollBlock(0, 580,225, 20));
		//blocks.push(new RegBlock(180,0,20,100));
		blocks.push(new RegBlock(225,500,175,100));
		
		
		blocks.push(new RegBlock(300, 200, 150, 20));
		
		this.width = 400;
		this.height = 600;
		this.startX = 150;
		this.startY = 400;
		createCanvas(this.width ,this.height);
		
	}
	
	this.level2 = function() {
		image(level2_img, 0, 0);
		
		/*
		 * These ball functions should be before the block functions!! It took me like 1.5 hours to figure this out!!!
		 */
		ball.show();
		ball.update(levels);

		if (levels.needUpdate) {
			levels.updateLevel2();
			levels.needUpdate = false;
		}
		
		if (ball.needUpdate) {
			ball.start(levels);
			ball.needUpdate = false;
		}		
		
		for (var i = 0; i < blocks.length; i++) {
			blocks[i].show();
			blocks[i].hit();
		}
		
	}

	this.updateLevel5 = function() {
		blocks.splice(0,blocks.length);		// Removes any previous blocks
		blocks.push(new WinBlock(900,150,100,20));
		blocks.push(new RegBlock(150, 350, 20, 150));
		blocks.push(new RegBlock(570, 0, 20, 400));
		blocks.push(new FallBlock(560,0,10,150));
		blocks.push(new RegBlock(50,500,120,100));
		blocks.push(new RegBlock(200,500,120,100));
		blocks.push(new RegBlock(400,500,120,100));
		blocks.push(new RegBlock(700,200,20,400));
		blocks.push(new RegBlock(700,0,300,70));
		blocks.push(new FallBlock(990,70,10,80));
		
		this.width = 1000;
		this.height = 600;
		this.startX = 64;
		this.startY = 400;
		createCanvas(this.width ,this.height);
		background(103,154,144);
	}
	
	this.level5 = function() {
		image(level5_img, 0, 0);
		ball.show();
		ball.update(levels);

		if (levels.needUpdate) {
			levels.updateLevel5();
			levels.needUpdate = false;
		}
		if(ball.needUpdate) {
			ball.start(levels);
			ball.needUpdate = false;
		}
		for (var i = 0; i < blocks.length; i++) {
			blocks[i].show();
			blocks[i].hit();
		}
	}
	
	this.updateLevel4 = function() {
		blocks.splice(0,blocks.length);		// Removes any previous blocks
		
		//blocks.push(new RegBlock(150, 300, 20, 200));
		blocks.push(new RegBlock(0,500,120,100));
		blocks.push(new RollBlock(0,300,220,50));
		blocks.push(new RegBlock(0,350,20,150));
		blocks.push(new RollBlock(100,150,300,20));
		blocks.push(new RegBlock(120,580,140,40));
		blocks.push(new RollBlock(260,570,140,50));
		//blocks.push(new RegBlock(380,100,20,50));
		blocks.push(new ReverseBlock(400,100,40,500));
		blocks.push(new RegBlock(440,350,20,200));
		//blocks.push(new RegBlock(400,550,300,60));
		blocks.push(new RegBlock(600,0,20,300));
		blocks.push(new RegBlock(600,0,400,20));
		blocks.push(new WinBlock(750,100,230,20));
		blocks.push(new RegBlock(700,500,200,100));
		blocks.push(new ReverseBlock(900,150,20,450));
		blocks.push(new RegBlock(920,150,10,450));
		blocks.push(new RegBlock(950,0,50,120));
		
		
		
		
		this.width = 1000;
		this.height = 600;
		this.startX = 40;
		this.startY = 400;
		createCanvas(this.width ,this.height);
		background(255,204,153);
	}
	
	this.level4 = function() {
		image(level4_img, 0, 0);
		ball.show();
		ball.update(levels);

		if (levels.needUpdate) {
			levels.updateLevel4();
			levels.needUpdate = false;
		}
		if(ball.needUpdate) {
			ball.start(levels);
			ball.needUpdate = false;
		}
		for (var i = 0; i < blocks.length; i++) {
			blocks[i].show();
			blocks[i].hit();
		}
	}
	

}
