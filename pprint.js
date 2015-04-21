var fPrint, // f(node) -> string to be printed for the node. 
	fChildren; // f(node)-> children of the node.
var sym = 
{	lastChild:'└───',
	hasChildren:'',
	hasSibling:'├───',
	connector:'──',
	pipe:'│   ',
 	lastChildPrefix:'    '	
}
exports.logTree= function(node, fC, fP, syms){
	fPrint = fP;
	fChildren = fC;
	if(syms!==undefined)sym=syms;
	console.log(fPrint(node));
	if(fChildren(node)){
		fChildren(node).forEach(function(p){
			logSubTree(p, "", fChildren(node));	
		});
	}
		
}

function logSubTree(node, prefix, siblings){
	var children = fChildren(node);
	var lastChild = (node === siblings[siblings.length-1]);
	
	var write = prefix;
	if(lastChild){
		prefix+=sym.lastChildPrefix;
		write+=sym.lastChild;
	} else {
		prefix+=sym.pipe;
		write+=sym.hasSibling;
	}
	if(children){
		write += sym.hasChildren;
	} else {
		write += sym.connector;
	}
	console.log(write + fPrint(node));
	if(children){
		children.forEach(function(p){
			logSubTree(p, prefix, children);
		});
	}
}

