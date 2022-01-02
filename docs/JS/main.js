let count = 0; //何問目かをカウント

//画像を表示する
$('<img src="">').prependTo('#art_0');
$('<img src="">').prependTo('#art_1');
$('<img src="">').prependTo('#art_2');

//画像をpaint変数へ入れる
const paint = [
    ['img/a1.jpg', 'img/c1.jpg', 'img/n1.jpg'],
    ['img/a2.jpg', 'img/c2.jpg', 'img/n2.jpg'],
    ['img/a3.jpg', 'img/c3.jpg', 'img/n3.jpg'],
    ['img/a4.jpg', 'img/c4.jpg', 'img/n4.jpg'],
    ['img/a5.jpg', 'img/c5.jpg', 'img/n5.jpg'],
];

//最初の絵画をid名の場所へ表示
$('#art_0 > img').attr('src', paint[count][0]);
$('#art_1 > img').attr('src', paint[count][1]);
$('#art_2 > img').attr('src', paint[count][2]);

//問題文を定義
const questions = ['一番すきな絵はどれ？',
    '物語が想像できる絵はどれ？',
    '美しいと感じる絵はどれ？', '自分でも描けそうだと思う絵はどれ？', 'リビングに飾りたい絵はどれ？'];

//選択肢を定義
const choices = [
    ['The Milkmaid / 1660', 'The Bedroom / 1889', 'Woman with a Parasol / 1875'],
    ['The Night Watch / 1642', 'Under the Wave off Kanagawa / 1830-33', 'The Railway / 1873'],
    ['Figures in a Courtyard behind a House / 1663-1665', 'A Sunday on La Grande Jatte / 1884', "Ginevra de' Benci / 1474-78"],
    ['The Merry Family / 1668', 'Stacks of Wheat (End of Summer) / 1890-91', 'Still Life of Oranges and Lemons with Blue Gloves / 1889'],
    ['Still Life with Flowers and a Watch / 1660-79', 'Paris Street; Rainy Day / 1877', 'The Japanese Footbridge / 1899']
];

//回答を定義
const answer = [
    [0, 1, 2],
    [0, 1, 2],
    [0, 1, 2],
    [0, 1, 2],
    [0, 1, 2],
];
//選択をカウント
let amsterdam = 0;
let chicago = 0;
let nga = 0;

//最初の質問・選択肢をid名の場所へ表示する
$('#question').text(questions[count]);
$('#choice0').text(choices[count][0]);
$('#choice1').text(choices[count][1]);
$('#choice2').text(choices[count][2]);


//クリックして(e)イベント内容を取得
$('button[name="choices"]').on('click', function (e) {
    // console.log(e.target.value);
    if (e.target.value == answer[count][0]) {
        amsterdam++;
        console.log(amsterdam);
    } else if (e.target.value == answer[count][1]) {
        chicago++;
        console.log(chicago);
    } else if (e.target.value == answer[count][2]) {
        nga++;
        console.log(nga);
    }
    count++;
    console.log(count)
    //最後の問題でないならカウントを増やして次の問題と選択肢を表示
    if (count < questions.length) {

        $('#question').text(questions[count]);
        $('#art_0 > img').attr('src', paint[count][0]);
        $('#art_1 > img').attr('src', paint[count][1]);
        $('#art_2 > img').attr('src', paint[count][2]);
        $('#choice0').text(choices[count][0])
        $('#choice1').text(choices[count][1])
        $('#choice2').text(choices[count][2])

        //今何問目かの表示を更新
        $('#count').text(`Q.${count + 1}`)



    } else if (count >= 4 && amsterdam > chicago >= nga || count >= 4 && amsterdam > nga >= chicago) {
        // alert('アムステルダム美術館')
        $('.art').hide();
        $('.amsterdam').fadeIn(600);

        console.log(amsterdam);
        console.log(chicago);
        console.log(nga);

    } else if (count >= 4 && chicago > amsterdam >= nga || count >= 4 && chicago > nga >= amsterdam) {
        // alert('シカゴ美術館')
        $('.art').hide();
        $('.chicago').fadeIn(600);

        console.log(amsterdam);
        console.log(chicago);
        console.log(nga);

    } else if (count >= 4 && nga > amsterdam >= chicago || count >= 4 && nga > chicago >= amsterdam) {
        // alert('ナショナルギャラリー')
        $('.art').hide();
        $('.nga').fadeIn(600);

        console.log(amsterdam);
        console.log(chicago);
        console.log(nga);


    }
    if (count >= 4 && amsterdam == chicago) {
        // count++;
        questions.push('実際に見てみたい絵はどれ？');
        paint.push(['img/a6.jpg', 'img/c6.jpg', 'img/c7.jpg']);
        choices.push(['Children of the Sea / 1872', 'Shower Below the Summit / 1830-33', 'The Basket of Apples / 1893']);
        answer.push([0, 1, 1]);

        console.log(amsterdam);
        console.log(chicago);
        console.log(count)

    } else if (count >= 4 && amsterdam == nga) {
        // count++;
        questions.push('実際に見てみたい絵はどれ？');
        paint.push(['img/a6.jpg', 'img/n6.jpg', 'img/n7.jpg']);
        choices.push(['Children of the Sea / 1872', 'Pont Neuf, Paris / 1872', "The Artist's Garden at Vetheuil / 1881"]);
        answer.push([0, 2, 2]);

        console.log(amsterdam);
        console.log(nga);


    } else if (count >= 4 && chicago == nga) {
        // count++;
        questions.push('実際に見てみたい絵はどれ？');
        paint.push(['img/c6.jpg', 'img/n7.jpg', 'img/n6.jpg']);
        choices.push(['Shower Below the Summit / 1830-33', "The Artist's Garden at Vetheuil / 1881", 'Pont Neuf, Paris / 1872']);
        answer.push([1, 2, 2]);

        console.log(chicago);
        console.log(nga);
    }


});



//マウスホバー
$("#choice0").hover(
    function () {
        $('#art_0>img').addClass('border');
    },
    function () {
        $('#art_0>img').removeClass('border');
    }
);

$("#choice1").hover(
    function () {
        $('#art_1>img').addClass('border');
    },
    function () {
        $('#art_1>img').removeClass('border');
    }
);

$("#choice2").hover(
    function () {
        $('#art_2>img').addClass('border');
    },
    function () {
        $('#art_2>img').removeClass('border');
    }
);

