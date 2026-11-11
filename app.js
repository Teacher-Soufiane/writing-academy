/* Writing Academy: application logic. Level content comes from levels/levelN.js (window.WA_LEVELS[N]).
   Sections: config · helpers · data checks · progress store · rounds (Learn, Practise, Memorise, Build) ·
   Write (self-check, never marked, text never stored) · Review · rendering · actions · init. Plain ES5, no dependencies. */
(function () {
'use strict';
if (window.__waInit) return; window.__waInit = true;

/* ===== config ===== */
var STORE_KEY = 'levelup-2bac-writing-academy-v1';
var TITLES = ['Building Correct Sentences', 'Sentence Types and Structures', 'Expanding and Describing Sentences', 'Combining Ideas',
  'Expressing Relationships Between Ideas', 'Developing Cohesion and Coherence', 'Building a Well-Structured Paragraph',
  'Writing Different Types of Paragraphs', 'Writing Different Text Genres', 'Independent Exam Writing'];
var STEPS = [
  { key: 'learn',    name: 'Learn',    sub: 'Short explanations, examples and a quick check' },
  { key: 'practise', name: 'Practise', sub: 'Exercises with instant feedback' },
  { key: 'memorise', name: 'Memorise', sub: 'Useful frames and expressions' },
  { key: 'build',    name: 'Build',    sub: 'Sentence Builder: put the tiles in order' },
  { key: 'write',    name: 'Write',    sub: 'Your own text, with a self-check list' },
  { key: 'review',   name: 'Review',   sub: 'Your scores, your weakest skill, what to do next' }
];
var PASS = 0.8;
var LEVELS = window.WA_LEVELS || {};
/* index.html?level=3 shows only Level 3 (one embed per LearnWorlds unit). No or invalid value = all levels. */
var LOCK = (function () { var m = /[?&#]level=(\d+)/.exec(String(window.location.search) + String(window.location.hash)), n = m ? +m[1] : 0; return n >= 1 && n <= 10 ? n : null; })();

/* ===== helpers ===== */
var $ = function (s) { return document.querySelector(s); };
var app = $('#app');
function esc(t) { return String(t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
function say(t) { $('#liveMsg').textContent = t; }
function stepName(k) { return STEPS.filter(function (s) { return s.key === k; })[0].name; }
function wordCount(t) { return (String(t).match(/[A-Za-z0-9À-ɏ']+/g) || []).length; }
/* sentence from tiles: words separated by spaces, no space before punctuation */
function joinTiles(ts) { return ts.join(' ').replace(/\s+([.,!?;:])/g, '$1'); }
function normS(s) { return String(s).replace(/[‘’]/g, "'").replace(/\s+/g, ' ').trim(); }

/* ===== data checks: bad data gives a visible error, never a blank page ===== */
function validate() {
  var errs = [];
  Object.keys(LEVELS).forEach(function (k) {
    var L = LEVELS[k], p = 'Level ' + k + ': ';
    if (!L || L.n !== +k) { errs.push(p + 'wrong number'); return; }
    var skills = L.skills || {};
    var sk = function (s, where) { if (!skills[s]) errs.push(p + where + ' has unknown skill "' + s + '"'); };
    (L.learn || []).forEach(function (c, i) { if (!c.title || !c.points || !c.check || !c.check.choices || c.check.choices.length < 2) errs.push(p + 'learn card ' + (i + 1) + ' incomplete'); sk(c.skill, 'learn card ' + (i + 1)); });
    (L.practise || []).forEach(function (g) {
      g.items.forEach(function (it, i) {
        var w = 'practise ' + g.key + (i + 1);
        if (g.type === 'choice') { if (!it.choices || it.choices.length < 2 || new Set(it.choices).size !== it.choices.length) errs.push(p + w + ' bad choices'); sk(it.skill || g.skill, w); }
        else if (g.type === 'mistake') { var ws = it.words.split(' '); if (!(it.wrong >= 0 && it.wrong < ws.length) || !it.fix) errs.push(p + w + ' bad mistake item'); sk(it.skill, w); }
        else errs.push(p + w + ' unknown type');
        if (!it.ex) errs.push(p + w + ' no explanation');
      });
    });
    var M = L.memorise || {};
    (M.quiz || []).forEach(function (it, i) { if (!it.choices || it.choices.length < 2) errs.push(p + 'memorise ' + (i + 1) + ' bad choices'); });
    if (!M.frames || !M.frames.length) errs.push(p + 'no memorise frames');
    (L.build || []).forEach(function (b, i) { if (!b.tiles || b.tiles.length < 3) errs.push(p + 'build ' + (i + 1) + ' too short'); sk(b.skill, 'build ' + (i + 1)); if (!/^[A-Z]/.test(b.tiles[0])) errs.push(p + 'build ' + (i + 1) + ' first tile needs a capital'); });
    var W = L.write; if (!W || !W.task || !(W.min > 0 && W.max > W.min) || !W.checklist || !W.model) errs.push(p + 'write task incomplete');
  });
  if (!Object.keys(LEVELS).length) errs.push('No level content loaded.');
  return errs;
}

/* ===== progress store: scores and checklist answers only, never the student's text ===== */
var storeOk = true, store;
function blank() { return { lv: {} }; }
store = blank();
try { var raw = window.localStorage.getItem(STORE_KEY); if (raw) { var pr = JSON.parse(raw); if (pr && pr.lv) store = pr; } } catch (e) { storeOk = false; }
function save() { if (!storeOk) return; try { window.localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) { storeOk = false; } }
function lvRec(n) { return store.lv[n] || (store.lv[n] = {}); }
function stepRec(n, k) { var l = lvRec(n); return l[k] || null; }
var written = {}; /* the student's texts: in memory only, for this visit */
function scoredDone(n) { return ['practise', 'memorise', 'build'].filter(function (k) { var r = stepRec(n, k); return r && r.done; }).length; }
function stepDone(n, k) {
  if (k === 'review') return levelDone(n);
  var r = stepRec(n, k); return !!(r && r.done);
}
function levelDone(n) { return scoredDone(n) === 3 && stepDone(n, 'write'); }
function doneCount(n) { return STEPS.filter(function (s) { return s.key !== 'review' && stepDone(n, s.key); }).length; }

/* ===== rounds ===== */
var view = { page: LOCK ? 'level' : 'home', level: LOCK || 1, confirmReset: false };
var R = null;
function choiceItem(src, skill, extra) {
  var it = { kind: 'choice', q: src.q || '', ex: src.ex, skill: skill, labels: src.choices, order: shuffle(src.choices.map(function (_, i) { return i; })), tries: 0, picked: [], answered: false, ok: null };
  for (var k in extra) it[k] = extra[k];
  return it;
}
function buildItems(n, step, only) {
  var L = LEVELS[n], items = [];
  if (step === 'learn') L.learn.forEach(function (c, i) { items.push(choiceItem(c.check, c.skill, { kind: 'card', card: i, q: c.check.q, src: 'learn:' + i })); });
  if (step === 'practise') L.practise.forEach(function (g) {
    var gi = g.items.map(function (it, i) {
      var id = 'practise:' + g.key + i;
      if (g.type === 'mistake') return { kind: 'mistake', words: it.words.split(' '), wrong: it.wrong, fix: it.fix, ex: it.ex, skill: it.skill, group: g, src: id, tries: 0, picked: [], answered: false, ok: null };
      return choiceItem(it, it.skill || g.skill, { group: g, src: id });
    });
    items = items.concat(g.inOrder ? gi : shuffle(gi)); /* groups stay in order A→E; questions shuffled inside a group, except Complete the Text (inOrder) */
  });
  if (step === 'memorise') items = shuffle(L.memorise.quiz.map(function (it, i) { return choiceItem(it, 'frames', { src: 'memorise:' + i }); }));
  if (step === 'build') items = shuffle(L.build.map(function (b, i) {
    var right = [joinTiles(b.tiles)].concat(b.also || []).map(normS), order;
    var idx = b.tiles.map(function (_, k) { return k; });
    for (var g = 0; g < 20; g++) { order = shuffle(idx); if (normS(joinTiles(order.map(function (k) { return b.tiles[k]; }))) !== right[0]) break; } /* never start solved */
    return { kind: 'build', para: !!b.para, tiles: b.tiles, order: order, placed: [], right: right, skill: b.skill, src: 'build:' + i, tries: 0, answered: false, ok: null };
  }));
  if (only) items = items.filter(function (it) { return only.indexOf(it.src) > -1; });
  return items;
}
function startStep(step, only) {
  var n = view.level;
  if (!LEVELS[n]) return;
  if (step === 'write' || step === 'review') { R = null; view.page = step; render(); window.scrollTo(0, 0); return; }
  if (step === 'memorise' && !only) { R = null; view.page = 'frames'; render(); window.scrollTo(0, 0); return; }
  R = { step: step, level: n, items: buildItems(n, step, only), i: 0, retry: !!only };
  view.page = 'round'; render(); window.scrollTo(0, 0);
}
function startMemoQuiz() { R = { step: 'memorise', level: view.level, items: buildItems(view.level, 'memorise'), i: 0, retry: false }; view.page = 'round'; render(); window.scrollTo(0, 0); }

/* one shared answer path: first try right = counted; wrong once = one more try (answer hidden); wrong twice = answer shown */
function answer(it, right) {
  if (it.answered) return;
  if (right) { it.answered = true; it.final = true; it.ok = it.tries === 0; say(it.ok ? 'Correct.' : 'Correct on the second try.'); }
  else if (it.tries === 0) { it.tries = 1; say('Not quite. Try once more.'); }
  else { it.answered = true; it.final = false; it.ok = false; say('Not correct. The answer is shown.'); }
}
function finish() {
  var n = R.level, res = R.items.map(function (it) { return { src: it.src, skill: it.skill, ok: !!it.ok }; });
  R.results = res; R.score = res.filter(function (r) { return r.ok; }).length;
  var acc = R.score / Math.max(1, res.length);
  var l = lvRec(n), rec = l[R.step] || (l[R.step] = { best: 0, plays: 0, done: false });
  rec.plays++;
  if (!R.retry) {
    rec.best = Math.max(rec.best, acc);
    var sk = {}; res.forEach(function (r) { var s = sk[r.skill] || (sk[r.skill] = [0, 0]); s[1]++; if (r.ok) s[0]++; });
    rec.skills = sk; rec.last = acc;
    if (R.step === 'learn') rec.done = true; /* Learn: all cards read */
    else if (acc >= PASS) rec.done = true;
  } else if (R.step !== 'learn' && rec.skills) {
    /* corrected mistakes count towards the skill picture */
    res.forEach(function (r) { if (r.ok && rec.skills[r.skill] && rec.skills[r.skill][0] < rec.skills[r.skill][1]) rec.skills[r.skill][0]++; });
  }
  R.finished = true; save(); view.page = 'round'; render(); window.scrollTo(0, 0);
}

/* ===== review numbers ===== */
function skillTable(n) {
  var L = LEVELS[n], tot = {};
  ['learn', 'practise', 'memorise', 'build'].forEach(function (k) { var r = stepRec(n, k); if (r && r.skills) Object.keys(r.skills).forEach(function (s) { var t = tot[s] || (tot[s] = [0, 0]); t[0] += r.skills[s][0]; t[1] += r.skills[s][1]; }); });
  return Object.keys(L.skills).map(function (s) { var t = tot[s] || [0, 0]; return { key: s, name: L.skills[s].name, review: L.skills[s].review, c: t[0], t: t[1], pct: t[1] ? t[0] / t[1] : null }; });
}

/* ===== rendering ===== */
function setInfo(l, c) { $('#infoL').textContent = l; $('#infoC').textContent = c; }
function render() {
  if (LOCK && !LEVELS[LOCK]) return soon(LOCK);
  if (view.page === 'round' && R) return R.finished ? results() : renderItem();
  if (view.page === 'frames') return frames();
  if (view.page === 'write') return writePage();
  if (view.page === 'review') return reviewPage();
  if (view.page === 'level' || LOCK) return levelPage();
  return home();
}
function soon(n) {
  setInfo('LEVEL: ' + n, TITLES[n - 1].toUpperCase());
  app.innerHTML = '<div class="hero"><h1>WRITING <span>ACADEMY</span> · LEVEL ' + n + '</h1><p>' + esc(TITLES[n - 1]) + '</p></div><p class="warn" role="status">This level is coming soon.</p>';
}
function home(msg) {
  setInfo('LEVELS: 1–10', 'WRITING DEVELOPMENT PROGRAMME');
  var h = '<div class="hero"><h1>WRITING <span>ACADEMY</span></h1><p>10 levels · from correct sentences to independent exam writing</p></div>';
  if (!storeOk) h += '<p class="warn">Your progress cannot be saved in this browser (storage is blocked). You can still practise.</p>';
  if (msg) h += '<p class="warn" role="status">' + esc(msg) + '</p>';
  h += '<div class="levels">' + TITLES.map(function (t, i) {
    var n = i + 1, ok = !!LEVELS[n], d = ok ? doneCount(n) : 0, full = ok && levelDone(n);
    return '<button type="button" class="lvl' + (full ? ' complete' : '') + (ok ? '' : ' soon') + '" data-act="level" data-n="' + n + '"' + (ok ? '' : ' disabled') + '>' + (full ? '<span class="crown" aria-hidden="true">👑</span>' : '') +
      '<b>Level ' + n + '</b><small>' + esc(t) + '</small><span class="st" data-level-st="' + n + '">' + (ok ? d + ' / 5 steps' : 'Coming soon') + '</span></button>';
  }).join('') + '</div>';
  h += resetPanel();
  app.innerHTML = h;
}
function resetPanel() {
  return '<p class="note">Your scores are saved on this device only. Your texts are never saved or sent anywhere: copy them before you leave.</p><div class="actions">' + (view.confirmReset ?
    '<span class="confirm" role="alert">Delete all your Writing Academy progress on this device? <button type="button" class="btn danger" data-act="resetyes">Yes, delete</button><button type="button" class="btn" data-act="resetno">Cancel</button></span>' :
    '<button type="button" class="btn" data-act="reset">Reset my progress</button>') + '</div>';
}
function stepMeta(n, k) {
  var r = stepRec(n, k);
  if (k === 'review') return levelDone(n) ? '✓ Level completed' : 'See your skills and what to do next';
  if (k === 'write') return r && r.done ? '✓ Done · checklist ' + r.yes + ' / ' + r.of : 'Not done yet';
  if (!r) return 'Not started';
  if (k === 'learn') return '✓ Read · check ' + Math.round((r.last || 0) * 100) + '%';
  return (r.done ? '✓ Completed · ' : '') + 'Best ' + Math.round(r.best * 100) + '%' + (r.done ? '' : ' (80% to complete)');
}
function levelPage(msg) {
  var n = view.level, L = LEVELS[n];
  setInfo('LEVEL: ' + n, L.title.toUpperCase());
  var h = LOCK ? '<div class="hero"><h1>WRITING <span>ACADEMY</span> · LEVEL ' + n + '</h1><p>' + esc(L.title) + ' · ' + esc(L.stage || '') + '</p></div>' :
    '<div class="nav-row" style="margin-top:0"><button type="button" class="btn" data-act="home">⌂ All levels</button><span class="pill">' + doneCount(n) + ' / 5 steps</span></div><div class="instruction" style="margin-top:12px">Level ' + n + ' · ' + esc(L.title) + '</div>';
  if (!storeOk && LOCK) h += '<p class="warn">Your progress cannot be saved in this browser (storage is blocked). You can still practise.</p>';
  if (msg) h += '<p class="warn" role="status">' + esc(msg) + '</p>';
  h += '<p class="target"><b>Target:</b> ' + esc(L.target) + '</p>';
  h += '<h2 class="section-title">Steps <span class="note">(follow the order 1 → 6)</span></h2><div class="steps">' + STEPS.map(function (s, i) {
    var d = stepDone(n, s.key);
    return '<button type="button" class="step' + (d ? ' done' : '') + '" data-act="step" data-s="' + s.key + '"><span class="num">' + (d ? '✓' : i + 1) + '</span><b>' + s.name + '</b><small>' + esc(s.sub) + '</small><span class="meta" data-meta="' + s.key + '">' + stepMeta(n, s.key) + '</span></button>';
  }).join('') + '</div>';
  h += '<p class="note">Level completed = 80% or more in Practise, Memorise and Build, and the Write checklist done.</p>';
  if (LOCK) h += resetPanel();
  app.innerHTML = h;
}
function topbar() {
  var it = R.items[R.i], done = R.i + (it && it.answered ? 1 : 0);
  return '<div class="topbar"><span>Level ' + R.level + ' · ' + stepName(R.step) + (R.retry ? ' · retry' : '') + '</span><span>' + done + ' / ' + R.items.length + '</span></div>' +
    '<div class="progress" aria-hidden="true"><span style="width:' + Math.round(done / Math.max(1, R.items.length) * 100) + '%"></span></div>';
}
function head(title, sub) { return '<div class="instruction">' + esc(title) + '</div>' + (sub ? '<p class="task">' + esc(sub) + '</p>' : ''); }
function nav(it) {
  var last = R.i === R.items.length - 1;
  return '<div class="nav-row"><button type="button" class="btn" data-act="quit">✕ Stop</button><button type="button" class="btn primary" data-act="next"' + (it.answered ? '' : ' disabled') + '>' + (last ? 'See results ▶' : 'Next ▶') + '</button></div>';
}
function rightText(it) {
  if (it.kind === 'mistake') return it.words.map(function (w, k) { return k === it.wrong ? fixWord(w, it.fix) : w; }).join(' ');
  if (it.kind === 'build') return it.right[0];
  return it.labels[0];
}
function fixWord(w, fix) { var m = /^(.*?)([.,!?;:]*)$/.exec(w); return fix + m[2]; }
function feedback(it) {
  if (!it.answered && it.tries === 1) return '<div class="feedback retry" role="status">✋ Not quite. Try once more.</div>';
  if (!it.answered) return '';
  var ans = it.kind === 'mistake' ? '<b>' + esc(rightText(it)) + '</b>' : it.kind === 'build' ? '<b>' + esc(rightText(it)) + '</b>' : '';
  return '<div class="feedback ' + (it.final ? 'good' : 'badf') + '" role="status">' + (it.final ? (it.ok ? '✅ Correct! ' : '✅ Correct on the second try. ') : '❌ ' + (it.kind === 'choice' || it.kind === 'card' ? 'The correct answer is in green. ' : 'Correct answer: ')) + ans + (it.ex ? (ans ? '<br>' : '') + esc(it.ex) : '') + '</div>';
}
function choicesHtml(it) {
  return '<div class="tiles" role="group" aria-label="Choices">' + it.order.map(function (ci) {
    var cls = 'tile', dis = it.answered || it.picked.indexOf(ci) > -1;
    if (it.answered && ci === 0) cls += ' correct'; else if (it.picked.indexOf(ci) > -1) cls += ' wrong';
    return '<button type="button" class="' + cls + '" data-act="choose" data-c="' + ci + '"' + (dis ? ' disabled' : '') + '>' + esc(it.labels[ci]) + '</button>';
  }).join('') + '</div>';
}
function renderItem() {
  var it = R.items[R.i], L = LEVELS[R.level], h = topbar();
  setInfo('LEVEL: ' + R.level, L.title.toUpperCase());
  if (it.kind === 'card') {
    var c = L.learn[it.card];
    h += head('Learn · card ' + (it.card + 1) + ' of ' + L.learn.length) + '<div class="lcard"><h2>' + esc(c.title) + '</h2><ul>' + c.points.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul></div>' +
      '<p class="checkq">Quick check: ' + esc(it.q) + '</p>' + choicesHtml(it);
  } else if (it.kind === 'choice') {
    h += head(R.step === 'memorise' ? 'Memorise · use the frames' : (it.group ? it.group.key + '. ' + it.group.title : '')) + (it.q ? '<p class="clue">' + esc(it.q) + '</p>' : '') + choicesHtml(it);
  } else if (it.kind === 'mistake') {
    h += head(it.group.key + '. ' + it.group.title) + '<div class="sentence" role="group" aria-label="Words of the sentence">' + it.words.map(function (w, k) {
      var cls = 'word', dis = it.answered || it.picked.indexOf(k) > -1;
      if (it.answered && k === it.wrong) cls += ' correct'; else if (it.picked.indexOf(k) > -1) cls += ' wrong';
      return '<button type="button" class="' + cls + '" data-act="tapword" data-k="' + k + '"' + (dis ? ' disabled' : '') + '>' + esc(w) + '</button>';
    }).join('') + '</div>';
  } else if (it.kind === 'build') {
    /* para = Paragraph Architect: each tile is a whole sentence, shown as a full-width card; placed cards leave the pool */
    var line = it.placed.map(function (k) { return it.tiles[k]; }), P = it.para, tc = P ? 'wtile sent' : 'wtile';
    h += head(P ? 'Build · Paragraph Architect' : 'Build · Sentence Builder', P ? 'Tap the sentences in order to build the paragraph. Tap a sentence in your paragraph to remove it.' : 'Tap the tiles in order to build a correct sentence. Tap a word in your sentence to remove it.') +
      '<div class="line' + (P ? ' para' : '') + (it.answered ? (it.final ? ' ok' : ' no') : '') + '" aria-label="' + (P ? 'Your paragraph' : 'Your sentence') + '">' + (line.length ? it.placed.map(function (k, n) { return '<button type="button" class="' + tc + ' placed" data-act="unplace" data-k="' + k + '"' + (it.answered ? ' disabled' : '') + '>' + (P ? '<span class="sn">' + (n + 1) + '</span>' : '') + esc(it.tiles[k]) + '</button>'; }).join('') : '<span class="ph">' + (P ? 'Your paragraph appears here…' : 'Your sentence appears here…') + '</span>') + '</div>';
    if (!it.answered) {
      h += '<div class="pool' + (P ? ' para' : '') + '" role="group" aria-label="' + (P ? 'Sentences' : 'Tiles') + '">' + it.order.map(function (k) { var used = it.placed.indexOf(k) > -1; if (P && used) return ''; return '<button type="button" class="' + tc + '" data-act="place" data-k="' + k + '"' + (used ? ' disabled' : '') + '>' + esc(it.tiles[k]) + '</button>'; }).join('') + '</div>';
      h += '<div class="actions"><button type="button" class="btn" data-act="clearline">Clear</button><button type="button" class="btn primary" data-act="checkbuild"' + (it.placed.length === it.tiles.length ? '' : ' disabled') + '>Check</button></div>';
    }
  }
  h += feedback(it) + nav(it);
  app.innerHTML = h;
}
function results() {
  var n = R.results.length, pct = Math.round(R.score / Math.max(1, n) * 100), rec = stepRec(R.level, R.step);
  var remark = pct === 100 ? 'Perfect!' : pct >= 80 ? 'Very good!' : pct >= 50 ? 'Good effort, keep practising!' : 'Keep going: try your mistakes again.';
  var h = '<div class="result">' + head(stepName(R.step) + ' complete') + '<div class="badge" id="scoreBadge">' + R.score + ' / ' + n + '<small>' + pct + '%</small></div><div class="remark" id="remark">' + remark + '</div>';
  if (!R.retry && R.step !== 'learn') h += '<p>' + (pct >= 80 ? '✓ This step is completed.' : 'You need 80% to complete this step. Retry your mistakes, then play the full step again.') + '</p>';
  var miss = R.items.filter(function (it) { return !it.ok; });
  if (miss.length) h += '<h3>Review your mistakes</h3>' + miss.map(function (it) {
    return '<div class="review-item">' + (it.q ? esc(it.q) + '<br>' : '') + '<b>' + esc(rightText(it)) + '</b>' + (it.ex ? '<br><span class="note">' + esc(it.ex) + '</span>' : '') + '</div>';
  }).join('');
  var nextStep = STEPS[STEPS.map(function (s) { return s.key; }).indexOf(R.step) + 1];
  h += '<div class="actions">' + (miss.length ? '<button type="button" class="btn primary" data-act="retry">Retry my mistakes (' + miss.length + ')</button>' : '') +
    '<button type="button" class="btn" data-act="again">Do it again</button>' +
    (nextStep ? '<button type="button" class="btn' + (miss.length ? '' : ' primary') + '" data-act="step" data-s="' + nextStep.key + '">Next: ' + nextStep.name + ' ▶</button>' : '') +
    '<button type="button" class="btn" data-act="tolevel">Back to Level ' + R.level + '</button></div></div>';
  app.innerHTML = h;
}
function frames() {
  var n = view.level, L = LEVELS[n], open = view.openFrames || {};
  setInfo('LEVEL: ' + n, L.title.toUpperCase());
  var h = head('Memorise · sentence frames', 'Read each frame and try to make your own sentence. Tap a card to see an example.');
  h += '<div class="frames">' + L.memorise.frames.map(function (f, i) {
    return '<button type="button" class="frame' + (open[i] ? ' open' : '') + '" data-act="frame" data-i="' + i + '" aria-expanded="' + !!open[i] + '"><b>' + (i + 1) + '. ' + esc(f.f) + '</b>' + (open[i] ? '<i>' + esc(f.e) + '</i>' : '<span class="note">Tap to see an example</span>') + '</button>';
  }).join('') + '</div>';
  h += '<div class="nav-row"><button type="button" class="btn" data-act="tolevel">← Level ' + n + '</button><button type="button" class="btn primary" data-act="memoquiz">Start the ' + L.memorise.quiz.length + ' questions ▶</button></div>';
  app.innerHTML = h;
}
function writePage() {
  var n = view.level, L = LEVELS[n], W = L.write, st = view.w || (view.w = { phase: 'write', checks: {}, level: n }), txt = written[n] || '', wc = wordCount(txt), inRange = wc >= W.min && wc <= W.max;
  setInfo('LEVEL: ' + n, L.title.toUpperCase());
  var h = head('Write · your own text') + '<p><span class="selfcheck">Self-check · not auto-marked</span></p>';
  h += '<p class="task" style="text-align:left">' + esc(W.task) + '</p><p style="margin:0">Include:</p><ul>' + W.include.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
  h += '<label for="wbox" class="sr-only">Your text</label><textarea id="wbox" class="wbox" spellcheck="false" autocapitalize="sentences"' + (st.phase === 'write' ? '' : ' readonly') + '>' + esc(txt) + '</textarea>';
  h += '<p class="wcount ' + (inRange ? 'in' : 'out') + '" id="wcount" aria-live="polite">' + wc + ' words (' + W.min + '–' + W.max + ')</p>';
  h += '<p class="note">Your text is not saved. Use "Copy my text" before you leave the page.</p>';
  if (st.phase === 'write') h += '<div class="actions"><button type="button" class="btn primary" data-act="donewriting"' + (inRange ? '' : ' disabled') + '>I have finished writing ▶</button><button type="button" class="btn" data-act="copy">Copy my text</button></div>';
  else {
    var answered = Object.keys(st.checks).length, all = answered === W.checklist.length;
    h += '<h2 class="section-title">Self-check: read your text and answer honestly</h2><ul class="checklist">' + W.checklist.map(function (c, i) {
      var v = st.checks[i];
      return '<li><span>' + (i + 1) + '. ' + esc(c) + '</span><span class="yn" role="group" aria-label="Check ' + (i + 1) + '"><button type="button" class="y" data-act="yn" data-i="' + i + '" data-v="1" aria-pressed="' + (v === true) + '">Yes</button><button type="button" class="n" data-act="yn" data-i="' + i + '" data-v="0" aria-pressed="' + (v === false) + '">Not yet</button></span></li>';
    }).join('') + '</ul>';
    if (st.phase === 'check') h += '<div class="actions"><button type="button" class="btn" data-act="editagain">✎ Edit my text</button><button type="button" class="btn primary" data-act="showmodel"' + (all ? '' : ' disabled') + '>Show the model answer ▶</button></div>';
    if (st.phase === 'model') {
      var no = W.checklist.filter(function (_, i) { return st.checks[i] === false; });
      h += (no.length ? '<div class="rec">Improve these points in your text: ' + no.map(function (x) { return '<br>• ' + esc(x); }).join('') + '</div>' : '<div class="rec">All points checked. Well done!</div>');
      h += '<div class="model"><b>Model answer</b> <span class="note">(' + wordCount(W.model) + ' words)</span><p style="margin:6px 0">' + esc(W.model) + '</p><p class="note" style="margin:0">' + esc(W.modelNote || '') + '</p></div>';
      h += '<div class="actions"><button type="button" class="btn primary" data-act="copy">Copy my text</button><button type="button" class="btn" data-act="editagain">✎ Edit my text</button><button type="button" class="btn" data-act="step" data-s="review">Next: Review ▶</button></div>';
    }
  }
  h += '<p id="copyMsg" class="note" role="status" style="text-align:center"></p><div class="nav-row"><button type="button" class="btn" data-act="tolevel">← Level ' + n + '</button></div>';
  app.innerHTML = h;
}
function reviewPage() {
  var n = view.level, L = LEVELS[n], rows = skillTable(n);
  setInfo('LEVEL: ' + n, L.title.toUpperCase());
  var h = head('Review · Level ' + n);
  h += '<table class="vt"><thead><tr><th>Step</th><th>Result</th></tr></thead><tbody>' + STEPS.filter(function (s) { return s.key !== 'review'; }).map(function (s) {
    return '<tr><td>' + s.name + '</td><td data-review="' + s.key + '">' + stepMeta(n, s.key) + '</td></tr>';
  }).join('') + '</tbody></table>';
  h += '<h2 class="section-title">Your skills <span class="note">(first answers in your last full round of each step)</span></h2>' + rows.map(function (r) {
    var p = r.pct === null ? null : Math.round(r.pct * 100);
    return '<div class="skillrow" data-skill="' + r.key + '"><span>' + esc(r.name) + '</span><span class="sbar" aria-hidden="true"><span class="' + (p !== null && p < 80 ? 'low' : '') + '" style="width:' + (p || 0) + '%"></span></span><span>' + (p === null ? '–' : p + '%') + '</span></div>';
  }).join('');
  var measured = rows.filter(function (r) { return r.pct !== null; }), weak = measured.filter(function (r) { return r.pct < PASS; }).sort(function (a, b) { return a.pct - b.pct; });
  if (!measured.length) h += '<div class="rec">Do Learn, Practise, Memorise and Build first: your skill picture appears here.</div>';
  else if (weak.length) h += '<div class="rec" id="rec"><b>Work on: ' + esc(weak[0].name) + '.</b> ' + esc(weak[0].review) + (weak.length > 1 ? '<br>Also below 80%: ' + weak.slice(1).map(function (w) { return esc(w.name); }).join(', ') + '.' : '') + '</div>';
  else h += '<div class="rec" id="rec"><b>All skills at 80% or more.</b> ' + (levelDone(n) ? 'Level ' + n + ' is completed. Well done!' : 'Finish the remaining steps to complete the level.') + '</div>';
  h += '<p class="' + (levelDone(n) ? 'pill' : 'note') + '" id="levelStatus">' + (levelDone(n) ? '✓ Level ' + n + ' completed' : 'Level not completed yet: ' + STEPS.filter(function (s) { return s.key !== 'review' && s.key !== 'learn' && !stepDone(n, s.key); }).map(function (s) { return s.name; }).join(', ') + ' still to do.') + '</p>';
  h += '<div class="nav-row"><button type="button" class="btn" data-act="tolevel">← Level ' + n + '</button></div>';
  app.innerHTML = h;
}

/* ===== actions ===== */
function copyText(t) {
  var done = function (ok) { var m = $('#copyMsg'); if (m) m.textContent = ok ? '✓ Copied. Paste it where your teacher asks (Ctrl+V or long-press → Paste).' : 'Copy did not work: select your text and copy it by hand.'; };
  if (!t) { done(false); return; }
  var fallback = function () { var ta = $('#wbox'); try { ta.removeAttribute('readonly'); ta.focus(); ta.select(); var ok = document.execCommand('copy'); done(ok); } catch (e) { done(false); } if (view.w && view.w.phase !== 'write') ta.setAttribute('readonly', ''); };
  try { if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(t).then(function () { done(true); }, fallback); else fallback(); } catch (e) { fallback(); }
}
function onClick(e) {
  var el = e.target.closest('[data-act]'); if (!el || el.disabled) return;
  var act = el.getAttribute('data-act'), n = view.level;
  if (act === 'home') { view.page = LOCK ? 'level' : 'home'; view.confirmReset = false; R = null; render(); window.scrollTo(0, 0); return; }
  if (act === 'level') { view.level = +el.getAttribute('data-n'); view.page = 'level'; view.w = null; view.openFrames = {}; render(); window.scrollTo(0, 0); return; }
  if (act === 'tolevel') { R = null; view.page = 'level'; render(); window.scrollTo(0, 0); return; }
  if (act === 'step') { var s = el.getAttribute('data-s'); if (s === 'write') view.w = view.w && view.w.level === n ? view.w : { phase: 'write', checks: {}, level: n }; return startStep(s); }
  if (act === 'reset') { view.confirmReset = true; return render(); }
  if (act === 'resetno') { view.confirmReset = false; return render(); }
  if (act === 'resetyes') { store = blank(); save(); view.confirmReset = false; written = {}; view.w = null; view.openFrames = {}; R = null; view.page = LOCK ? 'level' : 'home'; render(); say('Progress deleted.'); return; }
  if (act === 'frame') { var i = +el.getAttribute('data-i'); view.openFrames = view.openFrames || {}; view.openFrames[i] = !view.openFrames[i]; return render(); }
  if (act === 'memoquiz') return startMemoQuiz();
  /* write */
  if (act === 'donewriting') { var W = LEVELS[n].write, wc = wordCount(written[n] || ''); if (wc < W.min || wc > W.max) return; view.w.phase = 'check'; return render(); }
  if (act === 'editagain') { view.w.phase = 'write'; return render(); }
  if (act === 'yn') { view.w.checks[+el.getAttribute('data-i')] = el.getAttribute('data-v') === '1'; return render(); }
  if (act === 'showmodel') {
    var Wl = LEVELS[n].write; if (Object.keys(view.w.checks).length !== Wl.checklist.length) return;
    view.w.phase = 'model'; var l = lvRec(n), yes = Wl.checklist.filter(function (_, k) { return view.w.checks[k]; }).length;
    l.write = { done: true, yes: yes, of: Wl.checklist.length, checks: Wl.checklist.map(function (_, k) { return !!view.w.checks[k]; }) }; save(); return render();
  }
  if (act === 'copy') { copyText(written[n] || ''); return; }
  if (!R) return;
  if (act === 'quit') { R = null; view.page = 'level'; render(); window.scrollTo(0, 0); return; }
  if (act === 'again') return startStep(R.step === 'memorise' ? 'memorise-quiz' : R.step);
  if (act === 'retry') { var miss = R.items.filter(function (x) { return !x.ok; }).map(function (x) { return x.src; }); return startStep(R.step, miss); }
  var it = R.items[R.i];
  if (act === 'next') { if (!it.answered) return; if (R.i < R.items.length - 1) { R.i++; render(); window.scrollTo(0, 0); } else finish(); return; }
  if (it.answered) return;
  if (act === 'choose') { var c = +el.getAttribute('data-c'); if (c !== 0) it.picked.push(c); answer(it, c === 0); return render(); }
  if (act === 'tapword') { var k = +el.getAttribute('data-k'); if (k !== it.wrong) it.picked.push(k); answer(it, k === it.wrong); return render(); }
  if (act === 'place') { var p = +el.getAttribute('data-k'); if (it.placed.indexOf(p) < 0) it.placed.push(p); return render(); }
  if (act === 'unplace') { var q = +el.getAttribute('data-k'); it.placed = it.placed.filter(function (x) { return x !== q; }); return render(); }
  if (act === 'clearline') { it.placed = []; return render(); }
  if (act === 'checkbuild') {
    if (it.placed.length !== it.tiles.length) return;
    var s2 = normS(joinTiles(it.placed.map(function (x) { return it.tiles[x]; })));
    answer(it, it.right.indexOf(s2) > -1); return render();
  }
}
function onInput(e) {
  if (e.target && e.target.id === 'wbox' && view.page === 'write') {
    var n = view.level, W = LEVELS[n].write; written[n] = e.target.value;
    var wc = wordCount(e.target.value), ok = wc >= W.min && wc <= W.max, c = $('#wcount'), b = $('[data-act="donewriting"]');
    if (c) { c.textContent = wc + ' words (' + W.min + '–' + W.max + ')'; c.className = 'wcount ' + (ok ? 'in' : 'out'); }
    if (b) b.disabled = !ok;
  }
}

/* ===== init ===== */
var errs = validate();
if (errs.length) { app.innerHTML = '<div class="fatal" role="alert">This activity could not start:\n' + esc(errs.join('\n')) + '</div>'; window.__waReady = true; return; }
/* "Do it again" on Memorise goes straight to the questions */
var _start = startStep; startStep = function (s, only) { if (s === 'memorise-quiz') return startMemoQuiz(); return _start(s, only); };
app.addEventListener('click', onClick);
app.addEventListener('input', onInput);
render();
window.__waReady = true;
window.__wa = { get R() { return R; }, store: function () { return store; }, LEVELS: LEVELS, LOCK: LOCK, view: view, render: render, startStep: startStep, wordCount: wordCount, joinTiles: joinTiles, get written() { return written; }, skillTable: skillTable, levelDone: levelDone, STORE_KEY: STORE_KEY };
})();
