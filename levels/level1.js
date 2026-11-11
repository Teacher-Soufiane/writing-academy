/* Writing Academy · Level 1: Building Correct Sentences. Content approved by the teacher (LEVEL1_DRAFT.md, Nov 2026).
   Format notes:
   - choices: the FIRST choice is the correct one (the page shuffles them with permanent ids).
   - skill: one of the level's skills (used for the Review breakdown).
   - mistake items: "words" is the sentence; "wrong" is the 0-based index of the wrong word; "fix" is the correction.
   - build items: tiles in correct order; "also" lists other correct sentences. The page shuffles the tiles.
   - Explanations (ex) are short feedback lines written for the approved items. */
(window.WA_LEVELS = window.WA_LEVELS || {})[1] = {
  n: 1,
  title: 'Building Correct Sentences',
  stage: 'Foundation',
  target: 'Construct grammatically correct basic sentences.',
  skills: {
    order: { name: 'Word order', review: 'Read Learn cards 1 and 2 again, then redo Practise A and Build.' },
    agree: { name: 'Subject–verb agreement', review: 'Read Learn card 3 again, then redo Practise B.' },
    mech:  { name: 'Capitals & punctuation', review: 'Read Learn card 4 again, then redo Practise C.' },
    neg:   { name: 'Negative sentences', review: 'Read Learn card 5 again, then redo Practise D.' },
    frames:{ name: 'Sentence frames', review: 'Go through the Memorise flashcards again, then redo the Memorise questions.' }
  },

  learn: [
    { title: 'The basic sentence: Subject + Verb + Object / Complement', skill: 'order',
      points: ['A sentence needs a <b>subject</b> (who or what) and a <b>verb</b> (the action or state).',
        '<i>Subject + verb:</i> <b>Birds fly.</b>',
        '<i>Subject + verb + object:</i> <b>My mother cooks lunch.</b>',
        '<i>Subject + verb + complement:</i> <b>The film was exciting.</b> / <b>Ahmed is a nurse.</b>'],
      check: { q: 'Which is a complete sentence?', choices: ['My cousin works in Agadir.', 'Works in Agadir every day.', 'My cousin in Agadir.'],
        ex: 'It has a subject (My cousin) and a verb (works). The others have no subject or no verb.' } },
    { title: 'Word order', skill: 'order',
      points: ['English order: <b>Subject → Verb → Object → Place → Time</b>.',
        '<i>We play football in the park on Fridays.</i>',
        'Frequency adverbs go <b>before</b> the main verb but <b>after</b> <i>be</i>: <i>She <b>usually</b> walks to school.</i> / <i>He is <b>always</b> late.</i>',
        'Adjectives go <b>before</b> the noun: <i>a <b>long</b> day</i>, not <i>a day long</i>.'],
      check: { q: 'Choose the correct sentence.', choices: ['I always drink tea in the morning.', 'I drink always tea in the morning.', 'Always I drink in the morning tea.'],
        ex: '"always" goes before the main verb (drink), and the object (tea) comes before the time (in the morning).' } },
    { title: 'Subject–verb agreement', skill: 'agree',
      points: ['Present simple: <b>he / she / it + verb-s</b>: <i>She lives</i>, <i>It works</i>, <i>My father watches</i>.',
        '<b>I / you / we / they + base verb</b>: <i>They live</i>, <i>My parents watch</i>.',
        '<i>be</i>: I <b>am</b> · he/she/it <b>is</b> · we/you/they <b>are</b>. <i>have</i>: he/she/it <b>has</b>.',
        'Watch out: <i>Everyone <b>knows</b></i> · <i>People <b>are</b></i> · <i>My friends and I <b>are</b></i>.'],
      check: { q: 'My sister ___ English very well.', choices: ['speaks', 'speak', 'speaking'],
        ex: '"My sister" = she, so the present simple verb takes -s: speaks.' } },
    { title: 'Capital letters and punctuation', skill: 'mech',
      points: ['Capital letter: the <b>first word</b>, <b>I</b>, <b>names</b> of people, cities, countries, <b>days</b>, <b>months</b>, <b>languages</b> and <b>nationalities</b>.',
        '<i>On Monday, Sara and I visited Fes.</i> · <i>He speaks Arabic and French.</i>',
        'End a statement with a <b>full stop (.)</b>, a question with <b>(?)</b>, a strong feeling with <b>(!)</b>.'],
      check: { q: 'Choose the correctly written sentence.', choices: ['My friend Karim was born in March.', 'my friend karim was born in march.', 'My friend Karim was born in march'],
        ex: 'The first word, the name (Karim) and the month (March) need capitals, and a statement ends with a full stop.' } },
    { title: 'Positive and negative sentences', skill: 'neg',
      points: ['<i>be</i>: She is happy → She <b>is not (isn\'t)</b> happy.',
        'Present simple: He plays → He <b>does not (doesn\'t) play</b> (no -s after doesn\'t).',
        'Past simple: They went → They <b>did not (didn\'t) go</b> (base verb after didn\'t).',
        'Modals: I can swim → I <b>cannot (can\'t)</b> swim. Perfect: We have finished → We <b>haven\'t</b> finished.'],
      check: { q: 'Omar likes coffee. → Choose the negative.', choices: ['Omar doesn\'t like coffee.', 'Omar doesn\'t likes coffee.', 'Omar not likes coffee.'],
        ex: 'After doesn\'t, use the base verb with no -s: doesn\'t like.' } }
  ],

  practise: [
    { key: 'A', title: 'Word order: choose the correct sentence', skill: 'order', type: 'choice', items: [
      { choices: ['My brother plays football every Saturday.', 'My brother football plays every Saturday.', 'Every Saturday plays my brother football.', 'Plays my brother football every Saturday.'], ex: 'Subject (My brother) → verb (plays) → object (football) → time (every Saturday).' },
      { choices: ['She is reading an interesting book.', 'She is reading a book interesting.', 'She an interesting book is reading.', 'Is she reading an interesting book.'], ex: 'The adjective goes before the noun (an interesting book), and the verb comes right after the subject.' },
      { choices: ['We visit our grandparents on Sundays.', 'We on Sundays visit our grandparents.', 'We visit on Sundays our grandparents.', 'Visit we our grandparents on Sundays.'], ex: 'The object (our grandparents) comes before the time (on Sundays).' },
      { choices: ['He is never late for school.', 'He never is late for school.', 'He is late never for school.', 'Never he is late for school.'], ex: 'A frequency adverb goes after the verb be: is never late.' },
      { choices: ['My parents bought a new car last year.', 'My parents bought last year a new car.', 'My parents a new car bought last year.', 'Last year bought my parents a new car.'], ex: 'Verb (bought) → object (a new car) → time (last year).' },
      { choices: ['They usually have dinner at eight.', 'They have usually dinner at eight.', 'They have dinner usually at eight.', 'Usually they dinner have at eight.'], ex: 'A frequency adverb goes before the main verb: usually have.' }
    ] },
    { key: 'B', title: 'Subject–verb agreement: choose the correct verb', skill: 'agree', type: 'choice', items: [
      { q: 'My uncle ___ in a hospital.', choices: ['works', 'work', 'working'], ex: 'My uncle = he → works.' },
      { q: 'The children ___ in the garden now.', choices: ['are playing', 'is playing', 'plays'], ex: '"children" is plural, and "now" needs the present continuous: are playing.' },
      { q: 'Everyone in my class ___ a smartphone.', choices: ['has', 'have', 'are having'], ex: '"Everyone" takes a singular verb: has.' },
      { q: 'My friends and I ___ to the same school.', choices: ['go', 'goes', 'going'], ex: '"My friends and I" = we → go.' },
      { q: 'There ___ two bakeries in our street.', choices: ['are', 'is', 'be'], ex: '"two bakeries" is plural: there are.' },
      { q: 'The news ___ very good today.', choices: ['is', 'are', 'were'], ex: '"news" is uncountable and takes a singular verb: is.' },
      { q: 'People in this city ___ very friendly.', choices: ['are', 'is', 'was'], ex: '"people" is plural: are.' },
      { q: 'Each of my brothers ___ a bike.', choices: ['has', 'have', 'having'], ex: '"Each of" takes a singular verb: has.' }
    ] },
    { key: 'C', title: 'Capital letters and punctuation: choose the correctly written sentence', skill: 'mech', type: 'choice', items: [
      { choices: ['Last Friday, Yassine and I went to Marrakech.', 'last Friday, Yassine and i went to Marrakech.', 'Last friday, yassine and I went to marrakech.', 'Last Friday, Yassine and I went to Marrakech'], ex: 'Capitals for the first word, Friday, Yassine, I and Marrakech, and a full stop at the end.' },
      { choices: ['My cousin speaks English and Spanish.', 'My cousin speaks english and spanish.', 'my cousin speaks English and Spanish.', 'My Cousin Speaks English and Spanish.'], ex: 'Languages take capitals; ordinary words like cousin and speaks do not.' },
      { choices: ['Where do you live?', 'Where do you live.', 'where do you live?', 'Where Do You Live?'], ex: 'A question starts with a capital and ends with a question mark.' },
      { choices: ['The exam starts on Monday, 2 June.', 'The exam starts on monday, 2 june.', 'the exam starts on Monday, 2 June.', 'The Exam Starts on monday, 2 June.'], ex: 'Days and months take capitals: Monday, June.' },
      { choices: ['What a beautiful day!', 'What a beautiful day?', 'what a beautiful day!', 'What A Beautiful Day.'], ex: 'A strong feeling ends with an exclamation mark, and only the first word needs a capital.' },
      { choices: ['Morocco is a country in North Africa.', 'morocco is a country in north africa.', 'Morocco is a country in north Africa', 'Morocco Is A Country In North Africa.'], ex: 'Countries and regions (Morocco, North Africa) take capitals, and a statement ends with a full stop.' }
    ] },
    { key: 'D', title: 'Make it negative: choose the correct negative', skill: 'neg', type: 'choice', items: [
      { q: 'He likes fast food.', choices: ['He doesn\'t like fast food.', 'He doesn\'t likes fast food.', 'He don\'t like fast food.'], ex: 'He → doesn\'t + base verb: doesn\'t like.' },
      { q: 'They went to the beach.', choices: ['They didn\'t go to the beach.', 'They didn\'t went to the beach.', 'They not went to the beach.'], ex: 'Past simple negative: didn\'t + base verb (go, not went).' },
      { q: 'I am tired today.', choices: ['I am not tired today.', 'I don\'t am tired today.', 'I not am tired today.'], ex: 'With be, put not after the verb: am not.' },
      { q: 'She can drive.', choices: ['She can\'t drive.', 'She doesn\'t can drive.', 'She can\'t to drive.'], ex: 'Modals make their own negative (can\'t) and take the base verb without to.' },
      { q: 'We have finished our homework.', choices: ['We haven\'t finished our homework.', 'We don\'t have finished our homework.', 'We haven\'t finish our homework.'], ex: 'Present perfect: haven\'t + past participle (finished).' },
      { q: 'My father works on Saturdays.', choices: ['My father doesn\'t work on Saturdays.', 'My father doesn\'t works on Saturdays.', 'My father not work on Saturdays.'], ex: 'doesn\'t + base verb: doesn\'t work (no -s).' }
    ] },
    { key: 'E', title: 'Find the mistake: tap the wrong word', type: 'mistake', items: [
      { words: 'My sister study at university.', wrong: 2, fix: 'studies', skill: 'agree', ex: 'My sister = she → studies.' },
      { words: 'We was very happy yesterday.', wrong: 1, fix: 'were', skill: 'agree', ex: 'We → were (plural).' },
      { words: 'He doesn\'t plays tennis.', wrong: 2, fix: 'play', skill: 'neg', ex: 'After doesn\'t, use the base verb: play.' },
      { words: 'I visited paris last summer.', wrong: 2, fix: 'Paris', skill: 'mech', ex: 'Cities take a capital letter: Paris.' }
    ] }
  ],

  memorise: {
    frames: [
      { f: 'There is + singular / There are + plural', e: 'There are many parks in my city.' },
      { f: 'It is + adjective + to + verb', e: 'It is important to sleep well.' },
      { f: 'I enjoy + verb-ing', e: 'I enjoy reading novels.' },
      { f: 'I am interested in + verb-ing / noun', e: 'I am interested in learning languages.' },
      { f: 'I am good at + verb-ing', e: 'I am good at drawing.' },
      { f: 'My favourite … is … because …', e: 'My favourite subject is English because it is useful.' },
      { f: 'I would like to + verb', e: 'I would like to become a doctor.' },
      { f: 'It takes me + time + to + verb', e: 'It takes me twenty minutes to walk to school.' },
      { f: 'I have never + past participle', e: 'I have never travelled by plane.' },
      { f: 'I usually … , but today I …', e: 'I usually take the bus, but today I am walking.' }
    ],
    quiz: [
      { q: 'I enjoy ___ to music.', choices: ['listening', 'listen', 'to listen'], ex: 'enjoy + verb-ing: enjoy listening.' },
      { q: 'It is important ___ water every day.', choices: ['to drink', 'drinking', 'drink'], ex: 'It is + adjective + to + verb: important to drink.' },
      { q: 'There ___ a lot of traffic today.', choices: ['is', 'are', 'be'], ex: '"traffic" is uncountable (singular): there is.' },
      { q: 'I am good ___ maths.', choices: ['at', 'in', 'on'], ex: 'good at + noun / verb-ing.' },
      { q: 'I have never ___ snow.', choices: ['seen', 'saw', 'see'], ex: 'have never + past participle: seen.' },
      { q: 'I would like ___ abroad.', choices: ['to study', 'studying', 'study'], ex: 'would like + to + verb.' },
      { q: 'It takes me an hour ___ my homework.', choices: ['to do', 'doing', 'do'], ex: 'It takes me + time + to + verb.' },
      { q: 'I am interested ___ photography.', choices: ['in', 'on', 'at'], ex: 'interested in + noun / verb-ing.' },
      { q: 'My favourite sport is tennis ___ it is fast.', choices: ['because', 'so', 'but'], ex: '"because" gives the reason.' },
      { q: 'I usually get up at six, ___ today I got up at nine.', choices: ['but', 'because', 'so'], ex: '"but" shows a contrast between usually and today.' }
    ]
  },

  build: [
    { tiles: ['My', 'sister', 'works', 'in', 'a', 'bank', '.'], skill: 'agree' },
    { tiles: ['We', 'always', 'have', 'breakfast', 'at', 'seven', '.'], skill: 'order' },
    { tiles: ['The', 'students', 'are', 'in', 'the', 'library', 'now', '.'], also: ['The students are now in the library.'], skill: 'order' },
    { tiles: ['I', 'don\'t', 'like', 'spicy', 'food', '.'], skill: 'neg' },
    { tiles: ['Karim', 'visited', 'his', 'uncle', 'in', 'Tangier', 'last', 'week', '.'], also: ['Karim visited his uncle last week in Tangier.'], skill: 'order' },
    { tiles: ['It', 'is', 'important', 'to', 'drink', 'water', '.'], skill: 'frames' },
    { tiles: ['My', 'parents', 'don\'t', 'watch', 'TV', 'in', 'the', 'evening', '.'], skill: 'neg' },
    { tiles: ['There', 'are', 'thirty', 'students', 'in', 'my', 'class', '.'], skill: 'frames' },
    { tiles: ['She', 'is', 'never', 'late', 'for', 'work', '.'], skill: 'order' },
    { tiles: ['I', 'enjoy', 'playing', 'chess', 'with', 'my', 'friends', '.'], skill: 'frames' },
    { tiles: ['They', 'didn\'t', 'go', 'to', 'school', 'yesterday', '.'], skill: 'neg' },
    { tiles: ['My', 'favourite', 'season', 'is', 'spring', 'because', 'it', 'is', 'warm', '.'], skill: 'frames' }
  ],

  write: {
    task: 'Write 6 sentences (50–80 words) about your daily routine.',
    include: ['at least one negative sentence;', 'at least two frames from Memorise (e.g. I enjoy…, It takes me…);', 'a time or frequency word in most sentences (usually, every day, at 7 o\'clock).'],
    min: 50, max: 80,
    checklist: ['Every sentence has a subject and a verb.', 'He / she / it verbs end in -s (my father works).',
      'Every sentence starts with a capital letter and ends with a full stop.', 'Names, days and cities have capital letters; I is always a capital.',
      'I wrote at least one correct negative sentence (don\'t / doesn\'t / didn\'t + base verb).', 'I used at least two frames from Memorise.',
      'The word order is Subject → Verb → Object → Place → Time.'],
    model: 'I usually get up at half past six. It takes me fifteen minutes to get ready. My mother prepares breakfast, and we eat together in the kitchen. I go to school by bus because it is far from my house. I don\'t have lunch at school; I come home at noon. In the evening, I enjoy reading for half an hour before I sleep.',
    modelNote: 'Frames: It takes me… / I enjoy… · Negative: I don\'t have… · Time words: usually, at half past six, in the evening.'
  }
};
