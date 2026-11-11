/* Writing Academy · Level 10: Independent Exam Writing. Content approved by the teacher (LEVELS_8_10_DRAFT.md, Nov 2026).
   Same format as level1.js: the FIRST choice is the correct one; mistake "wrong" = 0-based word index.
   Build is Paragraph Architect (para: true). The model answer keeps its line breaks (\n). */
(window.WA_LEVELS = window.WA_LEVELS || {})[10] = {
  n: 10,
  title: 'Independent Exam Writing',
  stage: 'Mastery',
  target: 'Independently produce coherent, accurate and well-developed exam responses about unfamiliar topics.',
  skills: {
    prompt: { name: 'Understanding the prompt', review: 'Read Learn card 1 again, then redo Practise A.' },
    plan:   { name: 'Planning', review: 'Read Learn cards 2 and 4 again, then redo Practise B and Build.' },
    lang:   { name: 'Choosing language', review: 'Read Learn card 3 again, then redo Practise C.' },
    edit:   { name: 'Revising & editing', review: 'Read Learn card 5 again, then redo Practise D and E.' },
    frames: { name: 'Exam toolkit', review: 'Go through the Memorise flashcards again, then redo the Memorise questions.' }
  },

  learn: [
    { title: 'Read the prompt', skill: 'prompt',
      points: ['Underline: <b>TOPIC</b> (what about?) · <b>PURPOSE</b> (inform, persuade, describe, narrate, complain, invite) · <b>AUDIENCE</b> (friend, manager, magazine readers) · <b>GENRE</b> (email, article, story, paragraph) · <b>LENGTH</b>.',
        '<i>"Your school magazine wants articles about ways to protect the environment. Write an article (150 words)."</i> → topic: protecting the environment · purpose: give ideas · audience: students · genre: article · 150 words.'],
      check: { q: 'In this prompt, who is the audience?', choices: ['students who read the school magazine', 'your best friend', 'only the head teacher'],
        ex: 'A school magazine is read by the students.' } },
    { title: 'Brainstorm and plan (about 5 minutes)', skill: 'plan',
      points: ['Write down ideas quickly, keep the best 2 or 3 and put them in order.',
        'Plan: <b>introduction / topic sentence → point 1 + example → point 2 + example → conclusion</b> (or the structure of the genre).'],
      check: { q: 'What should you do FIRST in the exam?', choices: ['read the prompt carefully and plan', 'start writing the conclusion', 'count the words'],
        ex: 'Understand the task and plan before writing.' } },
    { title: 'Choose the right language', skill: 'lang',
      points: ['The <b>register</b> must match the reader: formal for a manager, friendly for a friend.',
        'Use topic vocabulary, linkers that fit the meaning, and the chunks you know. Avoid repetition.'],
      check: { q: 'An email to a hotel manager:', choices: ['I would be grateful if you could confirm my booking.', 'Hey, confirm my booking ASAP!', 'Gonna book a room, OK?'],
        ex: 'A manager needs a formal, polite register.' } },
    { title: 'Write: answer the whole prompt', skill: 'plan',
      points: ['Answer <b>every</b> part of the prompt, use paragraphs and respect the word count (about ±10%).',
        'Time for a 40-minute task: <b>5 minutes planning · 30 minutes writing · 5 minutes checking</b>.'],
      check: { q: 'The prompt asks for 120 words. Which length is acceptable?', choices: ['about 110–130 words', '50 words', '300 words'],
        ex: 'About ±10% of the required length.' } },
    { title: 'Revise and edit', skill: 'edit',
      points: ['Check in this order: <b>content</b> (all points answered?) → <b>organisation</b> (paragraphs, linkers) → <b>grammar</b> (tenses, agreement) → <b>vocabulary</b> (repetition, spelling) → <b>punctuation</b> (capitals, full stops, commas).',
        'Common errors: ✗ <i>he go</i> · ✗ <i>informations</i> · ✗ <i>peoples</i> · ✗ <i>I am agree</i>.'],
      check: { q: 'Which sentence is correct?', choices: ['I agree with you.', 'I am agree with you.', 'I\'m agree with you.'],
        ex: '"agree" is a verb: I agree (no am).' } }
  ],

  practise: [
    { key: 'A', title: 'Analyse the prompt', skill: 'prompt', type: 'choice', items: [
      { q: 'Prompt: "You recently stayed at a hotel and were unhappy with the service. Write an email to the manager (120–150 words)." What is the genre?', choices: ['Formal email', 'Informal email', 'Story', 'Article'], ex: 'An email to a manager you don\'t know: formal.' },
      { q: 'Prompt: "You recently stayed at a hotel and were unhappy with the service. Write an email to the manager." What is the purpose?', choices: ['To complain', 'To invite', 'To tell a story'], ex: 'You were unhappy with the service: a complaint.' },
      { q: 'Prompt: "You recently stayed at a hotel and were unhappy with the service. Write an email to the manager." Who is the audience?', choices: ['The hotel manager', 'Your friend', 'Magazine readers'], ex: 'The email goes to the manager.' },
      { q: 'Prompt: "A website for teenagers asks: \'What is the best way to learn a foreign language?\' Write an article giving your ideas." What is the genre?', choices: ['Article', 'Formal email', 'Story'], ex: 'The prompt asks for an article.' },
      { q: 'Prompt: "A website for teenagers asks: \'What is the best way to learn a foreign language?\' Write an article." Who is the audience?', choices: ['Teenagers who read the website', 'Only your teacher', 'A hotel manager'], ex: 'A website for teenagers.' },
      { q: 'Prompt: "A website for teenagers asks: \'What is the best way to learn a foreign language?\' Write an article." What tone should you use?', choices: ['Semi-formal and lively', 'Very formal, like a complaint', 'Text-message style with slang'], ex: 'Articles for teenagers are lively but not slangy.' },
      { q: 'Prompt: "Write a story that begins: \'As soon as I opened the box, I knew my life would change.\'" Which tenses will you mainly use?', choices: ['Past tenses', 'Future tenses', 'The present simple only'], ex: 'A story is told in the past.' },
      { q: 'Prompt: "Write a story that begins: \'As soon as I opened the box, I knew my life would change.\'" What must you do?', choices: ['Start with the exact sentence given', 'Write a formal email', 'List advantages and disadvantages'], ex: 'Use the given first sentence exactly.' }
    ] },
    { key: 'B', title: 'Planning', skill: 'plan', type: 'choice', items: [
      { q: 'The best order:', choices: ['read the prompt → brainstorm → choose and order ideas → write → check', 'write → check → read the prompt', 'brainstorm → write → read the prompt'], ex: 'Understand, plan, write, then check.' },
      { q: 'Prompt: the advantages and disadvantages of online shopping. Which plan fits?', choices: ['introduction → 2 advantages → 2 disadvantages → balanced conclusion', 'introduction → a story about buying shoes → the end', 'three advantages only'], ex: 'Both sides, then a balanced conclusion.' },
      { q: 'Prompt: how to reduce stress before exams. Which idea is OFF-topic?', choices: ['The history of exams in China', 'Sleep well the night before', 'Make a revision timetable', 'Take short breaks'], ex: 'History does not help reduce stress.' },
      { q: 'A plan for a story:', choices: ['setting → problem → climax → ending', 'greeting → reason for writing → Yours faithfully', 'advantages → disadvantages → conclusion'], ex: 'The structure of a story.' },
      { q: 'In a 40-minute task, planning should take…', choices: ['about 5 minutes', 'no time at all', '30 minutes'], ex: '5 minutes planning, 30 writing, 5 checking.' },
      { q: 'Prompt: an email inviting a friend to your birthday party. The email must include…', choices: ['the date, the place and a friendly invitation', 'your CV', 'a formal complaint'], ex: 'An invitation needs the details and a friendly tone.' }
    ] },
    { key: 'C', title: 'Choosing language', skill: 'lang', type: 'choice', items: [
      { q: 'An email to your teacher asking for advice:', choices: ['Could you give me some advice about…?', 'Yo, help me with…', 'Gimme some advice!'], ex: 'Polite and respectful for a teacher.' },
      { q: 'The best opening for an article for teenagers:', choices: ['Do you ever feel that there aren\'t enough hours in the day?', 'Dear Sir or Madam,', 'In conclusion, time is important.'], ex: 'A question grabs the reader.' },
      { q: 'Avoid repetition: "Smoking is dangerous. Smoking causes cancer."', choices: ['Smoking is dangerous because it causes cancer.', 'Smoking is dangerous. Smoking causes cancer.', 'Smoking is dangerous, smoking causes cancer.'], ex: 'One sentence with because and the pronoun it.' },
      { q: 'Public transport is cheap. ___, it reduces pollution.', choices: ['Moreover', 'However', 'For example'], ex: 'Another good point: Moreover.' },
      { q: 'The film was ___; I nearly fell asleep.', choices: ['boring', 'bored', 'bore'], ex: 'The film causes the feeling: boring.' },
      { q: 'The best chunk for the conclusion of an opinion text:', choices: ['Taking everything into consideration, I believe that…', 'Once upon a time…', 'Thanks for your email!'], ex: 'A concluding chunk for an opinion.' }
    ] },
    { key: 'D', title: 'Edit: choose the correct sentence', skill: 'edit', type: 'choice', items: [
      { q: 'Choose the correct sentence.', choices: ['I agree with you.', 'I am agree with you.', 'I\'m agree with you.'], ex: '"agree" is a verb: no am.' },
      { q: 'Choose the correct sentence.', choices: ['She doesn\'t like fast food.', 'She don\'t like fast food.', 'She doesn\'t likes fast food.'], ex: 'She → doesn\'t + base verb.' },
      { q: 'Choose the correct sentence.', choices: ['I need some information about the course.', 'I need some informations about the course.', 'I need an information about the course.'], ex: '"information" is uncountable.' },
      { q: 'Choose the correct sentence.', choices: ['Many people think that it is useful.', 'Many peoples think that it is useful.', 'Many people thinks that it is useful.'], ex: '"people" is already plural and takes think.' },
      { q: 'Choose the correct sentence.', choices: ['Although it was raining, we went out.', 'Although it was raining, but we went out.', 'Despite it was raining, we went out.'], ex: 'One linker; despite cannot take a clause.' },
      { q: 'Choose the correct sentence.', choices: ['I have been studying English for five years.', 'I am studying English since five years.', 'I study English since five years.'], ex: 'An action from the past until now: have been + -ing + for.' }
    ] },
    { key: 'E', title: 'Find the mistake: tap the wrong word', type: 'mistake', items: [
      { words: 'He go to school by bus every day.', wrong: 1, fix: 'goes', skill: 'edit', ex: 'He → goes.' },
      { words: 'I am interesting in learning languages.', wrong: 2, fix: 'interested', skill: 'edit', ex: 'A feeling: interested in.' },
      { words: 'I look forward to meet you.', wrong: 4, fix: 'meeting', skill: 'edit', ex: 'look forward to + verb-ing.' },
      { words: 'It depends of the weather.', wrong: 2, fix: 'on', skill: 'edit', ex: 'depend on.' }
    ] }
  ],

  memorise: {
    frames: [
      { f: 'Topic · Purpose · Audience · Genre · Length', e: 'Email · complain · hotel manager · formal · 120 words' },
      { f: 'Introduction → point 1 + example → point 2 + example → conclusion', e: 'The basic plan for any paragraph or text.' },
      { f: 'It is widely believed that …', e: 'It is widely believed that sport is good for health.' },
      { f: 'One of the main reasons for this is that …', e: 'One of the main reasons for this is that it saves time.' },
      { f: 'Another important point to consider is …', e: 'Another important point to consider is the cost.' },
      { f: 'This can have a positive / negative impact on …', e: 'This can have a negative impact on students\' sleep.' },
      { f: 'For instance, …', e: 'For instance, students can practise with online tests.' },
      { f: 'On the other hand, …', e: 'Cities offer many jobs. On the other hand, they are expensive.' },
      { f: 'Taking everything into consideration, …', e: 'Taking everything into consideration, I support the idea.' },
      { f: 'Check: content → organisation → grammar → vocabulary → punctuation', e: 'The last 5 minutes of the exam.' }
    ],
    quiz: [
      { q: 'Before writing, identify the topic, purpose, ___ and genre.', choices: ['audience', 'title', 'font'], ex: 'Who will read it: the audience.' },
      { q: 'It is widely ___ that sport is good for health.', choices: ['believed', 'believe', 'belief'], ex: 'It is widely believed that…' },
      { q: 'One of the main reasons for this is ___ it saves time.', choices: ['that', 'because', 'why'], ex: '…is that + clause.' },
      { q: 'Another important point ___ consider is the cost.', choices: ['to', 'for', 'of'], ex: 'point to consider.' },
      { q: 'This can have a negative impact ___ students.', choices: ['on', 'to', 'at'], ex: 'an impact on…' },
      { q: '(an example) ___, students can practise with online tests.', choices: ['For instance', 'On the other hand', 'Taking everything into consideration'], ex: 'An example: For instance.' },
      { q: 'Cities offer many jobs. ___, they are expensive.', choices: ['On the other hand', 'For instance', 'Moreover'], ex: 'The other side: On the other hand.' },
      { q: '___ everything into consideration, I support the idea.', choices: ['Taking', 'Take', 'Taken'], ex: 'Taking everything into consideration, …' },
      { q: 'For a 120-word task, write about ___ words.', choices: ['110–130', '50', '300'], ex: 'About ±10%.' },
      { q: 'The last thing to do in the exam is to ___.', choices: ['check your text for mistakes', 'start a new plan', 'read the prompt for the first time'], ex: 'Keep 5 minutes to check.' }
    ]
  },

  build: [
    { para: true, tiles: ['Read the prompt and underline the key words.', 'Brainstorm ideas for two or three minutes.', 'Choose the best ideas and put them in order.', 'Write your text, paragraph by paragraph.', 'Check your grammar, spelling and word count.'], skill: 'plan' },
    { para: true, tiles: ['It is widely believed that students should wear a school uniform.', 'One of the main reasons for this is that uniforms make all students equal.', 'Another important point to consider is that they save families money.', 'On the other hand, some students feel that uniforms limit their personality.', 'Taking everything into consideration, I believe uniforms do more good than harm.'], skill: 'plan' },
    { para: true, tiles: ['Traffic jams are a growing problem in Moroccan cities.', 'They waste time and pollute the air.', 'One possible solution would be to build more tram lines.', 'This could have a positive impact on both the environment and people\'s health.'], skill: 'plan' },
    { para: true, tiles: ['Hi Yassine,', 'Thanks for your email! It was great to hear your news.', 'I\'m having a party next Saturday to celebrate my birthday.', 'It starts at six at my house, and there will be lots of food and music.', 'I really hope you can come. Write back soon!'], skill: 'lang' },
    { para: true, tiles: ['As soon as I opened the box, I knew my life would change.', 'Inside, there was an old map and a letter from my grandfather.', 'The letter said that he had hidden a treasure in our village.', 'The next morning, I followed the map to an old olive tree.', 'Under the tree, I found a box of family photos: the real treasure.'], skill: 'prompt' },
    { para: true, tiles: ['Learning a Language: Three Tips That Work', 'Have you ever tried to learn a language and given up?', 'First, practise a little every day instead of a lot once a week.', 'Second, watch films and series with subtitles.', 'Finally, don\'t be afraid of making mistakes.'], skill: 'lang' }
  ],

  write: {
    task: 'Exam task: Your school is organising a debate. Write an article for the school website (150–180 words): "Should mobile phones be allowed in class?" Give your opinion with reasons and examples. Plan for 5 minutes before you write, and check your text at the end.',
    include: ['a title and an opening that grabs the reader;', 'your opinion with two reasons and examples;', 'the other side (On the other hand, …);', 'a conclusion (Taking everything into consideration, …).'],
    min: 150, max: 180,
    checklist: ['I answered the prompt: topic, purpose (my opinion), audience (website readers), genre (article).', 'My article has a title and an opening that grabs the reader.',
      'It has clear paragraphs: introduction → reasons with examples → the other side → conclusion.', 'I used linkers and chunks (It is widely believed that…, On the other hand, Taking everything into consideration…).',
      'My tone suits the readers: semi-formal, no slang.', 'My text is 150–180 words.',
      'I checked grammar, spelling, capital letters and punctuation.'],
    model: 'Phones in Class: Friend or Enemy?\nShould students be allowed to use mobile phones in class? It is widely believed that phones only distract young people. However, I believe they can be useful if they are used wisely.\nOne of the main reasons for this is that phones give students instant access to information. For instance, they can look up a difficult word or check a fact in seconds. Another important point to consider is that many educational apps make learning more fun and interactive.\nOn the other hand, some students may play games or chat with friends instead of listening to the teacher. This can have a negative impact on their concentration and their marks.\nTaking everything into consideration, I think phones should be allowed in class, but only when the teacher asks students to use them. With clear rules, these devices can become a powerful learning tool rather than a distraction.',
    modelNote: 'Title → engaging question → opinion → 2 reasons with examples → the other side → conclusion · Chunks: It is widely believed that… / One of the main reasons… / Another important point… / This can have a negative impact on… / Taking everything into consideration…'
  }
};
