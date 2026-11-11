/* Writing Academy · Level 8: Writing Different Types of Paragraphs. Content approved by the teacher (LEVELS_8_10_DRAFT.md, Nov 2026).
   Same format as level1.js: the FIRST choice is the correct one; mistake "wrong" = 0-based word index.
   Build is Paragraph Architect (para: true, each tile is a whole sentence). */
(window.WA_LEVELS = window.WA_LEVELS || {})[8] = {
  n: 8,
  title: 'Writing Different Types of Paragraphs',
  stage: 'Paragraph',
  target: 'Adapt paragraph organisation and language to different purposes.',
  skills: {
    type:   { name: 'Recognising the type', review: 'Read Learn cards 1 to 5 again, then redo Practise A.' },
    organ:  { name: 'Organisation', review: 'Read Learn cards 1 and 4 again, then redo Practise B and Build.' },
    lang:   { name: 'Typical language', review: 'Read Learn cards 2, 4 and 5 again, then redo Practise C.' },
    argue:  { name: 'Opinion & argument', review: 'Read Learn card 2 again, then redo Practise D.' },
    frames: { name: 'Frames & chunks', review: 'Go through the Memorise flashcards again, then redo the Memorise questions.' }
  },

  learn: [
    { title: 'Descriptive and narrative', skill: 'type',
      points: ['<b>Descriptive:</b> describes a person, place or object. It uses adjectives and the senses, and is organised <b>by space</b> (<i>on the left, in the middle, above</i>).',
        '<b>Narrative:</b> tells a story or an event. It uses past tenses and is organised <b>by time</b> (<i>at first, then, suddenly, in the end</i>).'],
      check: { q: 'Last summer, we got lost in the mountains. Suddenly, … What type of paragraph is it?', choices: ['Narrative', 'Descriptive', 'Opinion'],
        ex: 'It tells an event in the past, in time order (Last summer, Suddenly).' } },
    { title: 'Opinion and argumentative', skill: 'argue',
      points: ['<b>Opinion:</b> your view + reasons: <i>In my opinion, · I strongly believe that · From my point of view,</i>',
        '<b>Argumentative:</b> defends a position <b>and answers the other side</b>: <i>Some people argue that… However, …</i>'],
      check: { q: 'Which sentence belongs in an argumentative paragraph?', choices: ['Some people argue that homework is useless; however, it helps students revise.', 'The school has a big library.', 'Suddenly, the lights went out.'],
        ex: 'It gives the other side\'s view and answers it.' } },
    { title: 'Expository', skill: 'type',
      points: ['<b>Expository:</b> explains or informs with <b>facts</b>. It has a neutral tone and gives no personal opinion.',
        '<i>Bees collect nectar from flowers and turn it into honey.</i>'],
      check: { q: 'Which sentence is expository?', choices: ['Bees collect nectar from flowers and turn it into honey.', 'I think bees are the best insects.', 'Yesterday, a bee stung me.'],
        ex: 'A neutral fact, with no opinion and no story.' } },
    { title: 'Advantages and disadvantages', skill: 'organ',
      points: ['<i>One advantage of… is that… · Another benefit is… · On the other hand, a major drawback is…</i>',
        'It ends with a <b>balanced</b> conclusion: <i>All things considered, …</i>'],
      check: { q: '___ of living abroad is that you learn a new language.', choices: ['One advantage', 'A major drawback', 'On the other hand'],
        ex: 'Learning a language is a good point: One advantage.' } },
    { title: 'Problem–solution and cause–effect', skill: 'lang',
      points: ['<b>Problem–solution:</b> problem → causes → solutions: <i>One possible solution would be to… · The best way to solve this problem is to…</i>',
        '<b>Cause–effect:</b> causes → results: <i>due to · because of · This leads to… · This results in… · As a result,</i>'],
      check: { q: 'Too much screen time ___ poor sleep.', choices: ['leads to', 'is due to', 'is caused'],
        ex: 'Screen time is the cause and poor sleep is the result: leads to.' } }
  ],

  practise: [
    { key: 'A', title: 'Which type of paragraph?', skill: 'type', type: 'choice', items: [
      { q: 'The old café is small and cosy. On the left, there is a wooden counter, and the walls are covered with colourful tiles.', choices: ['Descriptive', 'Narrative', 'Argumentative', 'Problem–solution'], ex: 'It describes a place, organised by space (On the left).' },
      { q: 'When I arrived at the station, the train had already left. Then, I realised my phone was in the taxi.', choices: ['Narrative', 'Descriptive', 'Expository', 'Opinion'], ex: 'It tells events in time order, in the past.' },
      { q: 'In my opinion, school uniforms are a good idea because they make all students equal.', choices: ['Opinion', 'Narrative', 'Descriptive', 'Expository'], ex: 'In my opinion + a reason.' },
      { q: 'Volcanoes form when hot magma rises through cracks in the Earth\'s crust.', choices: ['Expository', 'Opinion', 'Narrative', 'Advantages & disadvantages'], ex: 'It explains a fact in a neutral way.' },
      { q: 'Some people claim that video games are a waste of time. However, many games improve problem-solving skills.', choices: ['Argumentative', 'Descriptive', 'Narrative', 'Expository'], ex: 'It gives the other side and answers it.' },
      { q: 'One benefit of online learning is flexibility. On the other hand, students may feel isolated.', choices: ['Advantages & disadvantages', 'Narrative', 'Descriptive', 'Cause & effect'], ex: 'A benefit, then a drawback.' },
      { q: 'Plastic waste is polluting our beaches. One solution would be to ban plastic bags.', choices: ['Problem–solution', 'Descriptive', 'Narrative', 'Opinion'], ex: 'A problem, then a solution.' },
      { q: 'Heavy rain fell for three days. As a result, the river flooded several villages.', choices: ['Cause & effect', 'Descriptive', 'Opinion', 'Argumentative'], ex: 'A cause (rain) and its result (floods).' }
    ] },
    { key: 'B', title: 'Organisation', skill: 'organ', type: 'choice', items: [
      { q: 'A narrative paragraph is usually organised…', choices: ['in time order', 'from the strongest opinion to the weakest', 'from left to right'], ex: 'A story follows the order of events.' },
      { q: 'A paragraph describing a room is often organised…', choices: ['by space (on the left, in the middle…)', 'by time', 'by causes and effects'], ex: 'A description moves around the place.' },
      { q: 'An argumentative paragraph should include…', choices: ['the other side\'s view and an answer to it', 'only a story', 'only facts with no position'], ex: 'An argument answers the other side.' },
      { q: 'An advantages and disadvantages paragraph usually ends with…', choices: ['a balanced conclusion', 'a new advantage', 'a story'], ex: 'It weighs both sides at the end.' },
      { q: 'A problem–solution paragraph starts with…', choices: ['the problem', 'the solution', 'the conclusion'], ex: 'First the problem, then the solutions.' },
      { q: 'An expository paragraph should be…', choices: ['neutral and factual', 'emotional and personal', 'full of opinions'], ex: 'It informs with facts.' }
    ] },
    { key: 'C', title: 'Typical language', skill: 'lang', type: 'choice', items: [
      { q: '(opinion) ___, teenagers should do more sport.', choices: ['In my view', 'Once upon a time', 'On the left'], ex: 'Opinion language: In my view.' },
      { q: '(narrative) ___, the lights went out and everyone screamed.', choices: ['Suddenly', 'In my opinion', 'One drawback is'], ex: 'Story language: Suddenly.' },
      { q: '(descriptive) ___ of the room, there is a large round table.', choices: ['In the middle', 'As a result', 'In my opinion'], ex: 'Space language: In the middle of…' },
      { q: '(argumentative) ___ that mobile phones should be banned in schools. However, …', choices: ['Some people argue', 'I suddenly', 'In the centre'], ex: 'Presenting the other side: Some people argue that…' },
      { q: '(advantages & disadvantages) ___ of city life is the noise.', choices: ['A major drawback', 'One solution', 'Once'], ex: 'The noise is a bad point: A major drawback.' },
      { q: '(problem–solution) ___ would be to plant more trees.', choices: ['One possible solution', 'One drawback', 'Suddenly'], ex: 'One possible solution would be to…' },
      { q: '(cause & effect) Fast food is cheap. ___, many people eat it every day.', choices: ['As a result', 'In the middle', 'Once upon a time'], ex: 'The result: As a result.' },
      { q: 'Which sentence suits an expository paragraph?', choices: ['Water covers about 70% of the Earth\'s surface.', 'I absolutely love the sea!', 'Last year, I swam in the sea.'], ex: 'A neutral fact.' }
    ] },
    { key: 'D', title: 'Opinion and argument', skill: 'argue', type: 'choice', items: [
      { q: 'The best sentence for an argumentative paragraph on "Homework should be banned":', choices: ['Some say homework helps students revise; however, too much of it causes stress.', 'Homework is boring.', 'Yesterday, I had a lot of homework.'], ex: 'It gives the other side and answers it.' },
      { q: 'Choose the correct expression.', choices: ['From my point of view', 'From my point of see', 'In my point of view'], ex: 'The fixed expression is: From my point of view.' },
      { q: 'I strongly ___ that reading is important.', choices: ['believe', 'think about', 'agree with'], ex: 'I strongly believe that…' },
      { q: 'Which is a fact, not an opinion?', choices: ['Morocco has a coastline on two seas.', 'Moroccan food is the best in the world.', 'Everyone should visit Fes.'], ex: 'It can be checked; the others are personal views.' }
    ] },
    { key: 'E', title: 'Find the mistake: tap the wrong word', type: 'mistake', items: [
      { words: 'In my point of view, uniforms are useful.', wrong: 0, fix: 'From', skill: 'argue', ex: 'The expression is: From my point of view.' },
      { words: 'One of the advantage of the internet is speed.', wrong: 3, fix: 'advantages', skill: 'lang', ex: 'One of the + plural noun: advantages.' },
      { words: 'Pollution leads at many diseases.', wrong: 2, fix: 'to', skill: 'lang', ex: 'lead to + result.' },
      { words: 'Suddenly, the phone ring loudly.', wrong: 3, fix: 'rang', skill: 'type', ex: 'A narrative is in the past: rang.' }
    ] }
  ],

  memorise: {
    frames: [
      { f: 'In my opinion, / From my point of view, …', e: 'From my point of view, uniforms are useful.' },
      { f: 'I strongly believe that …', e: 'I strongly believe that reading is important.' },
      { f: 'Some people argue that … However, …', e: 'Some people argue that phones distract students. However, they can help them learn.' },
      { f: 'One advantage of … is that …', e: 'One advantage of cycling is that it is cheap.' },
      { f: 'A major drawback of … is …', e: 'A major drawback of city life is the noise.' },
      { f: '… leads to … / … results in …', e: 'Stress can lead to health problems.' },
      { f: 'The best way to solve this problem is to …', e: 'The best way to solve this problem is to provide more buses.' },
      { f: 'It was a … when …', e: 'It was a cold winter evening when the phone rang.' },
      { f: 'On the left / In the middle / Next to …', e: 'In the middle of the room, there is a large table.' },
      { f: 'All things considered, …', e: 'All things considered, city life has both benefits and drawbacks.' }
    ],
    quiz: [
      { q: '___ my point of view, uniforms are useful.', choices: ['From', 'In', 'On'], ex: 'From my point of view.' },
      { q: 'I strongly ___ that reading is important.', choices: ['believe', 'believing', 'belief'], ex: 'I strongly believe that…' },
      { q: 'Some people ___ that phones should be banned.', choices: ['argue', 'arguing', 'argument'], ex: 'Some people argue that…' },
      { q: 'One advantage of cycling is ___ it is cheap.', choices: ['that', 'what', 'because'], ex: 'One advantage of… is that…' },
      { q: 'A major ___ of city life is the noise.', choices: ['drawback', 'solution', 'reason'], ex: 'A bad point: a drawback.' },
      { q: 'Stress can lead ___ health problems.', choices: ['to', 'at', 'on'], ex: 'lead to + result.' },
      { q: 'More traffic results ___ more pollution.', choices: ['in', 'to', 'at'], ex: 'result in + result.' },
      { q: 'The best way to solve this problem is ___ more buses.', choices: ['to provide', 'provide', 'provided'], ex: 'The best way… is + to + verb.' },
      { q: 'It was a cold winter evening ___ the phone rang.', choices: ['when', 'where', 'which'], ex: 'It was a… when… (a time).' },
      { q: '(balanced conclusion) ___, city life has both benefits and drawbacks.', choices: ['All things considered', 'Suddenly', 'On the left'], ex: 'A balanced conclusion: All things considered.' }
    ]
  },

  build: [
    { para: true, tiles: ['It was a cold winter evening when the lights went out.', 'At first, we thought it was a short power cut.', 'Then, we heard a strange noise outside.', 'In the end, it was only our neighbour\'s cat.'], skill: 'organ' },
    { para: true, tiles: ['My grandmother\'s kitchen is the warmest room in the house.', 'As you enter, you see a big wooden table in the middle.', 'Behind it, there is an old oven where she bakes bread.', 'Above the oven, colourful plates hang on the wall.', 'To sum up, this kitchen is full of warmth and memories.'], skill: 'organ' },
    { para: true, tiles: ['In my opinion, every student should learn to swim.', 'Firstly, swimming is an important safety skill.', 'Secondly, it is an excellent exercise for the whole body.', 'For these reasons, swimming lessons should be part of school life.'], skill: 'argue' },
    { para: true, tiles: ['Mobile phones should not be banned in schools.', 'Some people argue that phones distract students.', 'However, phones can be useful learning tools.', 'For example, students can look up words or check information.', 'Therefore, schools should teach students to use phones responsibly.'], skill: 'argue' },
    { para: true, tiles: ['Living in a big city has both advantages and disadvantages.', 'One advantage is that there are many jobs and services.', 'Another advantage is the wide choice of entertainment.', 'On the other hand, a major drawback is the high cost of living.', 'All things considered, city life suits some people better than others.'], skill: 'organ' },
    { para: true, tiles: ['Many teenagers do not get enough sleep.', 'This problem is mainly caused by using phones late at night.', 'One possible solution would be to switch off screens an hour before bed.', 'In addition, parents could keep phones outside the bedroom.', 'If teenagers follow this advice, they will feel more rested.'], skill: 'lang' }
  ],

  write: {
    task: 'Write an advantages and disadvantages paragraph (100–140 words) about social media for teenagers.',
    include: ['a topic sentence that announces both sides;', 'at least two advantages and one disadvantage, with explanations or examples;', 'expressions such as One advantage of… is that… · On the other hand, a major drawback is…;', 'a balanced conclusion (All things considered, …).'],
    min: 100, max: 140,
    checklist: ['My topic sentence says I will discuss advantages and disadvantages.', 'I gave at least two advantages with explanations or examples.',
      'I gave at least one disadvantage, introduced with On the other hand or However.', 'I used expressions such as One advantage of… is that… and A major drawback is…',
      'My points are in a logical order: advantages first, then disadvantages.', 'My concluding sentence gives a balanced final view (All things considered…).',
      'Grammar, capital letters and punctuation are correct.'],
    model: 'Social media has both advantages and disadvantages for teenagers. One advantage is that it helps young people stay in touch with friends and family, even when they live far away. Another benefit is that it gives access to useful information, such as educational videos and news. On the other hand, a major drawback is that it can be addictive. Many teenagers spend hours scrolling instead of studying or sleeping. Moreover, some users face cyberbullying, which can damage their confidence. All things considered, social media can be a useful tool, as long as teenagers use it wisely and limit their screen time.',
    modelNote: 'Topic sentence (both sides) → 2 advantages → 2 drawbacks (On the other hand, Moreover) → balanced conclusion (All things considered).'
  }
};
