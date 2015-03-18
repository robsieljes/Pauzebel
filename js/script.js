window.onload = init;

function init() {

var regex = /^(.*)(\d)+$/i;
var cloneIndex = $(".layout").length;

function clone(){
    $(this).parents(".layout").clone()
        .appendTo("body")
        .attr("id", "container" +  cloneIndex)
        .find("*")
        .each(function() {

            var id = this.id || "";
            var match = id.match(regex) || [];
            if (match.length == 3) {
                this.id = match[1] + (cloneIndex);

            }
        })

        .on('click', 'button.plus', clone)
        .on('click', 'button.minus', remove);
    cloneIndex++;
}
function remove(){
	var cloneIndex = $(".layout").length;
	if (cloneIndex == 1) {
		alert('Deze kun je niet verwijderen')
	} else{
    $(this).parents(".layout").remove();
}
}
$("button.plus").on("click", clone);

$("button.minus").on("click", remove);

}