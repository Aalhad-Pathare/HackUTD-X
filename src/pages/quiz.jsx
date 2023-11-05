// import React from 'react';
import dynamic from 'next/dynamic';

const SurveyComponent = dynamic(() => import('../components/SurveyComp.tsx'), {
  ssr: false,
});
const Survey = () => {
  return (<SurveyComponent />);
};
export default Survey;
