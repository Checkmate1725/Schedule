const data = [
  { title: "أذكار الصباح", link: "athkar/athkar-alsabah.html", keywords: ["صباح", "أذكار"] },
  { title: "أذكار المساء", link: "athkar/athkar-almasaa.html", keywords: ["مساء", "أذكار"] },
  { title: "دعاء الاستيقاظ من النوم", link: "athkar/waking-up-dua.html", keywords: ["استيقاظ", "نوم"] },
  { title: "دعاء اللبس", link: "athkar/clothes-dua.html", keywords: ["لبس"] },
  { title: "دعاء الخروج من المنزل", link: "athkar/leaving-house-dua.html", keywords: ["خروج", "منزل"] },
  { title: "دعاء دخول الأماكن", link: "athkar/entering-places-dua.html", keywords: ["دخول", "أماكن"] },
  { title: "دعاء بعد الأذان", link: "athkar/athan-dua.html", keywords: ["أذان"] },
  { title: "أدعية ما قبل النوم", link: "athkar/sleep-dua.html", keywords: ["نوم"] },
  { title: "دعاء بعد رؤية كابوس", link: "athkar/nightmare-dua.html", keywords: ["كابوس"] },
  { title: "أذكار صلاح الأهل", link: "athkar/family-dua.html", keywords: ["أهل"] },
  { title: "أذكار الحرم", link: "athkar/haram-dua.html", keywords: ["حرم"] },
  { title: "أذكار الصلاة", link: "athkar/athkar-alsalah.html", keywords: ["صلاة"] },
  { title: "السور اليومية", link: "surah/daily-surah.html", keywords: ["سور", "قرآن"] }
];

function searchAthkar(query) {
  const results = document.getElementById("results");
  results.innerHTML = "";

  if (!query.trim()) return;

  const q = query.trim();

  data
    .filter(item =>
      item.title.includes(q) ||
      item.keywords.some(k => k.includes(q))
    )
    .forEach(item => {
      const a = document.createElement("a");
      a.href = item.link;
      a.textContent = item.title;
      results.appendChild(a);
    });
}
