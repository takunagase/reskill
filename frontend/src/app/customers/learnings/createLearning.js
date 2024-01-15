"use server";
import { revalidatePath } from 'next/cache';

const CreateLearning = async (formData) => {

    const skill_l1 = formData.get("skill_l1");
    const skill_l2 = formData.get("skill_l2");
    const lecture_time = formData.get("lecture_time");
    const level = formData.get("level");
    

    const body_msg = JSON.stringify({
        skill_l1: skill_l1,
        skill_l2: skill_l2,
        level: level,
        lecture_time: lecture_time,
    })

    const res = await fetch(`http://127.0.0.1:5000/learnings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body_msg,
    });
    if (!res.ok) {
        console.error('Error creating learning:', res.status, res.statusText);
        throw new Error('Failed to create learning');
    }
    // レスポンスの本文をJSON形式で取得
    const responseData = await res.json();
    // レスポンスの本文をコンソールに出力
    console.log(responseData);

    revalidatePath(`/learnings`);
    return responseData;
};

export default CreateLearning;
