"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';

export default function Asis() {
    return (
        <>
            <Header />
            <div className="container flex flex-col w-full border-opacity-50">
                <h1>あなたのスキル棚卸</h1>
                <div className="grid h-50 card bg-base-300 rounded-box place-items-center">
                    <h2 className='text-2xl font-bold py-2'>●●力</h2>
                    <p>GPTで結果を返す</p>
                    <p className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt alias dolores magni omnis! Expedita asperiores dolorem delectus necessitatibus ad voluptatibus id consectetur harum, eum doloremque corrupti saepe, repellendus, laboriosam quam vel impedit. Amet provident omnis rem, porro dignissimos neque ullam? Modi recusandae a inventore facere quidem esse adipisci dolorum amet.</p>
                </div>
                <div className="divider"></div>
                <div className="grid h-50 card bg-base-300 rounded-box place-items-center">
                    <h2 className='text-2xl font-bold py-2'>●●力</h2>
                    <p className='p-3'>GPTで結果を返す</p>
                </div>
                <div className="divider"></div>
                <div className="grid h-50 card bg-base-300 rounded-box place-items-center">
                    <h2 className='text-2xl font-bold py-2'>●●力</h2>
                    <p className='p-3'>GPTで結果を返す</p>
                </div>
                
                <div>
                    <Link href="/customers/skills/recommend" className="mt-4 pt-4" prefetch={false}>
                        <button type="submit" className="btn btn-primary">おすすめ講義を探す</button>
                    </Link>
                </div>
            </div>
        </>
    )
}