"use client"
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Link from 'next/link';

import createCustomer from './createCustomer';

const industriesOptions = [
    { value: '1', label: '農業，林業' },
    { value: '2', label: '漁業' },
    { value: '3', label: '鉱業，採石業，砂利採取業' },
    { value: '4', label: '建設業' },
    { value: '5', label: '製造業' },
    { value: '6', label: '電気・ガス・熱供給・水道業' },
    { value: '7', label: '情報通信業' },
    { value: '8', label: '運輸業，郵便業' },
    { value: '9', label: '卸売業，小売業' },
    { value: '10', label: '金融業，保険業' },
    { value: '11', label: '不動産業，物品賃貸業' },
    { value: '12', label: '学術研究，専門・技術サービス業' },
    { value: '13', label: '宿泊業，飲食サービス業' },
    { value: '14', label: '生活関連サービス業，娯楽業' },
    { value: '15', label: '教育，学習支援業' },
    { value: '16', label: '医療，福祉' },
    { value: '17', label: '複合サービス事業' },
    { value: '18', label: 'サービス業（他に分類されないもの）' },
    { value: '19', label: '公務（他に分類されるものを除く）' },
    { value: '20', label: '分類不能の産業' },
  ];

const detailsOptions = {
    1: [
      { value: 1, label: '農業' },
      { value: 2, label: '林業' },
    ],
    2: [
      { value: 3, label: '漁業（水産養殖業を除く）' },
      { value: 4, label: '水産養殖業' },
    ],
    3: [
      { value: 5, label: '鉱業，採石業，砂利採取業' },
    ],
    4: [
      { value: 6, label: '総合工事業' },
      { value: 7, label: '職別工事業(設備工事業を除く)' },
      { value: 8, label: '設備工事業' },
    ],
    5: [
      { value: 9, label: '食料品製造業' },
      { value: 10,label: '飲料・たばこ・飼料製造業' },
      { value: 11,label: '繊維工業' },
      { value: 12,label: '木材・木製品製造業（家具を除く）' },
      { value: 13,label: '家具・装備品製造業' },
      { value: 14,label: 'パルプ・紙・紙加工品製造業' },
      { value: 15,label: '印刷・同関連業' },
      { value: 16,label: '化学工業' },
      { value: 17,label: '石油製品・石炭製品製造業' },
      { value: 18,label: 'プラスチック製品製造業（別掲を除く）' },
      { value: 19,label: 'ゴム製品製造業' },
      { value: 20,label: 'なめし革・同製品・毛皮製造業' },
      { value: 21,label: '窯業・土石製品製造業' },
      { value: 22,label: '鉄鋼業' },
      { value: 23,label: '非鉄金属製造業' },
      { value: 24,label: '金属製品製造業' },
      { value: 25,label: 'はん用機械器具製造業' },
      { value: 26,label: '生産用機械器具製造業' },
      { value: 27,label: '業務用機械器具製造業' },
      { value: 28,label: '電子部品・デバイス・電子回路製造業' },
      { value: 29,label: '電気機械器具製造業' },
      { value: 30,label: '情報通信機械器具製造業' },
      { value: 31,label: '輸送用機械器具製造業' },
      { value: 32,label: 'その他の製造業' },
    ],
    6: [
      { value: 33,label: '電気業' },
      { value: 34,label: 'ガス業' },
      { value: 35,label: '熱供給業' },
      { value: 36,label: '水道業' },
    ],
    7: [
      { value: 37,label: '通信業' },
      { value: 38,label: '放送業' },
      { value: 39,label: '情報サービス業' },
      { value: 40,label: 'インターネット附随サービス業' },
      { value: 41,label: '映像・音声・文字情報制作業' },
    ],
    8: [
      { value: 42,label: '鉄道業' },
      { value: 43,label: '道路旅客運送業' },
      { value: 44,label: '道路貨物運送業' },
      { value: 45,label: '水運業' },
      { value: 46,label: '航空運輸業' },
      { value: 47,label: '倉庫業' },
      { value: 48,label: '運輸に附帯するサービス業' },
      { value: 49,label: '郵便業（信書便事業を含む）' },
    ],
    9: [
      { value: 50,label: '各種商品卸売業' },
      { value: 51,label: '繊維・衣服等卸売業' },
      { value: 52,label: '飲食料品卸売業' },
      { value: 53,label: '建築材料，鉱物・金属材料等卸売業' },
      { value: 54,label: '機械器具卸売業' },
      { value: 55,label: 'その他の卸売業' },
      { value: 56,label: '各種商品小売業' },
      { value: 57,label: '織物・衣服・身の回り品小売業' },
      { value: 58,label: '飲食料品小売業' },
      { value: 59,label: '機械器具小売業' },
      { value: 60,label: 'その他の小売業' },
      { value: 61,label: '無店舗小売業' },
    ],
    10: [
      { value: 62,label: '銀行業' },
      { value: 63,label: '協同組織金融業' },
      { value: 64,label: '貸金業，クレジットカード業等非預金信用機関' },
      { value: 65,label: '金融商品取引業，商品先物取引業' },
      { value: 66,label: '補助的金融業等' },
      { value: 67,label: '保険業（保険媒介代理業，保険サービス業を含む）' },
    ],
    11: [
      { value: 68,label: '不動産取引業' },
      { value: 69,label: '不動産賃貸業・管理業' },
      { value: 70,label: '物品賃貸業' },
    ],
    12: [
      { value: 71,label: '学術・開発研究機関' },
      { value: 72,label: '専門サービス業（他に分類されないもの）' },
      { value: 73,label: '広告業' },
      { value: 74,label: '技術サービス業（他に分類されないもの）' },
    ],
    13: [
      { value: 75,label: '宿泊業' },
      { value: 76,label: '飲食店' },
      { value: 77,label: '持ち帰り・配達飲食サービス業' },
    ],
    14: [
      { value: 78,label: '洗濯・理容・美容・浴場業' },
      { value: 79,label: 'その他の生活関連サービス業' },
      { value: 80,label: '娯楽業' },
    ],
    15: [
      { value: 81,label: '学校教育' },
      { value: 82,label: 'その他の教育，学習支援業' },
    ],
    16: [
      { value: 83,label: '医療業' },
      { value: 84,label: '保健衛生' },
      { value: 85,label: '社会保険・社会福祉・介護事業' },
    ],
    17: [
      { value: 86,label: '郵便局' },
      { value: 87,label: '協同組合（他に分類されないもの）' },
    ],
    18: [
      { value: 88,label: '廃棄物処理業' },
      { value: 89,label: '自動車整備業' },
      { value: 90,label: '機械等修理業（別掲を除く）' },
      { value: 91,label: '職業紹介・労働者派遣業' },
      { value: 92,label: 'その他の事業サービス業' },
      { value: 93,label: '政治・経済・文化団体' },
      { value: 94,label: '宗教' },
      { value: 95,label: 'その他のサービス業' },
      { value: 96,label: '外国公務' },
    ],
    19: [
      { value: 97,label: '国家公務' },
      { value: 98,label: '地方公務' },
    ],
    20: [
      { value: 99,label: '分類不能の産業' },
    ],
  };

  const careersOptions = [
    { value: '1', label: '経営戦略' },
    { value: '2', label: '人事・人材開発' },
    { value: '3', label: '労務管理' },
    { value: '4', label: '企業法務' },
    { value: '5', label: '総務' },
    { value: '6', label: '広報' },
    { value: '7', label: '経理' },
    { value: '8', label: '資金財務（トレジャリー）' },
    { value: '9', label: '経営管理分析（FP&A）' },
    { value: '10', label: '情報システム' },
    { value: '11', label: '営業' },
    { value: '12', label: 'マーケティング' },
    { value: '13', label: '広告' },
    { value: '14', label: '生産管理プランニング' },
    { value: '15', label: '生産管理オペレーション' },
    { value: '16', label: 'ロジスティクス管理' },
    { value: '17', label: 'ロジスティクス・オペレーション' },
    { value: '18', label: '国際経営管理' },
    { value: '19', label: '貿易' },
    { value: '20', label: 'プロジェクト管理' },
    { value: '21', label: '調査・企画管理' },
    { value: '22', label: '意匠・設計管理' },
    { value: '23', label: '製作・施工管理' },
    { value: '24', label: '運営管理' },
    { value: '25', label: '基礎研究' },
    { value: '26', label: '製品開発' },
    { value: '27', label: '店舗従業員教育' },
    { value: '28', label: 'オペレーション管理' },
    { value: '29', label: 'キッチン' },
    { value: '30', label: 'フロアサービス' },
    { value: '31', label: '店舗管理' },
    { value: '32', label: '運営事務' },
    { value: '33', label: 'フロント' },
    { value: '34', label: 'トレーニングジム' },
    { value: '35', label: 'スタジオ' },
    { value: '36', label: 'プール' },
    { value: '37', label: 'メーカー・サービス' },
    { value: '38', label: 'リテール・サービス' },
    { value: '39', label: 'ロジスティクス' },
    { value: '40', label: '販売' },
    { value: '41', label: '販売・加工' },
    { value: '42', label: 'チェッカー' },
    { value: '43', label: 'ストアマネジメント' },
    { value: '44', label: '販売指導' },
    { value: '45', label: 'トレーナー' },
    { value: '46', label: '店舗運営' },
    { value: '47', label: 'スーパーバイザー' },
    { value: '48', label: '仕入れ' },
    { value: '49', label: '営業企画' },
    { value: '50', label: '施工管理' },
    { value: '51', label: '現場管理' },
    { value: '52', label: '施工技能' },
    { value: '53', label: 'ロピーサービス' },
    { value: '54', label: 'コンシェルジュ' },
    { value: '55', label: 'フロントオフィス' },
    { value: '56', label: '客室予約' },
    { value: '57', label: 'ハウスキーピング' },
    { value: '58', label: 'レストランサービス' },
    { value: '59', label: 'ルームサービス' },
    { value: '60', label: 'ソムリエ' },
    { value: '61', label: '仕入管理' },
    { value: '62', label: '宴会サービス' },
    { value: '63', label: '宴会予約・販売管理' },
    { value: '64', label: 'マーチャンダイジング' },
    { value: '65', label: '検反・裁断' },
    { value: '66', label: '縫製' },
    { value: '67', label: '製造管理' },
    { value: '68', label: '店舗運営' },
    { value: '69', label: '店舗管理' },
    { value: '70', label: '受注営業' },
    { value: '71', label: 'コーディネーション' },
    { value: '72', label: '（交渉・調整）' },
    { value: '73', label: 'クライアント管理' },
    { value: '74', label: 'コンテンツ企画立案' },
    { value: '75', label: '設計・制作ディレクション' },
    { value: '76', label: 'サイト分析' },
    { value: '77', label: 'サイト運営' },
    { value: '78', label: 'ウェブデザイン・コンテンツ制作' },
  ];
  const qualificationsOptions = [
    { value: '1', label: '経営戦略' },
    { value: '2', label: '人事・人材開発' },
  ];

