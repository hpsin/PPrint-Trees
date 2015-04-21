var pprint = require('./pprint');

function Node(i){
	this.id=i;
}
Node.prototype.parent = undefined;
Node.prototype.getParent = function(){
	return this.parent;
}

procs =[];
procs.push(new Node(0))
var i = 0,
	v = 0;
for (i=0;i<30; i++) {
	if(Math.random()*100>=60 && v<i) v++;
	procs.push(new Node(i+1));
	procs[i+1].parent=procs[v];
}

getGraphTop = function(procs){
	Node.prototype.addChild = function(p){
		if (this.children)this.children.push(p);
		else this.children = [p];
	};

	procs.forEach(function(proc){
		if(proc.parent)proc.getParent().addChild(proc); 
	});

	var top = procs[procs.length-1];
	while(top.getParent() !== undefined)top = top.getParent(); 
	return top;
};

var top = getGraphTop(procs);

pprint.logTree(top, function(node){return node.children}, function(node){return node.id + " word"});



