"use server";
import { revalidatePath } from 'next/cache';

const createCustomer = async (formData) => {
    const creating_customer_name = formData.get("customer_name");
    const creating_customer_id = formData.get("customer_id");
    const creating_age = formData.get("age");
    const creating_gender = formData.get("gender");
    const creating_career_l1 = formData.get("career_l1");
    const creating_career_s1 = formData.get("career_s1");
    const creating_career_l2 = formData.get("career_l2");
    const creating_career_s2 = formData.get("career_s2");


    const body_msg = JSON.stringify({
        customer_name: creating_customer_name,
        customer_id: creating_customer_id,
        age: creating_age,
        gender: creating_gender,
        career_l1: creating_career_l1,
        career_s1: creating_career_s1,
        career_l2: creating_career_l2,
        career_s2: creating_career_s2,
    })

    const res = await fetch(`http://127.0.0.1:5000/customers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body_msg,
    });
    if (!res.ok) {
        throw new Error('Failed to create customer');
    }

    revalidatePath(`/customers`);
}

export default createCustomer;
