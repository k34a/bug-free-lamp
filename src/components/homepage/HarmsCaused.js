import React from 'react';
import HarmsCausedBlob from './HarmsCausedBlob';

const HarmsCaused = () => {
    return (
        <div className="justify-center items-center">
            <HarmsCausedBlob
                className="w-full md:w-1/3 lg:my-4 md:my-0 md:mr-4"
                color="#4fff64"
                heading="Environmental Effects"
                description="Fast fashion, with its endless cycle of production and consumption, leaves a damaging trail on the environment- from water contamination, accelerating global warming, deforestation, to the piles of waste in landfills."
                bg='bg-green-200'
                fill='fill-red-200'
            />
            <HarmsCausedBlob 
                className="w-full md:w-1/3 lg:my-4 md:my-0 md:mr-4" 
                color="#F87171"
                heading="Social Harms"
                description="Workers in the fast-fashion industry are exploited with extremely low wages, dangerous working conditions and denied human rights."
                bg='bg-red-200'
                fill='fill-blue-200'
            />
            <HarmsCausedBlob 
                className="w-full md:w-1/3 lg:my-4 md:my-0" 
                color="#4f81ff"
                heading="Health Issues"
                description="The cheap and toxic chemical used to dye the clothes are carcinogenic in nature, and potentially cause developmental issues."
                bg='bg-blue-200'
                fill='fill-[#FEF8EE]'
            />
        </div>
    );
};

export default HarmsCaused;