"use client";
import React from 'react';
import { useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { useRouter } from 'next/navigation';

import createCustomer from './createCustomer';

export default function Home() {
  const formRef = useRef();
  const router = useRouter();

  const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(formRef.current);
      await createCustomer(formData);
      router.push(`./customers/create`);
  };

  return (
  <>
    <Header />
    <div className="hero min-h-screen bg-base-200">
      <div className="pt-10 hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">りすきるへようこそ</h1>
          <h2 className='text-center pt-5 font-bold' style={{ fontSize: '20px'}}>〜　あなたの学びの一歩を一緒に　〜</h2>
          <p className='py-4'>漠然と学び直しをしなければならないことはわかるけど・・</p>
          <ul className='pb-4 flex justify-center'>
              <li className='py-5 flex flex-col items-center flex-grow'>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body text-center">
                    <h2 className="card-title text-center">To be</h2>
                    <p>何をしたいかわからない</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline bg-blue-100">goal</div> 
                      <div className="badge badge-outline bg-pink-100">future</div>
                    </div>
                  </div>
                </div>
              </li>
              <li className='py-5 pl-3 flex flex-col items-center flex-grow'>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body text-center">
                    <h2 className="card-title text-center">As is</h2>
                    <p>今の自分に何ができるのかわからない</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline bg-blue-100">Self-Assessment</div> 
                      <div className="badge badge-outline bg-pink-100">career</div>
                    </div>
                  </div>
                </div>
              </li>
              <li className='py-5 pl-3 flex flex-col items-center flex-grow'>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body text-center">
                    <h2 className="card-title text-center">What to Do</h2>
                    <p>どんな教材で学べばいいのかわからない</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline bg-blue-100">Information</div> 
                      <div className="badge badge-outline bg-pink-100">learning</div>
                    </div>
                  </div>
                </div>
              </li>
          </ul>
          <form ref={formRef} onSubmit={handleSubmit}>
            <p className='text-center mb-3 font-bold'>そんなあなたに</p>
            <button type="submit" className="btn btn-primary">Get Started</button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </>
  )
}