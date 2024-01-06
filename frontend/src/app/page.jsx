"use client";
import React from 'react';
import { useRef } from 'react';
import Header from './components/Header';
import { useRouter } from 'next/navigation';

import createCustomer from './createCustomer';

export default function Home() {
  const formRef = useRef();
  const router = useRouter();

  const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(formRef.current);
      await createCustomer(formData);
      router.push(`./customers`);
  };

  return (
  <>
    <Header />
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">リスキルへようこそ</h1>
          <h2 className='text-center pt-5'>あなたの学びの一歩を一緒に</h2>
          <p className='py-4'>漠然と学び直しをしなければならないことはわかるけど・・</p>
          <ul className='pb-4'>
              <li>そもそも何をしたいかわからない</li>
              <li>今の自分に何ができるのかわからない</li>
              <li>どんな教材で学べばいいのかわからない</li>
          </ul>
          <form ref={formRef} onSubmit={handleSubmit}>
            <button type="submit" className="btn btn-primary">Get Started</button>
          </form>
        </div>
      </div>
    </div>
  </>
  )
}