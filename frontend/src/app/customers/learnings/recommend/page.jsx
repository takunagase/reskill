"use client"
import { useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CreateLearning from './createLearning';
import Link from 'next/link'

export default function LearningPage() {
    const formRef = useRef();
    const router = useRouter();
    const skill_l1 = useSearchParams().get("skill_l1");
    const skill_l2 = useSearchParams().get("skill_l2");
    const lecture_time = useSearchParams().get("lecture_time");
    const level = useSearchParams().get("level");

    const body_msg = JSON.stringify({
        skill_l1: skill_l1,
        skill_l2: skill_l2,
        level: level,
        lecture_time: lecture_time,
    })

    
    const [learningData, setLearningData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
            await CreateLearning(body_msg);
            const result = await CreateLearning(body_msg);
            // データをstateに保存
            setLearningData(result);
            } catch (error) {
            // エラーハンドリング
            console.error("エラーが発生しました:", error);
            }
        };
        
        fetchData();
        }, []); 

    const recommendData_pre = JSON.stringify(learningData, null, 2);
    const recommendData = JSON.parse(recommendData_pre);

    return (
        <>
            <Header />
            <div className='container'>
                <h1>おすすめ教材</h1>
                {recommendData && (
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full px-4 h-full flex flex-wrap">
                                <div className="card w-80 h-100 bg-base-100 shadow-xl h-full flex">
                                <figure><img className="w-full h-full object-cover"　src={recommendData[0].image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-center">
                                            {recommendData[0].big_title}
                                        </h2>
                                        <p>難易度：{recommendData[0].level}</p>
                                        <p>講義時間：{recommendData[0].lecture_time}分</p>
                                        <p>講師：{recommendData[0].teacher_name}</p>
        {/*                                   <div className="card-actions justify-end">
                                        <div className="badge badge-outline">related word</div> 
                                        <div className="badge badge-outline">related word</div>
                        </div> */}
                                        <a href={recommendData[0].lecture_link}>
                                            <button className="btn btn-primary mt-3 w-full">教材へGO</button>
                                        </a>
                                    </div>
                                </div>
                                <div className="card w-80 h-100 bg-base-100 shadow-xl h-full flex">
                                <figure><img className="w-full h-full object-cover"　src={recommendData[1].image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-center">
                                            {recommendData[1].big_title}
                                        </h2>
                                        <p>難易度：{recommendData[1].level}</p>
                                        <p>講義時間：{recommendData[1].lecture_time}分</p>
                                        <p>講師：{recommendData[1].teacher_name}</p>
        {/*                                <div className="card-actions justify-end">
                                        <div className="badge badge-outline">related word</div> 
                                        <div className="badge badge-outline">related word</div>
                    </div> */}
                                       <a href={recommendData[1].lecture_link}>
                                            <button className="btn btn-primary mt-3 w-full">教材へGO</button>
                                        </a>
                                    </div>
                                </div>
                                <div className="card w-80 h-100 bg-base-100 shadow-xl h-full flex">
                                <figure><img className="w-full h-full object-cover"　src={recommendData[2].image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-center">
                                            {recommendData[2].big_title}
                                        </h2>
                                        <p>難易度：{recommendData[2].level}</p>
                                        <p>講義時間：{recommendData[2].lecture_time}分</p>
                                        <p>講師：{recommendData[2].teacher_name}</p>
        {/*                                <div className="card-actions justify-end">
                                        <div className="badge badge-outline">related word</div> 
                                        <div className="badge badge-outline">related word</div>
                    </div> */}
                                       <a href={recommendData[2].lecture_link}>
                                            <button className="btn btn-primary mt-3 w-full">教材へGO</button>
                                        </a>
                                    </div>
                                </div>
                                <div className="card w-80 h-100 bg-base-100 shadow-xl h-full flex">
                                <figure><img className="w-full h-full object-cover"　src={recommendData[3].image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-center">
                                            {recommendData[3].big_title}
                                        </h2>
                                        <p>難易度：{recommendData[3].level}</p>
                                        <p>講義時間：{recommendData[3].lecture_time}分</p>
                                        <p>講師：{recommendData[3].teacher_name}</p>
        {/*                                <div className="card-actions justify-end">
                                        <div className="badge badge-outline">related word</div> 
                                        <div className="badge badge-outline">related word</div>
                    </div> */}
                                       <a href={recommendData[3].lecture_link}>
                                            <button className="btn btn-primary mt-3 w-full">教材へGO</button>
                                        </a>
                                    </div>
                                </div>
                                <div className="card w-80 h-100 bg-base-100 shadow-xl h-full flex">
                                <figure><img className="w-full h-full object-cover"　src={recommendData[4].image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-center">
                                            {recommendData[4].big_title}
                                        </h2>
                                        <p>難易度：{recommendData[4].level}</p>
                                        <p>講義時間：{recommendData[4].lecture_time}分</p>
                                        <p>講師：{recommendData[4].teacher_name}</p>
        {/*                                <div className="card-actions justify-end">
                                        <div className="badge badge-outline">related word</div> 
                                        <div className="badge badge-outline">related word</div>
                    </div> */}
                                       <a href={recommendData[4].lecture_link}>
                                            <button className="btn btn-primary mt-3 w-full">教材へGO</button>
                                        </a>
                                    </div>
                                </div>
                                <div className="card w-80 h-100 bg-base-100 shadow-xl h-full flex">
                                <figure><img className="w-full h-full object-cover"　src={recommendData[5].image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-center">
                                            {recommendData[5].big_title}
                                        </h2>
                                        <p>難易度：{recommendData[5].level}</p>
                                        <p>講義時間：{recommendData[5].lecture_time}分</p>
                                        <p>講師：{recommendData[5].teacher_name}</p>
        {/*                                <div className="card-actions justify-end">
                                        <div className="badge badge-outline">related word</div> 
                                        <div className="badge badge-outline">related word</div>
                    </div> */}
                                       <a href={recommendData[5].lecture_link}>
                                            <button className="btn btn-primary mt-3 w-full">教材へGO</button>
                                        </a>
                                    </div>
                                </div>
        {/*                 <pre>{recommendData}</pre> */}
                       </div>
                    </div>
                )}
                </div>

            <Footer />
        </>
    )
}