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
                const response = await fetch(`http://127.0.0.1:5000/skills?customer_id=${customer_id}`); // customer_id を実際の値に変更
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
    const recommendedSkillsRegex = /【お勧めの掛け合わせスキル】([\s\S]*?)(?=(【期待できるキャリア展望】|$))/;
    // マッチした部分を取得
    const recommendedSkillsMatch = fullText.match(recommendedSkillsRegex);
    // マッチした部分があれば、スキル情報を取り出す
    const recommendedSkills = recommendedSkillsMatch ? recommendedSkillsMatch[1].trim() : '';

    // 現状スキル１
    const recommendedSkillsRegex_1 = /①([\s\S]*?)(?=(②|$))/;
    const recommendedSkillsMatch_1 = recommendedSkills.match(recommendedSkillsRegex_1);
    const recommendedSkills_1 = recommendedSkillsMatch_1 ? recommendedSkillsMatch_1[1].trim() : '';
    const recommendedSkills_split_1 = recommendedSkills_1.split('-');

    const recommendedSkillsRegex_2 = /②([\s\S]*?)(?=(③|$))/;
    const recommendedSkillsMatch_2 = recommendedSkills.match(recommendedSkillsRegex_2);
    const recommendedSkills_2 = recommendedSkillsMatch_2 ? recommendedSkillsMatch_2[1].trim() : '';
    const recommendedSkills_split_2 = recommendedSkills_2.split('-');
    
    const recommendedSkillsRegex_3 = /③([\s\S]*?)(?=(【|$))/;
    const recommendedSkillsMatch_3 = recommendedSkills.match(recommendedSkillsRegex_3);
    const recommendedSkills_3 = recommendedSkillsMatch_3 ? recommendedSkillsMatch_3[1].trim() : '';
    const recommendedSkills_split_3 = recommendedSkills_3.split('-');


    // 【現状のあなたのスキル】から【お勧めの掛け合わせスキル】の手前までの正規表現
    const currentSkillsRegex = /【現状のあなたのスキル】([\s\S]*?)(?=(【お勧めの掛け合わせスキル】|$))/;
    // マッチした部分を取得
    const currentSkillsMatch = fullText.match(currentSkillsRegex);
    // マッチした部分があれば、現状のスキル情報を取り出す
    const currentSkills = currentSkillsMatch ? currentSkillsMatch[1].trim() : '';

    const currentSkillsRegex_1 = /①([\s\S]*?)(?=(②|$))/;
    const currentSkillsMatch_1 = currentSkills.match(currentSkillsRegex_1);
    const currentSkills_1 = currentSkillsMatch_1 ? currentSkillsMatch_1[1].trim() : '';
    const currentSkills_split_1 = currentSkills_1.split('-');

    const currentSkillsRegex_2 = /②([\s\S]*?)(?=(③|$))/;
    const currentSkillsMatch_2 = currentSkills.match(currentSkillsRegex_2);
    const currentSkills_2 = currentSkillsMatch_2 ? currentSkillsMatch_2[1].trim() : '';
    const currentSkills_split_2 = currentSkills_2.split('-');

    const currentSkillsRegex_3 = /③([\s\S]*?)(?=(【|$))/;
    const currentSkillsMatch_3 = currentSkills.match(currentSkillsRegex_3);
    const currentSkills_3 = currentSkillsMatch_3 ? currentSkillsMatch_3[1].trim() : '';
    const currentSkills_split_3 = currentSkills_3.split('-');

    // 【お勧めの掛け合わせスキル】の正規表現
    const futureRegex = /【期待できるキャリア展望】([\s\S]*?)(?=(【|$))/;
    // マッチした部分を取得
    const futureMatch = fullText.match(futureRegex);
    // マッチした部分があれば、スキル情報を取り出す
    const future = futureMatch ? futureMatch[1].trim() : '';


    return (
        <>
            <Header />
            <div className="container flex flex-col w-full border-opacity-50">
                <h1>スキル棚卸</h1>
                <div className="grid h-50 card bg-base-300 rounded-box">
                    <h2 className='text-2xl font-bold py-2 text-center'>{currentSkills_split_1[0]}</h2>
                    <p className='p-3'>{currentSkills_split_1[1]}</p>
                    <p className='pl-3 pr-3'>{currentSkills_split_1[2]}</p>
                    <p className='p-3'>{currentSkills_split_1[3]}</p>
                </div>
                <div className="divider"></div>
                <div className="grid h-50 card bg-base-300 rounded-box">
                    <h2 className='text-2xl font-bold py-2 text-center'>{currentSkills_split_2[0]}</h2>
                    <p className='p-3'>{currentSkills_split_2[1]}</p>
                    <p className='pl-3 pr-3'>{currentSkills_split_2[2]}</p>
                    <p className='p-3'>{currentSkills_split_2[3]}</p>
                </div>
                <div className="divider"></div>
                <div className="grid h-50 card bg-base-300 rounded-box">
                    <h2 className='text-2xl font-bold py-2 text-center'>{currentSkills_split_3[0]}</h2>
                    <p className='p-3'>{currentSkills_split_3[1]}</p>
                    <p className='pl-3 pr-3'>{currentSkills_split_3[2]}</p>
                    <p className='p-3'>{currentSkills_split_3[3]}</p>
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
                <div className="grid h-50 card bg-base-300 rounded-box">
                    <h2 className='text-2xl font-bold py-2 text-center'>{recommendedSkills_split_1[0]}</h2>
                    <p className='p-3'>{recommendedSkills_split_1[1]}</p>
                    <p className='pl-3 pr-3'>{recommendedSkills_split_1[2]}</p>
                    <p className='p-3'>{recommendedSkills_split_1[3]}</p>
                </div>
                <div className="divider"></div>
                <div className="grid h-50 card bg-base-300 rounded-box">
                    <h2 className='text-2xl font-bold py-2 text-center'>{recommendedSkills_split_2[0]}</h2>
                    <p className='p-3'>{recommendedSkills_split_2[1]}</p>
                    <p className='pl-3 pr-3'>{recommendedSkills_split_2[2]}</p>
                    <p className='p-3'>{recommendedSkills_split_2[3]}</p>
                </div>
                <div className="divider"></div>
                <div className="grid h-50 card bg-base-300 rounded-box">
                <h2 className='text-2xl font-bold py-2 text-center'>{recommendedSkills_split_3[0]}</h2>
                    <p className='p-3'>{recommendedSkills_split_3[1]}</p>
                    <p className='pl-3 pr-3'>{recommendedSkills_split_3[2]}</p>
                    <p className='p-3'>{recommendedSkills_split_3[3]}</p>
                </div>
            <div className="divider pt-20"></div>
            <div className="container flex flex-col w-full border-opacity-50">
                <h1>期待できるキャリア展望</h1>
                <div className="grid h-50 card bg-base-300 rounded-box">
                    <p className='p-3'>{future[0]}</p>
                </div>
            </div>

                <div className='p-5 flex items-center justify-center'>
                    <Link href="/customers/learnings" className="mt-4 pt-4" prefetch={false}>
                        <button type="submit" className="btn btn-primary">学びたい分野の選択を行う</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}