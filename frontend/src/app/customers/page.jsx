"use client";
import OneCustomerInfoCard from "src/app/components/one_customer_info_card.jsx";
import Link from 'next/link'
import { useEffect, useState } from 'react';
import fetchCustomers from "./fetchCustomers";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Page() {
  const [customerInfos, setCustomerInfos] = useState([]);

  useEffect(() => {
      const fetchAndSetCustomer = async () => {
          const customerData = await fetchCustomers();
          setCustomerInfos(customerData);
      };
      fetchAndSetCustomer();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <h2 className="pb-5 text-center font-bold" style={{fontSize: '30px'}}>ユーザー登録を行う</h2>
        <section class="user_create">
        <Link href="/customers/create" className="mt-4 pt-4" prefetch={false}>
          <button className="btn btn-neutral w-full border-0 bg-blue-200 text-black hover:text-white">Create</button>
        </Link>
        </section>

        <section class="user_information">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {customerInfos.map((customerInfo, index) => (
            <div key={index} className="card bordered bg-white border-blue-200 border-2 flex flex-row max-w-sm m-4">
              <OneCustomerInfoCard {...customerInfo} />
              <div className="card-body flex flex-col justify-between">
                <Link href={`/customers/read/${customerInfo.customer_id}`}>
                  <button className="btn btn-neutral w-20 border-0 bg-blue-200 text-black hover:text-white">Read</button>
                </Link>
                <Link href={`/customers/update/${customerInfo.customer_id}`}>
                  <button className="btn btn-neutral w-20 border-0 bg-blue-200 text-black hover:text-white">Update</button>
                </Link>
                <Link href={`/customers/delete/${customerInfo.customer_id}`}>
                  <button className="btn btn-neutral w-20 border-0 bg-blue-200 text-black hover:text-white">Delete</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        </section>

        <section class="skill_register">
        <Link href="/customers/skills" className="mt-4 pt-4" prefetch={false}>
          <button className="btn btn-neutral w-full border-0 bg-blue-200 text-black hover:text-white">スキル診断を行う</button>
        </Link>
        </section>
      </div>
      <Footer />
    </>
  );
}