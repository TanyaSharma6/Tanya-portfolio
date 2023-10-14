import React from 'react';
import { Steps } from 'antd';
import ResponsiveAppBar from './ResponsiveAppBar';


const Education = () => (
    <>
    <ResponsiveAppBar/>
    <div className='container mt-5 div2'>
            <h2>EDUCATION</h2>
           <div className='text-center mt-5'>
                <Steps
                        direction="vertical"
                        current={3}
                        items={[
                        {
                            title: 'Jharkhand University of Technology',
                            description:'Bachelor of Technology in Electronics & Communication Engineering',
                            subTitle:'(Aug 2019 - July 2022)'
                        },
                        {
                            title: `Government Women's Polytechnic`,
                            description:'Diploma in Electronics and Communication Engineering ',
                            subTitle:'(Aug 2015 - July 2018)'
                            
                        },
                        {
                            title: 'Srikrishna Public School',
                            description: 'Matriculation',
                            subTitle:'(Aug 2014 - July 2015)'
                        },
                        ]}
                    />
           </div>

          
    </div>
    </>
);
export default Education;
