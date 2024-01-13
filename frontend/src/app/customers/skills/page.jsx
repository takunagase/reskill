"use client"
import Link from 'next/link';
import Skill from "src/app/components/skill.jsx";
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import fetchSkill from "./fetchSkill";
import { useRouter, useSearchParams } from 'next/navigation';
import { useRef } from 'react';

export default function Asis() {
    const router = useRouter();
    const customer_id = useSearchParams().get("customer_id");
    const [customer, setCustomer] = useState(null);
    const [skill, setSkill] = useState("");
    const formRef = useRef();

    useEffect(() => {
        const fetchSkill = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/skills?customer_id=1010'); // customer_id を実際の値に変更
                const data = await response.text();
                setSkill(data); // レスポンスをstateに設定
              } catch (error) {
                console.error('Error fetching data:', error);
              }
            };
                // 関数を呼び出し
            fetchSkill();
    }, []); // 空の依存リストを渡すことで、マウント時にのみ実行

    // 文章全体
    const fullText = skill
    // 【お勧めの掛け合わせスキル】の正規表現
    const recommendedSkillsRegex = /【お勧めの掛け合わせスキル】([\s\S]*?)(?=(【|$))/;
    // マッチした部分を取得
    const recommendedSkillsMatch = fullText.match(recommendedSkillsRegex);
    // マッチした部分があれば、スキル情報を取り出す
    const recommendedSkills = recommendedSkillsMatch ? recommendedSkillsMatch[1].trim() : '';

    // 【現状のあなたのスキル】から【お勧めの掛け合わせスキル】の手前までの正規表現
    const currentSkillsRegex = /【現状のあなたのスキル】([\s\S]*?)(?=(【お勧めの掛け合わせスキル】|$))/;
    // マッチした部分を取得
    const currentSkillsMatch = fullText.match(currentSkillsRegex);
    // マッチした部分があれば、現状のスキル情報を取り出す
    const currentSkills = currentSkillsMatch ? currentSkillsMatch[1].trim() : '';

    return (
        <>
            <Header />
            <div className="container flex flex-col w-full border-opacity-50">
                <h1>スキル棚卸</h1>
                <div className="grid h-50 card bg-base-300 rounded-box place-items-center">
                    <h2 className='text-2xl font-bold py-2'>●●力</h2>
                    <p>{currentSkills}</p>
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
                
{/*                <div　className='p-5 flex items-center justify-center'>
                    <Link href="/customers/skills/recommend" className="mt-4 pt-4" prefetch={false}>
                        <button type="submit" className="btn btn-primary">おすすめの学びの方向性を見る</button>
                    </Link>
                    </div> */}
            </div>
            <div className="divider pt-20"></div>
            <div className="container flex flex-col w-full border-opacity-50">
                <h1>おすすめの学びTop3</h1>
                <div className="grid h-50 card bg-base-300 rounded-box place-items-center">
                    <h2 className='text-2xl font-bold py-2'>●●スキル</h2>
                    <p className='p-3'>{recommendedSkills}</p>
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
            <Footer />
        </>
    )
}