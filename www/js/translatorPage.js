(function () {
  var translatorList = [
    "Translator Test",
    "Andrew Ramirez",
    "Kirk Floyd",
    "Hamdan Jawad",
    "Adriel Martinez",
    "Micheal Jackson",
    "Hazell Vasquez",
    "Jules Day",
    "Sade Mitchell",
    "Crystal Lastname",
    "Shanell Lastname",
    "New Name",
    "New Person"

  ];

  var imageSrcList = [
    "https://s-media-cache-ak0.pinimg.com/236x/08/22/00/08220004c4c9199acf284a3e439ec0d6.jpg",
    "http://previews.123rf.com/images/cattallina/cattallina1505/cattallina150500013/40291578-lioness-head-black-and-white-profile-simple-vector-design-Stock-Vector.jpg",
    "https://s-media-cache-ak0.pinimg.com/236x/b3/ef/44/b3ef441aa93e0026a0dd0e7f795b6130.jpg",
    "http://www.pd4pic.com/images800_/black-simple-small-outline-drawn-drawing-sketch.png",
    "http://img11.deviantart.net/609f/i/2009/359/9/3/flower_sketch_by_mubibuddy.jpg",
    "http://cliparts.co/cliparts/8Tx/4R9/8Tx4R9pTp.jpg",
    "http://cdn.litlepups.net/2016/04/19/small_drawings-art-drawings-of-birds-sparrow-drawings-drawing-ideas.jpg",
    "http://www.drawing-factory.com/wp-content/uploads/2014/12/simple-dragon-drawings-04.jpg",
  ];


  for (var i = 0; i < translatorList.length; i++) {
    var data = {};
    data.translatorName = translatorList[i];
    data.imgSrc = imageSrcList[Math.floor(Math.random() * imageSrcList.length) + 0];
    data.status = "online";
    data.translatorLink = "translatorProfile.html";
    appendName(data);
  }

  function appendName(data) {
    $("#translatorList").append(
      '<div class="row">' +
      '<div class="col-xs-4 profilePic">' +
      '<img class = "profilePic" src=' + data.imgSrc + '>' +
      '</div>' +
      '<div class="col-xs-4 name">' +
      '<a href=' + data.translatorLink + '>' + data.translatorName + '</a>' +
      '</div>' +
      '<div class="col-xs-4 status">' +
      data.status +
      '</div>'
    );
  }
})();