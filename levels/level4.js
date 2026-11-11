/* Writing Academy · Level 4: Combining Ideas. Content approved by the teacher (LEVELS_4_5_DRAFT.md, Nov 2026).
   Same format as level1.js: the FIRST choice is the correct one; mistake "wrong" = 0-based word index; build tiles in correct order. */
(window.WA_LEVELS = window.WA_LEVELS || {})[4] = {
  n: 4,
  title: 'Combining Ideas',
  stage: 'Development',
  target: 'Connect ideas and produce varied sentence structures.',
  skills: {
    coord:   { name: 'and, but, or, so, yet', review: 'Read Learn card 1 again, then redo Practise A.' },
    subord:  { name: 'because, although, when, if…', review: 'Read Learn card 2 again, then redo Practise B.' },
    rel:     { name: 'Relative clauses', review: 'Read Learn card 3 again, then redo Practise C.' },
    combine: { name: 'Combining sentences', review: 'Read Learn cards 4 and 5 again, then redo Practise D and Build.' },
    frames:  { name: 'Sentence frames', review: 'Go through the Memorise flashcards again, then redo the Memorise questions.' }
  },

  learn: [
    { title: 'and, but, or, so, yet', skill: 'coord',
      points: ['<b>and</b> adds · <b>but</b> contrasts · <b>or</b> gives a choice · <b>so</b> gives a result · <b>yet</b> = but (a surprising contrast).',
        'Two complete sentences: put a <b>comma before</b> the conjunction: <i>It was late, <b>so</b> we took a taxi.</i>',
        '<i>or</i> after an instruction = otherwise: <i>Hurry up, <b>or</b> you\'ll miss the bus.</i>'],
      check: { q: 'It was raining, ___ we went for a walk.', choices: ['yet', 'so', 'or'],
        ex: 'Going for a walk in the rain is a surprising contrast: yet.' } },
    { title: 'because, although, while, when, if, since', skill: 'subord',
      points: ['Reason: <b>because / since</b> · Contrast: <b>although / while</b> · Time: <b>when / while</b> · Condition: <b>if</b>.',
        '<i>I stayed at home <b>because</b> I was ill. · <b>Although</b> it was cold, we swam.</i>',
        'Clause first → comma: <i><b>When</b> I arrived, the film had started.</i>'],
      check: { q: '___ she was ill, she went to school.', choices: ['Although', 'Because', 'So'],
        ex: 'Being ill and going to school is a contrast: Although.' } },
    { title: 'Relative clauses: who, which, that, where', skill: 'rel',
      points: ['<b>who</b> → people · <b>which</b> → things · <b>that</b> → people or things · <b>where</b> → places.',
        '<i>The teacher <b>who</b> teaches us English is from Agadir. · This is the house <b>where</b> I grew up.</i>',
        'Extra information about a known person or thing goes between <b>commas</b>, with <i>who / which</i> (not <i>that</i>): <i>My uncle, <b>who</b> lives in Paris, is a chef.</i>'],
      check: { q: 'This is the town ___ I was born.', choices: ['where', 'which', 'who'],
        ex: 'A place + a full clause (I was born): where.' } },
    { title: 'Combine without repetition', skill: 'combine',
      points: ['<i>My brother is a doctor. My brother works in Rabat.</i> → <i>My brother is a doctor <b>and</b> works in Rabat.</i> / <i>My brother, <b>who</b> is a doctor, works in Rabat.</i>',
        'Use <b>one</b> linker for one link: ✗ <i>Although it was late, <b>but</b> we…</i> · ✗ <i>Because I was tired, <b>so</b> I…</i>',
        'Don\'t repeat the noun after a relative pronoun: ✗ <i>The phone that I bought <b>it</b> is broken.</i>'],
      check: { q: 'Choose the correct sentence.', choices: ['Although it was late, we continued working.', 'Although it was late, but we continued working.', 'Although it was late, so we continued working.'],
        ex: 'One link needs one linker: Although … , we continued (no but / so).' } },
    { title: 'One idea, different structures', skill: 'combine',
      points: ['<i>It rained. We stayed in.</i> → <i>It rained, <b>so</b> we stayed in.</i> · <i>We stayed in <b>because</b> it rained.</i> · <i><b>Because</b> it rained, we stayed in.</i>',
        'Changing the structure must not change the meaning.'],
      check: { q: 'Which sentence means the same as "I was tired, so I went to bed"?', choices: ['I went to bed because I was tired.', 'I was tired because I went to bed.', 'Although I was tired, I went to bed.'],
        ex: 'The reason (I was tired) goes after because; the result (I went to bed) stays the same.' } }
  ],

  practise: [
    { key: 'A', title: 'and, but, or, so, yet', skill: 'coord', type: 'choice', items: [
      { q: 'I wanted to buy the shoes, ___ they were too expensive.', choices: ['but', 'so', 'or'], ex: 'A contrast between wanting and the price: but.' },
      { q: 'You can pay by card ___ in cash.', choices: ['or', 'but', 'so'], ex: 'A choice between two ways: or.' },
      { q: 'The bus was late, ___ I missed the first lesson.', choices: ['so', 'but', 'or'], ex: 'Missing the lesson is the result: so.' },
      { q: 'My sister plays the piano ___ sings in a choir.', choices: ['and', 'or', 'so'], ex: 'Two things she does: and.' },
      { q: 'He studied very hard, ___ he failed the test.', choices: ['yet', 'so', 'and'], ex: 'Failing after hard work is a surprising contrast: yet.' },
      { q: 'Hurry up, ___ you\'ll miss the train.', choices: ['or', 'and', 'so'], ex: 'After an instruction, or = otherwise.' }
    ] },
    { key: 'B', title: 'because, although, while, when, if, since', skill: 'subord', type: 'choice', items: [
      { q: 'I stayed at home ___ I had a cold.', choices: ['because', 'although', 'if'], ex: 'Having a cold is the reason: because.' },
      { q: '___ it was sunny, it was very cold.', choices: ['Although', 'Because', 'If'], ex: 'Sunny but cold is a contrast: Although.' },
      { q: '___ you study regularly, you will pass the exam.', choices: ['If', 'Although', 'While'], ex: 'A condition: If + present, will + verb.' },
      { q: 'My mother was cooking ___ my father was reading the newspaper.', choices: ['while', 'if', 'although'], ex: 'Two actions at the same time: while.' },
      { q: 'Call me ___ you arrive at the station.', choices: ['when', 'although', 'because'], ex: 'A time: when you arrive.' },
      { q: '___ it was a holiday, the shops were closed.', choices: ['Since', 'Although', 'So'], ex: 'Since = because (the reason).' },
      { q: '___ my brother loves football, I prefer basketball.', choices: ['While', 'So', 'Then'], ex: 'While can show a contrast between two people.' },
      { q: 'I\'ll lend you my bike ___ you bring it back tomorrow.', choices: ['if', 'although', 'while'], ex: 'A condition: if.' }
    ] },
    { key: 'C', title: 'who, which, that, where', skill: 'rel', type: 'choice', items: [
      { q: 'The man ___ lives next door is a pilot.', choices: ['who', 'which', 'where'], ex: 'A person: who.' },
      { q: 'I lost the book ___ you gave me.', choices: ['which', 'who', 'where'], ex: 'A thing: which.' },
      { q: 'This is the restaurant ___ we had dinner last week.', choices: ['where', 'which', 'who'], ex: 'A place + a full clause (we had dinner): where.' },
      { q: 'I have a friend ___ speaks four languages.', choices: ['who', 'which', 'where'], ex: 'A person: who.' },
      { q: 'The phone ___ I bought last month is already broken.', choices: ['that', 'who', 'where'], ex: 'A thing: that (or which).' },
      { q: 'Fes is the city ___ my grandparents live.', choices: ['where', 'which', 'who'], ex: 'A place + a full clause (my grandparents live): where.' }
    ] },
    { key: 'D', title: 'Combine the sentences: choose the correct one', skill: 'combine', type: 'choice', items: [
      { q: 'Ali is my neighbour. Ali is a nurse.', choices: ['Ali, who is my neighbour, is a nurse.', 'Ali, which is my neighbour, is a nurse.', 'Ali, who is my neighbour, he is a nurse.'], ex: 'who for a person, and no extra "he" after the clause.' },
      { q: 'I bought a jacket. The jacket is blue.', choices: ['The jacket that I bought is blue.', 'The jacket who I bought is blue.', 'The jacket that I bought it is blue.'], ex: 'that for a thing, and no "it" after the relative pronoun.' },
      { q: 'It was late. We continued working. (although)', choices: ['Although it was late, we continued working.', 'Although it was late, but we continued working.', 'Although it was late we continued, working.'], ex: 'One linker (Although) and a comma after the first clause.' },
      { q: 'She was hungry. She ate a sandwich. (so)', choices: ['She was hungry, so she ate a sandwich.', 'Because she was hungry, so she ate a sandwich.', 'She was hungry, so she ate it a sandwich.'], ex: 'Comma + so + the result; one linker only.' },
      { q: 'We visited a village. The village was in the mountains.', choices: ['We visited a village which was in the mountains.', 'We visited a village where was in the mountains.', 'We visited a village who was in the mountains.'], ex: 'The village is the subject of "was": which (where needs its own subject).' },
      { q: 'Same meaning as: I didn\'t go out because it was raining.', choices: ['It was raining, so I didn\'t go out.', 'It was raining because I didn\'t go out.', 'Although it was raining, I didn\'t go out.'], ex: 'Reason (it was raining) + so + result (I didn\'t go out).' }
    ] },
    { key: 'E', title: 'Find the mistake: tap the wrong word', type: 'mistake', items: [
      { words: 'The girl which won the prize is my cousin.', wrong: 2, fix: 'who', skill: 'rel', ex: 'A person: who.' },
      { words: 'We stayed inside because the rain.', wrong: 3, fix: 'because of', skill: 'subord', ex: '"the rain" is a noun, so use because of.' },
      { words: 'I visited the town which I was born.', wrong: 4, fix: 'where', skill: 'rel', ex: 'A place + a full clause (I was born): where.' },
      { words: 'You can come with us and stay at home: it\'s your choice.', wrong: 5, fix: 'or', skill: 'coord', ex: 'A choice between two things: or.' }
    ] }
  ],

  memorise: {
    frames: [
      { f: '…, and / but / or / so …', e: 'I was tired, so I went to bed early.' },
      { f: '…, yet …', e: 'It was expensive, yet many people bought it.' },
      { f: 'Although + clause, main clause.', e: 'Although it was cold, we went swimming.' },
      { f: 'While + clause, main clause. (contrast)', e: 'While my sister likes tea, I prefer coffee.' },
      { f: 'Since + clause (reason), main clause.', e: 'Since it was late, we took a taxi.' },
      { f: 'If + present, will + verb.', e: 'If you hurry, you will catch the bus.' },
      { f: 'the person who …', e: 'The woman who lives next door is a doctor.' },
      { f: 'the thing which / that …', e: 'The film that we watched was boring.' },
      { f: 'the place where …', e: 'This is the café where we first met.' },
      { f: 'Name, who …, verb …', e: 'My uncle, who lives in Paris, is visiting us.' }
    ],
    quiz: [
      { q: 'It was expensive, ___ many people bought it.', choices: ['yet', 'so', 'or'], ex: 'A surprising contrast: yet.' },
      { q: '___ it was cold, we went swimming.', choices: ['Although', 'Because', 'So'], ex: 'Cold but swimming: a contrast, Although.' },
      { q: '___ my sister likes tea, I prefer coffee.', choices: ['While', 'So', 'Then'], ex: 'While shows the contrast between two people.' },
      { q: '___ it was late, we took a taxi.', choices: ['Since', 'Although', 'But'], ex: 'Since = because.' },
      { q: 'If you hurry, you ___ the bus.', choices: ['will catch', 'caught', 'catching'], ex: 'If + present, will + verb.' },
      { q: 'The woman ___ lives next door is a doctor.', choices: ['who', 'which', 'where'], ex: 'A person: who.' },
      { q: 'The film ___ we watched was boring.', choices: ['that', 'who', 'where'], ex: 'A thing: that.' },
      { q: 'This is the café ___ we first met.', choices: ['where', 'which', 'who'], ex: 'A place + a full clause: where.' },
      { q: 'My uncle, ___ lives in Paris, is visiting us.', choices: ['who', 'that', 'which'], ex: 'Extra information about a person between commas: who (not that).' },
      { q: 'I was tired, ___ I went to bed early.', choices: ['so', 'but', 'or'], ex: 'Going to bed is the result: so.' }
    ]
  },

  build: [
    { tiles: ['I', 'wanted', 'to', 'go', 'out', ',', 'but', 'it', 'was', 'raining', '.'], skill: 'coord' },
    { tiles: ['We', 'can', 'take', 'the', 'bus', 'or', 'walk', 'to', 'school', '.'], also: ['We can walk to school or take the bus.'], skill: 'coord' },
    { tiles: ['Although', 'it', 'was', 'late', ',', 'we', 'continued', 'working', '.'], skill: 'subord' },
    { tiles: ['My', 'uncle', ',', 'who', 'lives', 'in', 'Paris', ',', 'is', 'a', 'chef', '.'], skill: 'rel' },
    { tiles: ['This', 'is', 'the', 'town', 'where', 'I', 'was', 'born', '.'], skill: 'rel' },
    { tiles: ['The', 'phone', 'that', 'I', 'bought', 'is', 'broken', '.'], skill: 'rel' },
    { tiles: ['If', 'you', 'study', 'hard', ',', 'you', 'will', 'pass', '.'], skill: 'frames' },
    { tiles: ['She', 'was', 'tired', ',', 'so', 'she', 'went', 'to', 'bed', 'early', '.'], skill: 'coord' },
    { tiles: ['While', 'I', 'was', 'cooking', ',', 'my', 'brother', 'was', 'watching', 'TV', '.'], also: ['While my brother was watching TV, I was cooking.'], skill: 'subord' },
    { tiles: ['He', 'is', 'rich', ',', 'yet', 'he', 'is', 'not', 'happy', '.'], skill: 'coord' },
    { tiles: ['Since', 'it', 'was', 'a', 'holiday', ',', 'the', 'shops', 'were', 'closed', '.'], skill: 'subord' },
    { tiles: ['The', 'students', 'who', 'study', 'regularly', 'get', 'good', 'marks', '.'], skill: 'combine' }
  ],

  write: {
    task: 'Write about your best friend (60–100 words). Combine your ideas: no short, repeated sentences.',
    include: ['at least two of and, but, or, so, yet;', 'at least two of because, although, when, if, while, since;', 'at least two relative clauses (who, which, that, where).'],
    min: 60, max: 100,
    checklist: ['I joined ideas with and, but, or, so or yet, with a comma when both parts are full sentences.', 'I used at least two of because, although, when, if, while, since.',
      'I used who for people, which / that for things and where for places.', 'I used one linker for one link (no Although…, but… or Because…, so…).',
      'I did not repeat the same subject or noun again and again.', 'Every because / although / when / if clause is joined to a main clause.',
      'Capital letters and punctuation are correct.'],
    model: 'My best friend is Imane, who lives in the same street as me. We met at primary school when we were six. She is quiet, but she is very funny with her friends. Although she is good at maths, she wants to become a journalist because she loves writing. Every Friday, we go to a small library where we read and talk for hours. If I have a problem, she always listens to me, so I trust her completely.',
    modelNote: 'Coordinating: but, and, so · Subordinating: when, although, because, if · Relative: who, where'
  }
};
