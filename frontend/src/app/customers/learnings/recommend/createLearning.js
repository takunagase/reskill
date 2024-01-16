"use server";
import { revalidatePath } from 'next/cache';

const CreateLearning = async (form) => {

    const res = await fetch(`http://127.0.0.1:5000/learnings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: form,
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
