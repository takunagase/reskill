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
                    <p className='p-3'>クリックすると、このスキルに該当する「おすすめ講義一覧」へ遷移するようにしたい</p>
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
            </div>
        </>
    )
}