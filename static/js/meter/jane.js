var jane_info = [
    [3, 'Flushing - Intro', 'train', 'When Jane Re is first introduced as a character, she is aware of nunchi and exhibits nunchi around her family members. This is especially apparent when she bows to all of her relatives on her way to the restroom, but she still has doublts about nunchi and Eunice\'s advice to "lose the nunchi" sticks with her.'],
    [2, 'Mazer-Farley House', 'brooklyn', 'Jane initially retains most of her nunchi but loses it as she spends more time in the house. This change can be seen as she becomes more familiar with how the house works.'],
    [4, 'Supermarket Scene with Beth and Sang', 'supermarket', "At the supermarket scene, Jane's nunchi makes a triumphant return as she argues within herself about what to do."],
    [2, 'Korea', 'airport', "While in Korea, Jane feels that her ways are outdated and by exposing herself more to the modern culture, she loses her nunchi. This culminates with her relationship with Changgoon."],
    [5, 'Epilogue', 'train', "Jane finds jung within herself and in doing so gains a new appreciation of nunchi."]
];

var jane_slider = $("#jane-slider");

$("header.masthead").css('background', 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("static/img/bgimg/' + jane_info[0][2] + '.png") center center no-repeat');
$("#val").html("Rating out of 5: " + jane_info[0][0]);
$("#lval").html("Time: " + jane_info[0][1]);
$("#pval").html(jane_info[0][3]);

jane_slider.on('input propertychange', function(){
    console.log(this.value);
    console.log(jane_info[this.value - 1][2]);
    console.log('url("../img/bgimg/' + jane_info[this.value-1][2] + '.png")');
    $("header.masthead").css('background', 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("static/img/bgimg/' + jane_info[this.value-1][2] + '.png") center center no-repeat');
    console.log(jane_info[this.value - 1][0]);
    $("#val").html("Rating out of 5: " + jane_info[this.value - 1][0]);
    $("#lval").html("Time: " + jane_info[this.value - 1][1]);
    $("#pval").html(jane_info[this.value - 1][3]);
});