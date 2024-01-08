"use client";
import OneCustomerInfoCard from "src/app/components/one_customer_info_card.jsx";
import fetchCustomer from "./fetchCustomer";
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import createSkill from './createSkill';
import { useRef } from 'react';

export default function ConfirmPage() {
    const router = useRouter();
    const customer_id = useSearchParams().get("customer_id");
    const [customer, setCustomer] = useState(null);
    const formRef = useRef();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        await createSkill(formData);
        router.push(`../skills`);
    };

    useEffect(() => {
        const fetchAndSetCustomer = async () => {
            const customerData = await fetchCustomer(customer_id);
            setCustomer(customerData[0]);
        };
        fetchAndSetCustomer();
    }, []);

    return (
        <>
            <div className="card bordered bg-white border-blue-200 border-2 max-w-sm m-4">
                <div className="alert alert-success p-4 text-center">
                    正常に作成しました
                </div>
                <OneCustomerInfoCard {...customer} />
                <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="p-5 flex items-center justify-center">
                        <button type="submit" className="btn btn-primary">
                            スキル診断を行う
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
