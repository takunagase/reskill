"use client"
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import SliderBar from '../../components/SliderBar';
import Link from 'next/link'

const LargeCategoryOptions = [
    { value: '1', label: 'ビジネススキル' },
    { value: '2', label: '思考術・自己啓発' },
    { value: '3', label: 'マネジメント' },
    { value: '4', label: 'マーケティング' },
    { value: '5', label: 'UI・UXデザイン' },
    { value: '6', label: 'デザイン' },
    { value: '7', label: '情報通信業' },
  ];

const SmallCategoryOptions = {
    1: [
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
    2: [
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
    3: [
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
    4: [
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
    5: [
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
    6: [
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

    return (
        <>
            <Header />
            <div className="container">
                <h2 className='font-bold' style={{fontSize: '20px'}}>Q. 学んでみたい分野を選択してください</h2>
                <div className='select_box py-5'>
                    <p>大分類①：　
                        <select
                            className="select select-bordered w-full max-w-xs"
                            onChange={handleLargeCategoryChange_1}
                            value={selectedLargeCategory_1}
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
                            <option key={option.value} value={option.value}>{option.label}</option>
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
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                        </select>
                    </p>
                </div>
                
                <SliderBar />
                
                <br/>
                <br/>

                <div>
                    <h2 className='font-bold' style={{fontSize: '20px'}}>Q. 難易度を選択してください</h2>
                    <h3>※1：初級 〜 3：上級</h3>
                    <div className="rating rating-lg p-3">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
{/*                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" /> */}
                    </div>
                </div>

                <div className='p-5 flex items-center justify-center'>
                    <Link href="/customers/learnings/recommend" className="mt-4 pt-4" prefetch={false}>
                        <button type="submit" className="btn btn-primary">おすすめの教材を見る</button>
                    </Link>
                </div>
            </div>
        </>
    )
}