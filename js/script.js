$(function () {
    function TestFunction(name, questionsList, questionsPlace) {
        var $name = name;
        var $questions = questionsList;
        var $questionsPlace = questionsPlace;
        for (var i = 0; i < $questionsPlace.length; i++) {
            var questionPlace = $questionsPlace[i];
            var question = $questions[i];
            $(questionPlace).html(question);
        }
        
        $('.test-name').html($name);
    }

    var questionsList = [
        'What about your possitive characteristic?',
        'Which negative characteristic is yours?',
        'How do you attitude to others',
        'How can you describe you P-skills?',
        'Are you famous?'
    ];
    var questionsPlace = [
        $('.q-1'),
        $('.q-2'),
        $('.q-3'),
        $('.q-4'),
        $('.q-5')
    ];

    var answerList = [
        ['Smart', 'Confident', 'Talanted'],
        ['Shy', 'Selfish', 'Lazy'],
        ['Respecrfully', 'indifferently', ' Lovely'],
        ['Weak', 'Strong', 'Extremelly Strooong!!!'],
        ['Only for friends', 'Sure', 'Not really)']
    ];

    var questionList2 = document.getElementById("questionList");
    questionList2.innerHTML = '';
    for(var i = 1; i <= answerList.length; i++ ){
        questionList2.innerHTML += '<li class="question" id="question' + i + '"> ' + i + ') <span class="q-1">' + questionsList[i - 1] + '</span > <ul class="answers-list"> <li><label> <input type="radio" class="answer-11 an-1" name="answer' + i + '"><span class="answ-1" id="answer-11"> ' + answerList[i - 1][0] + ' </span></label></li> <li><label> <input type="radio" class="answer-12 an-2" id="answer-12" name="answer' + i + '"><span class="answ-1"> ' + answerList[i - 1][1] + ' </span></label></li> <li><label> <input type="radio" class="answer-13 an-3" id="answer-13" name="answer' + i + '"><span class="answ-1"> ' + answerList[i - 1][2] + ' </span></label></li> </ul> </li>';
    }

  
    var radio = document.querySelector('.radio');
    var $res = document.querySelector('.res');
    var result1 = 0;
    var result2 = 0;
    var result3 = 0;
    $($res).click(function() {
        var $an1 = $('.an-1');
        var $an2 = $('.an-2');
        var $an3 = $('.an-3');
        for (var i = 0; i < $an1.length; i++) {
            var an1 = $an1[i];
            if (an1.checked) {
                result1 = result1 + 1;
            }
        }     
        for (var i = 0; i < $an2.length; i++) {
            var an2 = $an2[i];
            if (an2.checked) {
                result2 = result2 + 2;
            }
        }  
        
        for (var i = 0; i < $an2.length; i++) {
            var an3 = $an3[i];
            if (an3.checked) {
                result3 = result3 + 3;
            }
        }     
        
        var mainres = result1 + result2 + result3;
        console.log(mainres);
        
        if (mainres == 5 || mainres == 6) {
            $(".resBlock img").attr("src", "./img/results/holland.png");
            $('.resBlock span').html('When Spider-Man first appeared in the early 1960s, teenagers in superhero comic books were usually relegated to the role of sidekick to the protagonist. The Spider-Man series broke ground by featuring Peter Parker, a high school student from Queens behind Spider-Mans secret identity and with whose "self-obsessions with rejection, inadequacy, and loneliness" young readers could relate While Spider - Man had all the makings of a sidekick, unlike previous teen heroes such as Bucky and Robin, Spider - Man had no superhero mentor like Captain America and Batman; he thus had to learn for himself that "with great power there must also come great responsibility"—a line included in a text box in the final panel of the first Spider - Man story but later retroactively attributed to his guardian, the late Uncle Ben. ')
        }
        else if (mainres == 11 || mainres == 12) {
            $(".resBlock img").attr("src", "./img/results/IRON-MAN.png");
            $('.resBlock span').html('A wealthy American business magnate, playboy, and ingenious scientist, Anthony Edward "Tony" Stark suffers a severe chest injury during a kidnapping. When his captors attempt to force him to build a weapon of mass destruction, he instead creates a mechanized suit of armor to save his life and escape captivity. Later, Stark develops his suit, adding weapons and other technological devices he designed through his company, Stark Industries. He uses the suit and successive versions to protect the world as Iron Man. Although at first concealing his true identity, Stark eventually declared that he was, in fact, Iron Man in a public announcement.')
        }
        else if (mainres == 9 || mainres == 10) {
            $(".resBlock img").attr("src", "./img/results/THOR.png");
            $('.resBlock span').html('Thor Odinson is a character portrayed by Chris Hemsworth in the Marvel Cinematic Universe (MCU) film franchise, based on the Marvel Comics character of the same name. In the films, Thor is known as the "God of Thunder", and is one of the most powerful of the Asgardians, an alien civilization with long ties to Earth, who are therefore considered by some on Earth to be gods. ')
        }
        else if (mainres == 7 || mainres == 8) {
            $(".resBlock img").attr("src", "./img/results/xalk.png");
            $('.resBlock span').html('The Hulk is a fictional superhero appearing in publications by the American publisher Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in the debut issue of The Incredible Hulk (May 1962). In his comic book appearances, the character is both the Hulk, a green-skinned, hulking and muscular humanoid possessing a vast degree of physical strength, and his alter ego Dr. Robert Bruce Banner, a physically weak, socially withdrawn, and emotionally reserved physicist, the two existing as independent personalities and resenting of the other. ')
        }
        else if (mainres == 13 || mainres == 14) {
            $(".resBlock img").attr("src", "./img/results/cat.png");
            $('.resBlock span').html('Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the eighteenth film in the Marvel Cinematic Universe (MCU). The film is directed by Ryan Coogler, who co-wrote the screenplay with Joe Robert Cole, and stars Chadwick Boseman as T Challa / Black Panther, alongside Michael B.Jordan, Lupita Nyongo, Danai Gurira, Martin Freeman, Daniel Kaluuya, Letitia Wright, Winston Duke, Angela Bassett, Forest Whitaker, and Andy Serkis. In Black Panther, T Challa is crowned king of Wakanda following his father death, but his sovereignty is challenged by an adversary who plans to abandon the countrys isolationist policies and begin a global revolution.  ')
        }
        else {
            $(".resBlock img").attr("src", "./img/results/Cap.png");
            $('.resBlock span').html('Captain America is a fictional superhero appearing in American comic books published by Marvel Comics. Created by cartoonists Joe Simon and Jack Kirby, the character first appeared in Captain America Comics #1 (cover dated March 1941) from Timely Comics, a predecessor of Marvel Comics. Captain America was designed as a patriotic supersoldier who often fought the Axis powers of World War II and was Timely Comics most popular character during the wartime period.The popularity of superheroes waned following the war and the Captain America comic book was discontinued in 1950, with a short - lived revival in 1953. Since Marvel Comics revived the character in 1964, Captain America has remained in publication. ')
        }

        $('.resBlock').addClass('animated fadeInLeft');

    })
    


    
    
    
    
    TestFunction('"Avengers"', questionsList, questionsPlace)
    
    
    
    $('.reset').click(function() {
        location.reload(true);
    })







})
