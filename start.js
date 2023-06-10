(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"start_atlas_1", frames: [[0,1970,1280,960],[1282,1970,1200,900],[1970,0,995,680],[1970,682,479,600],[0,0,1968,1968]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Image = function() {
	this.initialize(ss["start_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.initialize(ss["start_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_2 = function() {
	this.initialize(ss["start_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image_3 = function() {
	this.initialize(ss["start_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Image_4 = function() {
	this.initialize(ss["start_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.an_Video = function(options) {
	this.initialize();
	this._element = new $.an.Video(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.start_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		playSound("click_sunwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgmBTQgUgLgLgVQgKgUAAgcQAAgaAKgWQAKgXATgMQAUgNAZgBQAWABAPAIQAOAIAJAOQAIANAEAPQADAOAAANIAAAIIgBAGIh/AAQABAWAIAOQAJAOAOAHQAOAGAPAAQASAAAMgDQAMgCAJgEIAGAXQgJAEgPAEQgPAEgWAAQgbAAgUgMgAgYg9QgLAIgFANQgGAMgBAMIBfAAQAAgLgEgNQgDgMgKgJQgKgJgTAAQgPAAgLAJg");
	this.shape.setTransform(123.0531,1.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgQBbIAAibIg4AAIAAgaICRAAIAAAaIg5AAIAACbg");
	this.shape_1.setTransform(105.875,1.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AhVCCIAAjEIAAggIgBgbIAdAAIADAfIABAAQAJgRARgJQAPgJAWAAQAVAAASAMQASALAJAVQALAUAAAcQAAAhgMAUQgMAWgSALQgTALgWAAQgSAAgOgIQgOgHgJgOIgBAAIAABjgAgfhcQgNALgGATIgBAHIgBAGIAAAgIABAHIABAGQAFARANAKQAOALARAAQARAAAMgJQAMgJAHgPQAGgPABgVQgBgTgGgPQgGgPgMgKQgMgJgRAAQgQAAgPALg");
	this.shape_2.setTransform(88.05,4.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AguBXQgNgHgGgMQgGgLgBgOQABgiAcgPQAcgSA0AAIAAgEQAAgIgCgJQgDgKgJgHQgJgIgRABQgOAAgMADQgMAEgKAGIgHgWQALgHAQgFQAPgEAQAAQAcAAAPALQAQALAFARQAGARAAASIAABEIAAAWIACAVIgdAAIgDgXIgBAAQgIALgOAIQgOAHgTABQgSAAgMgIgAACAAQgRAEgMAJQgLAIAAASQAAAQAJAIQAIAHANAAQASABALgKQAMgIADgNIABgFIABgFIAAgfIgFAAQgQAAgPABg");
	this.shape_3.setTransform(67.2,1.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AApBbIgIgQIgJgVQgJgWgOgKQgNgLgXAAIgGAAIAABQIghAAIAAi1IAhAAIAABPIAHAAIBEhPIAoAAIhOBSQAVADAOANQAPAOAKAZIAJAVQAEAMAGALg");
	this.shape_4.setTransform(50.925,1.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AApBbIgIgQIgJgVQgJgWgOgKQgNgLgXAAIgGAAIAABQIghAAIAAi1IAhAAIAABPIAHAAIBEhPIAoAAIhOBSQAVADAOANQAPAOAKAZIAJAVQAEAMAGALg");
	this.shape_5.setTransform(25.025,1.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AAuBbIAAhNIAAgZIABgXIABgZIgBAAIgPAdIgOAbIgbAtIgdAxIgnAAIAAi1IAgAAIAABNIAAAZIgBAXIgBAYIABAAIAKgTIAJgSIAKgTIA4hdIAnAAIAAC1g");
	this.shape_6.setTransform(-3.65,1.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgQBbIAAibIg4AAIAAgaICRAAIAAAaIg5AAIAACbg");
	this.shape_7.setTransform(-21.775,1.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AAuCAIAAhOIAAgZIABgXIACgZIgCAAIgPAdIgPAbIgbAuIgcAxIgnAAIAAi1IAgAAIAABMIgBAaIAAAXIgBAYIABAAIAJgUIAJgRIALgTIA4hdIAnAAIAAC1gAgbhXQgKgGgFgKQgEgLgBgNIAXAAQACAMAFAIQAHAIAKAAQAMAAAGgIQAGgIABgMIAYAAQgBAXgOAMQgNAMgVAAQgRgBgKgGg");
	this.shape_8.setTransform(-39.9,-2.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgmBTQgUgLgLgVQgKgUAAgcQAAgaAKgWQAKgXATgMQAUgNAZgBQAWABAPAIQAOAIAJAOQAIANAEAPQADAOAAANIAAAIIgBAGIh/AAQABAWAIAOQAJAOAOAHQAOAGAPAAQASAAAMgDQAMgCAJgEIAGAXQgJAEgPAEQgPAEgWAAQgbAAgUgMgAgYg9QgLAIgFANQgGAMgBAMIBfAAQAAgLgEgNQgDgMgKgJQgKgJgTAAQgPAAgLAJg");
	this.shape_9.setTransform(-59.6969,1.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AhVCCIAAjEIAAggIgBgbIAeAAIACAfIABAAQAJgRARgJQAPgJAVAAQAXAAARAMQASALAJAVQAKAUABAcQAAAhgMAUQgMAWgSALQgTALgWAAQgRAAgPgIQgOgHgJgOIgBAAIAABjgAgfhcQgNALgGATIgBAHIgBAGIAAAgIABAHIABAGQAEARAOAKQAOALARAAQARAAAMgJQAMgJAHgPQAGgPABgVQgBgTgGgPQgGgPgMgKQgMgJgRAAQgRAAgOALg");
	this.shape_10.setTransform(-79.25,4.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AgmBTQgUgLgLgVQgKgUAAgcQAAgaAKgWQAKgXATgMQAUgNAZgBQAWABAPAIQAOAIAJAOQAIANAEAPQADAOAAANIAAAIIgBAGIh/AAQABAWAIAOQAJAOAOAHQAOAGAPAAQASAAAMgDQAMgCAJgEIAGAXQgJAEgPAEQgPAEgWAAQgbAAgUgMgAgYg9QgLAIgFANQgGAMgBAMIBfAAQAAgLgEgNQgDgMgKgJQgKgJgTAAQgPAAgLAJg");
	this.shape_11.setTransform(-99.9469,1.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AA7B+IAAjgIh1AAIAADgIghAAIAAj7IC3AAIAAD7g");
	this.shape_12.setTransform(-121.375,-2.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EDEDEE").s().p("AvtEIQhOAAg3g3Qg4g4AAhPIAAiUQAAhPA4g2QA3g4BOAAIfbAAQBOAAA4A4QA3A2AABPIAACUQAABPg3A4Qg4A3hOAAg");
	this.shape_13.setTransform(0.0224,0.0119,1.491,1.491);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#891345").s().p("AgvBoQgZgOgNgbQgOgZAAgiQAAghANgcQANgcAYgQQAYgPAggBQAbABATAJQASALAKAQQAKARAFASQAEATAAAPIgBALIAAAHIieAAQABAcAKARQALASARAIQARAIAUAAQAWAAAPgEQAPgDALgFIAHAeQgLAFgTAFQgTAEgbAAQghAAgZgOgAgehMQgNAKgHAPQgHAPgCAPIB3AAQABgOgFgPQgFgPgMgLQgNgLgXgBQgTABgOALg");
	this.shape_14.setTransform(153.3275,1.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#891345").s().p("AgUBxIAAjBIhGAAIAAggIC1AAIAAAgIhGAAIAADBg");
	this.shape_15.setTransform(131.95,1.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#891345").s().p("AhpCiIAAj0IgBgoIgBgiIAlAAIACAnIABAAQAMgVAUgMQAVgLAaAAQAcAAAVAOQAWAOAMAaQANAaAAAjQAAAogPAaQgOAbgYAOQgXANgbAAQgWAAgSgJQgSgJgKgRIgBAAIAAB7gAgmhzQgRAOgHAXIgBAJIgBAIIAAAnIAAAJIACAIQAFAVARANQARANAWAAQAVAAAPgLQAPgLAIgUQAJgSAAgbQAAgWgIgTQgIgUgPgLQgOgLgWgBQgVABgRANg");
	this.shape_16.setTransform(109.725,6.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#891345").s().p("Ag6BtQgQgKgIgOQgHgPAAgRQAAgpAjgVQAjgVBBAAIAAgFQAAgJgDgNQgDgMgMgJQgLgJgVAAQgRAAgPAEQgQAFgMAIIgJgcQAOgJATgFQAUgFAUAAQAjAAATAOQATANAHAVQAHAVAAAXIAABUIABAdIACAZIglAAIgDgcIgCAAQgJANgSAKQgSAKgXAAQgXAAgPgJgAACABQgVADgOAMQgPALAAAWQAAAUALAKQALAJAQAAQAWgBAOgLQAOgLAFgPIABgGIABgHIAAgmIgJAAQgTAAgRACg");
	this.shape_17.setTransform(83.775,1.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#891345").s().p("AAzBxQgFgHgFgNIgMgaQgLgbgRgNQgRgNgcAAIgIAAIAABjIgpAAIAAjhIApAAIAABiIAKAAIBUhiIAyAAIhiBmQAbADASARQASARANAfIAKAaQAGAPAIAOg");
	this.shape_18.setTransform(63.525,1.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#891345").s().p("AAzBxQgFgHgFgNIgMgaQgLgbgRgNQgRgNgcAAIgIAAIAABjIgpAAIAAjhIApAAIAABiIAKAAIBUhiIAyAAIhiBmQAbADASARQASARANAfIAKAaQAGAPAIAOg");
	this.shape_19.setTransform(31.225,1.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#891345").s().p("AA5BxIAAhgIABgfIABgdIACggIgBAAIgUAmIgTAhIghA4IgkA9IgwAAIAAjhIAoAAIAABfIAAAgIgCAcIgBAeIABAAIANgYIAKgVIAOgYIBGh0IAwAAIAADhg");
	this.shape_20.setTransform(-4.55,1.625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#891345").s().p("AgUBxIAAjBIhGAAIAAggIC1AAIAAAgIhGAAIAADBg");
	this.shape_21.setTransform(-27.1,1.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#891345").s().p("AA5CfIAAhgIABggIABgdIACgfIgCAAIgTAlIgTAhIghA5IgkA9IgwAAIAAjhIAnAAIAABeIAAAhIgBAcIgBAeIABAAIANgYIALgVIANgYIBGh0IAwAAIAADhgAgihsQgMgIgGgNQgGgNgBgQIAdAAQACAPAHAKQAHAKAOAAQAPAAAHgKQAIgKABgPIAeAAQgCAcgQAPQgRAPgaAAQgVgBgNgHg");
	this.shape_22.setTransform(-49.65,-2.975);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#891345").s().p("AgvBoQgZgOgNgbQgOgZAAgiQAAghANgcQANgcAYgQQAYgPAggBQAbABATAJQASALAKAQQAKARAFASQAEATAAAPIgBALIAAAHIieAAQABAcAKARQALASARAIQARAIAUAAQAWAAAPgEQAPgDALgFIAHAeQgLAFgTAFQgTAEgbAAQghAAgZgOgAgehMQgNAKgHAPQgHAPgCAPIB3AAQABgOgFgPQgFgPgMgLQgNgLgXgBQgTABgOALg");
	this.shape_23.setTransform(-74.3725,1.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#891345").s().p("AhpCiIAAj0IgBgoIgBgiIAlAAIACAnIABAAQAMgVAUgMQAVgLAaAAQAcAAAVAOQAWAOAMAaQANAaAAAjQAAAogPAaQgOAbgYAOQgXANgbAAQgWAAgSgJQgSgJgKgRIgBAAIAAB7gAgmhzQgRAOgHAXIgBAJIgBAIIAAAnIAAAJIACAIQAFAVARANQARANAWAAQAVAAAPgLQAPgLAIgUQAJgSAAgbQAAgWgIgTQgIgUgPgLQgOgLgWgBQgVABgRANg");
	this.shape_24.setTransform(-98.725,6.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#891345").s().p("AgvBoQgZgOgNgbQgOgZAAgiQAAghANgcQANgcAYgQQAYgPAggBQAbABATAJQASALAKAQQAKARAFASQAEATAAAPIgBALIAAAHIieAAQABAcAKARQALASARAIQARAIAUAAQAWAAAPgEQAPgDALgFIAHAeQgLAFgTAFQgTAEgbAAQghAAgZgOgAgehMQgNAKgHAPQgHAPgCAPIB3AAQABgOgFgPQgFgPgMgLQgNgLgXgBQgTABgOALg");
	this.shape_25.setTransform(-124.5225,1.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#891345").s().p("ABJCeIAAkYIiRAAIAAEYIgqAAIAAk7IDlAAIAAE7g");
	this.shape_26.setTransform(-151.25,-2.825);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EDEDEE").s().p("A3bGJQh0ABhThTQhThTAAh1IAAjeQAAh0BThTQBThTB0ABMAu3AAAQB1gBBSBTQBTBTAAB0IAADeQAAB1hTBTQhSBTh1gBg");
	this.shape_27.setTransform(0.0312,0,1.2461,1.2461);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-222,-49,444.1,98.1);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjjDkIAAnHIHHAAIAAHHg");
	mask.setTransform(22.775,22.775);

	// Layer_3
	this.instance = new lib.Image_4();
	this.instance.setTransform(0,0,0.0231,0.0231);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,45.5,45.5), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AkrF4IAArvIJXAAIAALvg");
	mask_1.setTransform(30.025,37.625);

	// Layer_3
	this.instance_1 = new lib.Image_3();
	this.instance_1.setTransform(0,0,0.1254,0.1254);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,60.1,75.3), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("ApyIuQgxAAgigiQgigjAAgwIAAtxQAAgwAigjQAigiAxgBITlAAQAxABAiAiQAiAjAAAwIAANxQAAAxgiAiQgiAigxAAg");
	mask_2.setTransform(81.875,55.85);

	// Layer_3
	this.instance_2 = new lib.Image_2();
	this.instance_2.setTransform(0,1.55,0.1661,0.1661);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(7.5,1.6,148.8,110.10000000000001), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("ApyIuQgxAAgigiQgigjAAgwIAAtxQAAgwAigjQAigiAxgBITlAAQAxABAiAiQAiAjAAAwIAANxQAAAxgiAiQgiAigxAAg");
	mask_3.setTransform(75.525,55.85);

	// Layer_3
	this.instance_3 = new lib.Image_1();
	this.instance_3.setTransform(0,0,0.1243,0.1243);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(1.1,0,148.1,111.7), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("ApyIuQgxAAgigiQgigiAAgxIAAtxQAAgxAigiQAigiAxAAITlAAQAwAAAjAiQAiAiAAAxIAANxQAAAxgiAiQgjAigwAAg");
	mask_4.setTransform(74.425,55.825);

	// Layer_3
	this.instance_4 = new lib.Image();
	this.instance_4.setTransform(0,0,0.1163,0.1163);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,148.9,111.7), null);


// stage content:
(lib.start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("main.html", "_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// flash0_ai
	this.video = new lib.an_Video({'id': 'video', 'src':'videos/kultura.mp4', 'autoplay':true, 'controls':true, 'muted':false, 'loop':true, 'poster':'', 'preload':true, 'class':'video'});

	this.video.name = "video";
	this.video.setTransform(990.8,574.7,2.1277,1.5958,0,0,0,200,150.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAiBAIgBgfIhBAAIgCAfIgNAAIgBgsIAJAAQAFgJAEgLQADgIABgKQABgJAAgLIAAgZIBAAAIAABTIAKAAIgBAsgAgJghIgCATQgBAJgCAHIgEAJIgDAJIArAAIAAhFIgfAAg");
	this.shape.setTransform(1601.9,65.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAtQgLgHgGgKQgGgLAAgQQAAgQAGgLQAHgLALgGQAKgHANAAQAOABAKAGQALAGAGALQAFALAAAPQAAANgEAJQgEAKgHAGQgHAHgIACQgJADgIAAQgNAAgKgFgAgPgfQgHAGgDAJQgDAIAAAJQAAAKAEAJQADAIAHAEQAGAGAIgBIAAAAQAJABAGgGQAHgEAEgIQADgJAAgLQAAgIgCgIQgDgIgHgHQgGgFgLAAQgJAAgGAFg");
	this.shape_1.setTransform(1591.325,64.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdAwIAAhgIA7AAIAAAOIgpAAIAABSg");
	this.shape_2.setTransform(1582.525,64.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZBBQgJgEgGgCIAFgOQAEACAIADQAHADAKAAQAKAAAGgEQAHgEADgGQACgFAAgGQAAgKgEgFQgGgGgHgCQgHgDgIAAIgKAAIAAgNIAKAAQAHAAAFgBQAGgDAFgFQAEgFABgHQAAgFgDgFQgCgEgFgDQgFgDgHAAQgIAAgHADIgLAGIgFgNQAGgEAIgDQAKgDALAAQALAAAJAFQAIAEADAHQAFAHAAAIQAAAKgHAIQgFAIgNAFIAAAAQAJACAGADQAHAEAEAHQADAHAAAJQABAKgGAKQgFAIgKAFQgLAGgPAAQgLAAgIgCg");
	this.shape_3.setTransform(1568.55,62.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgpBCIAAgLIAOgNIAbgbQAKgMAFgJQAGgKAAgJQAAgHgCgGQgDgFgFgEQgGgEgJABQgJgBgHAEQgHAEgFAEIgFgNQAGgFAKgFQAKgDAKAAQANAAAJAGQAJAFAEAIQAEAJABAJQgBAMgGAMQgEAKgLALQgJAMgNAMIgKAKIAAAAIA4AAIAAAPg");
	this.shape_4.setTransform(1558.45,62.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWA7QgKgHgFgPQgGgPAAgVQAAgVAGgQQAGgPAKgHQAKgIAMAAQAVAAALARQALARAAAfQAAAhgLASQgMARgVAAQgNAAgJgIgAgNguQgGAGgDAMQgDAMAAAQQAAAZAHAOQAHAOALAAIAAAAQAJABAGgHQAGgGADgNQADgMAAgQQAAgQgDgMQgDgMgGgGQgGgHgJABQgHgBgGAHg");
	this.shape_5.setTransform(1548.275,62.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgpBCIAAgLIAPgNIAagbQALgMAFgJQAEgKAAgJQABgHgCgGQgDgFgFgEQgGgEgJABQgJgBgHAEQgHAEgFAEIgFgNQAHgFAJgFQAKgDALAAQANAAAIAGQAJAFAEAIQAEAJAAAJQAAAMgGAMQgEAKgKALQgLAMgNAMIgKAKIAAAAIA5AAIAAAPg");
	this.shape_6.setTransform(1537.95,62.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKAKIAEgQIADgPIATgDIgGASIgHARIgGANIgMABIAFgPg");
	this.shape_7.setTransform(1526.4,69);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVBDQgIgFgFgJQgFgJgCgMQgDgLAAgMQAAgQAEgOQADgNAIgKQAHgKAKgGQAKgEAOgDIAMgCIALgDIAAAOIgKADIgLACQgLACgIAEQgJAEgFAIQgEAHgDAJQgDAIgBAIIABAAQAFgKAJgGQAJgGAKAAQAMAAAJAGQAKAGAFAKQAFAKAAAPQAAAYgMANQgLAOgWAAQgMAAgJgGgAgMgIQgGAEgDAFIgDAJIgBALIABANQABAHADAFQAEAGAFAEQAFAEAHAAQAJAAAGgFQAGgGACgJQADgHAAgKIAAAAQAAgIgCgIQgCgIgHgFQgFgGgLAAQgGABgGADg");
	this.shape_8.setTransform(1519.3,61.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaBBQgIgEgFgCIAEgOQAEACAIADQAIADAJAAQAKAAAGgEQAHgEADgGQACgFABgGQgBgKgFgFQgEgGgIgCQgHgDgIAAIgKAAIAAgNIAKAAQAGAAAGgBQAGgDAFgFQAFgFAAgHQAAgFgDgFQgCgEgFgDQgFgDgHAAQgIAAgHADIgLAGIgFgNQAFgEAKgDQAIgDALAAQAMAAAIAFQAIAEAFAHQADAHAAAIQABAKgHAIQgGAIgLAFIAAAAQAHACAHADQAGAEAEAHQAFAHAAAJQgBAKgFAKQgFAIgLAFQgKAGgPAAQgLAAgJgCg");
	this.shape_9.setTransform(1508.65,62.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYAGIAAgLIAxAAIAAALg");
	this.shape_10.setTransform(1500.675,63.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgjBDIAAiGIBHAAIAAAQIg2AAIAAB2g");
	this.shape_11.setTransform(1494.05,62.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAYAwIAAgoIAAgOIABgLIAAgPIgIARIgIAOIgOAXIgPAaIgVAAIAAhgIARAAIAAAqIAAANIAAAMIgBAMIABAAIAFgKIAEgJIAHgLIAcgxIAVAAIAABgg");
	this.shape_12.setTransform(1483.4,64.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAbBDIgGgPIgGgQQgDgJgEgHQgFgGgGgEQgHgEgMgBIgFAAIAAA+IgSAAIAAiGIASAAIAAA9IAFAAIAtg9IAVAAIgyA+QAKACAIAEQAHAFAEAHQAFAHADAKIAHATIAIASg");
	this.shape_13.setTransform(1473.075,62.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYAGIAAgLIAxAAIAAALg");
	this.shape_14.setTransform(1463.925,63.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgHBJIAAgNQgLAAgLgEQgKgDgIgHQgHgHgFgLQgFgLgBgQQABgQAFgLQAFgMAIgHQAJgHAKgEQAKgDAKgBIAAgMIAPAAIAAAMQALABALADQAJAEAJAHQAHAHAFAMQAFALABAPQgBAQgFALQgFALgHAHQgJAHgJAEQgLAEgLAAIAAANgAAIAwQALgBAIgFQAJgFAFgKQAGgLABgQQgBgRgGgKQgFgKgJgFQgJgFgKAAgAgZgqQgJAFgGAKQgGAKgBARQABAQAFAKQAGAKAJAFQAJAGAKABIAAhfQgJAAgJAFg");
	this.shape_15.setTransform(1453.6,62.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAbBDIgGgPIgGgQQgDgJgEgHQgFgGgGgEQgHgEgMgBIgFAAIAAA+IgSAAIAAiGIASAAIAAA9IAFAAIAtg9IAVAAIgyA+QAKACAIAEQAHAFAEAHQAFAHADAKIAHATIAIASg");
	this.shape_16.setTransform(1441.575,62.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYAGIAAgLIAxAAIAAALg");
	this.shape_17.setTransform(1432.425,63.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AggBDIAAgPIAHAAIAIgBQAHAAAHgDQAGgDAGgFQAGgHAFgIQAEgJACgLIgBAAQgFAGgIAEQgHADgJABQgMgBgJgEQgIgGgFgIQgFgJAAgLQAAgMAGgLQAFgLAKgFQALgHAMAAQANAAAKAHQAJAGAGANQAFAMAAAQQAAAVgGAPQgHAPgKAKQgHAHgKAEQgJAEgKACIgJABIgIAAgAgNgxQgGAFgDAGQgDAIAAAJQAAAMAHAHQAGAHAMAAQAIAAAGgDQAHgDAEgGIABgDIAAgDQAAgMgDgIQgCgKgGgFQgGgEgJAAQgHAAgGADg");
	this.shape_18.setTransform(1424.275,62.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAEBBIAAhxIgVAMIgEgNIAbgPIAQAAIAACBg");
	this.shape_19.setTransform(1413.1,62.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgWA7QgKgHgFgPQgGgPAAgVQAAgVAGgQQAGgPAKgHQAKgIAMAAQAVAAALARQALARAAAfQAAAhgLASQgMARgVAAQgNAAgJgIgAgNguQgGAGgDAMQgDAMAAAQQAAAZAHAOQAHAOALAAIAAAAQAJABAGgHQAGgGADgNQADgMAAgQQAAgQgDgMQgDgMgGgGQgGgHgJABQgHgBgGAHg");
	this.shape_20.setTransform(1403.725,62.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgpBCIAAgLIAPgNIAagbQAKgMAFgJQAGgKgBgJQABgHgCgGQgDgFgFgEQgGgEgJABQgJgBgHAEQgHAEgFAEIgFgNQAGgFAKgFQAJgDAMAAQAMAAAJAGQAJAFAEAIQAEAJAAAJQAAAMgGAMQgFAKgJALQgLAMgNAMIgJAKIAAAAIA4AAIAAAPg");
	this.shape_21.setTransform(1393.4,62.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgIAJQgDgDAAgGQAAgFAEgDQADgEAEAAQAFAAAEAEQADADAAAFQAAAGgDADQgEADgFAAQgEAAgEgDg");
	this.shape_22.setTransform(1605.475,43.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgeBEIgLgBIAAiDIAOgDIARAAQAMAAAJACQAJACAHAFQAEAEADAGQAEAGAAAIQAAAKgHAIQgFAIgLAEIAAAAQAGACAHADQAGAEAEAHQAEAHAAAKQAAAJgDAGQgDAHgFAFQgHAGgMADQgLADgQAAIgPAAgAgYA2IAHABIAIAAQAJAAAGgDQAIgCAGgGQAEgGAAgJQAAgKgEgFQgFgGgIgDQgHgCgKAAIgOAAgAgSg2IgGABIAAAsIAQAAQANgBAHgGQAIgGAAgKQgBgMgHgFQgIgFgMAAIgKAAg");
	this.shape_23.setTransform(1598.15,37.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgIAJQgDgDAAgGQAAgFAEgDQADgEAEAAQAFAAAEAEQADADAAAFQAAAGgDADQgEADgFAAQgEAAgEgDg");
	this.shape_24.setTransform(1590.475,43.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAcBEIAAg7IgNAAQgGAAgFACQgEABgDAEQgFAFgDAHIgGAPIgEAPIgCAFIgDAFIgSAAIADgGIACgGIAGgRIAGgPQADgIAFgGIAGgEIAGgDQgJgBgGgEQgHgEgEgHQgEgHAAgJQAAgJADgHQAEgHAFgEQAHgGAJgCQAJgDANAAIARABIAPACIAACEgAgEgzQgHACgEAGQgEAFAAAKQAAAIAEAFQAEAGAIADQAGADAKAAIAIAAIAHAAIAAgxIgHgBIgKAAIgDAAQgGAAgGACg");
	this.shape_25.setTransform(1582.225,37.675);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAWAxIgFgJIgEgLQgFgMgIgFQgGgGgMAAIgEAAIAAArIgRAAIAAhhIARAAIAAArIAEAAIAkgrIAVAAIgpAsQALABAIAHQAHAIAGANIAEALIAGANg");
	this.shape_26.setTransform(1569.025,39.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgYAvQgHgFgDgFQgEgHAAgHQAAgSAPgIQAQgJAbAAIAAgCQAAgFgBgEQgCgGgFgDQgEgFgJAAQgIAAgGADQgGACgGACIgEgLQAGgEAJgCQAIgDAJABQAOAAAIAGQAIAGADAIQAEAKAAAJIAAAjIAAANIABALIgQAAIgCgMIAAAAQgEAFgIAFQgIADgJAAQgKAAgGgDgAABABQgJABgFAFQgHAFAAAJQABAJAEADQAFAFAGAAQAJgBAGgFQAGgEADgGIAAgDIAAgDIAAgQQgJAAgKABg");
	this.shape_27.setTransform(1558.45,39.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVAwQgIgCgHgEIAFgMQAFAEAHABQAHACAGAAQALAAAGgEQAGgFAAgHQAAgHgEgDQgEgEgGgCQgFgBgIAAIgIAAIgBgLIAJAAQAKAAAHgEQAGgFABgHQAAgGgGgEQgFgEgHAAQgGAAgGACQgGACgGADIgEgLQAHgEAJgCQAIgCAIAAQAHAAAHACQAIACAFAGQAFAGAAAJQAAAGgDAEQgDAFgFADQgFADgGABIAAAAQAHABAGACQAGADAEAFQADAFABAHQgBALgGAGQgGAGgJADQgKADgJAAQgJAAgIgCg");
	this.shape_28.setTransform(1549.525,39.625);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgXAsQgLgGgGgKQgGgMAAgPQAAgPAGgMQAHgLALgGQAKgHANABQAOAAAKAGQALAGAGALQAFAMAAAOQAAAMgEAKQgEAKgHAHQgHAGgIADQgJACgIAAQgNABgKgHgAgPgeQgHAFgDAJQgDAIAAAJQAAAKAEAJQADAHAHAFQAGAFAIABIAAAAQAJgBAGgFQAHgEAEgIQADgJAAgLQAAgHgCgJQgDgJgHgFQgGgGgLAAQgJAAgGAGg");
	this.shape_29.setTransform(1539.775,39.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAbBEIgGgQIgGgRQgDgIgEgHQgFgGgGgFQgHgDgMgBIgFAAIAAA/IgSAAIAAiGIASAAIAAA8IAFAAIAtg8IAVAAIgyA+QAKABAIAEQAHAEAEAIQAFAHADAKIAHATIAIATg");
	this.shape_30.setTransform(1529.525,37.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAAAwQgEAAgDgEQgEgDAAgGQAAgFAEgEQADgDAEAAQAGAAADADQADAEAAAFQAAAGgDADQgDAEgGAAgAAAgWQgEAAgDgDQgEgEAAgFQAAgGAEgDQADgEAEAAQAGAAADAEQADADAAAGQAAAFgDAEQgDADgGAAg");
	this.shape_31.setTransform(1517.275,39.875);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAYAxIAAgoIgMAAQgGgBgEACQgDABgDACQgEAEgCAEIgEAKIgDAKIgDAEIgCAEIgTAAIAEgFIADgGIADgKIAFgKQADgFAEgEIAFgDIAGgDQgGgBgHgCQgFgCgEgGQgEgFABgHQgBgIAEgFQADgFAGgEQAGgCAJgCQAHgCAKAAIARABIANABIAABfgAgCgjQgFACgFAEQgDADAAAHQAAAFAEAFQAEADAGACIAKACIAJAAIAGAAIAAghIgGgBIgIAAIgMABg");
	this.shape_32.setTransform(1509.5,39.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAYAxIAAgqIAAgMIABgNIABgNIgJAQIgIAOIgOAXIgPAbIgVAAIAAhhIASAAIAAAqIgBAMIAAANIgBAMIABAAIAFgKIAEgJIAHgKIAdgyIAUAAIAABhg");
	this.shape_33.setTransform(1499.6,39.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAXAxIAAgtIgtAAIAAAtIgSAAIAAhhIASAAIAAAnIAtAAIAAgnIASAAIAABhg");
	this.shape_34.setTransform(1488.6,39.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgUAsQgKgGgGgLQgGgLAAgOQAAgOAGgLQAFgNALgGQAKgHANAAQAMAAAIAEQAHAEAFAIQAEAHACAHQACAIAAAHIAAAEIgBAEIhDAAQABALAEAHQAFAIAHADQAHADAIABQAKAAAGgCQAGgBAFgCIADAMIgMAFQgJABgLAAQgOAAgLgGgAAagJQAAgFgCgHQgCgGgFgFQgGgEgJgBQgIABgGAEQgGAFgDAGQgDAGAAAGIAyAAIAAAAg");
	this.shape_35.setTransform(1478.175,39.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAwAxIgFgKIgDgNQgFgLgHgFQgHgEgJgBIgEAAIAAAsIgPAAIAAgsIgDAAQgLABgGAEQgHAFgEALIgFANIgEAKIgSAAIAHgOIAEgNQAFgMAGgGQAIgGALgBIgngtIAUAAIAgArIAEAAIAAgrIAPAAIAAArIAEAAIAggrIAVAAIgnAtQALABAHAGQAHAFAEANIAFANIAGAOg");
	this.shape_36.setTransform(1466.45,39.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgXAsQgLgGgGgKQgGgMAAgPQAAgPAGgMQAHgLALgGQAKgHANABQAOAAAKAGQALAGAGALQAFAMAAAOQAAAMgEAKQgEAKgHAHQgHAGgIADQgJACgIAAQgNABgKgHgAgPgeQgHAFgDAJQgDAIAAAJQAAAKAEAJQADAHAHAFQAGAFAIABIAAAAQAJgBAGgFQAHgEAEgIQADgJAAgLQAAgHgCgJQgDgJgHgFQgGgGgLAAQgJAAgGAGg");
	this.shape_37.setTransform(1454.275,39.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgrAjIAFgBIAFgDQAGgFADgKQABgKAAgQIAAgmIBCAAIAABgIgRAAIAAhSIggAAIAAAZQAAATgDANQgEAOgIAGIgJAFQgEABgHAAg");
	this.shape_38.setTransform(1443.05,39.675);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAZAxIAAgqIAAgMIAAgNIABgNIgJAQIgIAOIgOAXIgPAbIgVAAIAAhhIARAAIAAAqIAAAMIgBANIAAAMIAAAAIAGgKIAEgJIAHgKIAcgyIAVAAIAABhg");
	this.shape_39.setTransform(1433.1,39.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgtBFIAAhnIAAgRIAAgPIAPAAIABARIABAAQAFgJAJgFQAIgFALAAQAMAAAJAGQAJAGAGALQAFALAAAPQAAARgGALQgGALgKAGQgKAGgMAAQgJAAgHgEQgIgEgFgHIAAAAIAAA0gAgQgwQgHAFgDALIgBADIAAAEIAAAQIAAAEIABAEQACAIAHAFQAHAGAKAAQAIAAAHgFQAGgEAEgJQADgHAAgLQAAgKgDgIQgDgIgHgFQgGgFgJAAQgIAAgIAGg");
	this.shape_40.setTransform(1422.175,41.475);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAXAxIAAhSIgtAAIAABSIgRAAIAAhhIBPAAIAABhg");
	this.shape_41.setTransform(1410.75,39.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgtBFIAAhnIAAgRIAAgPIAPAAIABARIABAAQAFgJAJgFQAIgFALAAQAMAAAJAGQAJAGAGALQAFALAAAPQAAARgGALQgGALgKAGQgKAGgMAAQgJAAgHgEQgIgEgFgHIAAAAIAAA0gAgQgwQgHAFgDALIgBADIAAAEIAAAQIAAAEIABAEQACAIAHAFQAHAGAKAAQAIAAAHgFQAGgEAEgJQADgHAAgLQAAgKgDgIQgDgIgHgFQgGgFgJAAQgIAAgIAGg");
	this.shape_42.setTransform(1395.725,41.475);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgXAsQgLgGgGgKQgGgMAAgPQAAgPAGgMQAHgLALgGQAKgHANABQAOAAAKAGQALAGAGALQAFAMAAAOQAAAMgEAKQgEAKgHAHQgHAGgIADQgJACgIAAQgNABgKgHgAgPgeQgHAFgDAJQgDAIAAAJQAAAKAEAJQADAHAHAFQAGAFAIABIAAAAQAJgBAGgFQAHgEAEgIQADgJAAgLQAAgHgCgJQgDgJgHgFQgGgGgLAAQgJAAgGAGg");
	this.shape_43.setTransform(1384.175,39.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgIAxIAAhSIgeAAIAAgPIBNAAIAAAPIgeAAIAABSg");
	this.shape_44.setTransform(1374.6,39.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgLAxIgQAAIgLgBIAAheIAOgCIAQgBIANABQAIABAGACQAHADAEAFQAFAFAAAIQAAAJgGAFQgGAGgIACQAKACAHAEQAHAGAAALQAAAJgFAGQgFAGgIADQgIADgJABIgKABIgFgBgAgVAlIAGAAIAIAAQAGABAGgCQAGgBAFgEQAFgDAAgHQAAgHgEgEQgEgEgHgBIgPgBIgMAAgAgVgkIAAAdIANAAQAHAAAFgBQAGgCADgDQAEgDAAgGQAAgHgGgEQgGgDgNAAIgHAAIgGAAg");
	this.shape_45.setTransform(1365.825,39.6083);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAmBEIgPgrIguAAIgPArIgSAAIAuiGIAUAAIAvCGgAATAMIgNgmIgDgNIgDgMIAAAAIgDAMIgDAMIgOAnIAnAAg");
	this.shape_46.setTransform(1354.4,37.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AhKBLIAAiVICVAAIAAAXIh7AAIAAAlIBqAAIAAAWIhqAAIAAAtIB7gBIAAAXg");
	this.shape_47.setTransform(1438.425,985.825);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgLBLIAAh+IhIAAIAAAAICngXIAAAXIhGAAIAAB+gAhThKICnAAIinAXgABUhKg");
	this.shape_48.setTransform(1420.45,985.825);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AhTBLIAAiVIBnAAQATAAAOAGQAOAHAJALQAHALABAPIAAABQAAAYgPANQgOAMgcAAIhTAAIAAAxgAg4gzIAAA3IBKAAIAUgBQAIgCAFgFQAGgGAAgNQAAgNgGgGQgFgHgIgBQgHgCgNAAIgJAAIgTAAIguABg");
	this.shape_49.setTransform(1402.1,985.825);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("ABFBLIgTgjIhjAAIgTAjIgcAAIBRiVIAfAAIBRCVgAgkAQIBIAAIgkhDg");
	this.shape_50.setTransform(1382.825,985.825);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAjBLIhShFIAABFIgbAAIAAiVIAbAAIAAA6IBOg6IAoAAIhgBFIBkBQg");
	this.shape_51.setTransform(1365.45,985.825);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AA8BeIAAh2Ih3B2IgaAAIAAiWIAaAAIAAB3IB3h3IAbAAIAACWgAgkg+QgOgKAAgVIAUAAQAAALAHAHQAJAHAOAAQANAAAIgHQAJgHAAgLIAUAAQAAAUgPAKQgNALgWAAQgWAAgOgKg");
	this.shape_52.setTransform(1339.8,983.975);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgsBFQgVgLgMgSQgNgSAAgWQAAgVANgSQAMgSAUgKQAVgLAYAAQAaAAAVALQAUAKAMASQAMASAAAVQAAAXgMARQgMASgUALQgVAKgaAAQgXAAgVgKgAgggwQgOAHgJAMQgIANAAAQQAAASAJANQAJAMAOAGQAPAHAQAAQARAAAOgHQAPgGAJgNQAJgMAAgSQAAgQgJgNQgJgMgPgHQgPgHgQAAQgRAAgPAHg");
	this.shape_53.setTransform(1320.225,985.875);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAiBLIhShFIAABFIgaAAIAAiVIAaAAIAAA6IBPg6IAoAAIhfBFIBjBQg");
	this.shape_54.setTransform(1302.75,985.825);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgrBFQgVgLgNgRQgMgSAAgXQAAgWAMgRQANgSAUgLQAVgKAZAAQAfAAAXAPQAXAPAKAcIgbAAQgEgKgLgJQgKgIgMgEQgMgEgLAAQgPAAgPAHQgPAGgKANQgJAMAAARQAAASAJANQAJAMAPAHQAOAGARAAQAKAAAMgEQALgEAKgHQAKgJAGgLIAdAAQgMAcgXAPQgWAPgfAAQgYAAgVgKg");
	this.shape_55.setTransform(1284.325,985.85);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AA2BLIAAhFIhrAAIAABFIgaAAIAAiVIAaAAIAAA5IBrAAIAAg5IAaAAIAACVg");
	this.shape_56.setTransform(1265.225,985.825);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AA8BLIAAh2Ih3B2IgaAAIAAiVIAaAAIAAB2IB3h2IAbAAIAACVg");
	this.shape_57.setTransform(1246.2,985.825);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAiBLIhRhFIAABFIgbAAIAAiVIAbAAIAAA6IBNg6IApAAIhgBFIBkBQg");
	this.shape_58.setTransform(1228.65,985.825);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("Ah1BLIAAiVIAbAAIAAB8IBOAAIAAh8IAZAAIAAB8IBOAAIAAh8IAaAAIAACVg");
	this.shape_59.setTransform(1207.05,985.825);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgxBMIAAgYQAXABAAgJIgBgEIg+hzIAdAAIA6BrIA/hrIAdAAIhMB/QgGAMgPAFQgQAHgUAAIgGAAg");
	this.shape_60.setTransform(1185.025,985.85);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AA3BLIAAh+IhtAAIAAB+IgbAAIAAiVICjAAIAACVg");
	this.shape_61.setTransform(1166.475,985.825);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgsBFQgVgLgMgSQgNgSAAgWQAAgVANgSQAMgSAUgKQAVgLAYAAQAaAAAVALQAUAKAMASQAMASAAAVQAAAXgMARQgMASgUALQgVAKgaAAQgXAAgVgKgAgggwQgOAHgJAMQgIANAAAQQAAASAJANQAJAMAOAGQAPAHAQAAQARAAAOgHQAPgGAJgNQAJgMAAgSQAAgQgJgNQgJgMgPgHQgPgHgQAAQgRAAgPAHg");
	this.shape_62.setTransform(1437.075,953.775);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AA3BLIAAh+IhtAAIAAB+IgbAAIAAiVICjAAIAACVg");
	this.shape_63.setTransform(1417.825,953.725);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AhKBLIAAiVIAbAAIAAAuIA5AAIABAAQATAAAOAGQAPAGAIAMQAIALAAARIAAAAQAAAPgIAMQgIALgPAHQgOAGgTAAgAgvA2IA9AAIAGAAQAHAAAHgEQAHgDADgHQAEgIAAgJQAAgQgIgHQgIgHgMAAIhDAAg");
	this.shape_64.setTransform(1392.975,953.725);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgLBLIAAh+IhHAAIAAAAIClgXIAAAXIhFAAIAAB+gAhShKIClAAIilAXgABThKg");
	this.shape_65.setTransform(1375,953.725);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AA8BLIAAh2Ih3B2IgbAAIAAiVIAbAAIAAB2IB3h2IAaAAIAACVg");
	this.shape_66.setTransform(1355.95,953.725);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgMBLIAAh+IhHAAIAAAAICmgXIAAAXIhGAAIAAB+gAhThKICmAAIimAXgABThKg");
	this.shape_67.setTransform(1336.8,953.725);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AhKBLIAAiVICVAAIAAAXIh7AAIAAAlIBqAAIAAAWIhqAAIAAAtIB7gBIAAAXg");
	this.shape_68.setTransform(1319.175,953.725);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgrBFQgVgKgNgTQgMgRAAgXQAAgVAMgTQANgSAUgKQAVgKAZAAQAfAAAXAPQAXAPAKAcIgbAAQgEgKgLgJQgKgIgMgEQgMgEgLAAQgPAAgPAGQgPAHgKANQgJANAAAQQAAASAJAMQAJANAPAGQAOAHARAAQAKAAAMgEQALgEAKgIQAKgIAGgLIAdAAQgMAdgXAOQgWAPgfAAQgYAAgVgKg");
	this.shape_69.setTransform(1300.675,953.75);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgsBFQgVgLgMgSQgNgSAAgWQAAgVANgSQAMgSAUgKQAVgLAYAAQAaAAAVALQAUAKAMASQAMASAAAVQAAAXgMARQgMASgUALQgVAKgaAAQgXAAgVgKgAgggwQgOAHgJAMQgIANAAAQQAAASAJANQAJAMAOAGQAPAHAQAAQARAAAOgHQAPgGAJgNQAJgMAAgSQAAgQgJgNQgJgMgPgHQgPgHgQAAQgRAAgPAHg");
	this.shape_70.setTransform(1281.125,953.775);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AA3BLIAAh+IhtAAIAAB+IgbAAIAAiVICjAAIAACVg");
	this.shape_71.setTransform(1261.875,953.725);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgsBFQgVgLgMgSQgNgSAAgWQAAgVANgSQAMgSAUgKQAVgLAYAAQAaAAAVALQAUAKAMASQAMASAAAVQAAAXgMARQgMASgUALQgVAKgaAAQgXAAgVgKgAgggwQgOAHgJAMQgIANAAAQQAAASAJANQAJAMAOAGQAPAHAQAAQARAAAOgHQAPgGAJgNQAJgMAAgSQAAgQgJgNQgJgMgPgHQgPgHgQAAQgRAAgPAHg");
	this.shape_72.setTransform(1437.075,921.675);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AA2BLIAAhFIhrAAIAABFIgaAAIAAiVIAaAAIAAA5IBrAAIAAg5IAaAAIAACVg");
	this.shape_73.setTransform(1417.975,921.625);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("ABgBLIhThFIAABFIgZAAIAAhFIhTBFIgoAAIBkhQIhhhFIApAAIBPA6IAAg6IAZAAIAAA6IBPg6IApAAIhhBFIBkBQg");
	this.shape_74.setTransform(1394.95,921.625);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgsBFQgVgLgMgSQgNgSAAgWQAAgVANgSQAMgSAUgKQAVgLAYAAQAaAAAVALQAUAKAMASQAMASAAAVQAAAXgMARQgMASgUALQgVAKgaAAQgXAAgVgKgAgggwQgOAHgJAMQgIANAAAQQAAASAJANQAJAMAOAGQAPAHAQAAQARAAAOgHQAPgGAJgNQAJgMAAgSQAAgQgJgNQgJgMgPgHQgPgHgQAAQgRAAgPAHg");
	this.shape_75.setTransform(1371.325,921.675);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("ABEBLIAAhqIg0BqIgcAAIg4hsIAABsIgaAAIAAiVIAiAAIA9B5IA8h5IAiAAIAACVg");
	this.shape_76.setTransform(1350.85,921.625);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AhKBLIAAiVICVAAIAAAXIh7AAIAAAlIBqAAIAAAWIhqAAIAAAtIB7gBIAAAXg");
	this.shape_77.setTransform(1324.625,921.625);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("ABDBLIAAiVIAbAAIAACVgAhdBLIAAiVIAbAAIAAAuIA6AAIABAAQASAAAOAGQAPAGAIAMQAIALAAARIAAAAQAAAPgIAMQgIALgPAHQgOAGgSAAgAhCA2IA+AAIAFAAQAHAAAHgEQAHgDADgHQAEgIAAgJQAAgQgIgHQgIgHgMAAIhDAAg");
	this.shape_78.setTransform(1305.275,921.625);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AhSBLIAAiVIBlAAQATAAAPAGQAOAHAIALQAJALgBAPIAAABQAAAYgNANQgPAMgcAAIhSAAIAAAxgAg4gzIABA3IBJAAIAUgBQAIgCAGgFQAFgGAAgNQAAgNgFgGQgGgHgIgBQgIgCgMAAIgJAAIgTAAIguABg");
	this.shape_79.setTransform(1285.6,921.625);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgsBFQgVgLgMgSQgNgSAAgWQAAgVANgSQAMgSAUgKQAVgLAYAAQAaAAAVALQAUAKAMASQAMASAAAVQAAAXgMARQgMASgUALQgVAKgaAAQgXAAgVgKgAgggwQgOAHgJAMQgIANAAAQQAAASAJANQAJAMAOAGQAPAHAQAAQARAAAOgHQAPgGAJgNQAJgMAAgSQAAgQgJgNQgJgMgPgHQgPgHgQAAQgRAAgPAHg");
	this.shape_80.setTransform(1266.275,921.675);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgMBLIAAh+IhGAAIAAAAIClgXIAAAXIhGAAIAAB+gAhShKIClAAIilAXg");
	this.shape_81.setTransform(1247.25,921.625);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgsBFQgVgLgMgSQgNgSAAgWQAAgVANgSQAMgSAUgKQAVgLAYAAQAaAAAVALQAUAKAMASQAMASAAAVQAAAXgMARQgMASgUALQgVAKgaAAQgXAAgVgKgAgggwQgOAHgJAMQgIANAAAQQAAASAJANQAJAMAOAGQAPAHAQAAQARAAAOgHQAPgGAJgNQAJgMAAgSQAAgQgJgNQgJgMgPgHQgPgHgQAAQgRAAgPAHg");
	this.shape_82.setTransform(1228.225,921.675);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAiBLIhRhFIAABFIgbAAIAAiVIAbAAIAAA6IBOg6IAoAAIhgBFIBkBQg");
	this.shape_83.setTransform(1210.75,921.625);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgOAXIAOgSIgOAAIAAgbIAdAAIAAAbIgPASg");
	this.shape_84.setTransform(1444.475,896.525);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AA0BLIg0g/IgyA/IgiAAIA9hKIg9hLIAiAAIAyA/IA0g/IAhAAIg9BLIA9BKg");
	this.shape_85.setTransform(1433.075,889.525);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AA6BLIAAgwIhBAAIgpAwIgjAAIAsgyQgUgFgMgMQgLgMAAgUIAAAAQAAgPAJgMQAHgLAPgGQAPgGASAAIBmAAIAACVgAA8ADIAAgRgAglgyQgHACgGAGQgFAGAAANQAAANAFAGQAGAFAHABQAJACAMgBIABAAIBJAAIAAg1IhAgBIgKAAQgMAAgJABg");
	this.shape_86.setTransform(1414.5,889.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AA8BLIAAh2Ih3B2IgaAAIAAiVIAaAAIAAB2IB3h2IAaAAIAACVg");
	this.shape_87.setTransform(1395.8,889.525);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgMBLIAAh+IhHAAIAAAAICngXIAAAXIhHAAIAAB+gAhThKICnAAIinAXg");
	this.shape_88.setTransform(1376.65,889.525);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("ABDBLIAAiVIAbAAIAACVgAhdBLIAAiVIAbAAIAAAuIA6AAIABAAQASAAAOAGQAPAGAIAMQAIALAAARIAAAAQAAAPgIAMQgIALgPAHQgOAGgSAAgAhCA2IA+AAIAFAAQAHAAAHgEQAHgDADgHQAEgIAAgJQAAgQgIgHQgIgHgMAAIhDAAg");
	this.shape_89.setTransform(1356.775,889.525);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AhOBLIAAiVICTAAIAAAXIh5AAIAAAdIAuAAQAkAAASAFQATAGAGAKQAGAJAAAQIAAAAQAAAMgFALQgEALgSAIQgRAJgjAAgAg0A0IA2ABIAFAAQAYgBALgHQALgHAAgOQAAgKgFgFQgEgGgKgCQgKgBgRAAIgBAAIg6AAg");
	this.shape_90.setTransform(1337.725,889.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgsBFQgVgLgMgSQgNgSAAgWQAAgVANgSQAMgSAUgKQAVgLAYAAQAaAAAVALQAUAKAMASQAMASAAAVQAAAXgMARQgMASgUALQgVAKgaAAQgXAAgVgKgAgggwQgOAHgJAMQgIANAAAQQAAASAJANQAJAMAOAGQAPAHAQAAQARAAAOgHQAPgGAJgNQAJgMAAgSQAAgQgJgNQgJgMgPgHQgPgHgQAAQgRAAgPAHg");
	this.shape_91.setTransform(1318.825,889.575);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgrBFQgVgLgNgRQgMgTAAgWQAAgWAMgRQANgSAUgLQAVgKAZAAQAfAAAXAPQAXAQAKAbIgbAAQgEgKgLgJQgKgIgMgEQgMgEgLAAQgPAAgPAHQgPAGgKANQgJAMAAARQAAASAJANQAJAMAPAHQAOAGARAAQAKAAAMgEQALgEAKgHQAKgJAGgLIAdAAQgMAcgXAPQgWAPgfAAQgYAAgVgKg");
	this.shape_92.setTransform(1299.275,889.55);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgsBFQgVgLgMgSQgNgSAAgWQAAgVANgSQAMgSAUgKQAVgLAYAAQAaAAAVALQAUAKAMASQAMASAAAVQAAAXgMARQgMASgUALQgVAKgaAAQgXAAgVgKgAgggwQgOAHgJAMQgIANAAAQQAAASAJANQAJAMAOAGQAPAHAQAAQARAAAOgHQAPgGAJgNQAJgMAAgSQAAgQgJgNQgJgMgPgHQgPgHgQAAQgRAAgPAHg");
	this.shape_93.setTransform(1272.625,889.575);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AhKBLIAAiVIAbAAIAAAuIA5AAIABAAQATAAAOAGQAPAGAIAMQAIALAAARIAAAAQAAAPgIAMQgIALgPAHQgOAGgTAAgAgvA2IA9AAIAGAAQAHAAAHgEQAHgDADgHQAEgIAAgJQAAgQgIgHQgIgHgMAAIhDAAg");
	this.shape_94.setTransform(1247.425,889.525);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgLBLIAAh+IhHAAIAAAAIClgXIAAAXIhFAAIAAB+gAhShKIClAAIilAXgABThKg");
	this.shape_95.setTransform(1229.45,889.525);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("ABFBLIgTgjIhjAAIgTAjIgcAAIBRiVIAfAAIBRCVgAgkAQIBIAAIgkhDg");
	this.shape_96.setTransform(1210.525,889.525);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AA2BLIAAhFIhrAAIAABFIgaAAIAAiVIAaAAIAAA5IBrAAIAAg5IAaAAIAACVg");
	this.shape_97.setTransform(1191.525,889.525);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgxBHQgVgHgLgOQgMgPAAgTIAbAAQAAAVAUAKQAUAKAbAAQAbAAATgHQATgJAAgQQAAgHgDgDQgDgDgMgCQgLgCgZAAIgkAAIAAgVIAlAAIAKAAQAMgBAJgBQAIgBAFgEQAGgEAAgIQAAgMgSgGQgSgFgagBQgbgBgUAHQgUAHAAAOIgbAAQAAgdAfgKQAdgLAiABQAXAAASACQATADAOAJQAOALAAATQAAAWgQAJQAUAHAAAVQAAAdgaANQgYANgqgBQgcABgWgJg");
	this.shape_98.setTransform(1172.2,889.55);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgxBMIAAgYQAXABAAgJIgBgEIg+hyIAdAAIA6BqIA/hqIAdAAIhMB+QgGAMgPAFQgQAHgUAAIgGAAg");
	this.shape_99.setTransform(1152.925,889.55);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(1512.3,936.7,2.5377,2.5377,0,0,0,22.8,22.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFE4C6").s().p("ABUCIIAAhYIhOAAIhKBYIhZAAIBPhcQgkgHgUgYQgVgVAAgjIAAgBQAAgbAPgUQAOgVAagLQAbgLAiAAIDFAAIAAEOgABegHIAAgYgAg1hOQgLACgHAIQgIAIAAASQAAARAIAHQAHAIALACQALABAUAAIABAAIBpAAIAAhIIhbAAIgPAAQgUgBgLACg");
	this.shape_100.setTransform(1077.825,242.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFE4C6").s().p("ABWCIIAAi3IirC3IhMAAIAAkPIBMAAIAAC4ICri4IBMAAIAAEPg");
	this.shape_101.setTransform(1043.575,242.425);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFE4C6").s().p("ABQCIIAAhvIigAAIAABvIhMAAIAAkPIBMAAIAABjICgAAIAAhjIBNAAIAAEPg");
	this.shape_102.setTransform(1008.175,242.425);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFE4C6").s().p("AiNCIIAAkPIEbAAIAAA6IjPAAIAAAuICwAAIAAA4IiwAAIAAA2IDPgBIAAA6g");
	this.shape_103.setTransform(975.375,242.425);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFE4C6").s().p("ABqCaIAAgkIjTAAIAAAkIhIAAIAAhfIAZAAQAfg3AOgwQAOgwAAg8IDqAAIAADTIAlAAIAABfgAgsgRQgNAkgVAoICUAAIAAiaIhfgBQgGApgNAmg");
	this.shape_104.setTransform(940.925,244.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFE4C6").s().p("ACgCIIh7h2IAAB2IhLAAIAAh0Ih5B0IhiAAICeiSIiZh9IBjAAIBzBhIAAhhIBLAAIAABjIB0hjIBkAAIiaB9ICgCSg");
	this.shape_105.setTransform(896.65,242.425);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFE4C6").s().p("AiNCIIAAkPIEbAAIAAA6IjPAAIAAAuICwAAIAAA4IiwAAIAAA2IDPgBIAAA6g");
	this.shape_106.setTransform(855.425,242.425);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFE4C6").s().p("AicCIIAAkPIDGAAQAiAAAZAMQAbALAPAVQAOAUAAAbIAAABQAAArgdAYQgcAYg0AAIiAAAIAABYgAhQgHIBtAAQAVAAALgCQALgCAHgHQAIgIAAgQQAAgSgIgIQgHgHgLgCQgMgCgUAAIgNAAIgcAAIhEAAg");
	this.shape_107.setTransform(822.75,242.425);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFE4C6").s().p("ABJCIIAAhgQgcAeg1AAQgmAAgfgNQgfgNgSgbQgTgaAAgpIAAhVIBJAAIAABUQAAAdATASQASARAmAAQAkAAARgOQARgQAAghIAAhVIBJAAIAAEPg");
	this.shape_108.setTransform(789.025,242.425);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFE4C6").s().p("AhgCIIAAg6QAYAAAIgEQAIgDAAgGIAAgHIhvjBIBRAAIBVCbIBZibIBQAAIiIDlQgNAYglAKQggAIgjAAIgLAAg");
	this.shape_109.setTransform(756.7,242.4602);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFE4C6").s().p("AiNCIIAAkPIEbAAIAAA6IjPAAIAAAuICwAAIAAA4IiwAAIAAA2IDPgBIAAA6g");
	this.shape_110.setTransform(1340.875,184.625);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFE4C6").s().p("AB3CIIAAkPIBMAAIAAEPgAjCCIIAAkPIBMAAIAABUIBqAAQAiAAAaALQAaALAPAVQAOAVAAAdIAAACQAAAbgOAVQgPAVgaALQgaAMghAAgAh2BTIBEAAIAaABIALAAQAuAAAAgqQAAgYgMgJQgNgJgVAAIgBAAIhoAAg");
	this.shape_111.setTransform(1303.625,184.625);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFE4C6").s().p("AAjCIIgPAAIi8gBIAAkOIDdAAQAqAAAZASQAZARAAAfIAAACQAAAYgJAPQgKAPgUAHQAfAGAPAPQAQAPABAcIAAACQAAAdgRARQgQARgdAGQgcAGgsABgAhfBRIBwAAIAPAAQAXABAKgCQALgCAHgHQAGgGAAgQQAAgPgGgHQgHgHgLgBQgKgBgXgBIh/AAgAhfgbIBXAAIAcAAIAdgBQAJgBAGgHQAIgFgBgPQAAgOgGgGQgGgGgKgBQgLgCgSAAIgBAAIhyAAg");
	this.shape_112.setTransform(1264.55,184.65);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFE4C6").s().p("AhVB8QgogTgXggQgYghAAgoQAAgnAYghQAXggAngTQAogSAvAAQAxAAAnASQAoATAWAgQAWAhAAAnQAAApgWAgQgWAggoATQgnASgxAAQgvAAgngSgAgshIQgWAKgNATQgMASAAAZQAAAZAMATQAOATAVAKQAWAJAXAAQAXAAAWgJQAVgKANgTQANgSAAgaQAAgYgNgTQgNgTgVgKQgWgKgXAAQgYAAgVAKg");
	this.shape_113.setTransform(1227.75,184.725);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFE4C6").s().p("AhUB8QgpgTgXggQgXghAAgoQAAgoAXggQAXghApgSQAogTAwAAQAqAAAkAOQAiAOAYAZQAXAaAJAiIhPAAQgGgRgPgMQgPgMgSgGQgSgGgRAAQgXAAgWAKQgXAKgOASQgOATAAAZQAAAaANATQAOASAWAKQAXAJAYAAQAbAAAZgNQAYgOAMgZIBQAAQgKAjgXAZQgYAZgiAOQgjAOgqAAQgwAAgogTg");
	this.shape_114.setTransform(1191.325,184.675);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFE4C6").s().p("AhUB8QgpgTgXggQgXghAAgoQAAgoAXggQAXghApgSQAogTAwAAQAqAAAkAOQAiAOAYAZQAXAaAJAiIhPAAQgGgRgPgMQgPgMgSgGQgSgGgRAAQgXAAgWAKQgXAKgOASQgOATAAAZQAAAaANATQAOASAWAKQAXAJAYAAQAbAAAZgNQAYgOAMgZIBQAAQgKAjgXAZQgYAZgiAOQgjAOgqAAQgwAAgogTg");
	this.shape_115.setTransform(1154.925,184.675);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFE4C6").s().p("ABtCIIgcg0IihAAIgcA0IhPAAICUkPIBQAAICTEPgAgyAcIBmAAIg0hdg");
	this.shape_116.setTransform(1118.4,184.625);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFE4C6").s().p("ABuCIIAAiRIhHCRIhIAAIhMiUIAACUIhMAAIAAkPIBZAAIBiDFIBhjFIBXAAIAAEPg");
	this.shape_117.setTransform(1079.725,184.625);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFE4C6").s().p("Ag/AXIAAgtIB/AAIAAAtg");
	this.shape_118.setTransform(1051.75,187.625);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFE4C6").s().p("AhVB8QgogTgXggQgYghAAgoQAAgnAYghQAWggApgTQAngSAvAAQAxAAAnASQAnATAXAgQAWAhAAAnQAAApgWAgQgXAggnATQgnASgxAAQgvAAgngSgAgshIQgWAKgMATQgNASAAAZQAAAZANATQANATAVAKQAVAJAYAAQAXAAAWgJQAWgKAMgTQANgSABgaQgBgYgNgTQgMgTgWgKQgWgKgXAAQgYAAgVAKg");
	this.shape_119.setTransform(1025.9,184.725);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFE4C6").s().p("ABQCIIAAhvIigAAIAABvIhMAAIAAkPIBMAAIAABjICgAAIAAhjIBNAAIAAEPg");
	this.shape_120.setTransform(990.325,184.625);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFE4C6").s().p("AicCIIAAkPIDGAAQAhAAAaAMQAbALAPAVQAOAUAAAbIAAABQAAArgdAYQgcAYg0AAIiAAAIAABYgAhQgHIBtAAQAVAAALgCQAKgCAIgHQAIgIAAgQQAAgSgIgIQgIgHgKgCQgMgCgUAAIgNAAIgcAAIhEAAg");
	this.shape_121.setTransform(956.2,184.625);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFE4C6").s().p("AhgCIIAAg6QAYAAAIgEQAJgDAAgGIgBgHIhwjBIBSAAIBVCbIBZibIBRAAIiJDlQgNAYglAKQggAIgjAAIgLAAg");
	this.shape_122.setTransform(922.2,184.6602);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFE4C6").s().p("AglCIIAAjPIh3AAIAAgBIE5g/IAABAIh2AAIAADPgAiciHIE5AAIk5A/gACdiHg");
	this.shape_123.setTransform(888.75,184.625);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFE4C6").s().p("AiUCIIAAkPIBMAAIAABUIBoAAIABAAQAjAAAaALQAaALAPAVQAOAVAAAdIAAACQAAAbgOAVQgPAVgaALQgaAMgjAAgAhIBTIBEAAIAZABIAKAAQAwAAAAgqQAAgYgNgJQgMgJgXAAIAAAAIhnAAg");
	this.shape_124.setTransform(856,184.625);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFE4C6").s().p("ABTCIIAAjWIhmAAQgHAygJAkQgJAlgRAmQgLAXgTALQgTALgKACQgLADgbADIAAhBQAcAAAKgcQAZhQAHhiID3AAIAAEPg");
	this.shape_125.setTransform(821.675,184.625);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFE4C6").s().p("AhgCIIAAg6QAYAAAIgEQAIgDAAgGIAAgHIhvjBIBRAAIBVCbIBZibIBQAAIiIDlQgNAYglAKQggAIgjAAIgLAAg");
	this.shape_126.setTransform(788.2,184.6602);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFE4C6").s().p("AAyCIIh6h3IAAB3IhMAAIAAkPIBMAAIAABjIB0hjIBkAAIiZB9ICeCSg");
	this.shape_127.setTransform(756.775,184.625);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(662.4,174.85,2.2905,2.2905,0,0,0,30.1,37.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AiUCIIAAkPIBMAAIAABUIBpAAIAAAAQAjAAAaALQAaALAOAVQAPAVAAAdIAAACQAAAbgPAVQgOAVgaALQgaAMgiAAgAhIBTIBEAAIAZABIAKAAQAwAAAAgqQAAgYgNgJQgMgJgXAAIAAAAIhnAAg");
	this.shape_128.setTransform(1390.55,124.675);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgkCIIAAjPIh4AAIAAgBIE5g/IAABAIh2AAIAADPgAiciHIE5AAIk5A/g");
	this.shape_129.setTransform(1357.05,124.675);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AhUB8QgpgTgXggQgXghAAgoQAAgoAXggQAXghApgSQAogTAwAAQAqAAAkAOQAiAOAYAZQAXAaAJAiIhPAAQgGgRgPgMQgPgMgSgGQgSgGgRAAQgXAAgWAKQgXAKgOASQgOATAAAZQAAAaANATQAOASAWAKQAXAJAYAAQAbAAAZgNQAYgOAMgZIBQAAQgKAjgXAZQgYAZgiAOQgjAOgqAAQgwAAgogTg");
	this.shape_130.setTransform(1321.925,124.725);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("ABuCIIgcg0IiiAAIgcA0IhOAAICTkPIBPAAICUEPgAgyAcIBlAAIgyhdg");
	this.shape_131.setTransform(1285.4,124.675);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("ABTCIIAAjWIhmAAQgHAygJAkQgJAlgRAmQgLAXgTALQgTALgKACQgLADgbADIAAhBQAcAAAKgcQAZhQAHhiID3AAIAAEPg");
	this.shape_132.setTransform(1249.525,124.675);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AidCIIAAkPIEoAAIAAA2IjgAAIAAApIBdAAQA7AAAgAJQAhAKANATQAOASAAAcIAAABQgBAngeAaQgeAahOAAgAhVBPIBGAAIAVABIAJAAQAjAAAPgJQAQgIAAgVQAAgOgHgHQgHgHgOgCQgOgDgYAAIgBAAIhjAAg");
	this.shape_133.setTransform(1216.15,124.725);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AhVB8QgogTgXggQgYghAAgoQAAgnAYghQAXggAogTQAogSAuAAQAxAAAnASQAnATAXAgQAWAhAAAnQAAApgWAgQgXAggnATQgnASgxAAQguAAgogSgAgshIQgWAKgMATQgNASAAAZQAAAZANATQANATAWAKQAUAJAYAAQAYAAAVgJQAVgKANgTQANgSABgaQgBgYgNgTQgNgTgVgKQgWgKgXAAQgXAAgWAKg");
	this.shape_134.setTransform(1180.35,124.775);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("ABUCIIAAhYIhOAAIhKBYIhZAAIBPhcQgkgIgUgWQgVgWAAgjIAAgCQAAgaAPgVQAOgUAagLQAbgMAiAAIDFAAIAAEPgABegHIAAgYgAg1hOQgLACgHAIQgIAIAAASQAAAQAIAIQAHAHALACQALACAUAAIABAAIBpAAIAAhHIhbgBIgPAAQgUAAgLABg");
	this.shape_135.setTransform(1132.725,124.65);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("ABtCIIgcg0IihAAIgcA0IhPAAICUkPIBQAAICTEPgAgyAcIBmAAIg0hdg");
	this.shape_136.setTransform(1098.15,124.675);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AAyCIIh6h3IAAB3IhMAAIAAkPIBMAAIAABjIB0hjIBkAAIiZB9ICeCSg");
	this.shape_137.setTransform(1065.025,124.675);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AhUB8QgpgTgXggQgXghAAgoQAAgoAXggQAXghApgSQAogTAwAAQAqAAAkAOQAiAOAYAZQAXAaAJAiIhPAAQgGgRgPgMQgPgMgSgGQgSgGgRAAQgXAAgWAKQgXAKgOASQgOATAAAZQAAAaANATQAOASAWAKQAXAJAYAAQAbAAAZgNQAYgOAMgZIBQAAQgKAjgXAZQgYAZgiAOQgjAOgqAAQgwAAgogTg");
	this.shape_138.setTransform(1030.175,124.725);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("ABqCaIAAgjIjTgBIAAAkIhIAAIAAhfIAZAAQAfg3AOgwQAOgwAAg9IDqAAIAADUIAlAAIAABfgAgsgSQgNAkgVApICUAAIAAiaIhfAAQgGApgNAkg");
	this.shape_139.setTransform(993.525,126.45);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AhVB8QgogTgYggQgXghAAgoQAAgnAXghQAXggAogTQAogSAvAAQAxAAAoASQAnATAWAgQAWAhAAAnQAAApgWAgQgWAggnATQgoASgxAAQgvAAgngSgAgshIQgWAKgNATQgMASAAAZQAAAZAMATQAOATAVAKQAWAJAXAAQAXAAAWgJQAVgKANgTQANgSAAgaQAAgYgNgTQgNgTgVgKQgWgKgXAAQgYAAgVAKg");
	this.shape_140.setTransform(956.75,124.775);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AicCIIAAkPIDGAAQAhAAAbAMQAaALAOAVQAPAUAAAbIAAABQAAArgcAYQgdAYg0AAIiAAAIAABYgAhQgHIBuAAQATAAALgCQAMgCAHgHQAHgIABgQQgBgSgHgIQgHgHgMgCQgLgCgTAAIgOAAIgcAAIhEAAg");
	this.shape_141.setTransform(921.85,124.675);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AhVB8QgogTgXggQgYghAAgoQAAgnAYghQAWggApgTQAogSAuAAQAxAAAnASQAoATAWAgQAWAhAAAnQAAApgWAgQgWAggoATQgnASgxAAQgvAAgngSgAgshIQgWAKgNATQgMASAAAZQAAAZAMATQAOATAVAKQAWAJAXAAQAXAAAWgJQAVgKANgTQAOgSAAgaQAAgYgOgTQgNgTgVgKQgWgKgXAAQgYAAgVAKg");
	this.shape_142.setTransform(886.2,124.775);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("Ah7CIIAAkPID3AAIAAA5IirAAIAADWg");
	this.shape_143.setTransform(854.575,124.675);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("ABTCIIAAjWIhmAAQgHAygJAkQgJAlgRAmQgLAXgTALQgTALgKACQgLADgbADIAAhBQAcAAAKgcQAZhQAHhiID3AAIAAEPg");
	this.shape_144.setTransform(822.725,124.675);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AiNCIIAAkPIEbAAIAAA6IjPAAIAAAuICwAAIAAA4IiwAAIAAA2IDPgBIAAA6g");
	this.shape_145.setTransform(790.375,124.675);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AieCIIAAkPIEpAAIAAA2IjgAAIAAApIBeAAQA5AAAiAJQAgAKANATQANASAAAcIAAABQABAngfAaQgfAahNAAgAhVBPIBHAAIAUABIAIAAQAkAAAPgJQAQgIAAgVQAAgOgHgHQgHgHgOgCQgOgDgZAAIAAAAIhjAAg");
	this.shape_146.setTransform(758,124.725);

	this.button_1 = new lib.start_1();
	this.button_1.name = "button_1";
	this.button_1.setTransform(755.55,943.8);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgIAcIAbgcIgagbIAUAAIAaAbIgbAcgAgmAcIAcgcIgbgbIAVAAIAZAbIgaAcg");
	this.shape_147.setTransform(320.35,705.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgxAyIAAhjIBjAAIAAAQIhRAAIAAAYIBFAAIAAAOIhFAAIAAAeIBRgBIAAAQg");
	this.shape_148.setTransform(310.65,704.275);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AAkAyIAAhTIgvAAQgCATgEAOQgEAQgGAOQgEAJgHAFQgGAFgIABIAAgSQAHAAAFgMQALgeACgnIBQAAIAABjg");
	this.shape_149.setTransform(298.725,704.275);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgdAtQgOgGgIgMQgIgMAAgPQAAgOAIgMQAIgLAOgHQAOgHAPAAQARAAAOAHQAOAHAHALQAIAMAAAOQAAAPgIAMQgHALgOAHQgOAHgRAAQgPAAgOgHgAgVggQgJAFgGAIQgFAJAAAKQAAAMAGAIQAFAIAKAFQAKAEAKAAQALAAAKgEQAKgFAFgIQAGgJAAgLQAAgKgGgIQgGgJgJgFQgKgEgLAAQgLAAgKAEg");
	this.shape_150.setTransform(286.325,704.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AAkAyIAAhTIhHAAIAABTIgSAAIAAhjIBrAAIAABjg");
	this.shape_151.setTransform(273.55,704.275);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgxAyIAAhjIBiAAIABAQIhRAAIAAAYIBGAAIAAAOIhGAAIAAAeIBQgBIAAAQg");
	this.shape_152.setTransform(256.95,704.275);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgdAtQgOgGgIgMQgIgMAAgPQAAgOAIgMQAIgLAOgHQAOgHAPAAQARAAAOAHQAOAHAHALQAIAMAAAOQAAAPgIAMQgHALgOAHQgOAHgRAAQgPAAgOgHgAgVggQgJAFgGAIQgFAJAAAKQAAAMAGAIQAFAIAKAFQAKAEAKAAQALAAAKgEQAKgFAFgIQAGgJAAgLQAAgKgGgIQgGgJgJgFQgKgEgLAAQgLAAgKAEg");
	this.shape_153.setTransform(244.625,704.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AAXAyIg2guIAAAuIgRAAIAAhjIARAAIAAAnIA0gnIAbAAIg/AuIBBA1g");
	this.shape_154.setTransform(233,704.275);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgcAuQgOgHgIgMQgIgMAAgPQAAgOAIgMQAIgMAOgHQANgGAQAAQAVAAAPAKQAPAKAHASIgSABQgDgIgHgFQgGgGgIgCQgJgDgHAAQgJAAgKAEQgKAFgHAIQgGAJAAAKQAAAMAGAIQAGAJAKAEQAKAEAKAAQAHAAAIgCQAHgDAHgFQAHgGAEgHIASAAQgHATgPAKQgPAJgVAAQgPAAgOgGg");
	this.shape_155.setTransform(220.725,704.275);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AAJAyIgHAAIg7AAIAAhjIBIAAQAQAAAJAHQAKAGAAAMIAAAAQAAAJgEAFQgEAGgHADQALABAGAFQAGAGAAAKIAAABQAAAMgGAGQgGAGgKACQgJACgSAAgAgnAjIAwAAIAGAAIAOAAQAFgBACgDQADgEAAgHQAAgHgDgDQgCgEgFAAIgOgBIg2AAgAgngIIAMAAIALAAIAOAAIANAAIAMgBQAEAAADgDQACgDAAgHQAAgGgCgDQgDgCgEgBIgMgBIgyAAg");
	this.shape_156.setTransform(207.925,704.275);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgdAtQgOgGgIgMQgIgMAAgPQAAgOAIgMQAIgLAOgHQAOgHAPAAQARAAAOAHQAOAHAHALQAIAMAAAOQAAAPgIAMQgHALgOAHQgOAHgRAAQgPAAgOgHgAgVggQgJAFgGAIQgFAJAAAKQAAAMAGAIQAFAIAKAFQAKAEAKAAQALAAAKgEQAKgFAFgIQAGgJAAgLQAAgKgGgIQgGgJgJgFQgKgEgLAAQgLAAgKAEg");
	this.shape_157.setTransform(194.825,704.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("Ag2AyIAAhjIBDAAQAMAAAKAEQAKAEAFAIQAFAHAAAKIAAABQAAAPgJAJQgJAIgTAAIg3AAIAAAhgAglADIAxAAIANgBQAFgBAEgDQAEgEAAgJQAAgJgEgEQgEgEgFgBIgNgBIgGAAIgMAAIgfAAg");
	this.shape_158.setTransform(182.225,704.275);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgdAtQgOgGgIgMQgIgMAAgPQAAgOAIgMQAIgLAOgHQAOgHAPAAQARAAAOAHQAOAHAHALQAIAMAAAOQAAAPgIAMQgHALgOAHQgOAHgRAAQgPAAgOgHgAgVggQgJAFgGAIQgFAJAAAKQAAAMAGAIQAFAIAKAFQAKAEAKAAQALAAAKgEQAKgFAFgIQAGgJAAgLQAAgKgGgIQgGgJgJgFQgKgEgLAAQgLAAgKAEg");
	this.shape_159.setTransform(169.375,704.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AAiAyIgigqIghAqIgWAAIAogyIgogxIAWAAIAhAqIAigqIAWAAIgoAxIAoAyg");
	this.shape_160.setTransform(156.95,704.275);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgdAtQgOgGgIgMQgIgMAAgPQAAgOAIgMQAIgLAOgHQAOgHAPAAQARAAAOAHQAOAHAHALQAIAMAAAOQAAAPgIAMQgHALgOAHQgOAHgRAAQgPAAgOgHgAgVggQgJAFgGAIQgFAJAAAKQAAAMAGAIQAFAIAKAFQAKAEAKAAQALAAAKgEQAKgFAFgIQAGgJAAgLQAAgKgGgIQgGgJgJgFQgKgEgLAAQgLAAgKAEg");
	this.shape_161.setTransform(144.475,704.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("Ag2AyIAAhjIBDAAQAMAAAKAEQAKAEAFAIQAFAHAAAKIAAABQAAAPgJAJQgJAIgTAAIg3AAIAAAhgAglADIAxAAIANgBQAFgBAEgDQAEgEAAgJQAAgJgEgEQgEgEgFgBIgNgBIgGAAIgMAAIgfAAg");
	this.shape_162.setTransform(131.875,704.275);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AAlAyIAAhTIhJAAIAABTIgSAAIAAhjIBtAAIAABjg");
	this.shape_163.setTransform(119.25,704.275);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AASAcIgagcIAZgbIAVAAIgbAbIAcAcgAgLAcIgbgcIAagbIAUAAIgaAbIAbAcg");
	this.shape_164.setTransform(108.875,705.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AAXAyIg2guIAAAuIgSAAIAAhjIASAAIAAAnIA0gnIAbAAIg/AuIBAA1g");
	this.shape_165.setTransform(307,683.075);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AAoAyIAAhOIhPBOIgRAAIAAhjIARAAIAABOIBPhOIARAAIAABjg");
	this.shape_166.setTransform(294.775,683.075);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AAkAyIAAguIhHAAIAAAuIgRAAIAAhjIARAAIAAAmIBHAAIAAgmIARAAIAABjg");
	this.shape_167.setTransform(282.175,683.075);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AAsA4IAAgNIhXAAIAAANIgRAAIAAgdIAHAAQANgSAFgUQAGgUABgYIBLAAIAABSIAOAAIAAAdgAgjAbIBBAAIAAhDIgrgBQgDAogTAcg");
	this.shape_168.setTransform(269.5,683.725);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgxAyIAAhjIBjAAIAAAQIhRAAIAAAYIBGAAIAAAOIhGAAIAAAeIBRgBIAAAQg");
	this.shape_169.setTransform(257.4,683.075);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AAJAyIgHAAIg7AAIAAhjIBIAAQAQAAAJAHQAKAGAAAMIAAAAQAAAJgEAFQgEAGgHADQALABAGAFQAGAGAAAKIAAABQAAAMgGAGQgGAGgKACQgJACgSAAgAgnAjIAwAAIAGAAIAOAAQAFgBACgDQADgEAAgHQAAgHgDgDQgCgEgFAAIgOgBIg2AAgAgngIIAMAAIALAAIAOAAIANAAIAMgBQAEAAADgDQACgDAAgHQAAgGgCgDQgDgCgEgBIgMgBIgyAAg");
	this.shape_170.setTransform(245.275,683.075);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgdAuQgOgIgIgMQgIgLAAgPQAAgOAIgLQAIgMAOgIQAOgGAPAAQARAAAOAGQAOAIAHAMQAIALAAAOQAAAPgIAMQgHALgOAIQgOAGgRAAQgPAAgOgGgAgVgfQgJAEgGAIQgFAIAAALQAAAMAGAIQAFAJAKADQAKAFAKAAQALAAAKgFQAKgDAFgJQAGgIAAgMQAAgKgGgJQgGgIgJgEQgKgFgLAAQgLAAgKAFg");
	this.shape_171.setTransform(232.175,683.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AAlAyIAAhTIhIAAIAABTIgSAAIAAhjIBsAAIAABjg");
	this.shape_172.setTransform(219.35,683.075);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AAuAyIgNgXIhBAAIgMAXIgUAAIA2hjIAVAAIA2BjgAgXAKIAvAAIgYgrg");
	this.shape_173.setTransform(206.65,683.075);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AggAvQgOgFgIgJQgHgKAAgMIARAAQAAAOAOAGQANAHASAAQASAAAMgFQANgFAAgLQAAgFgCgCQgCgCgIgBIgYgBIgYAAIAAgPIAYAAIAHAAIAOAAQAFgBAEgDQAEgDAAgFQAAgIgMgEQgMgEgRAAQgSAAgNAEQgOAFAAAJIgRAAQAAgTAUgHQATgHAXAAQAOAAANACQAMACAKAGQAJAHAAANQAAAOgLAGQAOAFAAAOQAAASgRAJQgRAJgbAAQgTAAgOgGg");
	this.shape_174.setTransform(193.525,683.075);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgWAHIAAgNIAuAAIAAANg");
	this.shape_175.setTransform(183.95,684.15);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AAoA+IAAhOIhPBOIgRAAIAAhiIARAAIAABOIBPhOIARAAIAABigAgYgpQgJgGAAgOIANAAQAAAHAFAFQAGAEAJAAQAJAAAFgEQAGgFAAgHIANAAQAAANgJAHQgKAHgOAAQgOAAgKgHg");
	this.shape_176.setTransform(174.675,681.825);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgxAyIAAhjIBjAAIAAAQIhSAAIAAAYIBGAAIAAAOIhGAAIAAAeIBSgBIAAAQg");
	this.shape_177.setTransform(162.5,683.075);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AggAvQgOgFgIgJQgHgKAAgMIARAAQAAAOAOAGQANAHASAAQASAAAMgFQANgFAAgLQAAgFgCgCQgCgCgIgBIgYgBIgYAAIAAgPIAYAAIAHAAIAOAAQAFgBAEgDQAEgDAAgFQAAgIgMgEQgMgEgRAAQgSAAgNAEQgOAFAAAJIgRAAQAAgTAUgHQATgHAXAAQAOAAANACQAMACAKAGQAJAHAAANQAAAOgLAGQAOAFAAAOQAAASgRAJQgRAJgbAAQgTAAgOgGg");
	this.shape_178.setTransform(150.025,683.075);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AggAyIAAgQQAPABABgGIgCgDIgohLIASAAIAnBHIAqhHIASAAIgxBTQgFAIgJAEQgKAEgOAAIgEAAg");
	this.shape_179.setTransform(137.25,683.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AAtAyIAAhGIgjBGIgSAAIglhHIAABHIgRAAIAAhjIAXAAIAoBQIAohQIAWAAIAABjg");
	this.shape_180.setTransform(124.35,683.075);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AAoA+IAAhOIhPBOIgRAAIAAhiIARAAIAABOIBPhOIARAAIAABigAgYgpQgJgGAAgOIANAAQAAAHAFAFQAGAEAJAAQAJAAAFgEQAGgFAAgHIANAAQAAANgJAHQgKAHgOAAQgOAAgKgHg");
	this.shape_181.setTransform(322.925,660.675);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AAoAyIAAhOIhPBOIgRAAIAAhjIARAAIAABOIBPhOIARAAIAABjg");
	this.shape_182.setTransform(309.925,661.925);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AAXAyIg2guIAAAuIgRAAIAAhjIARAAIAAAnIA0gnIAbAAIg/AuIBBA1g");
	this.shape_183.setTransform(298.25,661.925);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgcAuQgOgHgIgMQgIgMAAgPQAAgOAIgMQAIgMAOgHQANgGAQAAQAVAAAPAKQAPAKAHASIgSABQgDgIgHgFQgGgGgIgCQgJgDgHAAQgJAAgKAEQgKAFgHAIQgGAJAAAKQAAAMAGAIQAGAJAKAEQAKAEAKAAQAHAAAIgCQAHgDAHgFQAHgGAEgHIASAAQgHATgPAKQgPAJgVAAQgPAAgOgGg");
	this.shape_184.setTransform(285.975,661.925);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgxAyIAAhjIBjAAIAAAQIhRAAIAAAYIBGAAIAAAOIhGAAIAAAeIBRgBIAAAQg");
	this.shape_185.setTransform(273.85,661.925);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AAfAyIAAglQgKANgVAAQgXAAgMgLQgMgMAAgUIAAggIARAAIAAAfQAAAMAHAHQAHAIAQAAQAQAAAHgGQAIgFAAgPIAAggIARAAIAABjg");
	this.shape_186.setTransform(262.4,661.925);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AAoAyIAAhOIhPBOIgRAAIAAhjIARAAIAABOIBPhOIARAAIAABjg");
	this.shape_187.setTransform(250.475,661.925);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("Ag2AyIAAhjIBDAAQAMAAAKAEQAKAEAFAIQAFAHAAAKIAAABQAAAPgJAJQgJAIgTAAIg3AAIAAAhgAglADIAxAAIANgBQAFgBAEgDQAEgEAAgJQAAgJgEgEQgEgEgFgBIgNgBIgGAAIgMAAIgfAAg");
	this.shape_188.setTransform(237.825,661.925);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgdAuQgOgIgIgMQgIgLAAgPQAAgOAIgLQAIgMAOgIQAOgGAPAAQARAAAOAGQAOAIAHAMQAIALAAAOQAAAPgIAMQgHALgOAIQgOAGgRAAQgPAAgOgGgAgVgfQgJAEgGAIQgFAIAAALQAAAMAGAIQAFAJAKADQAKAFAKAAQALAAAKgFQAKgDAFgJQAGgIAAgMQAAgKgGgJQgGgIgJgEQgKgFgLAAQgLAAgKAFg");
	this.shape_189.setTransform(224.975,661.95);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgHAyIAAhTIgvAAIAAgBIBtgPIAAAQIguAAIAABTgAg2gxIBtAAIhtAPgAA3gxg");
	this.shape_190.setTransform(212.425,661.925);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgcAuQgOgHgIgMQgIgMAAgPQAAgOAIgMQAIgMAOgHQANgGAQAAQAVAAAPAKQAPAKAHASIgSABQgDgIgHgFQgGgGgIgCQgJgDgHAAQgJAAgKAEQgKAFgHAIQgGAJAAAKQAAAMAGAIQAGAJAKAEQAKAEAKAAQAHAAAIgCQAHgDAHgFQAHgGAEgHIASAAQgHATgPAKQgPAJgVAAQgPAAgOgGg");
	this.shape_191.setTransform(199.725,661.925);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AAoAyIAAhOIhPBOIgRAAIAAhjIARAAIAABOIBPhOIARAAIAABjg");
	this.shape_192.setTransform(186.775,661.925);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgWAHIAAgNIAuAAIAAANg");
	this.shape_193.setTransform(177.45,663);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgdAuQgOgIgIgMQgIgLAAgPQAAgOAIgLQAIgMAOgIQAOgGAPAAQARAAAOAGQAOAIAHAMQAIALAAAOQAAAPgIAMQgHALgOAIQgOAGgRAAQgPAAgOgGgAgVgfQgJAEgGAIQgFAIAAALQAAAMAGAIQAFAJAKADQAKAFAKAAQALAAAKgFQAKgDAFgJQAGgIAAgMQAAgKgGgJQgGgIgJgEQgKgFgLAAQgLAAgKAFg");
	this.shape_194.setTransform(168.125,661.95);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AAkAyIAAguIhHAAIAAAuIgRAAIAAhjIARAAIAAAmIBHAAIAAgmIARAAIAABjg");
	this.shape_195.setTransform(155.575,661.925);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AAkAyIAAguIhHAAIAAAuIgRAAIAAhjIARAAIAAAmIBHAAIAAgmIARAAIAABjg");
	this.shape_196.setTransform(143.325,661.925);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgxAyIAAhjIBjAAIAAAQIhRAAIAAAYIBFAAIAAAOIhFAAIAAAeIBRgBIAAAQg");
	this.shape_197.setTransform(131.55,661.925);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgdAuQgOgIgIgMQgIgLAAgPQAAgOAIgLQAIgMAOgIQAOgGAPAAQARAAAOAGQAOAIAHAMQAIALAAAOQAAAPgIAMQgHALgOAIQgOAGgRAAQgPAAgOgGgAgVgfQgJAEgGAIQgFAIAAALQAAAMAGAIQAFAJAKADQAKAFAKAAQALAAAKgFQAKgDAFgJQAGgIAAgMQAAgKgGgJQgGgIgJgEQgKgFgLAAQgLAAgKAFg");
	this.shape_198.setTransform(119.225,661.95);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AAJAyIgHAAIg7AAIAAhjIBIAAQAQAAAJAHQAKAGAAAMIAAAAQAAAJgEAFQgEAGgHADQALABAGAFQAGAGAAAKIAAABQAAAMgGAGQgGAGgKACQgJACgSAAgAgnAjIAwAAIAGAAIAOAAQAFgBACgDQADgEAAgHQAAgHgDgDQgCgEgFAAIgOgBIg2AAgAgngIIAMAAIALAAIAOAAIANAAIAMgBQAEAAADgDQACgDAAgHQAAgGgCgDQgDgCgEgBIgMgBIgyAAg");
	this.shape_199.setTransform(106.425,661.925);

	this.instance_2 = new lib.ClipGroup_2();
	this.instance_2.setTransform(216.7,520.55,2.2428,2.2428,0,0,0,82.8,57.4);

	this.instance_3 = new lib.ClipGroup_3();
	this.instance_3.setTransform(215.4,856.25,2.2157,2.2157,0,0,0,75.2,56);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgIAbIAbgbIgagbIAUAAIAZAbIgaAbgAglAbIAbgbIgagbIAUAAIAZAbIgaAbg");
	this.shape_200.setTransform(356.8,1019.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgwAxIAAhhIBhAAIAAAPIhQAAIAAAYIBFAAIAAAOIhFAAIAAAeIBQgBIAAAPg");
	this.shape_201.setTransform(347.225,1018.175);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AAnAxIAAhNIhNBNIgRAAIAAhhIARAAIAABNIBNhNIARAAIAABhg");
	this.shape_202.setTransform(335.1,1018.175);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AAjAxIAAgtIhFAAIAAAtIgRAAIAAhhIARAAIAAAlIBFAAIAAglIARAAIAABhg");
	this.shape_203.setTransform(322.65,1018.175);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgwAxIAAhhIBhAAIAAAPIhQAAIAAAYIBFAAIAAAOIhFAAIAAAeIBQgBIAAAPg");
	this.shape_204.setTransform(311.025,1018.175);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AAjAxIAAhSIguAAIgGAhQgDAQgHAOQgEAIgGAFQgHAFgHABIAAgRQAHAAAEgMQALgeADgmIBOAAIAABhg");
	this.shape_205.setTransform(299.25,1018.175);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AADAxIg7AAIAAhhIBHAAQAQAAAJAGQAJAHAAALIAAAAQAAAJgDAGQgEAFgIADQAMABAFAFQAGAGAAAKIAAABQAAAMgGAGQgFAGgKABQgKACgRAAgAgnAjIAwAAIAGAAIAOgBQAEAAADgEQACgDABgHQgBgHgCgDQgDgEgEAAIgOgBIg2AAgAgngGIAAAAIAAgBgAgngIIAMAAIAMAAIANAAIANAAIALAAQAEgBADgDQADgDAAgGQAAgGgCgDQgEgDgEgBIgLAAIAAAAIgyAAg");
	this.shape_206.setTransform(287.2,1018.175);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AAtAxIgMgXIhAAAIgNAXIgTAAIA2hhIATAAIA1BhgAgXAKIAvAAIgYgrg");
	this.shape_207.setTransform(274.3,1018.175);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("Ag2AxIAAhhIBDAAQAMAAAJAEQAKAEAGAHQAEAIABAKIAAAAQgBAPgIAJQgJAIgUAAIg1AAIAAAggAgkADIAwAAIAAAAIANgBQAFgBADgDQAFgEAAgIQAAgJgFgEQgDgFgFgBIgNAAIgGAAIgMAAIgeAAg");
	this.shape_208.setTransform(261.9,1018.175);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AAkAxIAAhSIhHAAIAABSIgSAAIAAhhIBrAAIAABhg");
	this.shape_209.setTransform(249.425,1018.175);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AAtAxIgMgXIhAAAIgNAXIgTAAIA2hhIATAAIA1BhgAgXAKIAvAAIgYgrg");
	this.shape_210.setTransform(236.85,1018.175);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AAjAxIAAgtIhFAAIAAAtIgSAAIAAhhIASAAIAAAlIBFAAIAAglIASAAIAABhg");
	this.shape_211.setTransform(224.5,1018.175);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AgwAxIAAhhIBhAAIAAAPIhQAAIAAAYIBFAAIAAAOIhFAAIAAAeIBQgBIAAAPg");
	this.shape_212.setTransform(208.225,1018.175);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgcAtQgOgHgJgLQgHgNgBgOQABgOAHgLQAJgMANgHQAOgGAPgBQARABANAGQAOAHAIAMQAHAMAAANQAAAPgHAMQgIALgOAHQgNAHgQAAQgQAAgNgHgAgVgfQgJAEgFAJQgGAIAAAKQAAAMAGAIQAGAIAKAEQAJAFAKAAQALAAAJgFQAKgEAGgIQAGgJAAgLQAAgKgGgIQgGgJgKgEQgKgFgKABQgLgBgKAFg");
	this.shape_213.setTransform(196.05,1018.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AAWAxIg1gtIAAAtIgRAAIAAhhIARAAIAAAmIAzgmIAbAAIg+AtIBAA0g");
	this.shape_214.setTransform(184.6,1018.175);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgcAtQgOgHgIgLQgHgMgBgPQABgOAHgLQAIgMAOgHQAOgHAQAAQATAAAQAKQAPAKAGATIgSAAQgDgIgGgFQgHgFgIgDQgIgDgGAAQgKAAgKAFQgKAEgGAIQgGAJAAAKQgBAMAHAIQAFAIAKAFQAKAEALAAQAGAAAHgDQAIgCAHgFQAGgGAEgHIASAAQgGATgPAJQgQAKgTAAQgQAAgOgHg");
	this.shape_215.setTransform(172.45,1018.175);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AArA4IAAgNIhVAAIAAANIgRAAIAAgdIAHAAQAMgTAGgSQAGgUAAgZIBKAAIAABSIAOAAIAAAdgAgiAbIBAAAIAAhDIgqAAQgEAngSAcg");
	this.shape_216.setTransform(159.625,1018.825);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgcAtQgOgHgJgLQgHgNgBgOQABgOAHgLQAJgMANgHQAOgGAPgBQARABANAGQAOAHAIAMQAHAMABANQgBAPgHAMQgIALgOAHQgNAHgRAAQgPAAgNgHgAgUgfQgKAEgGAJQgFAIAAAKQAAAMAGAIQAGAIAKAEQAJAFAKAAQALAAAJgFQAKgEAGgIQAGgJAAgLQAAgKgGgIQgGgJgKgEQgJgFgLABQgLgBgJAFg");
	this.shape_217.setTransform(146.75,1018.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("Ag1AxIAAhhIBBAAQANAAAKAEQAJAEAFAHQAGAIAAAKIAAAAQgBAPgIAJQgKAIgSAAIg2AAIAAAggAgkADIAvAAIABAAIANgBQAFgBADgDQAFgEAAgIQAAgJgFgEQgDgFgFgBIgNAAIgGAAIgMAAIgeAAg");
	this.shape_218.setTransform(134.3,1018.175);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AgdAtQgOgHgHgLQgJgNABgOQgBgOAJgLQAHgMAOgHQAOgGAPgBQARABAOAGQANAHAHAMQAJAMgBANQABAPgJAMQgHALgNAHQgOAHgQAAQgQAAgOgHgAgVgfQgJAEgFAJQgGAIAAAKQAAAMAGAIQAGAIAJAEQAKAFAKAAQALAAAKgFQAJgEAGgIQAGgJAAgLQAAgKgGgIQgGgJgJgEQgLgFgKABQgLgBgKAFg");
	this.shape_219.setTransform(121.6,1018.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AgnAxIAAhhIBPAAIAAAPIg+AAIAABSg");
	this.shape_220.setTransform(110.7,1018.175);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AAjAxIAAhSIgtAAIgHAhQgEAQgFAOQgEAIgHAFQgGAFgJABIAAgRQAIAAAEgMQALgeADgmIBPAAIAABhg");
	this.shape_221.setTransform(99.85,1018.175);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AgwAxIAAhhIBhAAIAAAPIhQAAIAAAYIBFAAIAAAOIhFAAIAAAeIBQgBIAAAPg");
	this.shape_222.setTransform(88.475,1018.175);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgzAxIAAhhIBgAAIAAAPIhOAAIAAATIAeAAQAXAAAMAEQAMADAEAHQAEAFAAAKIAAABQAAAIgDAHQgDAHgMAGQgLAFgXAAgAghAiIAiAAIADAAQAQAAAHgEQAIgFAAgJQAAgHgDgDQgDgEgHgBIgSgBIglAAg");
	this.shape_223.setTransform(77.175,1018.225);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgJAJIAAgRIATAAIAAARg");
	this.shape_224.setTransform(376.725,1001.225);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AAtAxIgMgXIhAAAIgNAXIgTAAIA2hhIATAAIA1BhgAgXAKIAvAAIgYgrg");
	this.shape_225.setTransform(368.8,997.225);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AADAxIg7AAIAAhhIBHAAQAQAAAJAGQAJAHAAALIAAAAQAAAJgEAGQgDAFgIADQAMABAGAFQAFAGAAAKIAAABQAAAMgFAGQgHAGgJABQgKACgRAAgAgnAjIAvAAIAHAAIANgBQAFAAADgEQADgDAAgHQAAgHgDgDQgDgEgFAAIgNgBIg2AAgAgngGIABAAIgBgBgAgngIIAMAAIALAAIAOAAIANAAIAMAAQAEgBACgDQADgDAAgGQAAgGgCgDQgEgDgDgBIgMAAIgBAAIgxAAg");
	this.shape_226.setTransform(356.2,997.225);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgHAxIAAhSIgvAAIAAAAIBsgPIAAAPIgtAAIAABSgAg2gwIBsAAIhsAPg");
	this.shape_227.setTransform(343.7,997.225);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AAnAxIAAhNIhNBNIgRAAIAAhhIARAAIAABNIBNhNIARAAIAABhg");
	this.shape_228.setTransform(331.25,997.225);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgzAxIAAhhIBgAAIAAAPIhOAAIAAATIAeAAQAXAAAMAEQAMADAEAHQAEAFAAAKIAAABQAAAIgDAHQgDAHgMAGQgLAFgXAAgAghAiIAiAAIADAAQAQAAAHgEQAIgFAAgJQAAgHgDgDQgDgEgHgBIgSgBIglAAg");
	this.shape_229.setTransform(319.225,997.275);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AAmAxIAAggIgqAAIgbAgIgXAAIAdghQgOgDgHgIQgIgIAAgMIAAAAQAAgKAGgHQAFgIAKgEQAJgEAMAAIBDAAIAABhgAAnADIAAgMgAgXggQgGABgDAEQgEAEAAAJQAAAIAEAEQADADAGABIANABIAwAAIAAgjIgqgBIgGAAIgNABg");
	this.shape_230.setTransform(302.4,997.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AAtAxIgMgXIhAAAIgNAXIgTAAIA2hhIAUAAIA0BhgAgXAKIAvAAIgYgrg");
	this.shape_231.setTransform(290.15,997.225);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AAWAxIg1gtIAAAtIgRAAIAAhhIARAAIAAAmIAzgmIAbAAIg+AtIBAA0g");
	this.shape_232.setTransform(278.75,997.225);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AgcAtQgOgHgIgLQgIgMAAgPQAAgOAIgLQAIgMAOgHQAOgHAQAAQATAAAQAKQAPAKAGATIgSAAQgDgIgGgFQgHgFgHgDQgJgDgGAAQgKAAgKAFQgKAEgGAIQgGAJgBAKQAAAMAHAIQAFAIAKAFQAKAEALAAQAGAAAHgDQAIgCAGgFQAHgGAEgHIASAAQgGATgPAJQgQAKgTAAQgQAAgOgHg");
	this.shape_233.setTransform(266.6,997.225);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("Ag2AxIAAhhIBDAAQAMAAAJAEQAKAEAGAHQAEAIAAAKIAAAAQAAAPgJAJQgIAIgUAAIg1AAIAAAggAgkADIAwAAIAAAAIANgBQAFgBADgDQAEgEABgIQgBgJgEgEQgDgFgFgBIgNAAIgGAAIgMAAIgeAAg");
	this.shape_234.setTransform(254.15,997.225);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AggAyIAAgPQAQgBAAgFIgBgDIgphKIATAAIAmBFIAphFIATAAIgyBSQgDAIgKADQgKAEgOABIgEAAg");
	this.shape_235.setTransform(241.975,997.25);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AAXAxIg1gtIAAAtIgSAAIAAhhIASAAIAAAmIAygmIAbAAIg/AtIBBA0g");
	this.shape_236.setTransform(231,997.225);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AASAcIgagcIAZgbIAVAAIgbAbIAcAcgAgLAcIgbgcIAagbIAUAAIgaAbIAbAcg");
	this.shape_237.setTransform(221.275,998.55);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AAtAxIgMgXIhBAAIgMAXIgSAAIA1hhIAUAAIA1BhgAgXAKIAvAAIgYgrg");
	this.shape_238.setTransform(206.3,997.225);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AAtAxIAAhFIgjBFIgRAAIglhGIAABGIgRAAIAAhhIAWAAIAoBOIAnhOIAWAAIAABhg");
	this.shape_239.setTransform(193.1,997.225);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AAtAxIgMgXIhAAAIgNAXIgTAAIA2hhIATAAIA1BhgAgXAKIAvAAIgYgrg");
	this.shape_240.setTransform(179.7,997.225);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("Ag2AxIAAhhIBDAAQAMAAAJAEQAKAEAGAHQAEAIAAAKIAAAAQAAAPgJAJQgIAIgUAAIg1AAIAAAggAgkADIAwAAIAAAAIANgBQAFgBADgDQAEgEABgIQgBgJgEgEQgDgFgFgBIgNAAIgGAAIgMAAIgeAAg");
	this.shape_241.setTransform(167.3,997.225);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AgdAtQgOgHgHgMQgIgLAAgPQAAgOAIgLQAHgMAOgHQAOgHAPAAQARAAAOAHQANAHAHALQAJAMAAAOQAAAPgJALQgHAMgNAHQgOAGgRABQgPgBgOgGgAgUgfQgKAEgGAJQgFAIAAAKQAAAMAGAIQAGAIAKAFQAJADAKAAQALAAAKgDQAJgFAGgIQAGgJAAgLQAAgKgGgIQgGgJgJgEQgKgEgLgBQgLABgJAEg");
	this.shape_242.setTransform(154.6,997.25);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AAnAxIAAhNIhNBNIgRAAIAAhhIARAAIAABNIBNhNIARAAIAABhg");
	this.shape_243.setTransform(141.8,997.225);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AArA4IAAgNIhVAAIAAANIgRAAIAAgdIAHAAQAMgTAGgSQAGgUAAgZIBKAAIAABSIAOAAIAAAdgAgiAbIBAAAIAAhDIgqAAQgEAngSAcg");
	this.shape_244.setTransform(128.925,997.875);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AgWAGIAAgMIAtAAIAAAMg");
	this.shape_245.setTransform(119.725,998.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AAnA+IAAhOIhNBOIgRAAIAAhiIARAAIAABNIBNhNIARAAIAABigAgYgoQgJgHAAgOIAOAAQgBAIAFAFQAGAEAJAAQAIAAAGgEQAFgFAAgIIANAAQAAAOgJAHQgJAGgOAAQgOAAgKgGg");
	this.shape_246.setTransform(110.55,996);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AgwAxIAAhhIBhAAIAAAPIhQAAIAAAYIBFAAIAAAOIhFAAIAAAeIBQgBIAAAPg");
	this.shape_247.setTransform(98.525,997.225);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AgfAvQgOgFgIgJQgHgKAAgMIARAAQAAAOANAGQANAGASAAQASABAMgFQAMgGAAgKQAAgFgCgCQgCgCgHgBIgYgBIgXAAIAAgOIAXAAIAHAAIAOgBQAFgBAEgDQADgCAAgGQAAgHgLgEQgMgEgRAAQgSgBgNAFQgNAEAAAKIgRAAQAAgTATgHQAUgHAWAAQAOAAANACQAMACAJAGQAJAHAAAMQAAAPgKAFQANAFAAANIAAABQAAASgRAJQgQAIgbAAQgSAAgOgFg");
	this.shape_248.setTransform(86.175,997.225);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AggAyIAAgPQAQgBAAgFIgBgDIgphKIATAAIAmBFIAphFIATAAIgyBSQgDAIgKADQgKAEgOABIgEAAg");
	this.shape_249.setTransform(73.575,997.25);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AAtAxIAAhFIgjBFIgRAAIglhGIAABGIgRAAIAAhhIAWAAIAoBOIAnhOIAWAAIAABhg");
	this.shape_250.setTransform(60.8,997.225);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AAtAyIgMgYIhBAAIgNAYIgSAAIA1hiIAVAAIA1BigAgXAKIAvAAIgYgrg");
	this.shape_251.setTransform(343.25,369.5);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AAkAyIAAguIhGAAIAAAuIgSAAIAAhiIASAAIAAAlIBGAAIAAglIARAAIAABig");
	this.shape_252.setTransform(330.725,369.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AAnAyIAAhOIhOBOIgRAAIAAhiIARAAIAABNIBOhNIASAAIAABig");
	this.shape_253.setTransform(318.25,369.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AAXAyIg2gvIAAAvIgRAAIAAhiIARAAIAAAmIAzgmIAbAAIg/AtIBBA1g");
	this.shape_254.setTransform(306.675,369.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AAkAyIAAhTIhHAAIAABTIgSAAIAAhiIBrAAIAABig");
	this.shape_255.setTransform(294.675,369.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AgxAyIAAhiIBiAAIAAAPIhQAAIAAAYIBFAAIAAAPIhFAAIAAAdIBQgBIAAAQg");
	this.shape_256.setTransform(282.8,369.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("ABCA6IAAgRIiTAAIAAhiIARAAIAABRIAzAAIAAhRIAQAAIAABRIA0AAIAAhRIARAAIAABRIALAAIAAAig");
	this.shape_257.setTransform(267.95,370.375);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AgJAJIAAgRIATAAIAAARg");
	this.shape_258.setTransform(252.75,373.525);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AgdAtQgNgGgIgNQgIgLAAgPQAAgOAIgMQAIgMANgHQAPgGAPAAQAVAAAOAKQAQAKAHATIgSAAQgDgIgHgFQgGgGgJgCQgHgDgHAAQgKAAgKAEQgKAFgHAIQgGAJAAAKQAAAMAGAIQAGAIAKAFQAJAEAMAAQAGAAAHgCQAIgDAHgGQAGgEAEgIIATAAQgHASgQALQgOAJgVAAQgPAAgPgHg");
	this.shape_259.setTransform(244.7,369.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AgJAJIAAgRIATAAIAAARg");
	this.shape_260.setTransform(232.15,373.525);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AAtAyIAAhGIgjBGIgRAAIglhHIAABHIgSAAIAAhiIAXAAIAoBOIAnhOIAWAAIAABig");
	this.shape_261.setTransform(223.7,369.5);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AAoAyIAAhOIhPBOIgRAAIAAhiIARAAIAABNIBPhNIARAAIAABig");
	this.shape_262.setTransform(205.55,369.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AAkAyIAAguIhGAAIAAAuIgSAAIAAhiIASAAIAAAlIBGAAIAAglIARAAIAABig");
	this.shape_263.setTransform(192.975,369.5);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AgwAyIAAhiIBiAAIAAAPIhRAAIAAAYIBGAAIAAAPIhGAAIAAAdIBRgBIAAAQg");
	this.shape_264.setTransform(181.25,369.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AAtAyIAAhGIgjBGIgRAAIglhHIAABHIgRAAIAAhiIAVAAIApBOIAnhOIAXAAIAABig");
	this.shape_265.setTransform(168.6,369.5);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AAoAyIAAhOIhPBOIgRAAIAAhiIARAAIAABNIBPhNIARAAIAABig");
	this.shape_266.setTransform(155.15,369.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("Ag2AyIAAhiIBCAAQANAAAKADQAJAFAFAHQAGAHAAAKIAAABQAAAPgJAJQgKAIgSABIg2AAIAAAggAgkACIAwAAIAAAAIANgBQAFgBAEgCQADgEABgJQgBgIgDgEQgEgFgFgBIgNgBIgGAAIgMAAIgeAAg");
	this.shape_267.setTransform(137.9,369.5);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AgHAyIAAhTIgvAAIAAgBIBtgOIAAAPIguAAIAABTgAg2gwIBtAAIhtAOgAA3gwg");
	this.shape_268.setTransform(125.55,369.5);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AAtAyIgMgYIhBAAIgNAYIgSAAIA2hiIATAAIA2BigAgXAKIAvAAIgYgrg");
	this.shape_269.setTransform(113,369.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AgxAyIAAhiIBiAAIAAAPIhQAAIAAAYIBFAAIAAAPIhFAAIAAAdIBQgBIAAAQg");
	this.shape_270.setTransform(101,369.5);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AgHAyIAAhTIgvAAIAAgBIBtgOIAAAPIguAAIAABTgAg2gwIBtAAIhtAOg");
	this.shape_271.setTransform(89.2,369.5);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AAnA+IAAhOIhNBOIgSAAIAAhiIASAAIAABNIBNhNIASAAIAABigAgYgpQgIgGgBgOIANAAQAAAIAFAEQAGAFAJAAQAJAAAFgFQAGgEgBgIIAOAAQgBANgIAHQgKAHgOAAQgOAAgKgHg");
	this.shape_272.setTransform(373.1,347.225);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("AAoAyIAAhOIhOBOIgSAAIAAhiIASAAIAABNIBOhNIARAAIAABig");
	this.shape_273.setTransform(360.15,348.45);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AAXAyIg2guIAAAuIgRAAIAAhiIARAAIAAAmIAzgmIAbAAIg/AtIBBA1g");
	this.shape_274.setTransform(348.575,348.45);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AgdAtQgNgGgIgNQgIgMAAgOQAAgNAIgNQAIgLANgIQAOgGAQAAQAVAAAPAKQAPAKAHATIgTAAQgCgIgHgFQgHgGgHgCQgJgDgGAAQgKAAgKAFQgKAEgGAIQgHAJAAAKQAAAMAGAIQAGAJAKAEQAKAEALAAQAGAAAHgDQAIgCAGgGQAHgEAEgIIATAAQgIATgOAKQgPAJgVAAQgQAAgOgHg");
	this.shape_275.setTransform(336.35,348.45);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AgxAyIAAhiIBiAAIAAAPIhQAAIAAAYIBFAAIAAAPIhFAAIAAAcIBQAAIAAAQg");
	this.shape_276.setTransform(324.3,348.45);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AAfAyIAAglQgKAMgVABQgWAAgNgLQgMgMAAgUIAAgfIARAAIAAAeQAAANAHAGQAHAIAQAAQAPAAAIgGQAIgFAAgPIAAgfIARAAIAABig");
	this.shape_277.setTransform(312.925,348.45);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AAoAyIAAhOIhPBOIgRAAIAAhiIARAAIAABNIBPhNIARAAIAABig");
	this.shape_278.setTransform(301.05,348.45);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AgIAyIAAhTIguAAIAAgBIBtgOIAAAPIguAAIAABTgAg2gwIBtAAIhtAOg");
	this.shape_279.setTransform(288.5,348.45);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AAtAyIgMgYIhBAAIgNAYIgSAAIA1hiIAUAAIA2BigAgXAKIAvAAIgYgrg");
	this.shape_280.setTransform(276,348.45);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AAtAyIAAhGIgiBGIgSAAIglhHIAABHIgSAAIAAhiIAXAAIAoBPIAnhPIAWAAIAABig");
	this.shape_281.setTransform(262.7,348.45);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AAuAyIgNgYIhBAAIgMAYIgTAAIA2hiIATAAIA2BigAgXAKIAvAAIgYgrg");
	this.shape_282.setTransform(249.25,348.45);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("Ag2AyIAAhiIBCAAQANAAAKADQAKAFAFAHQAFAIAAAJIAAABQAAAPgKAJQgJAIgSAAIg2AAIAAAhgAgkACIAvAAIABAAIANgBQAFgBAEgCQAEgEgBgJQABgIgEgEQgEgFgFgBIgNgBIgGAAIgNAAIgdAAg");
	this.shape_283.setTransform(236.75,348.45);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AArA4IAAgNIhVAAIAAANIgRAAIAAgdIAGAAQANgTAFgTQAHgUgBgYIBMAAIAABSIANAAIAAAdgAgjAbIBBAAIAAhDIgqAAQgDAngUAcg");
	this.shape_284.setTransform(224,349.1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AAnA+IAAhOIhOBOIgRAAIAAhiIARAAIAABNIBOhNIASAAIAABigAgYgpQgJgGAAgOIANAAQAAAIAFAEQAGAFAJAAQAIAAAGgFQAFgEAAgIIANAAQAAANgJAHQgJAHgOAAQgOAAgKgHg");
	this.shape_285.setTransform(206.4,347.225);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AAoAyIAAhOIhPBOIgRAAIAAhiIARAAIAABNIBPhNIARAAIAABig");
	this.shape_286.setTransform(193.5,348.45);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AAXAyIg2guIAAAuIgRAAIAAhiIARAAIAAAmIAzgmIAbAAIg/AtIBBA1g");
	this.shape_287.setTransform(181.875,348.45);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AgcAtQgOgGgIgNQgIgMAAgOQAAgNAIgNQAIgLAOgIQANgGAQAAQAUAAAPAKQAQAKAHATIgSAAQgDgIgHgFQgHgGgHgCQgJgDgHAAQgJAAgKAFQgKAEgHAIQgGAJAAAKQAAAMAGAIQAGAJAKAEQAJAEALAAQAHAAAIgDQAHgCAGgGQAHgEAEgIIATAAQgHATgQAKQgPAJgUAAQgQAAgNgHg");
	this.shape_288.setTransform(169.7,348.45);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AgxAyIAAhiIBiAAIAAAPIhQAAIAAAYIBGAAIAAAPIhGAAIAAAcIBQAAIAAAQg");
	this.shape_289.setTransform(157.6,348.45);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AAfAyIAAglQgKAMgVABQgWAAgNgLQgMgMAAgUIAAgfIARAAIAAAeQAAANAHAGQAHAIAQAAQAPAAAIgGQAIgFAAgPIAAgfIARAAIAABig");
	this.shape_290.setTransform(146.275,348.45);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AAnAyIAAhOIhOBOIgRAAIAAhiIARAAIAABNIBOhNIASAAIAABig");
	this.shape_291.setTransform(134.4,348.45);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AAtAyIAAhGIgjBGIgRAAIglhHIAABHIgSAAIAAhiIAWAAIApBPIAnhPIAXAAIAABig");
	this.shape_292.setTransform(121,348.45);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AgwAyIAAhiIBiAAIAAAPIhRAAIAAAYIBGAAIAAAPIhGAAIAAAcIBRAAIAAAQg");
	this.shape_293.setTransform(108.35,348.45);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AArA4IAAgNIhVAAIAAANIgRAAIAAgdIAGAAQANgTAFgTQAHgUAAgYIBLAAIAABSIANAAIAAAdgAgjAbIBBAAIAAhDIgqAAQgDAngUAcg");
	this.shape_294.setTransform(96.1,349.1);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AAuAyIgNgYIhBAAIgNAYIgSAAIA1hiIAVAAIA1BigAgXAKIAvAAIgYgrg");
	this.shape_295.setTransform(83.25,348.45);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("AAXAyIg2guIAAAuIgRAAIAAhiIARAAIAAAmIAzgmIAbAAIg/AtIBBA1g");
	this.shape_296.setTransform(71.725,348.45);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("AAuAyIgNgYIhBAAIgMAYIgTAAIA2hiIAUAAIA1BigAgXAKIAvAAIgYgrg");
	this.shape_297.setTransform(59.6,348.45);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFFFFF").s().p("AAoA+IAAhOIhPBOIgRAAIAAhiIARAAIAABNIBPhNIARAAIAABigAgXgpQgJgGAAgOIAMAAQAAAIAGAEQAFAFAJAAQAIAAAGgFQAGgEAAgIIANAAQAAANgJAHQgKAHgOAAQgPAAgIgHg");
	this.shape_298.setTransform(302.75,326.125);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("AAsAxIAAhiIASAAIAABigAg9AxIAAhiIASAAIAAAfIAmAAQAMAAAKAEQAJAEAFAIQAGAHAAAKIAAABQAAAKgGAHQgFAIgJAFQgKADgLAAgAgrAjIApABIACAAQAFAAAFgDQAEgDADgEQACgFAAgGQAAgKgFgFQgFgEgJAAIgrAAg");
	this.shape_299.setTransform(289.375,327.35);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFFFF").s().p("AAkAxIAAgtIhGAAIAAAtIgSAAIAAhiIASAAIAAAmIBGAAIAAgmIARAAIAABig");
	this.shape_300.setTransform(276.325,327.35);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFFFFF").s().p("AAkAxIAAgtIhGAAIAAAtIgSAAIAAhiIASAAIAAAmIBGAAIAAgmIARAAIAABig");
	this.shape_301.setTransform(264.175,327.35);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFFFF").s().p("AgwAxIAAhiIBiAAIAAAQIhRAAIAAAYIBFAAIAAAOIhFAAIAAAeIBRgBIAAAPg");
	this.shape_302.setTransform(252.5,327.35);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFFFF").s().p("AACAxIg6AAIAAhiIBHAAQAPABAKAGQAJAGAAAMIAAAAQAAAJgEAGQgDAFgIACQAMACAGAFQAFAGABAKIAAABQgBAMgFAGQgGAGgKACQgKABgRAAgAgnAjIAvAAIAHAAIAOAAQAEgCADgDQADgDAAgHQAAgHgDgDQgDgDgEgCIgOAAIg2AAgAgngGIAAgBgAgngIIAMAAIALAAIAOAAIAMAAIANAAQADgBADgDQADgDAAgHQAAgGgDgDQgCgCgEgBIgNAAIgxAAg");
	this.shape_303.setTransform(240.45,327.35);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("AgIAxIAAhSIguAAIAAAAIBtgQIAAAQIguAAIAABSgAg2gxIBtAAIhtAQg");
	this.shape_304.setTransform(227.85,327.35);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFFFF").s().p("AgdAuQgNgIgIgLQgIgNAAgOQAAgNAIgMQAIgNANgGQAOgHAQAAQAVAAAPAKQAPAKAHASIgTAAQgCgGgHgGQgHgFgHgDQgJgDgGAAQgKAAgKAEQgKAFgGAIQgHAJAAAKQAAAMAGAIQAGAJAKAEQAKAEALAAQAGAAAHgCQAIgDAGgFQAHgGAEgHIATAAQgIATgOAJQgPAKgVAAQgQAAgOgGg");
	this.shape_305.setTransform(215.3,327.35);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFFFF").s().p("Ag2AxIAAhiIBDAAQAMAAAJAFQAKAEAGAHQAFAHAAALIAAAAQAAAQgKAIQgIAJgUAAIg2AAIAAAfgAglADIAxAAIAAAAIANgBQAFgBAEgEQADgDAAgJQAAgJgDgDQgEgFgFgBIgNgBIgGAAIgNABIgeAAg");
	this.shape_306.setTransform(202.75,327.35);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("AAtAxIgMgWIhBAAIgNAWIgSAAIA1hiIAUAAIA2BigAgXAKIAvAAIgYgrg");
	this.shape_307.setTransform(190.05,327.35);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFFFFF").s().p("AAsA4IAAgNIhWAAIAAANIgRAAIAAgdIAHAAQAMgTAGgSQAFgVABgYIBLAAIAABSIANAAIAAAdgAgiAbIBAAAIAAhDIgrgBQgDAngSAdg");
	this.shape_308.setTransform(177.15,328);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFFFFF").s().p("AggAyIAAgQQAQAAAAgFQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAIgohLIATAAIAmBGIAphGIATAAIgyBTQgDAIgKAEQgKAEgOAAIgEAAg");
	this.shape_309.setTransform(164.775,327.375);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFFFFF").s().p("AgdAuQgNgIgIgLQgIgNAAgOQAAgNAIgMQAIgNANgGQAOgHAQAAQAVAAAPAKQAPAKAHASIgTAAQgCgGgHgGQgHgFgHgDQgJgDgGAAQgKAAgKAEQgKAFgGAIQgHAJAAAKQAAAMAGAIQAGAJAKAEQAKAEALAAQAGAAAHgCQAIgDAGgFQAHgGAEgHIATAAQgIATgOAJQgPAKgVAAQgQAAgOgGg");
	this.shape_310.setTransform(152.3,327.35);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFFFF").s().p("AgdAtQgOgHgIgLQgIgMAAgPQAAgOAIgLQAIgMAOgHQAOgHAPAAQARAAAOAHQAOAHAHALQAIAMAAAOQAAAPgIAMQgHALgOAHQgOAHgRAAQgPAAgOgHgAgUgfQgKAEgFAIQgGAJAAAKQAAAMAGAIQAGAIAJAFQAKAEAKAAQALAAAKgEQAJgFAGgIQAGgIAAgMQAAgKgGgJQgGgIgJgEQgKgFgLAAQgLAAgJAFg");
	this.shape_311.setTransform(139.325,327.375);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFFFF").s().p("AgnAxIAAhiIBPAAIAAAQIg+AAIAABSg");
	this.shape_312.setTransform(128.375,327.35);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFFFFF").s().p("AAnA+IAAhOIhOBOIgRAAIAAhiIARAAIAABNIBOhNIASAAIAABigAgYgpQgJgGAAgOIANAAQAAAIAFAEQAGAFAJAAQAIAAAGgFQAFgEAAgIIANAAQAAANgJAHQgJAHgOAAQgOAAgKgHg");
	this.shape_313.setTransform(282.45,305.075);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("AAnAxIAAhNIhNBNIgSAAIAAhiIASAAIAABOIBNhOIASAAIAABig");
	this.shape_314.setTransform(269.5,306.3);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFFFF").s().p("AAXAxIg2guIAAAuIgRAAIAAhiIARAAIAAAnIAzgnIAbAAIg/AuIBBA0g");
	this.shape_315.setTransform(257.925,306.3);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFFFFF").s().p("AgcAuQgOgIgIgLQgIgNAAgOQAAgNAIgMQAIgNAOgGQANgHAQAAQAUAAAPAKQAQAKAHASIgSAAQgDgGgHgGQgHgFgHgDQgJgDgHAAQgJAAgKAEQgKAFgHAIQgGAIAAALQAAAMAGAIQAGAIAKAFQAJAEALAAQAHAAAIgCQAHgDAGgFQAHgGAEgHIATAAQgHASgQALQgPAJgUAAQgQAAgNgGg");
	this.shape_316.setTransform(245.75,306.3);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFFFF").s().p("AArA4IAAgNIhVAAIAAANIgRAAIAAgdIAGAAQANgTAFgSQAHgVAAgYIBLAAIAABSIANAAIAAAdgAgjAbIBBAAIAAhDIgqgBQgEAngTAdg");
	this.shape_317.setTransform(232.8,306.95);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFFFF").s().p("AgdAtQgOgHgIgLQgIgMAAgPQAAgOAIgLQAIgMAOgHQAOgHAPAAQARAAAOAHQAOAHAHALQAIAMAAAOQAAAPgIAMQgHALgOAHQgOAHgRAAQgPAAgOgHgAgUgfQgKAEgFAIQgGAJAAAKQAAAMAGAIQAGAIAJAFQAKAEAKAAQALAAAKgEQAJgFAGgIQAGgIAAgMQAAgKgGgJQgGgIgJgEQgKgFgLAAQgLAAgJAFg");
	this.shape_318.setTransform(219.825,306.325);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("Ag2AxIAAhiIBDAAQAMAAAJAFQALAEAFAHQAFAHAAAKIAAABQAAAQgKAIQgIAJgUAAIg2AAIAAAfgAglACIAxAAIAAAAIANgBQAFAAAEgEQAEgDAAgJQAAgJgEgDQgEgFgFgBIgNgBIgGAAIgMABIgfAAg");
	this.shape_319.setTransform(207.35,306.3);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AgdAtQgOgHgIgLQgIgMAAgPQAAgOAIgLQAIgMAOgHQAOgHAPAAQARAAAOAHQAOAHAHALQAIAMAAAOQAAAPgIAMQgHALgOAHQgOAHgRAAQgPAAgOgHgAgUgfQgKAEgFAIQgGAJAAAKQAAAMAGAIQAGAIAJAFQAKAEAKAAQALAAAKgEQAJgFAGgIQAGgIAAgMQAAgKgGgJQgGgIgJgEQgKgFgLAAQgLAAgJAFg");
	this.shape_320.setTransform(194.525,306.325);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("AgnAxIAAhiIBPAAIAAAQIg+AAIAABSg");
	this.shape_321.setTransform(183.575,306.3);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("AAkAxIAAhSIgvAAQgCATgEAPQgDAPgGAOQgFAIgGAGQgHAEgIABIAAgRQAIAAAFgMQAKgdADgoIBPAAIAABig");
	this.shape_322.setTransform(172.625,306.3);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("AgxAxIAAhiIBiAAIAAAQIhQAAIAAAYIBGAAIAAAOIhGAAIAAAeIBQgBIAAAPg");
	this.shape_323.setTransform(161.2,306.3);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFFFF").s().p("AgzAyIAAhiIBhAAIAAAPIhPAAIAAATIAdAAQAYAAAMADQAMAEAFAGQADAGAAAKQAAAJgDAHQgDAHgMAGQgLAFgXABgAghAiIAjAAIADAAQAPABAIgFQAHgFAAgKQAAgFgDgEQgDgEgHgBQgGgBgLAAIgmAAg");
	this.shape_324.setTransform(149.85,306.35);

	this.instance_4 = new lib.ClipGroup_4();
	this.instance_4.setTransform(216.85,163.85,2.2298,2.2298,0,0,0,74.5,55.8);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("#000000").ss(0.3).p("Eh/phS6MD/TAAAMAAACl1Mj/TAAAg");
	this.shape_325.setTransform(817.125,530.8);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#891345").s().p("Eh/pBS7MAAAil1MD/TAAAMAAACl1g");
	this.shape_326.setTransform(817.125,530.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_326},{t:this.shape_325},{t:this.instance_4},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.instance_3},{t:this.instance_2},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.button_1},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.instance_1},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.instance},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.video}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(816.1,529.6,819.1,532.9);
// library properties:
lib.properties = {
	id: '922F7D2CF6E9A34F8363BB32BB3C2BB2',
	width: 1634,
	height: 1061,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/start_atlas_1.png?1686397127638", id:"start_atlas_1"},
		{src:"sounds/click_sunwav.mp3?1686397127767", id:"click_sunwav"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1686397127767", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1686397127767", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1686397127767", id:"an.Video"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['922F7D2CF6E9A34F8363BB32BB3C2BB2'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;