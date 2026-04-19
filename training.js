const questions = [
  {
    type: "single",
    section: "单项选择题",
    stem: "1. 下列关于辛弃疾生平及词派的说法，正确的一项是（）",
    options: [
      "A. 字稼轩，号幼安，是婉约词派代表人物",
      "B. 一生仕途顺遂，深受朝廷重用，得以实现报国理想",
      "C. 既是抗金将领，也是豪放派词人，词作多抒发爱国情怀",
      "D. 词作风格温婉细腻，多描写儿女情长、自然风光"
    ],
    correctAnswer: "C"
  },
  {
    type: "single",
    section: "单项选择题",
    stem: "2. 对“醉里挑灯看剑”中“挑灯”的意思，解释正确的一项是（）",
    options: [
      "A. 挑选灯笼",
      "B. 挑亮灯火",
      "C. 晃动灯笼",
      "D. 丢弃灯笼"
    ],
    correctAnswer: "B"
  },
  {
    type: "single",
    section: "单项选择题",
    stem: "3. 对“八百里分麾下炙”中加点词解释有误的一项是（）",
    options: [
      "A. 麾下：军旗之下，指部下",
      "B. 炙：烤肉",
      "C. 八百里：指路程遥远",
      "D. 分：分发"
    ],
    correctAnswer: "C"
  },
  {
    type: "single",
    section: "单项选择题",
    stem: "4. 下列对“沙场秋点兵”中“沙场”的解释，正确的是（）",
    options: [
      "A. 沙滩边的场地",
      "B. 平坦的广场",
      "C. 战场",
      "D. 秋天的田野"
    ],
    correctAnswer: "C"
  },
  {
    type: "single",
    section: "单项选择题",
    stem: "5. 下列不属于本词中描写的军旅意象的一项是（）",
    options: [
      "A. 利剑、号角",
      "B. 军营、战马",
      "C. 明月、落花",
      "D. 弓箭、战歌"
    ],
    correctAnswer: "C"
  },
  {
    type: "single",
    section: "单项选择题",
    stem: "6. 本词中“马作的卢飞快”运用的写作手法是（）",
    options: [
      "A. 用典",
      "B. 比喻",
      "C. 拟人",
      "D. 夸张"
    ],
    correctAnswer: "A"
  },
  {
    type: "single",
    section: "单项选择题",
    stem: "7. 下列对本词写作手法的分析，正确的一项是（）",
    options: [
      "A. 全词仅实写现实场景，无想象内容",
      "B. 运用虚实结合，虚写梦境军旅，实写现实失意",
      "C. 通篇运用抒情，无任何描写、记叙",
      "D. 运用对比手法，将过去与现在的生活完全一致化"
    ],
    correctAnswer: "B"
  },
  {
    type: "single",
    section: "单项选择题",
    stem: "8. 词中“五十弦翻塞外声”的“翻”意思是（）",
    options: [
      "A. 翻转",
      "B. 演奏",
      "C. 推翻",
      "D. 翻越"
    ],
    correctAnswer: "B"
  },
  {
    type: "single",
    section: "单项选择题",
    stem: "9. 下列对全词意境的分析，有误的一项是（）",
    options: [
      "A. 梦境部分营造出雄浑壮阔、豪迈肃杀的战场意境",
      "B. 现实部分营造出苍凉悲慨、落寞无奈的意境",
      "C. 全词意境始终欢快明朗，充满积极昂扬的情绪",
      "D. 前后意境形成强烈反差，凸显词人情感"
    ],
    correctAnswer: "C"
  },
  {
    type: "single",
    section: "单项选择题",
    stem: "10. 词人写这首词的目的是（）",
    options: [
      "A. 赞美边塞自然风光",
      "B. 抒发壮志难酬、报国无门的悲愤",
      "C. 记录悠闲的田园生活",
      "D. 描写与友人的游玩趣事"
    ],
    correctAnswer: "B"
  },
  {
    type: "single",
    section: "单项选择题",
    stem: "11. “可怜白发生”中“可怜”的意思是（）",
    options: [
      "A. 可爱",
      "B. 可惜",
      "C. 怜悯",
      "D. 值得同情"
    ],
    correctAnswer: "B"
  },
  {
    type: "fill",
    section: "填空题",
    stem: "12. 辛弃疾，字______，号______，是______词派的代表词人。",
    blanks: ["第1空", "第2空", "第3空"],
    acceptedAnswers: [
      ["幼安"],
      ["稼轩"],
      ["豪放", "豪放派"]
    ]
  },
  {
  type: "fill",
  section: "填空题",
  stem: "13. 本词中，词人虚写的是______的场景，实写的是______的现实。",
  blanks: ["第1空", "第2空"],
  matchMode: "keyword_groups",
  keywordGroups: [
    [
      ["梦"],
      ["军营", "军旅生活", "军旅", "沙场", "战场"]
    ],
    [
      ["白发", "白发生", "年老", "老年", "衰老"],
      ["壮志难酬", "报国无门", "失意", "理想落空", "无奈"]
    ]
  ],
  acceptedAnswers: [
    ["梦回军营", "梦回沙场", "梦中军旅生活", "梦回战场"],
    ["白发生的现实", "壮志难酬的现实", "报国无门的现实", "年老失意的现实"]
  ]
},
  {
    type: "fill",
    section: "填空题",
    stem: "14. 词中典型的军旅意象有______、______、______等。",
    blanks: ["第1空", "第2空", "第3空"],
    fillMode: "unordered_keywords",
    acceptedPool: [
      "剑", "宝剑","利剑", "看剑",
      "角", "号角", "号角声",
      "炙", "烤肉",
      "兵", "点兵",
      "马", "战马", "的卢",
      "弓", "弓如霹雳弦惊",
      "弦", "五十弦"
    ]
  },
  {
    type: "essay",
    section: "简答题",
    stem: "15. 品读“沙场秋点兵”一句，分析其营造的意境特点。",
    keyPoints: [
      {
        title: "点出秋日肃杀气氛",
        keywords: ["秋", "肃杀", "苍凉", "悲壮"]
      },
      {
        title: "展现沙场点兵的宏大军容",
        keywords: ["沙场", "点兵", "军容", "雄壮", "恢宏", "壮阔"]
      },
      {
        title: "体现豪迈昂扬的战斗气势",
        keywords: ["豪迈", "激昂", "高昂", "战斗", "杀敌", "报国"]
      }
    ],
    referenceAnswer:
      "“沙场秋点兵”一句营造出苍凉肃杀而又雄浑壮阔的意境。“秋”点出了边塞时令，带有肃杀悲壮之感；“沙场”写出战地环境；“点兵”则展现出军容整肃、出征在即的恢宏场面。全句既有战争氛围的紧张肃穆，又传达出词人渴望驰骋疆场、建功报国的豪情。"
  },
  {
    type: "essay",
    section: "简答题",
    stem: "16. 全词借助梦境与现实的意象描绘，表达了词人怎样的思想情感？",
    keyPoints: [
      {
        title: "表达杀敌报国、建功立业的理想",
        keywords: ["报国", "杀敌", "建功", "立业", "收复", "理想", "壮志"]
      },
      {
        title: "抒发壮志难酬、报国无门的悲愤",
        keywords: ["壮志难酬", "报国无门", "悲愤", "失意", "无奈", "白发生"]
      },
      {
        title: "写出梦境与现实反差形成的沉痛",
        keywords: ["梦境", "现实", "对比", "反差", "落差", "虚实结合"]
      }
    ],
    referenceAnswer:
      "全词通过追忆梦中军旅生活与回到现实后的失意处境，表达了词人强烈的爱国理想和深沉的悲愤之情。一方面，他始终怀有驰骋沙场、杀敌报国、建功立业的抱负；另一方面，现实中却只能“可怜白发生”，理想无法实现。梦境越壮阔，现实越沉痛，二者形成鲜明反差，更突出了词人壮志难酬的慨叹。"
  }
];

