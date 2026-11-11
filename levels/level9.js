/* Writing Academy · Level 9: Writing Different Text Genres. Content approved by the teacher (LEVELS_8_10_DRAFT.md, Nov 2026).
   Same format as level1.js: the FIRST choice is the correct one; mistake "wrong" = 0-based word index.
   Build is Paragraph Architect (para: true). The model answer keeps its line breaks (\n). */
(window.WA_LEVELS = window.WA_LEVELS || {})[9] = {
  n: 9,
  title: 'Writing Different Text Genres',
  stage: 'Genres',
  target: 'Adapt your writing to the intended reader and text type.',
  skills: {
    genre:  { name: 'Recognising the genre', review: 'Read Learn cards 1 to 5 again, then redo Practise A.' },
    tone:   { name: 'Formal or informal tone', review: 'Read Learn cards 1 and 2 again, then redo Practise B.' },
    struct: { name: 'Structure, openings & closings', review: 'Read Learn cards 3 to 5 again, then redo Practise C and Build.' },
    lang:   { name: 'Language of each genre', review: 'Go through all five Learn cards again, then redo Practise D.' },
    frames: { name: 'Genre chunks', review: 'Go through the Memorise flashcards again, then redo the Memorise questions.' }
  },

  learn: [
    { title: 'Formal email', skill: 'tone',
      points: ['<b>Purpose:</b> apply, complain, ask for information. <b>Reader:</b> someone you don\'t know, or an organisation.',
        'Open: <i>Dear Sir or Madam, · Dear Mr Alami,</i> → reason: <i>I am writing to…</i> → details → <i>I look forward to hearing from you.</i>',
        'Close: <i>Yours faithfully,</i> (after <i>Dear Sir or Madam</i>) · <i>Yours sincerely,</i> (after a name) + your full name.',
        'No contractions (<i>I\'m, can\'t</i>) and no slang.'],
      check: { q: 'Choose the sentence for a formal email.', choices: ['I am writing to enquire about your summer courses.', 'Hi! I wanna know about your courses.', 'Hey, what\'s up with your courses?'],
        ex: 'I am writing to… + a formal verb (enquire), with no slang.' } },
    { title: 'Informal email', skill: 'tone',
      points: ['<b>Reader:</b> a friend or a relative. Open: <i>Hi Sara, · Dear Omar,</i> + <i>How are you? · Thanks for your email!</i>',
        'Chatty language: contractions, questions, exclamations, phrasal verbs.',
        'Close: <i>Write back soon! · Take care, · Love, · Best wishes,</i> + your first name.'],
      check: { q: 'The best ending for an email to your cousin:', choices: ['Write back soon! Love, Amal', 'Yours faithfully, Amal', 'I look forward to your prompt reply.'],
        ex: 'A friendly closing + first name.' } },
    { title: 'Article', skill: 'struct',
      points: ['<b>Readers:</b> a magazine or a website. A <b>catchy title</b>, an opening that grabs the reader (a question, a surprising fact), clear paragraphs, and a final thought or question.',
        'Tone: semi-formal and lively.'],
      check: { q: 'The best title for an article about healthy eating for teenagers:', choices: ['Eat Smart, Feel Great: Five Easy Food Tips', 'Dear Sir or Madam', 'Once upon a time'],
        ex: 'Short, catchy and about the topic.' } },
    { title: 'Story', skill: 'struct',
      points: ['<b>Set the scene</b> (who, where, when) → a problem or event → the <b>climax</b> (the most exciting moment) → the ending.',
        'Past tenses, time linkers (<i>suddenly, a few minutes later, in the end</i>), feelings and direct speech.'],
      check: { q: 'The best opening line for a story:', choices: ['It was a stormy night, and Sara was alone in the house.', 'I am writing to complain about the storm.', 'In conclusion, storms are dangerous.'],
        ex: 'It sets the scene: when (a stormy night), who (Sara), where (the house).' } },
    { title: 'Blog post', skill: 'struct',
      points: ['<b>Readers:</b> people online. A title, first person (<i>I</i>), a friendly and personal tone, questions to the readers.',
        'It often ends by inviting comments: <i>Let me know in the comments!</i>'],
      check: { q: 'The best ending for a blog post:', choices: ['What about you? Tell me in the comments below!', 'Yours sincerely, Karim Alami', 'The end.'],
        ex: 'A blog invites readers to comment.' } }
  ],

  practise: [
    { key: 'A', title: 'Which genre?', skill: 'genre', type: 'choice', items: [
      { q: 'Dear Sir or Madam, I am writing to apply for the position of summer camp assistant.', choices: ['Formal email', 'Informal email', 'Story', 'Blog post'], ex: 'Dear Sir or Madam + I am writing to apply…' },
      { q: 'Hi Lina! Thanks for your message. Guess what? I passed my driving test!', choices: ['Informal email', 'Formal email', 'Article', 'Story'], ex: 'A friendly greeting and chatty news to a friend.' },
      { q: 'Ten Ways to Save Money as a Student. Are you always short of money at the end of the month? Read on!', choices: ['Article', 'Story', 'Formal email', 'Informal email'], ex: 'A catchy title and a question that grabs the reader.' },
      { q: 'The old man opened the door slowly. "Who\'s there?" he whispered.', choices: ['Story', 'Article', 'Formal email', 'Blog post'], ex: 'Past tense, a character and direct speech.' },
      { q: 'Hey everyone! Today I\'m sharing my first week at university. Don\'t forget to leave a comment!', choices: ['Blog post', 'Formal email', 'Story', 'Informal email'], ex: 'Personal, to online readers, inviting comments.' },
      { q: 'I look forward to hearing from you. Yours faithfully, Youssef Amrani', choices: ['Formal email', 'Informal email', 'Story', 'Blog post'], ex: 'A formal closing + full name.' }
    ] },
    { key: 'B', title: 'Formal or informal?', skill: 'tone', type: 'choice', items: [
      { q: 'A formal opening to someone you don\'t know:', choices: ['Dear Sir or Madam,', 'Hi there,', 'Hey!'], ex: 'Formal, name unknown: Dear Sir or Madam,' },
      { q: 'Choose the formal sentence.', choices: ['I would be grateful if you could send me more information.', 'Can you send me more info?', 'Send me more stuff, please.'], ex: 'I would be grateful if you could… is polite and formal.' },
      { q: 'Choose the formal sentence.', choices: ['I am writing to complain about the delay.', 'I\'m writing coz I\'m angry about the delay.', 'What\'s wrong with your delay?!'], ex: 'No contractions or slang in a formal email.' },
      { q: 'An informal closing:', choices: ['Take care,', 'Yours faithfully,', 'I look forward to hearing from you.'], ex: 'Take care, is friendly.' },
      { q: 'The closing after "Dear Sir or Madam":', choices: ['Yours faithfully,', 'Yours sincerely,', 'Love,'], ex: 'Name unknown → Yours faithfully.' },
      { q: 'The closing after "Dear Mr Benali":', choices: ['Yours sincerely,', 'Yours faithfully,', 'Lots of love,'], ex: 'Name known → Yours sincerely.' },
      { q: 'Choose the informal sentence.', choices: ['Can\'t wait to see you!', 'I await your reply with interest.', 'I would appreciate a response.'], ex: 'Contraction + exclamation: informal.' },
      { q: 'Which sentence is NOT suitable in a formal email?', choices: ['Gonna call you later!', 'Please find attached my CV.', 'Thank you for your time.'], ex: '"Gonna" is slang.' }
    ] },
    { key: 'C', title: 'Structure, openings and closings', skill: 'struct', type: 'choice', items: [
      { q: 'The first paragraph of a formal email should…', choices: ['say why you are writing', 'tell a long story', 'ask about the reader\'s family'], ex: 'Start with the reason: I am writing to…' },
      { q: 'A good article title is…', choices: ['short and catchy', 'a full paragraph', '"Dear readers,"'], ex: 'A title must catch the reader\'s eye.' },
      { q: 'A story usually begins by…', choices: ['setting the scene: who, where and when', 'giving a conclusion', 'listing advantages'], ex: 'Set the scene first.' },
      { q: 'A blog post often ends by…', choices: ['inviting readers to comment', '"Yours faithfully,"', 'a formal signature'], ex: 'Blogs talk to their readers.' },
      { q: 'An informal email usually starts with…', choices: ['a friendly greeting and a question to the reader', '"I am writing to complain…"', '"Dear Sir or Madam,"'], ex: 'Hi… How are you?' },
      { q: 'The climax of a story is…', choices: ['the most exciting moment', 'the title', 'the first sentence'], ex: 'The climax is the high point of the action.' }
    ] },
    { key: 'D', title: 'The language of each genre', skill: 'lang', type: 'choice', items: [
      { q: '(story) ___, a loud noise came from the kitchen.', choices: ['Suddenly', 'Furthermore', 'Yours sincerely'], ex: 'Story language: Suddenly.' },
      { q: '(article) The best opening question:', choices: ['Have you ever wondered why we dream?', 'Dear Sir, I am writing to you.', 'The end.'], ex: 'A question grabs the reader.' },
      { q: '(formal email) I would be grateful ___ you could reply soon.', choices: ['if', 'that', 'when'], ex: 'I would be grateful if you could…' },
      { q: '(informal email) Thanks ___ your email!', choices: ['for', 'to', 'of'], ex: 'Thanks for…' },
      { q: '(blog post) Choose the best sentence.', choices: ['So, what do you think? Let me know below!', 'I remain, Sir, your obedient servant.', 'Once upon a time, there lived a king.'], ex: 'Blogs speak directly to readers.' },
      { q: '(formal email) Please find ___ my CV.', choices: ['attached', 'attach', 'attaching'], ex: 'Please find attached…' }
    ] },
    { key: 'E', title: 'Find the mistake: tap the wrong word', type: 'mistake', items: [
      { words: 'Dear Sir or Madam, I\'m writing to ask about your courses.', wrong: 4, fix: 'I am', skill: 'tone', ex: 'No contractions in a formal email: I am.' },
      { words: 'I look forward to hear from you.', wrong: 4, fix: 'hearing', skill: 'lang', ex: 'look forward to + verb-ing: hearing.' },
      { words: 'Hi Omar! Thanks to your email.', wrong: 3, fix: 'for', skill: 'lang', ex: 'Thanks for your email.' },
      { words: 'Suddenly, the door open and a man walked in.', wrong: 3, fix: 'opened', skill: 'struct', ex: 'A story is in the past: opened.' }
    ] }
  ],

  memorise: {
    frames: [
      { f: 'I am writing to + verb … (formal email)', e: 'I am writing to apply for the job of camp assistant.' },
      { f: 'I would be grateful if you could … (formal email)', e: 'I would be grateful if you could send me a brochure.' },
      { f: 'I look forward to hearing from you. Yours faithfully, (formal email)', e: 'I look forward to hearing from you. Yours faithfully, Ilyas Bennani' },
      { f: 'Thanks for your email! It was great to hear from you. (informal email)', e: 'Thanks for your email! It was great to hear from you.' },
      { f: 'Write back soon! / Take care, (informal email)', e: 'Write back soon! Love, Nadia' },
      { f: 'Have you ever wondered …? (article)', e: 'Have you ever wondered why we dream?' },
      { f: 'It was a … when suddenly … (story)', e: 'It was a quiet evening when suddenly the phone rang.' },
      { f: 'I couldn\'t believe my eyes! (story)', e: 'I opened the box, and I couldn\'t believe my eyes!' },
      { f: 'In this post, I\'m going to … (blog)', e: 'In this post, I\'m going to share my top study tips.' },
      { f: 'Let me know what you think in the comments! (blog)', e: 'That\'s all for today. Let me know what you think in the comments!' }
    ],
    quiz: [
      { q: 'I am writing ___ apply for the job.', choices: ['to', 'for', 'of'], ex: 'I am writing to + verb.' },
      { q: 'I would be grateful if you ___ send me a brochure.', choices: ['could', 'can to', 'will to'], ex: 'I would be grateful if you could…' },
      { q: 'I look forward to ___ from you.', choices: ['hearing', 'hear', 'heard'], ex: 'look forward to + verb-ing.' },
      { q: 'Thanks for your email! It was great ___ from you.', choices: ['to hear', 'hear', 'heard'], ex: 'It was great to hear from you.' },
      { q: 'Write back ___!', choices: ['soon', 'soonly', 'lately'], ex: 'Write back soon!' },
      { q: 'Have you ever ___ why we dream?', choices: ['wondered', 'wonder', 'wondering'], ex: 'Have you ever + past participle.' },
      { q: 'It was a quiet evening when ___ the phone rang.', choices: ['suddenly', 'sudden', 'in conclusion'], ex: 'when suddenly + past.' },
      { q: 'I couldn\'t believe my ___!', choices: ['eyes', 'eye', 'see'], ex: 'I couldn\'t believe my eyes!' },
      { q: 'In this post, I\'m going ___ share my top study tips.', choices: ['to', 'for', 'of'], ex: 'I\'m going to + verb.' },
      { q: 'Let me know what you think ___ the comments!', choices: ['in', 'on', 'at'], ex: 'in the comments.' }
    ]
  },

  build: [
    { para: true, tiles: ['Dear Sir or Madam,', 'I am writing to enquire about your English summer courses.', 'I would be grateful if you could tell me the dates and the price.', 'I look forward to hearing from you.', 'Yours faithfully, Hamza Idrissi'], skill: 'struct' },
    { para: true, tiles: ['Hi Sara,', 'Thanks for your email! It was great to hear from you.', 'Guess what? I\'ve just joined the school theatre club.', 'We\'re putting on a play in June, so you must come!', 'Write back soon! Love, Nadia'], skill: 'struct' },
    { para: true, tiles: ['It was a quiet evening, and Omar was reading in his room.', 'Suddenly, he heard a strange noise in the garden.', 'He went outside slowly, holding a torch.', 'To his surprise, it was a tiny lost kitten.', 'From that day on, the kitten never left his side.'], skill: 'struct' },
    { para: true, tiles: ['Two Easy Ways to Sleep Better', 'Do you often feel tired in the morning?', 'If so, these simple tips are for you.', 'First, switch off your phone an hour before bed.', 'Second, go to bed at the same time every night.'], skill: 'struct' },
    { para: true, tiles: ['My First Week at High School', 'Hi everyone, and welcome back to my blog!', 'In this post, I\'m going to tell you about my first week at high school.', 'To be honest, I was really nervous on the first day, but my classmates were very friendly.', 'What about you? Let me know in the comments!'], skill: 'struct' },
    { para: true, tiles: ['Dear Mr Benali,', 'I am writing to complain about a laptop I bought from your shop last week.', 'Unfortunately, the screen stopped working after only two days.', 'I would be grateful if you could replace it or give me a refund.', 'Yours sincerely, Salma Tazi'], skill: 'tone' }
  ],

  write: {
    task: 'You saw an advert for a summer volunteering camp. Write a formal email (100–140 words) to the organiser asking for information.',
    include: ['a formal greeting and the reason for writing;', 'at least two polite questions (dates, price, accommodation, language…);', 'a formal closing and your full name.'],
    min: 100, max: 140,
    checklist: ['I started with Dear Sir or Madam, (or Dear Mr / Ms + surname).', 'My first sentence says why I am writing (I am writing to…).',
      'I asked at least two clear questions politely (I would be grateful if you could… · Could you tell me…?).', 'My tone is formal: no contractions (I\'m, can\'t) and no slang.',
      'Each paragraph has one purpose (reason → questions → closing).', 'I ended with I look forward to hearing from you. and Yours faithfully / Yours sincerely + my full name.',
      'Grammar, spelling and punctuation are correct.'],
    model: 'Dear Sir or Madam,\nI am writing to enquire about the summer volunteering camp advertised on your website. I am a seventeen-year-old student from Rabat, and I would like to take part in the camp in July.\nI would be grateful if you could give me some more information. Firstly, could you tell me the exact dates of the camp and how many hours volunteers work each day? Secondly, I would like to know whether accommodation and meals are included in the price. Finally, is it necessary to speak French, or is English enough?\nThank you for your time. I look forward to hearing from you.\nYours faithfully,\nIlyas Bennani',
    modelNote: 'Greeting → reason (I am writing to…) → polite questions (I would be grateful if…, could you tell me…?) → closing (I look forward to…, Yours faithfully + full name). No contractions.'
  }
};
