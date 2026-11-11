/* Writing Academy · Level 2: Sentence Types and Structures. Content approved by the teacher (LEVELS_2_3_DRAFT.md, Nov 2026).
   Same format as level1.js: the FIRST choice is the correct one; mistake "wrong" = 0-based word index; build tiles in correct order. */
(window.WA_LEVELS = window.WA_LEVELS || {})[2] = {
  n: 2,
  title: 'Sentence Types and Structures',
  stage: 'Foundation',
  target: 'Recognise and produce different sentence types and structures.',
  skills: {
    types:  { name: 'Sentence types', review: 'Read Learn cards 1 and 3 again, then redo Practise A.' },
    quest:  { name: 'Questions', review: 'Read Learn card 2 again, then redo Practise B.' },
    struct: { name: 'Simple, compound, complex', review: 'Read Learn cards 4 and 5 again, then redo Practise C.' },
    trans:  { name: 'Sentence Transformer', review: 'Read Learn cards 3 to 5 again, then redo Practise D and Build.' },
    frames: { name: 'Sentence frames', review: 'Go through the Memorise flashcards again, then redo the Memorise questions.' }
  },

  learn: [
    { title: 'Four sentence types', skill: 'types',
      points: ['<b>Declarative</b> (a statement) ends with <b>.</b>: <i>The museum opens at nine.</i>',
        '<b>Interrogative</b> (a question) ends with <b>?</b>: <i>Does the museum open at nine?</i>',
        '<b>Imperative</b> (an instruction or request) starts with the base verb and has no subject: <i>Open the window, please.</i>',
        '<b>Exclamatory</b> (a strong feeling) ends with <b>!</b>: <i>What a beautiful museum!</i>'],
      check: { q: '"Close the door, please." What type of sentence is it?', choices: ['Imperative', 'Declarative', 'Interrogative', 'Exclamatory'],
        ex: 'It gives an instruction and starts with the base verb (Close), with no subject.' } },
    { title: 'Making questions', skill: 'quest',
      points: ['Yes/No question: <b>auxiliary + subject + verb</b>: <i>Do you like tea? · Is she ready? · Can they swim?</i>',
        'Wh- question: <b>Wh- + auxiliary + subject + verb</b>: <i>Where do you live? · What did she buy?</i>',
        'After <i>does</i> and <i>did</i>, use the <b>base verb</b>: <i>Where does he work?</i> (not <i>works</i>)',
        'When <i>Who</i> or <i>What</i> is the subject, there is no <i>do</i>: <i>Who lives here? · What happened?</i>'],
      check: { q: 'Choose the correct question.', choices: ['Where does your brother work?', 'Where your brother works?', 'Where does your brother works?'],
        ex: 'Wh- + does + subject + base verb: Where does your brother work?' } },
    { title: 'Imperatives and exclamations', skill: 'types',
      points: ['Imperative: <i>Sit down. · Please be quiet.</i> Negative: <b>Don\'t + verb</b>: <i>Don\'t run.</i> Suggestion: <b>Let\'s + verb</b>: <i>Let\'s go.</i>',
        '<b>What a / an + adjective + singular noun!</b> <i>What a lovely garden!</i>',
        '<b>What + adjective + plural or uncountable noun!</b> <i>What beautiful flowers! · What nice weather!</i>',
        '<b>How + adjective / adverb (+ subject + verb)!</b> <i>How kind you are! · How fast he runs!</i>'],
      check: { q: 'Choose the correct exclamation.', choices: ['What an interesting story!', 'How an interesting story!', 'What interesting story!'],
        ex: 'What + an + adjective + singular noun: What an interesting story!' } },
    { title: 'Simple and compound sentences', skill: 'struct',
      points: ['A <b>simple</b> sentence has one clause (one subject–verb group): <i>I like tea.</i> It can have two verbs: <i>She cooks and cleans.</i>',
        'A <b>compound</b> sentence joins two complete sentences with <b>, and · , but · , or · , so</b>.',
        '<i>It was raining, so we stayed at home. · I like tea, but my sister prefers coffee.</i>'],
      check: { q: 'Which sentence is compound?', choices: ['I wanted to go out, but I was too tired.', 'I wanted to go out with my friends.', 'I was tired after the long day.'],
        ex: 'Two complete sentences (I wanted to go out / I was too tired) are joined with ", but".' } },
    { title: 'Complex sentences', skill: 'struct',
      points: ['A <b>complex</b> sentence = a main clause + a clause with <b>because, when, if, although, before, after</b>.',
        '<i>I stayed at home because I was ill.</i>',
        'If the <i>when / if / because</i> clause comes <b>first</b>, put a <b>comma</b> after it: <i>When I got home, I had dinner.</i>',
        'The clause alone is <b>not</b> a sentence: ✗ <i>Because I was ill.</i>'],
      check: { q: 'Choose the correct sentence.', choices: ['When the bell rang, the students left the classroom.', 'When the bell rang. The students left the classroom.', 'When the bell rang the students, left the classroom.'],
        ex: '"When the bell rang" is not a sentence alone; it comes first, so a comma follows it.' } }
  ],

  practise: [
    { key: 'A', title: 'Name the sentence type', skill: 'types', type: 'choice', items: [
      { q: 'Turn off your phone before the lesson.', choices: ['Imperative', 'Declarative', 'Interrogative', 'Exclamatory'], ex: 'An instruction that starts with the base verb (Turn off).' },
      { q: 'How beautiful the sunset is!', choices: ['Exclamatory', 'Declarative', 'Interrogative', 'Imperative'], ex: 'How + adjective + subject + verb + ! shows a strong feeling.' },
      { q: 'Does your father speak French?', choices: ['Interrogative', 'Declarative', 'Imperative', 'Exclamatory'], ex: 'A question: auxiliary (Does) + subject + verb, ending with ?' },
      { q: 'The library opens at nine.', choices: ['Declarative', 'Interrogative', 'Imperative', 'Exclamatory'], ex: 'A statement of fact ending with a full stop.' },
      { q: 'Don\'t forget your keys.', choices: ['Imperative', 'Declarative', 'Interrogative', 'Exclamatory'], ex: 'A negative instruction: Don\'t + verb.' },
      { q: 'What a delicious meal!', choices: ['Exclamatory', 'Declarative', 'Interrogative', 'Imperative'], ex: 'What a + adjective + noun + ! shows a strong feeling.' }
    ] },
    { key: 'B', title: 'Make the question: the answer is in brackets', skill: 'quest', type: 'choice', items: [
      { q: '(She lives in Rabat.)', choices: ['Where does she live?', 'Where she lives?', 'Where does she lives?'], ex: 'Where + does + subject + base verb.' },
      { q: '(They arrived at eight.)', choices: ['When did they arrive?', 'When did they arrived?', 'When they arrived?'], ex: 'When + did + subject + base verb (arrive).' },
      { q: '(Yes, my sister is a teacher.)', choices: ['Is your sister a teacher?', 'Does your sister is a teacher?', 'Is a teacher your sister?'], ex: 'With be, put is before the subject: Is your sister…?' },
      { q: '(Ali broke the window.)', choices: ['Who broke the window?', 'Who did broke the window?', 'Who the window broke?'], ex: 'Who is the subject, so there is no did: Who broke…?' },
      { q: '(Yes, I can swim.)', choices: ['Can you swim?', 'Do you can swim?', 'Can you to swim?'], ex: 'Modals make their own question: Can you + base verb?' },
      { q: '(I go to school by bus.)', choices: ['How do you go to school?', 'How you go to school?', 'How do you goes to school?'], ex: 'How + do + subject + base verb.' }
    ] },
    { key: 'C', title: 'Simple, compound or complex?', skill: 'struct', type: 'choice', items: [
      { q: 'My brother and my sister study in Casablanca.', choices: ['Simple', 'Compound', 'Complex'], ex: 'Two subjects but only one clause (one verb: study), so it is simple.' },
      { q: 'I called Sara, but she didn\'t answer.', choices: ['Compound', 'Simple', 'Complex'], ex: 'Two complete sentences joined with ", but".' },
      { q: 'Although it was cold, we went to the beach.', choices: ['Complex', 'Simple', 'Compound'], ex: 'A main clause + an "although" clause.' },
      { q: 'We can watch a film, or we can play cards.', choices: ['Compound', 'Simple', 'Complex'], ex: 'Two complete sentences joined with ", or".' },
      { q: 'I\'ll phone you when I arrive.', choices: ['Complex', 'Simple', 'Compound'], ex: 'A main clause + a "when" clause.' },
      { q: 'Every morning, my grandfather walks in the park and reads the newspaper.', choices: ['Simple', 'Compound', 'Complex'], ex: 'One subject (my grandfather) with two verbs: still one clause, so it is simple.' }
    ] },
    { key: 'D', title: 'Sentence Transformer: choose the correct rewrite', skill: 'trans', type: 'choice', items: [
      { q: 'Make a question: Karim plays the guitar.', choices: ['Does Karim play the guitar?', 'Does Karim plays the guitar?', 'Plays Karim the guitar?'], ex: 'Does + subject + base verb (play, no -s).' },
      { q: 'Make an exclamation with What: The film was very funny.', choices: ['What a funny film!', 'How a funny film!', 'What funny film it was!'], ex: 'What a + adjective + singular noun!' },
      { q: 'Make an exclamation with How: This cake is very sweet.', choices: ['How sweet this cake is!', 'How this cake is sweet!', 'What sweet this cake is!'], ex: 'How + adjective + subject + verb!' },
      { q: 'Make an instruction: You should drink more water.', choices: ['Drink more water.', 'Drinks more water.', 'To drink more water.'], ex: 'An instruction starts with the base verb: Drink.' },
      { q: 'Make a negative instruction: You must not touch the screen.', choices: ['Don\'t touch the screen.', 'Not touch the screen.', 'Doesn\'t touch the screen.'], ex: 'Negative instruction: Don\'t + base verb.' },
      { q: 'Join with but: I like football. My sister prefers tennis.', choices: ['I like football, but my sister prefers tennis.', 'I like football but, my sister prefers tennis.', 'I like football, so my sister prefers tennis.'], ex: 'The comma goes before but, and but shows the contrast (so would mean a result).' },
      { q: 'Join with because: We stayed at home. It was raining.', choices: ['We stayed at home because it was raining.', 'Because we stayed at home, it was raining.', 'We stayed at home because of it was raining.'], ex: 'because + the reason (it was raining). "because of" needs a noun, not a clause.' },
      { q: 'Join with When: I finished my homework. Then I watched TV.', choices: ['When I finished my homework, I watched TV.', 'When I watched TV, I finished my homework.', 'I finished my homework when, I watched TV.'], ex: 'The first action goes in the When clause, followed by a comma.' }
    ] },
    { key: 'E', title: 'Find the mistake: tap the wrong word', type: 'mistake', items: [
      { words: 'Where does she works now?', wrong: 3, fix: 'work', skill: 'quest', ex: 'After does, use the base verb: work.' },
      { words: 'How a lovely day!', wrong: 0, fix: 'What', skill: 'types', ex: 'What a + adjective + noun! (How is followed by an adjective, not a/an).' },
      { words: 'Doesn\'t open the door, please.', wrong: 0, fix: 'Don\'t', skill: 'types', ex: 'A negative instruction always uses Don\'t + verb.' },
      { words: 'I was tired, so I go to bed early last night.', wrong: 5, fix: 'went', skill: 'struct', ex: '"last night" is past, so both clauses need the past: went.' }
    ] }
  ],

  memorise: {
    frames: [
      { f: 'Do / Does + subject + verb …?', e: 'Does your school have a library?' },
      { f: 'Wh- + do / does / did + subject + verb …?', e: 'What time do you get up?' },
      { f: 'How often do you + verb …?', e: 'How often do you visit your grandparents?' },
      { f: 'What a / an + adjective + noun!', e: 'What a beautiful day!' },
      { f: 'How + adjective + subject + verb!', e: 'How kind you are!' },
      { f: 'Please + verb … / Don\'t + verb …', e: 'Please close the door. Don\'t be late.' },
      { f: 'Let\'s + verb …', e: 'Let\'s go to the park after school.' },
      { f: '…, but …', e: 'I like summer, but I hate the heat.' },
      { f: '…, so …', e: 'It was late, so we took a taxi.' },
      { f: 'When / If + clause, main clause.', e: 'When I have free time, I play chess.' }
    ],
    quiz: [
      { q: '___ your school have a library?', choices: ['Does', 'Do', 'Is'], ex: '"your school" = it → Does … have?' },
      { q: 'What time ___ you usually get up?', choices: ['do', 'does', 'are'], ex: 'you → do + base verb (get up).' },
      { q: 'How ___ do you visit your grandparents?', choices: ['often', 'much', 'many'], ex: 'How often asks about frequency.' },
      { q: 'What ___ beautiful day!', choices: ['a', 'an', 'the'], ex: 'What a + adjective + singular noun (beautiful starts with a consonant sound).' },
      { q: 'How kind ___!', choices: ['you are', 'are you', 'you be'], ex: 'In an exclamation, the subject comes before the verb: How kind you are!' },
      { q: '___ be late for the exam.', choices: ['Don\'t', 'Doesn\'t', 'Not'], ex: 'Negative instruction: Don\'t + verb.' },
      { q: 'Let\'s ___ to the park.', choices: ['go', 'to go', 'going'], ex: 'Let\'s + base verb.' },
      { q: 'I like summer, ___ I hate the heat.', choices: ['but', 'so', 'because'], ex: '"but" joins two contrasting ideas.' },
      { q: 'It was late, ___ we took a taxi.', choices: ['so', 'but', 'or'], ex: '"so" introduces the result.' },
      { q: '___ I have free time, I play chess.', choices: ['When', 'So', 'But'], ex: 'When + clause, main clause.' }
    ]
  },

  build: [
    { tiles: ['Where', 'does', 'your', 'brother', 'work', '?'], skill: 'quest' },
    { tiles: ['Did', 'you', 'watch', 'the', 'match', 'yesterday', '?'], skill: 'quest' },
    { tiles: ['What', 'a', 'wonderful', 'idea', '!'], skill: 'types' },
    { tiles: ['How', 'fast', 'your', 'brother', 'runs', '!'], skill: 'types' },
    { tiles: ['Please', 'don\'t', 'open', 'the', 'window', '.'], skill: 'types' },
    { tiles: ['Let\'s', 'meet', 'at', 'the', 'café', 'after', 'school', '.'], also: ['Let\'s meet after school at the café.'], skill: 'frames' },
    { tiles: ['I', 'was', 'hungry', ',', 'so', 'I', 'made', 'a', 'sandwich', '.'], skill: 'struct' },
    { tiles: ['She', 'likes', 'coffee', ',', 'but', 'her', 'husband', 'prefers', 'tea', '.'], skill: 'struct' },
    { tiles: ['When', 'I', 'got', 'home', ',', 'I', 'had', 'dinner', '.'], skill: 'struct' },
    { tiles: ['We', 'stayed', 'at', 'home', 'because', 'it', 'was', 'raining', '.'], skill: 'struct' },
    { tiles: ['How', 'often', 'do', 'you', 'go', 'to', 'the', 'cinema', '?'], skill: 'quest' },
    { tiles: ['If', 'it', 'rains', 'tomorrow', ',', 'we', 'will', 'stay', 'at', 'home', '.'], also: ['If it rains, we will stay at home tomorrow.'], skill: 'frames' }
  ],

  write: {
    task: 'Write a short message (50–90 words) to a friend, inviting them to spend Saturday with you.',
    include: ['at least one question, one exclamation and one instruction or suggestion (Bring… · Don\'t… · Let\'s…);', 'at least one compound sentence (, and · , but · , so);', 'at least one complex sentence (because · when · if).'],
    min: 50, max: 90,
    checklist: ['Every sentence has a subject and a verb (instructions start with the verb).', 'My questions have the auxiliary in the right place (Are you…? · Do you…?) and end with ?',
      'My exclamation uses What a…! or How…! and ends with !', 'I wrote at least one instruction or suggestion (Bring… · Don\'t… · Let\'s…).',
      'I joined two ideas with , and · , but · , so.', 'I used because, when or if, with a comma when the clause comes first.',
      'Capital letters and end punctuation are correct.'],
    model: 'Hi Yassine, Are you free on Saturday? Let\'s go to the beach in the morning. The weather will be sunny, so we can swim. If you want, we can have lunch at my uncle\'s café. He makes the best fish in town! Bring your football because my cousins are coming too. When we get tired, we can watch the sunset. What a perfect day! Text me tonight. Sami',
    modelNote: 'Question: Are you free…? · Exclamations: He makes the best fish…! / What a perfect day! · Instructions: Let\'s go… / Bring… / Text me… · Compound: …, so we can swim · Complex: If you want, … / …because… / When we get tired, …'
  }
};
