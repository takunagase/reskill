"use client"
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link'

export default function LearningPage() {
    return (
        <>
            <Header />
            
            <div className="container">
                <h1>おすすめ教材</h1>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 h-full">
                        <div className="card w-80 h-100 bg-base-100 shadow-xl h-full">
                        <figure><img className="w-full h-full object-cover"　src="//s3-ap-northeast-1.amazonaws.com/i.schoo/images/class/600x260/10837.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-center">誰もがやる気の種を持っている</h2>
                                <p>難易度： 1 </p>
                                <p>講義時間：60分</p>
                                <p>講師：藤由 達藏</p>
                                <div className="card-actions justify-end">
                                <div className="badge badge-outline">モチベーション</div> 
                                <div className="badge badge-outline">仕事術</div>
                                <div className="badge badge-outline">行動習慣</div>
                                </div>
                                <a href="https://schoo.jp/course/7921">
                                    <button className="btn btn-primary mt-3 w-full">教材へGO</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 h-full">
                        <div className="card w-80 h-100 bg-base-100 shadow-xl h-full">
                        <figure><img className="w-full h-full object-cover"　src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-center">教材名：</h2>
                                <p>難易度：</p>
                                <p>講義時間：</p>
                                <p>講師：</p>
                                <div className="card-actions justify-end">
                                <div className="badge badge-outline">related word</div> 
                                <div className="badge badge-outline">related word</div>
                                </div>
                                <a href="https://schoo.jp/class/10796">
                                    <button className="btn btn-primary mt-3 w-full">教材へGO</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 h-full">
                        <div className="card w-80 h-100 bg-base-100 shadow-xl h-full">
                        <figure><img className="w-full h-full object-cover"　src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-center">教材名：
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>難易度：</p>
                                <p>講義時間：</p>
                                <p>講師：</p>
                                <div className="card-actions justify-end">
                                <div className="badge badge-outline">related word</div> 
                                <div className="badge badge-outline">related word</div>
                                </div>
                                <a href="https://schoo.jp/class/10796">
                                    <button className="btn btn-primary mt-3 w-full">教材へGO</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 h-full">
                        <div className="card w-80 h-100 bg-base-100 shadow-xl h-full">
                        <figure><img className="w-full h-full object-cover"　src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-center">教材名：</h2>
                                <p>難易度：</p>
                                <p>講義時間：</p>
                                <p>講師：</p>
                                <div className="card-actions justify-end">
                                <div className="badge badge-outline">related word</div> 
                                <div className="badge badge-outline">related word</div>
                                </div>
                                <a href="https://schoo.jp/class/10796">
                                    <button className="btn btn-primary mt-3 w-full">教材へGO</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 h-full">
                        <div className="card w-80 h-100 bg-base-100 shadow-xl h-full">
                        <figure><img className="w-full h-full object-cover"　src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-center">教材名：</h2>
                                <p>難易度：</p>
                                <p>講義時間：</p>
                                <p>講師：</p>
                                <div className="card-actions justify-end">
                                <div className="badge badge-outline">related word</div> 
                                <div className="badge badge-outline">related word</div>
                                </div>
                                <a href="https://schoo.jp/class/10796">
                                    <button className="btn btn-primary mt-3 w-full">教材へGO</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 h-full">
                        <div className="card w-80 h-100 bg-base-100 shadow-xl h-full">
                        <figure><img className="w-full h-full object-cover"　src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-center">教材名：</h2>
                                <p>難易度：</p>
                                <p>講義時間：</p>
                                <p>講師：</p>
                                <div className="card-actions justify-end">
                                <div className="badge badge-outline">related word</div> 
                                <div className="badge badge-outline">related word</div>
                                </div>
                                <a href="https://schoo.jp/class/10796">
                                    <button className="btn btn-primary mt-3 w-full">教材へGO</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-base-200">
                <div className='row pb-20'>
                    <h1 className='text-center font-bold pt-10 pb-10' style={{fontSize: '30px'}}>よく一緒に閲覧されている教材</h1>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/3 lg:w-1/4 px-4 h-full">
                            <div className="card w-85 bg-base-100 shadow-xl image-full" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', padding: "1px" }}>
                                <figure><img src="//s3-ap-northeast-1.amazonaws.com/i.schoo/images/class/600x260/9677.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-center">全2回【実践】頼られるリーダーの自己育成法</h2>
                                    <div className="card-actions justify-end">
                                        <a href="https://schoo.jp/course/7428">
                                            <button className="btn btn-primary btn-sm">Check</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 lg:w-1/4 px-4 h-full">
                            <div className="card w-85 bg-base-100 shadow-xl image-full" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', padding: "1px" }}>
                                <figure><img src="//s3-ap-northeast-1.amazonaws.com/i.schoo/images/class/600x260/9677.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-center">全2回【実践】頼られるリーダーの自己育成法</h2>
                                    <div className="card-actions justify-end">
                                        <a href="https://schoo.jp/course/7428">
                                            <button className="btn btn-primary btn-sm">Check</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 lg:w-1/4 px-4 h-full">
                            <div className="card w-85 bg-base-100 shadow-xl image-full" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', padding: "1px" }}>
                                <figure><img src="//s3-ap-northeast-1.amazonaws.com/i.schoo/images/class/600x260/9677.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-center">全2回【実践】頼られるリーダーの自己育成法</h2>
                                    <div className="card-actions justify-end">
                                        <a href="https://schoo.jp/course/7428">
                                            <button className="btn btn-primary btn-sm">Check</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 lg:w-1/4 px-4 h-full">
                            <div className="card w-85 bg-base-100 shadow-xl image-full" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', padding: "1px" }}>
                                <figure><img src="//s3-ap-northeast-1.amazonaws.com/i.schoo/images/class/600x260/9677.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-center">全2回【実践】頼られるリーダーの自己育成法</h2>
                                    <div className="card-actions justify-end">
                                        <a href="https://schoo.jp/course/7428">
                                            <button className="btn btn-primary btn-sm">Check</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 lg:w-1/4 px-4 h-full">
                            <div className="card w-85 bg-base-100 shadow-xl image-full" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', padding: "1px" }}>
                                <figure><img src="//s3-ap-northeast-1.amazonaws.com/i.schoo/images/class/600x260/9677.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-center">全2回【実践】頼られるリーダーの自己育成法</h2>
                                    <div className="card-actions justify-end">
                                        <a href="https://schoo.jp/course/7428">
                                            <button className="btn btn-primary btn-sm">Check</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 lg:w-1/4 px-4 h-full">
                            <div className="card w-85 bg-base-100 shadow-xl image-full" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', padding: "1px" }}>
                                <figure><img src="//s3-ap-northeast-1.amazonaws.com/i.schoo/images/class/600x260/9677.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-center">全2回【実践】頼られるリーダーの自己育成法</h2>
                                    <div className="card-actions justify-end">
                                        <a href="https://schoo.jp/course/7428">
                                            <button className="btn btn-primary btn-sm">Check</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}