let currentIndex = 0;
const answers = new Array(questions.length).fill(null);

const progressText = document.getElementById("progressText");
const questionTypeTag = document.getElementById("questionTypeTag");
const progressInner = document.getElementById("progressInner");
const questionNumber = document.getElementById("questionNumber");
const questionStem = document.getElementById("questionStem");
const questionArea = document.getElementById("questionArea");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");

const unfinishedOverlay = document.getElementById("unfinishedOverlay");
const unfinishedText = document.getElementById("unfinishedText");
const backToAnswerBtn = document.getElementById("backToAnswerBtn");
const confirmSubmitBtn = document.getElementById("confirmSubmitBtn");

const resultOverlay = document.getElementById("resultOverlay");
const resultTitle = document.getElementById("resultTitle");
const resultSummary = document.getElementById("resultSummary");
const resultDetails = document.getElementById("resultDetails");
const reviewBtn = document.getElementById("reviewBtn");
const finishBtn = document.getElementById("finishBtn");

function updateProgress() {
  progressText.textContent = `第 ${currentIndex + 1} 题 / 共 ${questions.length} 题`;
  questionTypeTag.textContent = questions[currentIndex].section;
  progressInner.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;
}

function renderSingle(question, savedAnswer) {
  questionArea.innerHTML = "";

  question.options.forEach((option, optionIndex) => {
    const optionLabel = document.createElement("label");
    optionLabel.className = "option-label";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "single-choice";
    radio.value = String.fromCharCode(65 + optionIndex);

    if (savedAnswer === radio.value) {
      radio.checked = true;
    }

    radio.addEventListener("change", () => {
      answers[currentIndex] = radio.value;
    });

    const text = document.createElement("div");
    text.className = "option-text";
    text.textContent = option;

    optionLabel.appendChild(radio);
    optionLabel.appendChild(text);
    questionArea.appendChild(optionLabel);
  });
}

