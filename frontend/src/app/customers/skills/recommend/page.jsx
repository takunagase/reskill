"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Header from '../../../components/Header';

export default function Asis() {
    return (
        <>
            <Header />
            <div className="container flex flex-col w-full border-opacity-50">
                <h1>おすすめの学びTop3</h1>
                <div className="grid h-50 card bg-base-300 rounded-box place-items-center">
                    <h2 className='text-2xl font-bold py-2'>●●スキル</h2>
                    <p>GPTで結果を返す</p>
                    <p className='p-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, consectetur fuga! Aliquid enim sit esse.</p>
                </div>
                <div className="divider"></div>
                <div className="grid h-50 card bg-base-300 rounded-box place-items-center">
                    <h2 className='text-2xl font-bold py-2'>●●スキル</h2>
                    <p className='p-3'>GPTで結果を返す</p>
                </div>
                <div className="divider"></div>
                <div className="grid h-50 card bg-base-300 rounded-box place-items-center">
                    <h2 className='text-2xl font-bold py-2'>●●スキル</h2>
                    <p className='p-3'>GPTで結果を返す</p>
                </div>

                <div className='p-5 flex items-center justify-center'>
                    <Link href="/customers/learnings" className="mt-4 pt-4" prefetch={false}>
                        <button type="submit" className="btn btn-primary">学びたい分野の選択に移る</button>
                    </Link>
                </div>
            </div>
        </>
    )
}