/* Writing Academy · Level 6: Developing Cohesion and Coherence. Content approved by the teacher (LEVELS_6_7_DRAFT.md, Nov 2026).
   Same format as level1.js: the FIRST choice is the correct one; mistake "wrong" = 0-based word index; build tiles in correct order.
   Build items with para: true are Paragraph Architect items (each tile is a whole sentence). */
(window.WA_LEVELS = window.WA_LEVELS || {})[6] = {
  n: 6,
  title: 'Developing Cohesion and Coherence',
  stage: 'Development',
  target: 'Make sentences flow naturally and logically.',
  skills: {
    seq:    { name: 'Sequencing', review: 'Read Learn card 1 again, then redo Practise A and the sentence-order items in Build.' },
    examp:  { name: 'Examples & clarifying', review: 'Read Learn card 2 again, then redo Practise B.' },
    summ:   { name: 'Summarising', review: 'Read Learn card 3 again, then redo Practise C.' },
    ref:    { name: 'Reference & avoiding repetition', review: 'Read Learn cards 4 and 5 again, then redo Practise D.' },
    frames: { name: 'Frames & chunks', review: 'Go through the Memorise flashcards again, then redo the Memorise questions.' }
  },

  learn: [
    { title: 'Sequencing', skill: 'seq',
      points: ['Start: <b>First (of all), · To begin with,</b> → Middle: <b>Then, · Next, · After that, · Subsequently,</b> → End: <b>Finally, · In the end,</b>',
        'Listing ideas: <b>Firstly, … Secondly, … Finally, …</b>',
        '<i>First, I wash my face. Then, I have breakfast. Finally, I walk to school.</i>'],
      check: { q: '___, boil some water. Then, add the tea. Finally, add the sugar.', choices: ['First', 'Finally', 'In short'],
        ex: 'The first step: First.' } },
    { title: 'Examples and clarifying', skill: 'examp',
      points: ['Examples: <b>For example, / For instance,</b> + sentence · <b>such as</b> + nouns.',
        'Clarifying (saying the same idea more simply): <b>In other words, · That is to say, · This means that …</b>',
        '<i>My brother is a vegetarian. <b>In other words,</b> he does not eat meat.</i>'],
      check: { q: 'The museum is free for students. ___, students do not pay to enter.', choices: ['In other words', 'For example', 'Finally'],
        ex: 'The second sentence says the same thing more simply: In other words.' } },
    { title: 'Summarising', skill: 'summ',
      points: ['<b>In short, · To sum up, · Overall, · All in all, · In conclusion,</b> close a paragraph or a text.',
        'The summary repeats the main idea briefly. It does not add a new idea.'],
      check: { q: '(last sentence of a text about a school trip) ___, the trip was tiring but unforgettable.', choices: ['To sum up', 'For instance', 'Next'],
        ex: 'The last sentence sums up the text: To sum up.' } },
    { title: 'Reference words', skill: 'ref',
      points: ['Refer back instead of repeating: <b>it, they, them, this, these, there, his, her, its, their</b>.',
        '<b>This / These + noun</b> sums up an idea: <i>Many people waste water. <b>This habit</b> must change.</i>',
        '<i>Sara bought a new phone. <s>The phone</s> <b>It</b> is very light.</i>'],
      check: { q: 'Many teenagers spend hours online. ___ habit can affect their sleep.', choices: ['This', 'These', 'Those'],
        ex: '"habit" is singular and refers back to the idea just mentioned: This habit.' } },
    { title: 'Synonyms and topic words', skill: 'ref',
      points: ['Don\'t repeat the same noun: <i>car → vehicle · city → town · smartphone → phone, device · exam → test</i>.',
        'Use words from the same topic: <i>environment → pollution, waste, recycle, protect</i>.'],
      check: { q: 'Choose the best second sentence after: "Marrakech attracts millions of tourists."', choices: ['The city is famous for its markets.', 'Marrakech is famous for Marrakech\'s markets.', 'It are famous for its markets.'],
        ex: '"The city" avoids repeating Marrakech, and "its" refers back to it.' } }
  ],

  practise: [
    { key: 'A', title: 'Sequencing', skill: 'seq', type: 'choice', items: [
      { q: 'How to make mint tea: ___, boil the water. Then, rinse the green tea.', choices: ['First', 'Finally', 'Overall'], ex: 'The first step: First.' },
      { q: 'First, I had breakfast. ___, I took the bus to school.', choices: ['Then', 'To sum up', 'For example'], ex: 'The next action: Then.' },
      { q: 'We packed our bags, and ___ we left for the airport.', choices: ['then', 'for instance', 'in other words'], ex: 'The next action: then.' },
      { q: '(last sentence of the story) ___, after six hours, we arrived in Marrakech.', choices: ['Finally', 'First', 'For example'], ex: 'The last event: Finally.' },
      { q: 'Choose the correct order of sequencers.', choices: ['First → Next → Finally', 'Finally → First → Next', 'Next → Finally → First'], ex: 'Start → middle → end.' },
      { q: 'There are two reasons why I like sport. ___, it keeps me fit. Secondly, it helps me relax.', choices: ['Firstly', 'Finally', 'In short'], ex: 'Firstly … Secondly …' }
    ] },
    { key: 'B', title: 'Examples and clarifying', skill: 'examp', type: 'choice', items: [
      { q: 'Some fruits, ___ oranges and lemons, are rich in vitamin C.', choices: ['such as', 'in other words', 'finally'], ex: 'such as + nouns gives examples.' },
      { q: 'Many jobs need English. ___, pilots must speak it fluently.', choices: ['For instance', 'In other words', 'Finally'], ex: 'Pilots are an example of such a job: For instance.' },
      { q: 'My brother is a vegetarian. ___, he does not eat meat.', choices: ['In other words', 'For instance', 'Finally'], ex: 'The same idea said more simply: In other words.' },
      { q: 'Recycling saves energy. ___ fewer new materials are needed.', choices: ['This means that', 'For example', 'Such as'], ex: 'This means that + a clause explains the idea.' },
      { q: 'I enjoy outdoor activities, ___ hiking and cycling.', choices: ['such as', 'in other words', 'this means that'], ex: 'such as + nouns gives examples.' },
      { q: 'The library is closed on Sundays. ___, you can only borrow books from Monday to Saturday.', choices: ['In other words', 'For example', 'Such as'], ex: 'The same fact said another way: In other words.' }
    ] },
    { key: 'C', title: 'Summarising', skill: 'summ', type: 'choice', items: [
      { q: '(last sentence) ___, social media has both advantages and disadvantages.', choices: ['Overall', 'For example', 'Next'], ex: 'A summary at the end: Overall.' },
      { q: '(last sentence) ___, the journey was long but unforgettable.', choices: ['To sum up', 'For instance', 'Then'], ex: 'A summary at the end: To sum up.' },
      { q: 'Choose the best concluding sentence for a text about the benefits of reading.', choices: ['In short, reading is one of the best habits we can have.', 'For example, I read every night.', 'First, reading improves vocabulary.'], ex: 'It sums up the main idea with In short.' },
      { q: 'Choose the correct sentence.', choices: ['To sum up, exercise makes us healthier and happier.', 'To sum up, for example, exercise is good.', 'To sum up exercise, makes us healthier.'], ex: 'To sum up + comma + the main idea.' }
    ] },
    { key: 'D', title: 'Reference and avoiding repetition', skill: 'ref', type: 'choice', items: [
      { q: 'Sara bought a new laptop. ___ is very light.', choices: ['It', 'They', 'She'], ex: 'The laptop → It.' },
      { q: 'My cousins live in Canada. I visit ___ every summer.', choices: ['them', 'they', 'it'], ex: 'My cousins (object) → them.' },
      { q: 'Many people throw plastic into the sea. ___ problem is getting worse.', choices: ['This', 'These', 'Those'], ex: 'One problem, just mentioned: This problem.' },
      { q: 'We went to Ifrane last winter. We stayed ___ for a week.', choices: ['there', 'it', 'them'], ex: 'A place → there.' },
      { q: 'Ahmed and Karim are brothers. ___ both play in the school team.', choices: ['They', 'He', 'Them'], ex: 'Two people (subject) → They.' },
      { q: 'Rewrite without repetition: "Smartphones are useful. Smartphones help us communicate. Smartphones can also be addictive."', choices: ['Smartphones are useful because they help us communicate. However, these devices can also be addictive.', 'Smartphones are useful. Smartphones help us communicate. However, smartphones can also be addictive.', 'Smartphones are useful because it help us communicate. However, this device can also be addictive.'], ex: '"they" and "these devices" refer back to smartphones (plural).' },
      { q: 'Marrakech is a popular destination. Every year, the ___ welcomes millions of visitors.', choices: ['city', 'village', 'country'], ex: 'Marrakech is a city: a synonym that refers back.' },
      { q: 'Cars pollute the air. These ___ also make cities noisy.', choices: ['vehicles', 'bicycles', 'trees'], ex: 'vehicles = a synonym for cars.' }
    ] },
    { key: 'E', title: 'Find the mistake: tap the wrong word', type: 'mistake', items: [
      { words: 'My sister loves animals. He wants to be a vet.', wrong: 4, fix: 'She', skill: 'ref', ex: 'My sister → She.' },
      { words: 'These problem is very serious.', wrong: 0, fix: 'This', skill: 'ref', ex: '"problem" is singular: This problem.' },
      { words: 'First, cut the vegetables. Finally, put them in a pot. Then, add water.', wrong: 4, fix: 'Next', skill: 'seq', ex: 'Finally is for the last step; this is a middle step: Next.' },
      { words: 'Tourists love Chefchaouen because of their blue streets.', wrong: 5, fix: 'its', skill: 'ref', ex: 'Chefchaouen is one town → its streets.' },
      { words: 'Many animals, so as lions and tigers, are in danger.', wrong: 2, fix: 'such', skill: 'examp', ex: 'Examples: such as + nouns.' },
      { words: 'Karim and I went to the market. Them bought vegetables.', wrong: 7, fix: 'We', skill: 'ref', ex: 'Karim and I (subject) → We.' }
    ] }
  ],

  memorise: {
    frames: [
      { f: 'First of all, …', e: 'First of all, choose a quiet place to study.' },
      { f: 'After that, / Next, …', e: 'After that, make a plan for the week.' },
      { f: 'Finally, …', e: 'Finally, review your notes before the test.' },
      { f: 'For instance, + sentence', e: 'Many jobs need English. For instance, pilots use it every day.' },
      { f: 'In other words, …', e: 'He is bilingual. In other words, he speaks two languages.' },
      { f: 'This means that …', e: 'Recycling saves energy. This means that we pollute less.' },
      { f: 'This / These + noun (referring back)', e: 'Many people waste water. This habit must change.' },
      { f: 'To sum up, / Overall, …', e: 'To sum up, sport is good for body and mind.' },
      { f: 'Another important point to consider is …', e: 'Another important point to consider is the cost.' },
      { f: 'This shows how important it is to …', e: 'This shows how important it is to protect nature.' }
    ],
    quiz: [
      { q: '___ of all, choose a quiet place.', choices: ['First', 'Finally', 'Overall'], ex: 'First of all = the first step.' },
      { q: '(last step) ___, review your notes before the test.', choices: ['Finally', 'First of all', 'For instance'], ex: 'The last step: Finally.' },
      { q: 'Many jobs need English. ___, pilots use it every day.', choices: ['For instance', 'In other words', 'Finally'], ex: 'An example: For instance.' },
      { q: 'He is bilingual. ___, he speaks two languages.', choices: ['In other words', 'For instance', 'First'], ex: 'The same idea more simply: In other words.' },
      { q: 'Recycling saves energy. This ___ that we pollute less.', choices: ['means', 'mean', 'meaning'], ex: 'This (singular) → means.' },
      { q: 'Many people waste water. ___ habit must change.', choices: ['This', 'These', 'Those'], ex: 'One habit, just mentioned: This habit.' },
      { q: '___, sport is good for body and mind.', choices: ['To sum up', 'For example', 'Next'], ex: 'A summary: To sum up.' },
      { q: 'Another important point to ___ is the cost.', choices: ['consider', 'considering', 'considered'], ex: 'point to + base verb: to consider.' },
      { q: 'This shows how important it is ___ nature.', choices: ['to protect', 'protecting', 'protect'], ex: 'it is important + to + verb.' },
      { q: 'My cousins came yesterday. I took ___ to the beach.', choices: ['them', 'they', 'their'], ex: 'My cousins (object) → them.' }
    ]
  },

  build: [
    { tiles: ['First', 'of', 'all', ',', 'boil', 'the', 'water', '.'], skill: 'seq' },
    { tiles: ['After', 'that', ',', 'we', 'visited', 'the', 'old', 'medina', '.'], skill: 'seq' },
    { tiles: ['Finally', ',', 'we', 'arrived', 'at', 'the', 'hotel', '.'], skill: 'seq' },
    { tiles: ['Some', 'fruits', ',', 'such', 'as', 'oranges', ',', 'are', 'rich', 'in', 'vitamin', 'C', '.'], skill: 'examp' },
    { tiles: ['In', 'other', 'words', ',', 'he', 'speaks', 'two', 'languages', '.'], skill: 'examp' },
    { tiles: ['This', 'problem', 'is', 'getting', 'worse', 'every', 'year', '.'], skill: 'ref' },
    { tiles: ['To', 'sum', 'up', ',', 'the', 'trip', 'was', 'unforgettable', '.'], skill: 'summ' },
    { tiles: ['This', 'shows', 'how', 'important', 'it', 'is', 'to', 'recycle', '.'], skill: 'frames' },
    { para: true, tiles: ['First, I wash my face.', 'Then, I have breakfast with my family.', 'After that, I walk to school.', 'Finally, I arrive at eight o\'clock.'], skill: 'seq' },
    { para: true, tiles: ['Yesterday, I lost my keys.', 'I looked for them everywhere.', 'In the end, I found them in my bag.'], skill: 'ref' },
    { para: true, tiles: ['Many students feel stressed before exams.', 'This stress can affect their sleep.', 'As a result, they feel tired during the test.'], skill: 'ref' },
    { para: true, tiles: ['There are two reasons why I love summer.', 'Firstly, there is no school.', 'Secondly, I can swim in the sea every day.', 'Overall, it is my favourite season.'], skill: 'summ' }
  ],

  write: {
    task: 'Describe how you prepare for an important exam (70–110 words).',
    include: ['sequencers (First of all, Next, After that, Finally);', 'one example (for instance, such as) and one clarification (In other words, This means that);', 'reference words (this, it, they) and a synonym instead of repeating a noun;', 'a summarising last sentence (To sum up, Overall, In short).'],
    min: 70, max: 110,
    checklist: ['I used sequencers to show the order (First of all, Next, After that, Finally).', 'I gave at least one example (for example, for instance, such as).',
      'I explained or clarified an idea (In other words, This means that).', 'I used it, they, this, these to refer back instead of repeating nouns.',
      'I used a different word instead of repeating the same noun (exam → test).', 'My last sentence sums up the text (To sum up, Overall, In short).',
      'A linker at the start of a sentence is followed by a comma.'],
    model: 'Before an important exam, I follow a simple plan. First of all, I make a timetable for the last two weeks. This helps me to organise my revision. Next, I summarise each lesson on small cards, such as vocabulary lists and grammar rules. After that, I practise with old exam papers. In other words, I test myself before the real test. The night before, I go to bed early because a tired brain makes mistakes. Finally, I check that my pens and ID card are ready. Overall, good preparation makes me calm and confident.',
    modelNote: 'Sequencers: First of all, Next, After that, Finally · Example: such as · Clarifying: In other words · Reference: This · Synonym: exam → test · Summary: Overall'
  }
};
