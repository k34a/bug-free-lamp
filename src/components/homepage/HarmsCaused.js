import React from 'react';
import HarmsCausedBlob from './HarmsCausedBlob';

const HarmsCaused = () => {
    return (
        <div className="justify-center items-center">
            <HarmsCausedBlob
                className="w-full md:w-1/3 lg:my-4 md:my-0 md:mr-4"
                color="#d9f99d"
                heading="Environmental Destruction: A High Cost To Pay"
                description="Fast fashion ravages the planet, leaving Polluted Water Bodies, accelerating Global Warming, Deforesting Lands, and towering Landfills in its wake."
                bg='bg-gradient-to-r from-lime-300 to-lime-600'
                text="text-lime-800"
                fillstart='#7dd3fc'
                fillend='#0284c7'
                gradId='grad1'
                />
            <HarmsCausedBlob 
                className="w-full md:w-1/3 lg:my-4 md:my-0 md:mr-4" 
                color="#bae6fd"
                heading="Exploitation and Injustice: The Dark Side"
                description="Workers in the fast-fashion industry are exploited with extremely Low Wages, dangerous Working Conditions and denied Human Rights."
                bg='bg-gradient-to-r from-sky-300 to-sky-600'
                text='text-sky-800'
                fillstart='#c4b5fd'
                fillend='#7c3aed'
                gradId='grad2'
                />
            <HarmsCausedBlob 
                className="w-full md:w-1/3 lg:my-4 md:my-0" 
                color="#ddd6fe"
                heading="From Toxins to Injuries: The Hidden Dangers"
                description="Cheap and toxic dyes in fast-fashion are Carcinogenic and can cause Developmental Problems."
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