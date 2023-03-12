import React from 'react';
import HarmsCausedBlob from './HarmsCausedBlob';

const HarmsCaused = () => {
    return (
        <div className="justify-center items-center">
            <HarmsCausedBlob
                className="w-full md:w-1/3 lg:my-4 md:my-0 md:mr-4"
                color="#d9f99d"
                heading="Causing Serious Environmental Effects"
                description="Fast fashion, with its endless cycle of production and consumption, leaves a damaging trail on the environment- from water contamination, accelerating global warming, deforestation, to the piles of waste in landfills."
                bg='bg-gradient-to-r from-lime-300 to-lime-600'
                text="text-lime-800"
                fillstart='#7dd3fc'
                fillend='#0284c7'
                gradId='grad1'
                />
            <HarmsCausedBlob 
                className="w-full md:w-1/3 lg:my-4 md:my-0 md:mr-4" 
                color="#bae6fd"
                heading="And Social Harms"
                description="Workers in the fast-fashion industry are exploited with extremely low wages, dangerous working conditions and denied human rights."
                bg='bg-gradient-to-r from-sky-300 to-sky-600'
                text='text-sky-800'
                fillstart='#c4b5fd'
                fillend='#7c3aed'
                gradId='grad2'
                />
            <HarmsCausedBlob 
                className="w-full md:w-1/3 lg:my-4 md:my-0" 
                color="#ddd6fe"
                heading="Did we forget to mention Health Issues?"
                description="The cheap and toxic chemical used to dye the clothes are carcinogenic in nature, and potentially cause developmental issues."
                bg='bg-gradient-to-r from-violet-300 to-violet-600'
                text='text-violet-800'
                fillstart='#FEF8EE'
                fillend='#FEF8EE'
                gradId='grad3'
            />
        </div>
    );
};

export default HarmsCaused;