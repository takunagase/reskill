import { useState } from 'react';

function SliderBar() {
    const [sliderValue, setSliderValue] = useState(25);

    const handleSliderChange = (e) => {
        setSliderValue(parseInt(e.target.value, 10));
    };

    return (
        <div>
            <br/>
            <p className='py-5 font-bold' style={{fontSize: '20px'}}>受講時間</p>
            <input
                type="range"
                min={0}
                max={100}
                value={sliderValue}
                className="range"
                step={5}
                onChange={handleSliderChange}
                name='lecture_time'
            />
            <div className="w-full flex justify-between text-xs px-2">
                <span>0</span>
                <span>25</span>
                <span>50</span>
                <span>75</span>
                <span>100</span>
            </div>
            <p>最大受講時間: {sliderValue}分</p>
        </div>
    );
}

export default SliderBar;