export default function CreatePage() {
    const formRef = useRef();
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        await createCustomer(formData);
        router.push(`./create/confirm?customer_id=${formData.get("customer_id")}`);
    };

    const [selectedIndustry_1, setSelectedIndustry_1] = useState('');
    const [selectedDetail_1, setSelectedDetail_1] = useState('');
    const [selectedIndustry_2, setSelectedIndustry_2] = useState('');
    const [selectedDetail_2, setSelectedDetail_2] = useState('');
    const [selectedCareer_1, setSelectedCareer_1] = useState('');
    const [selectedCareer_2, setSelectedCareer_2] = useState('');
    const [selectedQualification_1, setSelectedQualification_1] = useState('');
    const [selectedQualification_2, setSelectedQualification_2] = useState('');
      
    const handleIndustryChange_1 = (event) => {
        const selectedIndustry = event.target.value;
        setSelectedIndustry_1(selectedIndustry);
        setSelectedDetail_1(''); // 業種が変わったら業務詳細をリセット
    };
      
    const handleDetailChange_1 = (event) => {
        const selectedDetail = event.target.value;
        setSelectedDetail_1(selectedDetail);
    };
    
    const handleIndustryChange_2 = (event) => {
        const selectedIndustry = event.target.value;
        setSelectedIndustry_2(selectedIndustry);
        setSelectedDetail_2(''); // 業種が変わったら業務詳細をリセット
    };
      
    const handleDetailChange_2 = (event) => {
        const selectedDetail = event.target.value;
        setSelectedDetail_2(selectedDetail);
    };
    
   const handleCareerChange_1 = (event) => {
        const selectedCareer = event.target.value;
        setSelectedCareer_1(selectedCareer);
    };
    
    const handleCareerChange_2 = (event) => {
        const selectedCareer = event.target.value;
        setSelectedCareer_2(selectedCareer);
    };

   const handleQualificationChange_1 = (event) => {
        const selectedQualification = event.target.value;
        setSelectedQualification_1(selectedQualification);
    };
    
    const handleQualificationChange_2 = (event) => {
        const selectedQualification = event.target.value;
        setSelectedQualification_2(selectedQualification);
    };

    return (
        <>
            <Header />
            <div className='container'>
              <h2 className='flex font-bold' style={{fontSize:"20px"}}>ユーザー情報登録</h2>
              <div className="card bordered bg-white border-blue-200 border-2 max-w-md m-4">
                  <div className="m-4 card bordered bg-blue-200 duration-200 hover:border-r-red">
                      <form ref={formRef} onSubmit={handleSubmit}>
                          <div className="card-body">
                              <h2 className="card-title">
                                  <p><input type="text" name="customer_name" placeholder="桃太郎" className="input input-bordered" /></p>
                              </h2>
                              <p>Customer ID:<input type="text" name="customer_id" placeholder="C030" className="input input-bordered" /></p>
                              <p>Age:<input type="number" name="age" placeholder="30" className="input input-bordered" /></p>
                              <p>Gender:<input type="text" name="gender" placeholder="女" className="input input-bordered" /></p>
                              <p>Industry_1:
                                  <select
                                      className="select select-bordered w-full max-w-xs"
                                      onChange={handleIndustryChange_1}
                                      value={selectedIndustry_1}
                                  >
                                  <option disabled value="">産業を選択してください</option>
                                  {industriesOptions.map((option) => (
                                      <option key={option.value} value={option.value}>{option.label}</option>
                                  ))}
                                  </select>
                              </p>
                              <p>detail_1:
                                  <select
                                      className="select select-bordered w-full max-w-xs"
                                      onChange={handleDetailChange_1}
                                      value={selectedDetail_1}
                                  >
                                  <option disabled value="">業務詳細を選択してください</option>
                                  {detailsOptions[selectedIndustry_1]?.map((option) => (
                                      <option key={option.value} value={option.value}>{option.label}</option>
                                  ))}
                                  </select>
                              </p>
                              <p>career_1:
                                  <select
                                      className="select select-bordered w-full max-w-xs"
                                      onChange={handleCareerChange_1}
                                      value={selectedCareer_1}
                                  >
                                  <option disabled value="">職務を選択してください</option>
                                  {careersOptions.map((option) => (
                                      <option key={option.value} value={option.value}>{option.label}</option>
                                  ))}
                                  </select>
                              </p>
                              <p>在籍年数:<input type="number" name="age" placeholder="1" className="input input-bordered" /></p>

                              <p>Industry_2:
                                  <select
                                      className="select select-bordered w-full max-w-xs"
                                      onChange={handleIndustryChange_2}
                                      value={selectedIndustry_2}
                                  >
                                  <option disabled value="">産業を選択してください</option>
                                  {industriesOptions.map((option) => (
                                      <option key={option.value} value={option.value}>{option.label}</option>
                                  ))}
                                  </select>
                              </p>
                              <p>detail_2:
                                  <select
                                      className="select select-bordered w-full max-w-xs"
                                      onChange={handleDetailChange_2}
                                      value={selectedDetail_2}
                                  >
                                  <option disabled value="">業務詳細を選択してください</option>
                                  {detailsOptions[selectedIndustry_2]?.map((option) => (
                                      <option key={option.value} value={option.value}>{option.label}</option>
                                  ))}
                                  </select>
                              </p>
                              <p>career_2:
                                  <select
                                      className="select select-bordered w-full max-w-xs"
                                      onChange={handleCareerChange_2}
                                      value={selectedCareer_2}
                                  >
                                  <option disabled value="">職務を選択してください</option>
                                  {careersOptions.map((option) => (
                                      <option key={option.value} value={option.value}>{option.label}</option>
                                  ))}
                                  </select>
                              </p>
                              <p>在籍年数:<input type="number" name="age" placeholder="1" className="input input-bordered" /></p>
                              <p>Qualification_1:
                                  <select
                                      className="select select-bordered w-full max-w-xs"
                                      onChange={handleQualificationChange_1}
                                      value={selectedQualification_1}
                                  >
                                  <option disabled value="">資格を選択してください</option>
                                  {qualificationsOptions.map((option) => (
                                      <option key={option.value} value={option.value}>{option.label}</option>
                                  ))}
                                  </select>
                              </p>
                              <p>Qualification_2:
                                  <select
                                      className="select select-bordered w-full max-w-xs"
                                      onChange={handleQualificationChange_2}
                                      value={selectedQualification_2}
                                  >
                                  <option disabled value="">資格を選択してください</option>
                                  {qualificationsOptions.map((option) => (
                                      <option key={option.value} value={option.value}>{option.label}</option>
                                  ))}
                                  </select>
                              </p>
                          </div>
                          <div className="p-5 flex items-center justify-center">
                              <button type="submit" className="btn btn-primary">
                                  選択結果確定
                              </button>
                          </div>
                          <div　className='p-5 flex items-center justify-center'>
                              <Link href="/customers/skills" className="mt-4 pt-4" prefetch={false}>
                                  <button type="submit" className="btn btn-primary">スキル診断をする</button>
                              </Link>
                          </div>
                      </form>
                  </div>
              </div>
            </div>
        </>
    )
}



