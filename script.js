window.onload = init;

function init() {
//	var plus = document.querySelector('#plus');
//	plus.onclick = addTheBlock;

//}

//function addTheBlock() {
//	var totalBlock = document.querySelector('#total')
//	var container = document.querySelector('#container')
//
//	var clone = container.cloneNode(true);
//	$("#container").clone(false).find("*[id]").andSelf().each(function() { $(this).attr("id", $(this).attr("id") + "_test"); })
//	
//}

var regex = /^(.*)(\d)+$/i;
var cloneIndex = $("#container").length;

function clone(){
    $(this).parents("#container").clone()
        .appendTo("#total")
        .attr("id", "container" +  cloneIndex)
        .find("*")
        .each(function() {
            var id = this.id || "";
            var match = id.match(regex) || [];
            if (match.length == 3) {
                this.id = match[1] + (cloneIndex);
            }
        })
        .on('click', 'button.clone', clone)
        .on('click', 'button.remove', remove);
    cloneIndex++;
}
function remove(){
    $(this).parents("container").remove();
}
$("button.clone").on("click", clone);

$("button.remove").on("click", remove);
}