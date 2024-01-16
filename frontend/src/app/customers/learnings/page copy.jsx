"use client"
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Rating from '../../components/Rating';
import SliderBar from '../../components/SliderBar';
import Link from 'next/link'


import CreateLearning from './createLearning';

const LargeCategoryOptions = [
    { value: 'ビジネススキル', label: 'ビジネススキル' },
    { value: '思考術・自己啓発', label: '思考術・自己啓発' },
    { value: 'マネジメント', label: 'マネジメント' },
    { value: 'マーケティング', label: 'マーケティング' },
    { value: 'UI・UXデザイン', label: 'UI・UXデザイン' },
    { value: 'デザイン', label: 'デザイン' },
  ];

const SmallCategoryOptions = {
    "ビジネススキル": [
      { value: 1, label: 'コミュニケーション術' },
      { value: 2, label: 'ビジネス基礎力' },
      { value: 3, label: '仕事術' },
      { value: 4, label: '業務効率化' },
      { value: 5, label: '印象づくり' },
      { value: 6, label: '課題解決力' },
      { value: 7, label: '行動習慣' },
      { value: 8, label: '時間術' },
      { value: 9, label: 'ビジネス教養' },
      { value: 10, label: 'プレゼンテーション' },
      { value: 11, label: 'マネジメント' },
      { value: 12, label: 'チームビルディング' },
      { value: 13, label: '資料作成' },
      { value: 14, label: '情報活用' },
      { value: 15, label: '交渉術' },
    ],
    '思考術・自己啓発': [
      { value: 16, label: '行動習慣' },
      { value: 17, label: 'モチベーション' },
      { value: 18, label: '思考法' },
      { value: 19, label: '心理学' },
      { value: 20, label: 'コミュニケーション術' },
      { value: 21, label: 'ビジネス基礎力' },
      { value: 22, label: '発想力' },
      { value: 23, label: 'キャリア' },
      { value: 24, label: '仕事術' },
      { value: 25, label: '印象づくり' },
      { value: 26, label: '時間術' },
      { value: 27, label: 'デザイン思考' },
      { value: 28, label: 'AI時代の人間力' },
      { value: 29, label: '情報活用' },
    ],
    'マネジメント': [
      { value: 30, label: 'マネジメント' },
      { value: 31, label: 'コミュニケーション術' },
      { value: 32, label: 'コーチング・メンタリング' },
      { value: 33, label: 'リーダーシップ' },
      { value: 34, label: '人材育成' },
      { value: 35, label: 'チームビルディング' },
      { value: 36, label: 'ビジネス基礎力' },
      { value: 37, label: 'モチベーション' },
      { value: 38, label: '行動習慣' },
      { value: 39, label: '仕事術' },
      { value: 40, label: '評価・フィードバック' },
      { value: 41, label: '組織運営' },
      { value: 42, label: '印象づくり' },
      { value: 43, label: '交渉術' },
      { value: 44, label: '業務効率化' },
    ],
    'マーケティング': [
      { value: 45, label: '企画提案' },
      { value: 46, label: 'マーケティング戦略/プランニング' },
      { value: 47, label: 'ビジネス基礎力' },
      { value: 48, label: '課題解決力' },
      { value: 49, label: 'ライティング・編集' },
      { value: 50, label: 'デジタルリテラシー' },
      { value: 51, label: 'ブランディング' },
      { value: 52, label: 'マーケティング入門' },
      { value: 53, label: '仕事術' },
      { value: 54, label: '情報活用' },
      { value: 55, label: '広報・PR' },
      { value: 56, label: '思考法' },
      { value: 57, label: '新規事業' },
      { value: 58, label: 'クリエイティブデザイン' },
      { value: 59, label: 'Google Analytics' },
    ],
    'UI・UXデザイン': [
      { value: 60, label: 'Webデザイン' },
      { value: 61,label: 'UI/UX' },
      { value: 62,label: 'デザイン力' },
      { value: 63,label: 'デジタルリテラシー' },
      { value: 64,label: 'デザイン' },
      { value: 65,label: 'サービスデザイン' },
      { value: 66,label: 'ユーザビリティ' },
      { value: 67,label: 'ランディングページ制作' },
      { value: 68,label: 'カンプ制作' },
      { value: 69,label: 'プロトタイピング' },
      { value: 70,label: 'ビジネス基礎力' },
      { value: 71,label: 'クリエイティブデザイン' },
      { value: 72,label: 'デザイン戦略' },
      { value: 73,label: 'CSS' },
    ],
    'デザイン': [
      { value: 74,label: 'デザイン' },
      { value: 75,label: 'デザイン力' },
      { value: 76,label: 'クリエイティブデザイン' },
      { value: 77,label: 'グラフィックデザイン' },
      { value: 78,label: 'ビジネス基礎力' },
      { value: 79,label: 'イラスト制作' },
      { value: 80,label: 'デザイン戦略' },
      { value: 81,label: 'Webデザイン' },
      { value: 82,label: 'コミュニケーション術' },
      { value: 83,label: '仕事術' },
      { value: 84,label: '業務効率化' },
      { value: 85,label: 'リベラルアーツ' },
      { value: 86,label: 'デジタルリテラシー' },
      { value: 87,label: 'タイポグラフィ' },
      { value: 88,label: 'Figma' },
    ],
  };

