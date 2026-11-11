/* Writing Academy · Level 7: Building a Well-Structured Paragraph. Content approved by the teacher (LEVELS_6_7_DRAFT.md, Nov 2026).
   Same format as level1.js: the FIRST choice is the correct one; build tiles in correct order.
   Practise E is Complete the Text (inOrder: the gaps of one paragraph, asked in order).
   Build is Paragraph Architect (para: true, each tile is a whole sentence). */
(window.WA_LEVELS = window.WA_LEVELS || {})[7] = {
  n: 7,
  title: 'Building a Well-Structured Paragraph',
  stage: 'Paragraph',
  target: 'Write one coherent paragraph with a clear main idea.',
  skills: {
    topic:   { name: 'Topic sentence', review: 'Read Learn cards 1 and 2 again, then redo Practise A.' },
    support: { name: 'Supporting sentences', review: 'Read Learn card 3 again, then redo Practise B and E.' },
    conc:    { name: 'Concluding sentence', review: 'Read Learn card 4 again, then redo Practise C.' },
    unity:   { name: 'Unity & organisation', review: 'Read Learn card 5 again, then redo Practise D and Build.' },
    frames:  { name: 'Chunks', review: 'Go through the Memorise flashcards again, then redo the Memorise questions.' }
  },

  learn: [
    { title: 'What is a paragraph?', skill: 'unity',
      points: ['A paragraph develops <b>one main idea</b>.',
        '<b>Topic sentence</b> (the main idea) → <b>supporting sentences</b> (reasons, explanations, examples) → <b>concluding sentence</b>.'],
      check: { q: 'A good paragraph has…', choices: ['one main idea', 'three different topics', 'only examples'],
        ex: 'Everything in a paragraph develops one main idea.' } },
    { title: 'The topic sentence', skill: 'topic',
      points: ['It gives the <b>topic</b> and <b>what you say about it</b>: <i>Living in a big city <b>has several advantages</b>.</i>',
        'Not too general (✗ <i>Cities exist.</i>) and not too specific (✗ <i>My flat has two bedrooms.</i>).'],
      check: { q: 'Choose the best topic sentence.', choices: ['Learning English opens many doors for young Moroccans.', 'English is a language.', 'I learned the word "door" yesterday.'],
        ex: 'It gives the topic (learning English) and the main idea (it opens doors).' } },
    { title: 'Supporting sentences', skill: 'support',
      points: ['Develop each point: <b>point → explanation → example</b>.',
        '<i>One reason is that… · This means that… · For example, …</i>'],
      check: { q: 'Which sentence supports "Sport is good for your health"?', choices: ['For example, running makes your heart stronger.', 'Football was invented in England.', 'My brother prefers chess.'],
        ex: 'It gives an example of how sport helps health.' } },
    { title: 'The concluding sentence', skill: 'conc',
      points: ['It <b>repeats the main idea in different words</b> and can give a final thought or advice.',
        'It often starts with <i>In conclusion, · To sum up, · Overall, · Taking everything into consideration,</i>',
        'It never adds a <b>new</b> idea.'],
      check: { q: 'Choose the best concluding sentence for a paragraph about the benefits of walking.', choices: ['In short, walking is a simple way to stay healthy.', 'Also, swimming is a good sport.', 'For example, I walk to school.'],
        ex: 'It repeats the main idea (walking is healthy) with In short.' } },
    { title: 'Unity and planning', skill: 'unity',
      points: ['<b>Unity:</b> every sentence supports the main idea. Remove sentences that are off-topic.',
        '<b>Plan before writing:</b> topic sentence → 2 or 3 points → an explanation or example for each → conclusion.'],
      check: { q: 'A paragraph about "the benefits of reading": which sentence does NOT belong?', choices: ['My cousin\'s favourite colour is blue.', 'Reading improves your vocabulary.', 'Books help us understand other cultures.'],
        ex: 'Colours have nothing to do with the benefits of reading.' } }
  ],

  practise: [
    { key: 'A', title: 'Choose the best topic sentence', skill: 'topic', type: 'choice', items: [
      { q: 'A paragraph about reasons to learn a second language', choices: ['There are several good reasons to learn a second language.', 'Languages are spoken all over the world.', 'I learned some Spanish words last summer.'], ex: 'It gives the topic and the main idea (several reasons).' },
      { q: 'A paragraph about the advantages of living in the countryside', choices: ['Living in the countryside has many advantages.', 'The countryside is green.', 'My grandfather has three cows.'], ex: 'Topic + main idea (many advantages); the others are too general or too specific.' },
      { q: 'A paragraph about how to stay healthy', choices: ['Staying healthy depends on a few simple habits.', 'Health is a word.', 'I ate an apple this morning.'], ex: 'Topic + main idea (simple habits).' },
      { q: 'A paragraph about the dangers of smartphones for teenagers', choices: ['Smartphones can be harmful to teenagers in several ways.', 'Many smartphones have a camera.', 'My phone is black.'], ex: 'Topic + main idea (harmful in several ways).' },
      { q: 'A paragraph about the importance of breakfast', choices: ['Breakfast is the most important meal of the day for students.', 'Some people eat bread.', 'I had eggs for breakfast today.'], ex: 'Topic + main idea (the most important meal).' },
      { q: 'A paragraph about Moroccan hospitality', choices: ['Moroccans are famous for the way they welcome guests.', 'Morocco is in North Africa.', 'Yesterday my aunt made tea.'], ex: 'Topic + main idea (famous for welcoming guests).' }
    ] },
    { key: 'B', title: 'Choose the supporting sentence', skill: 'support', type: 'choice', items: [
      { q: 'Topic sentence: "Reading has many benefits."', choices: ['For example, it improves your vocabulary and spelling.', 'Some books are very expensive.', 'My sister prefers watching films.'], ex: 'It gives an example of a benefit.' },
      { q: 'Topic sentence: "Public transport is better for the environment."', choices: ['One bus can replace dozens of cars, so it produces less pollution.', 'My uncle drives a taxi.', 'The bus station is near my school.'], ex: 'It explains why public transport helps the environment.' },
      { q: 'Topic sentence: "Volunteering helps young people develop."', choices: ['It teaches them responsibility and teamwork.', 'Some volunteers are old.', 'The volunteer centre opens at nine.'], ex: 'It says how volunteering helps young people develop.' },
      { q: 'Topic sentence: "Online shopping has some disadvantages."', choices: ['For instance, you cannot try the products before buying them.', 'Online shopping is very popular.', 'I bought shoes online last week.'], ex: 'It gives an example of a disadvantage.' },
      { q: 'Which sentence EXPLAINS the point "Sport reduces stress"?', choices: ['When we exercise, our body produces chemicals that make us feel happier.', 'Football is the most popular sport in Morocco.', 'Some sports are expensive.'], ex: 'It explains how sport reduces stress.' },
      { q: 'Which is a good EXAMPLE for "Technology makes learning easier"?', choices: ['For example, students can watch video lessons at home.', 'For example, technology is expensive.', 'For example, my laptop is grey.'], ex: 'It shows technology making learning easier.' }
    ] },
    { key: 'C', title: 'Choose the concluding sentence', skill: 'conc', type: 'choice', items: [
      { q: 'A paragraph about the benefits of sport', choices: ['In conclusion, regular exercise keeps both our body and our mind healthy.', 'In conclusion, my favourite sport is football.', 'In conclusion, swimming pools are expensive.'], ex: 'It repeats the main idea in different words.' },
      { q: 'A paragraph about the dangers of fast food', choices: ['To sum up, eating too much fast food can seriously damage our health.', 'To sum up, pizza comes from Italy.', 'To sum up, I sometimes eat burgers.'], ex: 'It repeats the main idea (fast food is dangerous).' },
      { q: 'A concluding sentence should…', choices: ['repeat the main idea in different words', 'introduce a new idea', 'give a new example'], ex: 'A conclusion never adds new ideas or examples.' },
      { q: 'A paragraph about learning online', choices: ['Overall, online learning is useful as long as students stay organised.', 'Overall, my internet is slow today.', 'Overall, schools were built a long time ago.'], ex: 'It sums up the main idea with a final thought.' }
    ] },
    { key: 'D', title: 'Unity: which sentence does NOT belong?', skill: 'unity', type: 'choice', items: [
      { q: 'Paragraph: "The benefits of walking"', choices: ['My neighbour has a red car.', 'Walking strengthens your heart.', 'It is also free and easy.', 'It helps you relax after a long day.'], ex: 'The car has nothing to do with the benefits of walking.' },
      { q: 'Paragraph: "Why I love my town"', choices: ['Paris is the capital of France.', 'My town has a beautiful beach.', 'The people are kind and welcoming.', 'There is a lively market every Sunday.'], ex: 'Paris is not about my town.' },
      { q: 'Paragraph: "How to save water at home"', choices: ['Water boils at 100 degrees.', 'Turn off the tap while you brush your teeth.', 'Take short showers.', 'Repair leaking taps quickly.'], ex: 'A science fact, not a way to save water.' },
      { q: 'Paragraph: "The advantages of learning to cook"', choices: ['My brother is very tall.', 'You can eat healthier meals.', 'You save money.', 'You can cook for your family and friends.'], ex: 'Height has nothing to do with cooking.' },
      { q: 'Paragraph: "Traffic problems in big cities"', choices: ['Many people enjoy cycling in the countryside.', 'Traffic jams waste a lot of time.', 'Cars pollute the air.', 'The noise makes people stressed.'], ex: 'The countryside is off-topic in a paragraph about city traffic.' },
      { q: 'These four sentences make one paragraph. Which one is the TOPIC sentence?', choices: ['Mobile phones have changed the way we communicate.', 'For example, we can send messages in seconds.', 'We can also make video calls to family abroad.', 'In short, phones bring people closer.'], skill: 'topic', ex: 'It gives the main idea; the others support it or conclude.' }
    ] },
    { key: 'E', title: 'Complete the Text: a paragraph about Tangier, one gap at a time', skill: 'support', type: 'choice', inOrder: true, items: [
      { q: '(1) There are several ___ why I enjoy living in Tangier.', choices: ['reasons', 'examples', 'results'], skill: 'topic', ex: 'There are several reasons why… (a topic sentence).' },
      { q: '(2) ___, the city is next to the sea, so the weather is pleasant.', choices: ['First of all', 'In conclusion', 'However'], ex: 'The first supporting point: First of all.' },
      { q: '(3) The weather is pleasant. ___, it has a rich history.', choices: ['Secondly', 'For example', 'In short'], ex: 'The second point: Secondly.' },
      { q: '(4) It has a rich history. ___, you can visit the old kasbah.', choices: ['For example', 'However', 'In conclusion'], ex: 'The kasbah is an example of its history.' },
      { q: '(5) (the third and last point) ___, it is close to Spain.', choices: ['Finally', 'Firstly', 'For instance'], ex: 'The last point: Finally.' },
      { q: '(6) Finally, it is close to Spain, ___ people can travel easily.', choices: ['so', 'but', 'although'], ex: 'Easy travel is the result: so.' },
      { q: '(7) (the last sentence) ___, Tangier is a wonderful place to live.', choices: ['In conclusion', 'For instance', 'Secondly'], skill: 'conc', ex: 'The concluding sentence: In conclusion.' },
      { q: '(8) In conclusion, Tangier is a wonderful place ___ live.', choices: ['to', 'for', 'of'], skill: 'conc', ex: 'a place + to + verb.' }
    ] }
  ],

  memorise: {
    frames: [
      { f: 'There are several reasons why …', e: 'There are several reasons why I enjoy sport.' },
      { f: '… has many advantages / disadvantages.', e: 'Living in a city has many advantages.' },
      { f: 'One of the main reasons for this is that …', e: 'One of the main reasons for this is that it saves time.' },
      { f: 'Another important point to consider is …', e: 'Another important point to consider is the cost.' },
      { f: 'It is widely believed that …', e: 'It is widely believed that breakfast is important.' },
      { f: 'There is no doubt that …', e: 'There is no doubt that technology helps students.' },
      { f: 'This can have a positive impact on …', e: 'This can have a positive impact on our health.' },
      { f: 'One possible solution would be to …', e: 'One possible solution would be to use public transport.' },
      { f: 'Taking everything into consideration, …', e: 'Taking everything into consideration, sport is essential.' },
      { f: 'In conclusion, …', e: 'In conclusion, reading is a habit worth developing.' }
    ],
    quiz: [
      { q: 'There are several reasons ___ I enjoy sport.', choices: ['why', 'because', 'what'], ex: 'reasons why + clause.' },
      { q: 'Living in a city has many ___.', choices: ['advantages', 'advantageous', 'advantage'], ex: 'many + plural noun: advantages.' },
      { q: 'One of the main reasons for this ___ that it saves time.', choices: ['is', 'are', 'be'], ex: '"One of…" is singular: is.' },
      { q: 'Another important point to consider ___ the cost.', choices: ['is', 'are', 'it is'], ex: 'One point → is.' },
      { q: 'It is widely ___ that breakfast is important.', choices: ['believed', 'believe', 'believing'], ex: 'It is widely believed that…' },
      { q: 'There is no ___ that technology helps students.', choices: ['doubt', 'doubts', 'doubtful'], ex: 'There is no doubt that…' },
      { q: 'This can have a positive impact ___ our health.', choices: ['on', 'in', 'at'], ex: 'an impact on…' },
      { q: 'One possible solution would be ___ public transport.', choices: ['to use', 'use', 'used'], ex: 'would be + to + verb.' },
      { q: '___ everything into consideration, sport is essential.', choices: ['Taking', 'Take', 'Taken'], ex: 'Taking everything into consideration, …' },
      { q: '(last sentence) ___, reading is a habit worth developing.', choices: ['In conclusion', 'For instance', 'Firstly'], ex: 'The last sentence: In conclusion.' }
    ]
  },

  build: [
    { para: true, tiles: ['There are several reasons why I enjoy reading.', 'First of all, books help me relax after a long day.', 'Secondly, they improve my vocabulary.', 'For example, I learn new words in every novel.', 'In conclusion, reading is my favourite hobby.'], skill: 'unity' },
    { para: true, tiles: ['Living in the countryside has many advantages.', 'Firstly, the air is clean and fresh.', 'Secondly, life is calmer than in the city.', 'Finally, food is often cheaper and healthier.', 'Overall, the countryside is a great place to live.'], skill: 'unity' },
    { para: true, tiles: ['Breakfast is the most important meal of the day for students.', 'It gives them the energy they need in the morning.', 'Without this energy, many students cannot concentrate in class.', 'To sum up, every student should eat a good breakfast.'], skill: 'support' },
    { para: true, tiles: ['Using a smartphone at night can be harmful.', 'The blue light from the screen keeps the brain awake.', 'As a result, many teenagers sleep badly.', 'This lack of sleep then affects their marks at school.', 'In short, phones should stay outside the bedroom at night.'], skill: 'support' },
    { para: true, tiles: ['Learning to cook is a useful skill for young people.', 'One reason is that home-made food is healthier than fast food.', 'Another reason is that cooking saves money.', 'Finally, it is a nice way to share time with family.', 'Taking everything into consideration, every teenager should learn to cook.'], skill: 'conc' },
    { para: true, tiles: ['Traffic is a serious problem in big cities.', 'Every morning, thousands of cars block the main roads.', 'These traffic jams waste a lot of time.', 'One possible solution would be to improve public transport.', 'If buses were faster, fewer people would drive to work.'], skill: 'topic' }
  ],

  write: {
    task: 'Write one paragraph (90–130 words) about the advantages of practising a sport.',
    include: ['a clear topic sentence;', 'two or three supporting points, each with an explanation or an example;', 'a concluding sentence;', 'at least one chunk from Memorise.'],
    min: 90, max: 130,
    checklist: ['My first sentence is a clear topic sentence (the topic + my main idea).', 'I gave two or three supporting points.',
      'I explained each point and gave at least one example.', 'Every sentence is about the main idea (no off-topic sentences).',
      'I used linkers to order my points (Firstly, Secondly, In addition, Finally).', 'My concluding sentence repeats the main idea in different words, with no new idea.',
      'I used at least one chunk from Memorise.'],
    model: 'Practising a sport has many advantages for young people. Firstly, it keeps the body healthy. For example, running or swimming makes the heart and muscles stronger. Secondly, sport is good for the mind. When we exercise, we forget our worries, so we feel calmer and happier. In addition, team sports teach important values such as cooperation and respect. Players learn to win and lose together. There is no doubt that these skills are useful in daily life. Taking everything into consideration, sport is an excellent habit that every teenager should develop.',
    modelNote: 'Topic sentence → 3 points (body, mind, values), each with an explanation or example → concluding sentence · Chunks: There is no doubt that… / Taking everything into consideration…'
  }
};
