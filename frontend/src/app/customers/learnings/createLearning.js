"use server";
import { revalidatePath } from 'next/cache';

const createLearning = async (formData) => {

    const skill_l1 = formData.get("skill_l1");
    const skill_l2 = formData.get("skill_l2");
    const lecture_time = formData.get("lecture_time");
    const level = formData.get("level");
    

    const body_msg = JSON.stringify({
        skill_l1: skill_l1,
        skill_l2: skill_l2,
        lecture_time: lecture_time,
        level: level,
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

    revalidatePath(`/learnings`);
}

export default createLearning;