export default function LearningPage() {
    const formRef = useRef();
    const router = useRouter();

    const [selectedLargeCategory_1, setSelectedLargeCategory_1] = useState('');
    const [selectedSmallCategory_1, setSelectedSmallCategory_1] = useState('');
    const [selectedLargeCategory_2, setSelectedLargeCategory_2] = useState('');
    const [selectedSmallCategory_2, setSelectedSmallCategory_2] = useState('');

    const handleLargeCategoryChange_1 = (event) => {
        const selectedLargeCategory = event.target.value;
        setSelectedLargeCategory_1(selectedLargeCategory);
        setSelectedSmallCategory_1(''); // 業種が変わったら業務詳細をリセット
    };

    const handleSmallCategoryChange_1 = (event) => {
        const selectedSmallCategory = event.target.value;
        setSelectedSmallCategory_1(selectedSmallCategory);
    };

    const handleLargeCategoryChange_2 = (event) => {
        const selectedLargeCategory = event.target.value;
        setSelectedLargeCategory_2(selectedLargeCategory);
        setSelectedSmallCategory_2(''); // 業種が変わったら業務詳細をリセット
    };

    const handleSmallCategoryChange_2 = (event) => {
        const selectedSmallCategory = event.target.value;
        setSelectedSmallCategory_2(selectedSmallCategory);
    };

    const [learningData, setLearningData] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        await CreateLearning(formData);
{/*        router.push(`./learnings/recommend`); */}
        const result = await CreateLearning(formData);
        // データをstateに保存
        setLearningData(result);
    };

    const recommendData_pre = JSON.stringify(learningData, null, 2);
    const recommendData = JSON.parse(recommendData_pre);

    return (
        <>
            <Header />
            <div className="container">
                <form ref={formRef} onSubmit={handleSubmit}>
                    <h2 className='font-bold' style={{fontSize: '20px'}}>Q. 学んでみたい分野を選択してください</h2>
                    <div className='select_box py-5'>
                        <p>大分類①：　
                            <select
                                className="select select-bordered w-full max-w-xs"
                                onChange={handleLargeCategoryChange_1}
                                value={selectedLargeCategory_1}
                                name='skill_l1'
                            >
                            <option disabled value="">未選択</option>
                            {LargeCategoryOptions.map((option) => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                            </select>
                        </p>
                    </div>
                    <div className='select_box'>
                        <p>小分類①：　
                            <select
                                className="select select-bordered w-full max-w-xs"
                                onChange={handleSmallCategoryChange_1}
                                value={selectedSmallCategory_1}
                            >
                            <option disabled value="">未選択</option>
                            {SmallCategoryOptions[selectedLargeCategory_1]?.map((option) => (
                                <option key={option.value} value={option.label}>{option.label}</option>
                            ))}
                            </select>
                        </p>
                    </div>
                    <div className='select_box py-5'>
                        <p>大分類②：　
                            <select
                                className="select select-bordered w-full max-w-xs"
                                onChange={handleLargeCategoryChange_2}
                                value={selectedLargeCategory_2}
                                name="skill_l2"
                            >
                            <option disabled value="">未選択</option>
                            {LargeCategoryOptions.map((option) => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                            </select>
                        </p>
                    </div>
                    <div className='select_box'>
                        <p>小分類②：　
                            <select
                                className="select select-bordered w-full max-w-xs"
                                onChange={handleSmallCategoryChange_2}
                                value={selectedSmallCategory_2}
                            >
                            <option disabled value="">未選択</option>
                            {SmallCategoryOptions[selectedLargeCategory_2]?.map((option) => (
                                <option key={option.value} value={option.label}>{option.label}</option>
                            ))}
                            </select>
                        </p>
                    </div>
                    
                    <SliderBar />
                    
                    <br/>
                    <br/>

                    <Rating />
    {/*                <div>
                        <h2 className='font-bold' style={{fontSize: '20px'}}>Q. 難易度を選択してください</h2>
                        <h3>※1：初級 〜 3：上級</h3>
                        <div className="rating rating-lg p-3">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div> */}

                    <div className='p-5 flex items-center justify-center'>
{/*                        <Link href="/customers/learnings/recommend" className="mt-4 pt-4" prefetch={false}> */}
                            <button type="submit" className="btn btn-primary">おすすめの教材を見る</button>
{/*                        </Link> */}
                    </div>
                </form>
            </div>
            <div className='container'>
                <h1>おすすめ教材</h1>
                {learningData && (
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