function renderFill(question, savedAnswer) {
  questionArea.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.className = "fill-group";

  const answerArray = Array.isArray(savedAnswer)
    ? savedAnswer
    : new Array(question.blanks.length).fill("");

  question.blanks.forEach((blankLabel, i) => {
    const item = document.createElement("div");
    item.className = "fill-item";

    const label = document.createElement("label");
    label.textContent = blankLabel;

    const input = document.createElement("input");
    input.type = "text";
    input.value = answerArray[i] || "";

    input.addEventListener("input", () => {
      if (!Array.isArray(answers[currentIndex])) {
        answers[currentIndex] = new Array(question.blanks.length).fill("");
      }
      answers[currentIndex][i] = input.value;
    });

    item.appendChild(label);
    item.appendChild(input);
    wrapper.appendChild(item);
  });

  questionArea.appendChild(wrapper);
}

function renderEssay(question, savedAnswer) {
  questionArea.innerHTML = "";

  const textarea = document.createElement("textarea");
  textarea.className = "essay-box";
  textarea.placeholder = "请输入你的作答内容……";
  textarea.value = savedAnswer || "";

  textarea.addEventListener("input", () => {
    answers[currentIndex] = textarea.value;
  });

  questionArea.appendChild(textarea);
}

function renderQuestion() {
  const question = questions[currentIndex];
  const savedAnswer = answers[currentIndex];

  updateProgress();
  questionNumber.textContent = `第 ${currentIndex + 1} 题`;
  questionStem.textContent = question.stem;

  if (question.type === "single") {
    renderSingle(question, savedAnswer);
  } else if (question.type === "fill") {
    renderFill(question, savedAnswer);
  } else if (question.type === "essay") {
    renderEssay(question, savedAnswer);
  }

  prevBtn.disabled = currentIndex === 0;
  prevBtn.style.opacity = currentIndex === 0 ? "0.5" : "1";

  nextBtn.disabled = currentIndex === questions.length - 1;
  nextBtn.style.opacity = currentIndex === questions.length - 1 ? "0.5" : "1";
}

