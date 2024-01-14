// fetchLearning.js
export default async function fetchLearning() {
  const res = await fetch(`http://127.0.0.1:5000/learnings`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      cache: 'no-cache',
      body: JSON.stringify({
          skill_l1: 'デザイン',
          skill_l2: 'マーケティング',
          level: '1',
          lecture_time: 60
      })
  });

  if (!res.ok) {
      throw new Error('Failed to fetch learning');
  }

  const data = await res.json(); // JSON データを取り出す
  return data;
}
