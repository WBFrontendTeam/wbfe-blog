import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '에러 해결 방법',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: <>에러를 해결한 방법을 기록합니다.</>
  },
  {
    title: '구글링을 통해 얻은 정보',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: <>라이브러리의 공식 문서, 스택오버플로우, 기술 블로그 등을 통해 얻은 정보를 기록합니다.</>
  },
  {
    title: '개인적으로 공부한 내용',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: <>업무 시간 외적으로 각자 공부한 내용을 기록합니다.</>
  }
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