function normalizeText(text) {
  return String(text || "")
    .trim()
    .replace(/[\s\u3000]/g, "")
    .replace(/[，。！？；：、“”‘’（）()【】《》<>·,.!?:;"'\-]/g, "")
    .toLowerCase();
}

function isQuestionAnswered(question, answer) {
  if (question.type === "single") {
    return typeof answer === "string" && answer.trim() !== "";
  }

  if (question.type === "fill") {
    return Array.isArray(answer)
      && answer.length === question.blanks.length
      && answer.every(item => typeof item === "string" && item.trim() !== "");
  }

  if (question.type === "essay") {
    return typeof answer === "string" && answer.trim() !== "";
  }

  return false;
}

function getUnfinishedQuestionNumbers() {
  const unfinished = [];

  questions.forEach((question, index) => {
    if (!isQuestionAnswered(question, answers[index])) {
      unfinished.push(index + 1);
    }
  });

  return unfinished;
}

function evaluateSingle(question, userAnswer) {
  const isCorrect = normalizeText(userAnswer) === normalizeText(question.correctAnswer);
  return {
    score: isCorrect ? 1 : 0,
    total: 1,
    isCorrect,
    userAnswer: userAnswer || "未作答",
    correctAnswer: question.correctAnswer
  };
}

function evaluateFill(question, userAnswer) {
  const filledAnswers = Array.isArray(userAnswer)
    ? userAnswer
    : new Array(question.blanks.length).fill("");

  if (question.fillMode === "unordered_keywords") {
    const normalizedPool = question.acceptedPool.map(item => normalizeText(item));
    const used = new Set();

    const blankResults = filledAnswers.map(ans => {
      const normalized = normalizeText(ans);
      const poolIndex = normalizedPool.findIndex((poolItem, index) => poolItem === normalized && !used.has(index));
      const isCorrect = poolIndex !== -1;

      if (isCorrect) {
        used.add(poolIndex);
      }

      return {
        userAnswer: ans || "未作答",
        isCorrect
      };
    });

    const score = blankResults.filter(item => item.isCorrect).length;

    return {
      score,
      total: question.blanks.length,
      blankResults,
      reference: "可填写：剑、号角、炙、兵、马、弓、弦等典型军旅意象，顺序不限。"
    };
  }

  if (question.matchMode === "keyword_groups") {
    const blankResults = question.keywordGroups.map((groupList, index) => {
      const userText = normalizeText(filledAnswers[index]);

      const isCorrect = groupList.every(group =>
        group.some(keyword => userText.includes(normalizeText(keyword)))
      );

      return {
        userAnswer: filledAnswers[index] || "未作答",
        isCorrect,
        acceptedList: question.acceptedAnswers?.[index] || []
      };
    });

    const score = blankResults.filter(item => item.isCorrect).length;

    return {
      score,
      total: question.blanks.length,
      blankResults
    };
  }

  const blankResults = question.acceptedAnswers.map((acceptedList, index) => {
    const normalizedUserAnswer = normalizeText(filledAnswers[index]);
    const normalizedAcceptedList = acceptedList.map(item => normalizeText(item));
    const isCorrect = normalizedAcceptedList.includes(normalizedUserAnswer);

    return {
      userAnswer: filledAnswers[index] || "未作答",
      isCorrect,
      acceptedList
    };
  });

  const score = blankResults.filter(item => item.isCorrect).length;

  return {
    score,
    total: question.blanks.length,
    blankResults
  };
}

function evaluateEssay(question, userAnswer) {
  const normalizedAnswer = normalizeText(userAnswer);
  const pointResults = question.keyPoints.map(point => {
    const hit = point.keywords.some(keyword => normalizedAnswer.includes(normalizeText(keyword)));
    return {
      title: point.title,
      hit
    };
  });

  const hitCount = pointResults.filter(item => item.hit).length;
  const total = pointResults.length;

  let level = "待完善";
  if (hitCount === total) {
    level = "较完整";
  } else if (hitCount >= Math.ceil(total / 2)) {
    level = "基本命中";
  }

  return {
    hitCount,
    total,
    level,
    pointResults,
    referenceAnswer: question.referenceAnswer,
    userAnswer: userAnswer || "未作答"
  };
}

function getOverallFeedback(objectiveRate, essayResults) {
  const totalEssayPoints = essayResults.reduce((sum, item) => sum + item.hitCount, 0);
  const totalEssayMax = essayResults.reduce((sum, item) => sum + item.total, 0);
  const essayRate = totalEssayMax === 0 ? 0 : totalEssayPoints / totalEssayMax;

  if (objectiveRate >= 0.85 && essayRate >= 0.66) {
    return "你的基础知识掌握较扎实，对词作情感与意境也有较好的把握，已经具备较完整的理解框架。后续可继续加强答题表述的条理性。";
  }

  if (objectiveRate >= 0.65 && essayRate >= 0.34) {
    return "你的整体学习效果较好，选择与填空部分基础较稳，简答题已经抓住部分核心内容。下一步建议重点强化“梦境与现实对比”“壮志难酬”这类概括性表达。";
  }

  return "你已经完成了本轮训练，但基础知识和主观表达还有提升空间。建议先结合参考答案回看错题，再重点梳理词中的军旅意象、意境特点和作者情感。";
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildSingleResultHtml(resultList) {
  return resultList.map(item => {
    const statusClass = item.result.isCorrect ? "ok" : "bad";
    const statusText = item.result.isCorrect ? "正确" : "错误";

    return `
      <div class="result-item">
        <div class="result-item-head">
          <span class="result-qno">第${item.number}题</span>
          <span class="result-status ${statusClass}">${statusText}</span>
        </div>
        <div class="result-desc">你的答案：${escapeHtml(item.result.userAnswer)} ｜ 正确答案：${escapeHtml(item.result.correctAnswer)}</div>
      </div>
    `;
  }).join("");
}

function buildFillResultHtml(resultList) {
  return resultList.map(item => {
    const detailHtml = item.result.blankResults.map((blank, index) => {
      const statusClass = blank.isCorrect ? "ok" : "bad";
      const statusText = blank.isCorrect ? "正确" : "待修正";
      const acceptedText = blank.acceptedList
        ? `参考可接受答案：${escapeHtml(blank.acceptedList.join(" / "))}`
        : "";

      return `
        <div class="sub-result-row">
          <span>第${index + 1}空：${escapeHtml(blank.userAnswer)}</span>
          <span class="result-status ${statusClass}">${statusText}</span>
          ${acceptedText ? `<div class="sub-result-ref">${acceptedText}</div>` : ""}
        </div>
      `;
    }).join("");

    return `
      <div class="result-item">
        <div class="result-item-head">
          <span class="result-qno">第${item.number}题</span>
          <span class="result-score-tag">${item.result.score}/${item.result.total}</span>
        </div>
        <div class="result-desc">本题共命中 ${item.result.score} 个空。</div>
        ${item.result.reference ? `<div class="sub-result-ref">${escapeHtml(item.result.reference)}</div>` : ""}
        <div class="sub-result-wrap">${detailHtml}</div>
      </div>
    `;
  }).join("");
}

function buildEssayResultHtml(resultList) {
  return resultList.map(item => {
    const pointHtml = item.result.pointResults.map(point => {
      const statusClass = point.hit ? "ok" : "bad";
      const statusText = point.hit ? "已命中" : "未体现";

      return `
        <div class="sub-result-row">
          <span>${escapeHtml(point.title)}</span>
          <span class="result-status ${statusClass}">${statusText}</span>
        </div>
      `;
    }).join("");

    return `
      <div class="result-item">
        <div class="result-item-head">
          <span class="result-qno">第${item.number}题</span>
          <span class="result-score-tag">${item.result.hitCount}/${item.result.total}</span>
        </div>
        <div class="result-desc">分析结果：${item.result.level}</div>
        <div class="sub-result-wrap">${pointHtml}</div>
        <div class="essay-answer-box">
          <div class="essay-answer-title">参考答案</div>
          <div class="essay-answer-text">${escapeHtml(item.result.referenceAnswer)}</div>
        </div>
      </div>
    `;
  }).join("");
}

function evaluateAllAnswers() {
  const singleResults = [];
  const fillResults = [];
  const essayResults = [];

  let objectiveScore = 0;
  let objectiveTotal = 0;

  let singleCorrectCount = 0;
  let singleTotalCount = 0;

  let fillCorrectCount = 0;
  let fillTotalCount = 0;

  let essayCorrectCount = 0;
  let essayTotalCount = 0;

  questions.forEach((question, index) => {
    const userAnswer = answers[index];

    if (question.type === "single") {
      const result = evaluateSingle(question, userAnswer);
      singleResults.push({ number: index + 1, result });

      objectiveScore += result.score;
      objectiveTotal += result.total;

      singleTotalCount++;
      if (result.isCorrect) {
        singleCorrectCount++;
      }
    }

    if (question.type === "fill") {
      const result = evaluateFill(question, userAnswer);
      fillResults.push({ number: index + 1, result });

      objectiveScore += result.score;
      objectiveTotal += result.total;

      fillTotalCount++;
      if (result.score === result.total) {
        fillCorrectCount++;
      }
    }

    if (question.type === "essay") {
      const result = evaluateEssay(question, userAnswer);
      essayResults.push({ number: index + 1, result });

      essayTotalCount++;
      if (result.hitCount === result.total) {
        essayCorrectCount++;
      }
    }
  });

  const objectiveRate = objectiveTotal === 0 ? 0 : objectiveScore / objectiveTotal;
  const feedback = getOverallFeedback(objectiveRate, essayResults);

  return {
    objectiveScore,
    objectiveTotal,
    objectiveRate,

    singleCorrectCount,
    singleTotalCount,

    fillCorrectCount,
    fillTotalCount,

    essayCorrectCount,
    essayTotalCount,

    singleResults,
    fillResults,
    essayResults,
    feedback
  };
}

function showFinalSubmitResult() {
  const className = document.getElementById("className").value.trim() || "未填写班级";
  const studentName = document.getElementById("studentName").value.trim() || "未填写姓名";
  const finalResult = evaluateAllAnswers();

  console.log("当前提交内容：", {
    className,
    studentName,
    answers,
    finalResult
  });

  resultTitle.textContent = "训练结果";
  resultSummary.innerHTML = `
  <div class="summary-grid">
    <div class="summary-card">
      <div class="summary-label">班级</div>
      <div class="summary-value">${escapeHtml(className)}</div>
    </div>
    <div class="summary-card">
      <div class="summary-label">姓名</div>
      <div class="summary-value">${escapeHtml(studentName)}</div>
    </div>
    <div class="summary-card">
      <div class="summary-label">选择题正确数</div>
      <div class="summary-value">${finalResult.singleCorrectCount} / ${finalResult.singleTotalCount}</div>
    </div>
    <div class="summary-card">
      <div class="summary-label">填空题正确数</div>
      <div class="summary-value">${finalResult.fillCorrectCount} / ${finalResult.fillTotalCount}</div>
    </div>
    <div class="summary-card">
      <div class="summary-label">简答题正确数</div>
      <div class="summary-value">${finalResult.essayCorrectCount} / ${finalResult.essayTotalCount}</div>
    </div>
    <div class="summary-card">
      <div class="summary-label">客观题得分</div>
      <div class="summary-value">${finalResult.objectiveScore} / ${finalResult.objectiveTotal}</div>
    </div>
    <div class="summary-card">
      <div class="summary-label">客观题正确率</div>
      <div class="summary-value">${Math.round(finalResult.objectiveRate * 100)}%</div>
    </div>
  </div>
  <div class="feedback-panel">
    <div class="feedback-title">学习建议</div>
    <div class="feedback-text">${escapeHtml(finalResult.feedback)}</div>
  </div>
`;

  resultDetails.innerHTML = `
    <section class="result-section">
      <h3>单项选择题判改</h3>
      ${buildSingleResultHtml(finalResult.singleResults)}
    </section>
    <section class="result-section">
      <h3>填空题判改</h3>
      ${buildFillResultHtml(finalResult.fillResults)}
    </section>
    <section class="result-section">
      <h3>简答题要点分析</h3>
      ${buildEssayResultHtml(finalResult.essayResults)}
    </section>
  `;

  resultOverlay.classList.remove("hidden");
}

function showUnfinishedOverlay(unfinishedNumbers) {
  const clickableNumbers = unfinishedNumbers
    .map(num => `<span class="unfinished-link" data-question="${num}">第${num}题</span>`)
    .join("、");

  unfinishedText.innerHTML = `你的${clickableNumbers}还未作答完成，确认提交？`;
  unfinishedOverlay.classList.remove("hidden");
}

backToAnswerBtn.addEventListener("click", () => {
  unfinishedOverlay.classList.add("hidden");
});

unfinishedText.addEventListener("click", (e) => {
  const target = e.target.closest(".unfinished-link");
  if (!target) return;

  const questionNumber = Number(target.dataset.question);
  if (!questionNumber) return;

  currentIndex = questionNumber - 1;
  unfinishedOverlay.classList.add("hidden");
  renderQuestion();
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    renderQuestion();
  }
});

submitBtn.addEventListener("click", () => {
  const unfinishedNumbers = getUnfinishedQuestionNumbers();

  if (unfinishedNumbers.length > 0) {
    showUnfinishedOverlay(unfinishedNumbers);
  } else {
    showFinalSubmitResult();
  }
});

confirmSubmitBtn.addEventListener("click", () => {
  unfinishedOverlay.classList.add("hidden");
  showFinalSubmitResult();
});

reviewBtn.addEventListener("click", () => {
  resultOverlay.classList.add("hidden");
});

finishBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

renderQuestion();