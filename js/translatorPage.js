
(function() {
console.log("Hello, i work");
var translatorList = [
	"Andrew Ramirez",
	"Kirk Floyd",
	"Someone Else",
	"New Name",
	"Micheal Jackson",
	"Fan Something",
	"Another Name",
	"new Person"
];

var imageSrcList = [
	"http://www.teara.govt.nz/files/28836-pc_1.jpg",
	"http://images.wisegeek.com/man-on-cell-phone.jpg",
	"http://advancedlanguage.com/wp-content/uploads/2010/08/professional.jpg"
];


for(var i = 0; i < translatorList.length; i++) {
	var data = {};
	data.translatorName = translatorList[i];
	data.imgSrc = imageSrcList[Math.floor(Math.random() * imageSrcList.length) + 0];
	console.log("img src: " + data.imgSrc);
	data.status = "online";
	data.link = "";
	appendName(data);
}

function appendName(data) {
	$("#translatorList").append(
		'<div class="row">' +
			'<div class="col-xs-4">' +
				'<img src='+ data.imgSrc + '>' +
			'</div>' +
			'<div class="col-xs-4">' +
				'<a href='+ data.tranlatorLink +'>' +data.translatorName+ '</a>' +
			'</div>' +
			'<div class="col-xs-4>' +
				data.status+
			'</div>'
			);
}
})();