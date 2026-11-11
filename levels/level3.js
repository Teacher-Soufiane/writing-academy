/* Writing Academy · Level 3: Expanding and Describing Sentences. Content approved by the teacher (LEVELS_2_3_DRAFT.md, Nov 2026).
   Same format as level1.js: the FIRST choice is the correct one; mistake "wrong" = 0-based word index; build tiles in correct order. */
(window.WA_LEVELS = window.WA_LEVELS || {})[3] = {
  n: 3,
  title: 'Expanding and Describing Sentences',
  stage: 'Foundation',
  target: 'Turn short sentences into richer, more informative sentences.',
  skills: {
    adj:     { name: 'Adjectives & adverbs', review: 'Read Learn card 1 again, then redo Practise A.' },
    order:   { name: 'Adjective order', review: 'Read Learn card 2 again, then redo Practise B.' },
    prep:    { name: 'Time, place & prepositions', review: 'Read Learn cards 3 and 4 again, then redo Practise C.' },
    details: { name: 'Details & examples', review: 'Read Learn card 5 again, then redo Practise D and Build.' },
    frames:  { name: 'Sentence frames', review: 'Go through the Memorise flashcards again, then redo the Memorise questions.' }
  },

  learn: [
    { title: 'Adjectives and adverbs', skill: 'adj',
      points: ['An <b>adjective</b> describes a noun: <i>a <b>careful</b> driver · She is <b>happy</b>.</i>',
        'An <b>adverb</b> describes a verb, often with <b>-ly</b>: <i>He drives <b>carefully</b>.</i>',
        'Irregular: good → <b>well</b> · fast → <b>fast</b> · hard → <b>hard</b> (<i>hardly</i> means "almost not").',
        'After <b>be, look, feel, seem, taste, smell, sound</b>, use an <b>adjective</b>: <i>The soup tastes <b>delicious</b>.</i>'],
      check: { q: 'She sings ___.', choices: ['beautifully', 'beautiful', 'beauty'],
        ex: '"sings" is a verb, so it needs an adverb: beautifully.' } },
    { title: 'Adjective order', skill: 'order',
      points: ['<b>Opinion → size → age → shape → colour → origin → material</b> + noun.',
        '<i>a <b>lovely old wooden</b> table · a <b>big black Moroccan</b> rug</i>',
        'Two or three adjectives are usually enough.'],
      check: { q: 'Choose the correct order.', choices: ['a beautiful small red car', 'a red small beautiful car', 'a small red beautiful car'],
        ex: 'Opinion (beautiful) → size (small) → colour (red).' } },
    { title: 'How, where, when and how often', skill: 'prep',
      points: ['<b>Manner</b> (how): <i>slowly, by bus, with care</i> · <b>Place</b> (where): <i>at home, in the garden</i> · <b>Time</b> (when): <i>yesterday, at 7 o\'clock</i> · <b>Frequency</b> (how often): <i>always, twice a week</i>.',
        'The usual order at the end of a sentence is <b>manner → place → time</b>: <i>She studied <b>hard in the library last night</b>.</i>',
        'Frequency <b>words</b> go before the main verb (<i>I <b>often</b> walk</i>). Frequency <b>phrases</b> go at the end (<i>I swim <b>twice a week</b></i>).'],
      check: { q: 'Choose the correct sentence.', choices: ['We play tennis twice a week.', 'We twice a week play tennis.', 'We play twice a week tennis.'],
        ex: 'A frequency phrase (twice a week) goes at the end, after the object.' } },
    { title: 'Prepositional phrases', skill: 'prep',
      points: ['Time: <b>at</b> 7 o\'clock / night · <b>on</b> Monday / 15 May · <b>in</b> July / 2025 / the morning / summer.',
        'Place: <b>in</b> Rabat / the kitchen · <b>on</b> the table / the wall · <b>at</b> school / the bus stop.',
        'Describing a noun: <i>the girl <b>with long hair</b> · the house <b>next to the mosque</b></i>.'],
      check: { q: 'My birthday is ___ March.', choices: ['in', 'on', 'at'],
        ex: 'Months take in: in March.' } },
    { title: 'Giving details and examples', skill: 'details',
      points: ['Ask <b>who, what, where, when, why, how</b> to grow a sentence: <i>I bought a book.</i> → <i>Last Saturday, I bought an exciting detective novel at the bookshop near my school because I wanted something to read on holiday.</i>',
        '<b>such as</b> + nouns: <i>I like outdoor sports, <b>such as</b> football and swimming.</i>',
        '<b>For example, / For instance,</b> + a full sentence: <i>Some jobs are stressful. <b>For example,</b> nurses often work at night.</i>',
        '<b>especially</b> + noun: <i>I love Moroccan food, <b>especially</b> couscous.</i>'],
      check: { q: 'I enjoy Moroccan dishes, ___ couscous and tajine.', choices: ['such as', 'because', 'so'],
        ex: '"such as" introduces examples (nouns).' } }
  ],

  practise: [
    { key: 'A', title: 'Adjective or adverb?', skill: 'adj', type: 'choice', items: [
      { q: 'My grandmother speaks ___.', choices: ['slowly', 'slow', 'slowness'], ex: '"speaks" is a verb: adverb slowly.' },
      { q: 'This soup tastes ___.', choices: ['delicious', 'deliciously', 'deliciousness'], ex: 'After taste, use an adjective: delicious.' },
      { q: 'Omar is a ___ driver.', choices: ['careful', 'carefully', 'care'], ex: '"driver" is a noun: adjective careful.' },
      { q: 'Omar drives ___.', choices: ['carefully', 'careful', 'caring'], ex: '"drives" is a verb: adverb carefully.' },
      { q: 'She did ___ in the exam.', choices: ['well', 'good', 'goodly'], ex: 'The adverb of good is well.' },
      { q: 'The students worked ___ all year.', choices: ['hard', 'hardly', 'hardness'], ex: 'The adverb is hard; hardly means "almost not".' },
      { q: 'You look ___ today. Did you sleep badly?', choices: ['tired', 'tiredly', 'tiredness'], ex: 'After look, use an adjective: tired.' },
      { q: 'The train arrived ___, so we missed the meeting.', choices: ['late', 'lately', 'lateness'], ex: 'The adverb is late; lately means "recently".' }
    ] },
    { key: 'B', title: 'Adjective order: choose the correct phrase', skill: 'order', type: 'choice', items: [
      { choices: ['a lovely old house', 'an old lovely house', 'a house lovely old'], ex: 'Opinion (lovely) → age (old), before the noun.' },
      { choices: ['a big white dog', 'a white big dog', 'a dog big white'], ex: 'Size (big) → colour (white), before the noun.' },
      { choices: ['a beautiful long silk scarf', 'a silk long beautiful scarf', 'a long beautiful silk scarf'], ex: 'Opinion (beautiful) → size (long) → material (silk).' },
      { choices: ['a small round wooden table', 'a wooden small round table', 'a round wooden small table'], ex: 'Size (small) → shape (round) → material (wooden).' }
    ] },
    { key: 'C', title: 'Time, place and prepositions', skill: 'prep', type: 'choice', items: [
      { q: 'We usually have dinner ___ eight o\'clock.', choices: ['at', 'on', 'in'], ex: 'Clock times take at.' },
      { q: 'The shops are closed ___ Friday afternoon.', choices: ['on', 'in', 'at'], ex: 'Days (and day + part of the day) take on.' },
      { q: 'I was born ___ 2008.', choices: ['in', 'on', 'at'], ex: 'Years take in.' },
      { q: 'My keys are ___ the table.', choices: ['on', 'at', 'in'], ex: 'A surface takes on.' },
      { q: 'Choose the correct sentence.', choices: ['She studied hard in the library last night.', 'She last night studied hard in the library.', 'She studied in the library last night hardly.'], ex: 'Manner (hard) → place (in the library) → time (last night).' },
      { q: 'Choose the correct sentence.', choices: ['I go to the gym three times a week.', 'I three times a week go to the gym.', 'Three times I go a week to the gym.'], ex: 'A frequency phrase goes at the end.' },
      { q: 'Choose the correct sentence.', choices: ['My father always reads the newspaper in the morning.', 'My father reads always the newspaper in the morning.', 'Always my father the newspaper reads in the morning.'], ex: '"always" goes before the main verb (reads).' },
      { q: 'Who is the girl ___ long black hair?', choices: ['with', 'of', 'at'], ex: 'with + description: the girl with long black hair.' }
    ] },
    { key: 'D', title: 'Sentence expander: choose the best, correct sentence', skill: 'details', type: 'choice', items: [
      { q: 'Add WHEN and WHERE to: I read a book.', choices: ['Last night, I read a book in my bedroom.', 'Last night, I read in my bedroom a book.', 'I read a book in my bedroom tomorrow.'], ex: 'The object (a book) stays after the verb, and "tomorrow" cannot go with the past.' },
      { q: 'Add WHAT KIND and WHERE to: She bought a dress.', choices: ['She bought a beautiful red dress at the market.', 'She bought a red beautiful dress at the market.', 'She bought a dress beautiful red at the market.'], ex: 'Opinion → colour, before the noun.' },
      { q: 'Add WHY to: We stayed at home.', choices: ['We stayed at home because it was very cold.', 'We stayed at home because of it was very cold.', 'We stayed at home so it was very cold.'], ex: 'because + clause gives the reason; "because of" needs a noun.' },
      { q: 'Add HOW and HOW OFTEN to: He runs.', choices: ['He runs fast every morning.', 'He runs fastly every morning.', 'He every morning runs fast.'], ex: 'The adverb of fast is fast; the time phrase goes at the end.' },
      { q: 'Which sentence tells us WHO, WHAT, WHERE and WHEN?', choices: ['My cousin Amine opened a small café in Agadir last year.', 'My cousin opened a small café last year.', 'A small café opened in Agadir.'], ex: 'Who: my cousin Amine · what: opened a small café · where: in Agadir · when: last year.' },
      { q: 'I love healthy food, ___ fruit, vegetables and fish.', choices: ['such as', 'because', 'although'], ex: '"such as" introduces examples.' }
    ] },
    { key: 'E', title: 'Find the mistake: tap the wrong word', type: 'mistake', items: [
      { words: 'She sings very good.', wrong: 3, fix: 'well', skill: 'adj', ex: '"sings" needs an adverb: well.' },
      { words: 'We met at Monday morning.', wrong: 2, fix: 'on', skill: 'prep', ex: 'Days take on: on Monday morning.' },
      { words: 'The children played happy in the garden.', wrong: 3, fix: 'happily', skill: 'adj', ex: '"played" needs an adverb: happily.' },
      { words: 'The test was easily, so everyone passed.', wrong: 3, fix: 'easy', skill: 'adj', ex: 'After be, use an adjective: easy.' }
    ] }
  ],

  memorise: {
    frames: [
      { f: 'a / an + adjective + adjective + noun', e: 'It was a long, tiring day.' },
      { f: 'verb + adverb', e: 'She speaks English fluently.' },
      { f: 'verb + how + where + when', e: 'I worked hard at school yesterday.' },
      { f: 'at + clock time · on + day / date · in + month / year', e: 'The exam is on Monday, at nine, in June.' },
      { f: 'noun + with + description', e: 'a girl with curly hair · a house with a big garden' },
      { f: '…, such as + nouns', e: 'I like water sports, such as swimming and surfing.' },
      { f: 'For example, + full sentence', e: 'Some jobs are stressful. For example, nurses often work at night.' },
      { f: '…, especially + noun', e: 'I love Moroccan food, especially couscous.' },
      { f: 'because + clause · because of + noun', e: 'We stayed in because of the rain.' },
      { f: 'so + adjective + that …', e: 'It was so hot that we stayed inside.' }
    ],
    quiz: [
      { q: 'She speaks English ___.', choices: ['fluently', 'fluent', 'fluency'], ex: '"speaks" needs an adverb: fluently.' },
      { q: 'It was a long, ___ day.', choices: ['tiring', 'tiringly', 'tire'], ex: '"day" is a noun: adjective tiring.' },
      { q: 'My birthday is ___ 15 May.', choices: ['on', 'in', 'at'], ex: 'Dates take on.' },
      { q: 'I met a girl ___ curly hair.', choices: ['with', 'of', 'at'], ex: 'noun + with + description.' },
      { q: 'I like water sports, ___ swimming and surfing.', choices: ['such as', 'so', 'although'], ex: '"such as" + nouns gives examples.' },
      { q: 'Some jobs are stressful. ___, nurses often work at night.', choices: ['For example', 'Such as', 'Especially'], ex: 'For example, + a full sentence.' },
      { q: 'I love Moroccan food, ___ couscous.', choices: ['especially', 'because', 'so'], ex: '"especially" + noun points to one example.' },
      { q: 'We stayed in because ___ the rain.', choices: ['of', 'to', 'for'], ex: 'because of + noun.' },
      { q: 'It was so hot ___ we stayed inside.', choices: ['that', 'so', 'because'], ex: 'so + adjective + that + result.' },
      { q: 'I worked ___ yesterday.', choices: ['hard at school', 'at school hard', 'hardly at school'], ex: 'Manner (hard) → place (at school) → time (yesterday).' }
    ]
  },

  build: [
    { tiles: ['She', 'speaks', 'English', 'very', 'fluently', '.'], skill: 'adj' },
    { tiles: ['We', 'had', 'a', 'delicious', 'Moroccan', 'dinner', '.'], skill: 'order' },
    { tiles: ['My', 'grandmother', 'lives', 'in', 'a', 'small', 'white', 'house', '.'], skill: 'order' },
    { tiles: ['I', 'met', 'a', 'girl', 'with', 'long', 'curly', 'hair', '.'], skill: 'details' },
    { tiles: ['They', 'worked', 'hard', 'at', 'the', 'library', 'yesterday', '.'], also: ['They worked hard yesterday at the library.'], skill: 'prep' },
    { tiles: ['My', 'father', 'always', 'drinks', 'coffee', 'in', 'the', 'morning', '.'], skill: 'prep' },
    { tiles: ['The', 'shops', 'open', 'at', 'nine', 'on', 'Saturdays', '.'], also: ['The shops open on Saturdays at nine.'], skill: 'prep' },
    { tiles: ['I', 'like', 'outdoor', 'sports', ',', 'such', 'as', 'football', 'and', 'swimming', '.'], also: ['I like outdoor sports, such as swimming and football.'], skill: 'details' },
    { tiles: ['It', 'was', 'so', 'cold', 'that', 'we', 'stayed', 'inside', '.'], skill: 'frames' },
    { tiles: ['Last', 'summer', ',', 'we', 'travelled', 'to', 'Chefchaouen', 'by', 'bus', '.'], skill: 'prep' },
    { tiles: ['I', 'love', 'Moroccan', 'food', ',', 'especially', 'couscous', '.'], skill: 'details' },
    { tiles: ['The', 'children', 'played', 'happily', 'in', 'the', 'garden', '.'], also: ['The children played in the garden happily.'], skill: 'adj' }
  ],

  write: {
    task: 'Describe your favourite place in your town or city (60–100 words).',
    include: ['at least three adjectives, with one pair in the correct order (a small blue café);', 'at least two adverbs (quietly, usually…) and phrases of time and place;', 'a reason (because / because of) and an example (such as / for example / especially).'],
    min: 60, max: 100,
    checklist: ['I described the place with adjectives, in the right order (a small old café).', 'I used at least two adverbs of manner or frequency (quietly, always…).',
      'I used phrases of time and place with the correct preposition (in, on, at).', 'My text tells the reader who, what, where, when, why and how.',
      'I gave a reason with because or because of.', 'I gave an example with such as, for example or especially.',
      'Every sentence has a capital letter, a subject, a verb and end punctuation.'],
    model: 'My favourite place in Essaouira is a small blue café near the port. I usually go there on Saturday mornings with my best friend, Hiba. We sit quietly on the terrace and watch the colourful fishing boats. The café serves delicious drinks, especially fresh orange juice and mint tea. I love this place because it is calm and the sea air is wonderful. In the evening, people often play traditional music, such as Gnawa songs. It is so beautiful that I never want to leave.',
    modelNote: 'Adjectives: small blue, colourful, delicious, fresh, calm, wonderful… · Adverbs: usually, quietly, often · Time/place: on Saturday mornings, on the terrace, in the evening · Reason: because… · Examples: especially…, such as…'
  }
};
