/* Writing Academy · Level 5: Expressing Relationships Between Ideas. Content approved by the teacher (LEVELS_4_5_DRAFT.md, Nov 2026).
   Same format as level1.js: the FIRST choice is the correct one; mistake "wrong" = 0-based word index; build tiles in correct order.
   Practise A is the Linker Master activity (what does each linker express?). */
(window.WA_LEVELS = window.WA_LEVELS || {})[5] = {
  n: 5,
  title: 'Expressing Relationships Between Ideas',
  stage: 'Development',
  target: 'Select appropriate linking expressions according to meaning.',
  skills: {
    addcon:  { name: 'Addition & contrast', review: 'Read Learn card 1 again, then redo Practise A and B.' },
    cause:   { name: 'Cause & effect', review: 'Read Learn card 2 again, then redo Practise C.' },
    purpose: { name: 'Purpose', review: 'Read Learn card 3 again, then redo Practise C.' },
    concond: { name: 'Concession & condition', review: 'Read Learn cards 4 and 5 again, then redo Practise D.' },
    frames:  { name: 'Linkers & chunks', review: 'Go through the Memorise flashcards again, then redo the Memorise questions.' }
  },

  learn: [
    { title: 'Addition and contrast', skill: 'addcon',
      points: ['Addition: <b>Moreover, · Furthermore, · In addition,</b> + a sentence that adds a point <b>of the same kind</b>.',
        'Contrast: <b>However, · Nevertheless, · On the other hand,</b> + a sentence that goes <b>the other way</b>.',
        'They usually start a new sentence and take a <b>comma</b>: <i>It was raining. <b>However,</b> we went out.</i> (✗ <i>It was raining, however we went out.</i>)'],
      check: { q: 'The hotel was clean. ___, the staff were very friendly.', choices: ['Moreover', 'However', 'Therefore'],
        ex: 'A second good point of the same kind: Moreover.' } },
    { title: 'Cause and effect', skill: 'cause',
      points: ['Cause: <b>because</b> + clause · <b>because of / due to</b> + noun: <i>The match was cancelled <b>because of</b> the storm.</i>',
        'Effect: <b>Therefore, · Consequently, · As a result,</b> + the result: <i>He didn\'t study. <b>As a result,</b> he failed.</i>'],
      check: { q: 'The roads were icy. ___, many schools closed.', choices: ['As a result', 'Because of', 'However'],
        ex: 'The schools closing is the result of the ice: As a result.' } },
    { title: 'Purpose', skill: 'purpose',
      points: ['<b>to / in order to / so as to</b> + verb: <i>She saved money <b>in order to</b> buy a laptop.</i>',
        '<b>so that</b> + subject + <i>can / could / will</i>: <i>Speak slowly <b>so that</b> everyone <b>can</b> understand.</i>',
        'Negative: <b>so as not to / in order not to</b> + verb: <i>I left early <b>so as not to</b> miss the bus.</i>'],
      check: { q: 'She saved money ___ buy a laptop.', choices: ['in order to', 'so that', 'because of'],
        ex: 'in order to + verb (buy). so that needs a subject: so that she could buy.' } },
    { title: 'Concession: although, even though, despite, in spite of', skill: 'concond',
      points: ['<b>although / even though</b> + clause: <i><b>Although</b> it rained, we played.</i>',
        '<b>despite / in spite of</b> + noun or verb-ing: <i><b>Despite</b> the rain, we played. · <b>In spite of</b> feeling ill, she went to work.</i>',
        '✗ <i>Despite it rained…</i> (no clause after <i>despite</i>).'],
      check: { q: 'Choose the correct sentence.', choices: ['Despite the rain, we played football.', 'Despite it rained, we played football.', 'Although the rain, we played football.'],
        ex: 'despite + noun (the rain); although needs a clause.' } },
    { title: 'Condition: if, unless, provided that, as long as', skill: 'concond',
      points: ['<b>unless</b> = if … not: <i><b>Unless</b> you hurry, you\'ll miss the bus.</i> (= If you don\'t hurry…)',
        '<b>provided that / as long as</b> = only if: <i>You can go <b>as long as</b> you are back by ten.</i>',
        'After these words, use the <b>present</b>, not <i>will</i>: <i>as long as you <b>are</b> careful</i> (✗ <i>will be</i>).'],
      check: { q: 'You can borrow my bike ___ you bring it back tonight.', choices: ['as long as', 'unless', 'despite'],
        ex: 'Only if you bring it back: as long as.' } }
  ],

  practise: [
    { key: 'A', title: 'Linker Master: what does it express?', skill: 'addcon', type: 'choice', items: [
      { q: 'Furthermore', choices: ['Addition', 'Contrast', 'Condition', 'Purpose'], skill: 'addcon', ex: 'Furthermore adds another point.' },
      { q: 'Nevertheless', choices: ['Contrast', 'Addition', 'Purpose', 'Condition'], skill: 'addcon', ex: 'Nevertheless = however (contrast).' },
      { q: 'Consequently', choices: ['Result', 'Addition', 'Condition', 'Contrast'], skill: 'cause', ex: 'Consequently introduces a result.' },
      { q: 'so as to', choices: ['Purpose', 'Result', 'Contrast', 'Addition'], skill: 'purpose', ex: 'so as to + verb gives the purpose.' },
      { q: 'provided that', choices: ['Condition', 'Purpose', 'Addition', 'Contrast'], skill: 'concond', ex: 'provided that = only if.' },
      { q: 'in spite of', choices: ['Concession', 'Addition', 'Purpose', 'Condition'], skill: 'concond', ex: 'in spite of = despite (concession).' }
    ] },
    { key: 'B', title: 'Addition or contrast?', skill: 'addcon', type: 'choice', items: [
      { q: 'The flat is very small. ___, it is far from the city centre.', choices: ['In addition', 'However', 'Therefore'], ex: 'Two problems of the same kind: In addition.' },
      { q: 'Smartphones are useful. ___, they can be addictive.', choices: ['However', 'Moreover', 'Therefore'], ex: 'A good point, then a bad point: However.' },
      { q: 'My brother loves the city. My sister, ___, prefers the countryside.', choices: ['on the other hand', 'moreover', 'therefore'], ex: 'Comparing two different people: on the other hand.' },
      { q: 'Walking is good for your health. ___, it is free.', choices: ['Moreover', 'However', 'Consequently'], ex: 'Two good points: Moreover.' },
      { q: 'The exam was difficult. ___, most students passed.', choices: ['Nevertheless', 'Furthermore', 'As a result'], ex: 'Passing a difficult exam is a contrast: Nevertheless.' },
      { q: 'Choose the correctly punctuated sentence.', choices: ['It was raining. However, we went out.', 'It was raining, however we went out.', 'It was raining however, we went out.'], ex: 'However starts a new sentence and takes a comma.' }
    ] },
    { key: 'C', title: 'Cause, effect and purpose', skill: 'cause', type: 'choice', items: [
      { q: 'The match was cancelled ___ the storm.', choices: ['because of', 'because', 'so that'], skill: 'cause', ex: '"the storm" is a noun: because of.' },
      { q: 'He didn\'t study. ___, he failed the exam.', choices: ['As a result', 'Because', 'Despite'], skill: 'cause', ex: 'Failing is the result: As a result.' },
      { q: 'The flight was delayed ___ bad weather.', choices: ['due to', 'because', 'therefore'], skill: 'cause', ex: '"bad weather" is a noun: due to.' },
      { q: 'Prices went up. ___, people bought less.', choices: ['Consequently', 'Because of', 'In order to'], skill: 'cause', ex: 'Buying less is the result: Consequently.' },
      { q: 'I got up early ___ catch the first train.', choices: ['in order to', 'so that', 'because of'], skill: 'purpose', ex: 'in order to + verb (catch).' },
      { q: 'She spoke slowly ___ everyone could understand.', choices: ['so that', 'in order to', 'due to'], skill: 'purpose', ex: 'so that + subject + could.' },
      { q: 'We left early ___ miss the bus.', choices: ['so as not to', 'so that not', 'because not to'], skill: 'purpose', ex: 'Negative purpose: so as not to + verb.' },
      { q: 'Choose the correct sentence.', choices: ['I\'m saving money so that I can buy a bike.', 'I\'m saving money so that buy a bike.', 'I\'m saving money in order to I can buy a bike.'], skill: 'purpose', ex: 'so that + subject + can; in order to + verb only.' }
    ] },
    { key: 'D', title: 'Concession and condition', skill: 'concond', type: 'choice', items: [
      { q: '___ the traffic, we arrived on time.', choices: ['Despite', 'Although', 'Unless'], ex: '"the traffic" is a noun: Despite.' },
      { q: '___ he was tired, he finished his homework.', choices: ['Even though', 'Despite', 'Unless'], ex: 'A full clause (he was tired): Even though.' },
      { q: 'In spite of ___, she went to work.', choices: ['feeling ill', 'she felt ill', 'feel ill'], ex: 'in spite of + verb-ing.' },
      { q: 'You won\'t pass ___ you study harder.', choices: ['unless', 'if', 'provided that'], ex: 'unless = if not: you won\'t pass if you don\'t study harder.' },
      { q: 'You can go to the party ___ you are home by eleven.', choices: ['as long as', 'unless', 'despite'], ex: 'Only if you are home by eleven: as long as.' },
      { q: 'I\'ll help you, ___ you help me next week.', choices: ['provided that', 'unless', 'although'], ex: 'Only if you help me: provided that.' }
    ] },
    { key: 'E', title: 'Find the mistake: tap the wrong word', type: 'mistake', items: [
      { words: 'Despite it was cold, we swam in the sea.', wrong: 0, fix: 'Although', skill: 'concond', ex: 'A full clause (it was cold) needs Although; despite takes a noun.' },
      { words: 'He was very ill. Therefore, he went to work.', wrong: 4, fix: 'However', skill: 'addcon', ex: 'Going to work when ill is a contrast: However.' },
      { words: 'I went to the shop for buy bread.', wrong: 5, fix: 'to', skill: 'purpose', ex: 'Purpose: to + verb (to buy).' },
      { words: 'You can stay here unless you are quiet.', wrong: 4, fix: 'as long as', skill: 'concond', ex: 'Only if you are quiet: as long as.' }
    ] }
  ],

  memorise: {
    frames: [
      { f: 'Moreover, / In addition, + sentence', e: 'Walking is healthy. Moreover, it is free.' },
      { f: 'However, / Nevertheless, + sentence', e: 'The test was hard. Nevertheless, I passed.' },
      { f: 'On the other hand, + sentence', e: 'Cities are exciting. On the other hand, they are noisy.' },
      { f: 'because of / due to + noun', e: 'The game stopped because of the rain.' },
      { f: 'As a result, / Therefore, + result', e: 'He missed the bus. As a result, he was late.' },
      { f: 'in order to / so as to + verb', e: 'I\'m learning English in order to travel.' },
      { f: 'so that + subject + can / could', e: 'Speak louder so that everyone can hear you.' },
      { f: 'Despite / In spite of + noun / verb-ing', e: 'Despite feeling tired, she went to the gym.' },
      { f: 'unless / as long as / provided that + present', e: 'You can borrow it as long as you are careful.' },
      { f: 'One of the main reasons for this is that …', e: 'Many people work from home. One of the main reasons for this is that it saves time.' }
    ],
    quiz: [
      { q: 'Walking is healthy. ___, it costs nothing.', choices: ['In addition', 'However', 'Therefore'], ex: 'Another good point: In addition.' },
      { q: 'The test was hard. ___, I got a good mark.', choices: ['Nevertheless', 'Moreover', 'As a result'], ex: 'A good mark on a hard test is a contrast: Nevertheless.' },
      { q: 'The game stopped ___ the rain.', choices: ['due to', 'because', 'so that'], ex: 'due to + noun.' },
      { q: 'He missed the bus. ___, he was late.', choices: ['As a result', 'Despite', 'Unless'], ex: 'Being late is the result: As a result.' },
      { q: 'I\'m learning English ___ travel abroad.', choices: ['in order to', 'so that', 'because of'], ex: 'in order to + verb.' },
      { q: 'Speak louder ___ everyone can hear you.', choices: ['so that', 'in order to', 'due to'], ex: 'so that + subject + can.' },
      { q: '___ feeling tired, she went to the gym.', choices: ['Despite', 'Although', 'Unless'], ex: 'Despite + verb-ing.' },
      { q: 'You\'ll miss the train ___ you leave now.', choices: ['unless', 'as long as', 'provided that'], ex: 'unless = if not: if you don\'t leave now.' },
      { q: 'You can borrow it ___ you are careful.', choices: ['as long as', 'unless', 'despite'], ex: 'Only if you are careful: as long as.' },
      { q: 'One of the main reasons ___ this is that it saves time.', choices: ['for', 'of', 'to'], ex: 'The chunk is: One of the main reasons for this is that…' }
    ]
  },

  build: [
    { tiles: ['It', 'was', 'raining', '.', 'However', ',', 'we', 'went', 'out', '.'], skill: 'addcon' },
    { tiles: ['Despite', 'the', 'rain', ',', 'we', 'played', 'football', '.'], skill: 'concond' },
    { tiles: ['She', 'saved', 'money', 'in', 'order', 'to', 'buy', 'a', 'laptop', '.'], skill: 'purpose' },
    { tiles: ['The', 'match', 'was', 'cancelled', 'because', 'of', 'the', 'storm', '.'], skill: 'cause' },
    { tiles: ['He', 'didn\'t', 'study', '.', 'As', 'a', 'result', ',', 'he', 'failed', '.'], skill: 'cause' },
    { tiles: ['You', 'will', 'be', 'late', 'unless', 'you', 'hurry', '.'], skill: 'concond' },
    { tiles: ['Although', 'he', 'was', 'tired', ',', 'he', 'finished', 'his', 'homework', '.'], skill: 'concond' },
    { tiles: ['I', 'left', 'early', 'so', 'as', 'not', 'to', 'miss', 'the', 'bus', '.'], skill: 'purpose' },
    { tiles: ['You', 'can', 'go', 'out', 'as', 'long', 'as', 'you', 'come', 'back', 'early', '.'], skill: 'concond' },
    { tiles: ['Walking', 'is', 'healthy', '.', 'Moreover', ',', 'it', 'is', 'free', '.'], also: ['Walking is free. Moreover, it is healthy.'], skill: 'addcon' },
    { tiles: ['Speak', 'slowly', 'so', 'that', 'everyone', 'can', 'understand', '.'], skill: 'purpose' },
    { tiles: ['The', 'flight', 'was', 'delayed', 'due', 'to', 'bad', 'weather', '.'], skill: 'cause' }
  ],

  write: {
    task: 'Some students prefer to study at home; others prefer the library. Write a paragraph (80–120 words) about where you prefer to study and why.',
    include: ['one addition and one contrast linker;', 'one cause / result and one purpose expression;', 'one concession or condition (although, despite, unless, as long as…);', 'the chunk "One of the main reasons for this is that…".'],
    min: 80, max: 120,
    checklist: ['I used an addition linker (Moreover, In addition, Furthermore).', 'I used a contrast linker (However, Nevertheless, On the other hand).',
      'I gave a cause or a result (because of, due to, Therefore, As a result).', 'I gave a purpose (in order to, so as to, so that).',
      'I used a concession or a condition (although, despite, unless, as long as).', 'Each linker matches the meaning, and However, Moreover… start a sentence and take a comma.',
      'After despite / because of / due to, I used a noun or verb-ing, not a full clause.'],
    model: 'I prefer to study at home. One of the main reasons for this is that my room is quiet. Moreover, I can organise my time freely. I usually study in the evening in order to review the day\'s lessons. However, studying at home has some disadvantages. For example, my phone can distract me. As a result, I switch it off so that I can concentrate. Despite these problems, I find home the best place to study, as long as my little brother does not disturb me!',
    modelNote: 'Chunk: One of the main reasons… · Addition: Moreover · Contrast: However · Result: As a result · Purpose: in order to, so that · Concession: Despite · Condition: as long as'
  }
};
