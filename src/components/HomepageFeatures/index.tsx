import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '安全可靠',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        国家公安部信息安全等级保护三级认证
双云(阿里云、华为云)实时异地备份容灾机制
通过ISO27001信息安全管理体系认证
银行级别安保标准，支持私有化部署
      </>
    ),
  },
  {
    title: '专业服务',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
规范工作流程，打通经营数据壁垒
开放API接口，可集成第三方系统
支持部分定制，提炼共性兼顾个性
      </>
    ),
  },
  {
    title: '品牌保障',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
专属客户成功经理，保障系统实施落地
首创“管家5率”，评估系统使用效果
7*24小时在线客服，实时答疑解惑
官方承诺：3个月无理由退费
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
