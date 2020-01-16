import React from 'react';
import styled from '@emotion/styled';
import { Typography } from 'antd';
import { SEVERITY_COLOR_CODES } from 'Styles';
const { Title, Text } = Typography;

const Root = styled.div`
   margin-bottom: 1rem;
`;

const MetricSection = styled.div`
   margin: 0px 0px 2px 0px;
   display: flex;
   align-items: center;
   flex-wrap: wrap;

   h4 {
      font-weight: 400;
      opacity: 0.8;
   }
`;

const MetricValuesContainer = styled.div`
   display: flex;
   flex-direction: row-reverse;
   justify-content: flex-end;
   flex-wrap: wrap;
`;

const Metric = styled.div`
   margin: 10px;
   display: flex;
   align-items: center;
   h1 {
      margin: 0px;
      margin-right: 5px;
      color: ${props => props.color};
      font-weight: 500;
   }
   ,
   span {
      color: rgba(0, 0, 0, 0.5);
      font-size: 12px;
      max-width: 200px;
      line-height: 1.2;
   }
`;

const sections = [
   {
      metric: 'versionsBehind',
      title: 'Versions Behind',
      labels: [
         'had analysis errors',
         'are up to date',
         'are only patches behind',
         'are minor versions behind',
         'are major versions behind'
      ]
   },
   {
      metric: 'lastPublish',
      title: 'Last Publish',
      labels: [
         'had analysis errors',
         'fewer than 2 months ago',
         'more than 2 months ago',
         'more than 6 months ago',
         'more than a year ago'
      ]
   },
   {
      metric: 'weeklyDownloads',
      title: 'Weekly Downloads',
      labels: [
         'had analysis errors',
         'have more than 100,000 downloads',
         'have between 10,000 and 100,000 downloads',
         'have between 1,000 and 10,000 downloads',
         'have fewer than 1,000 downloads'
      ]
   },
   {
      metric: 'stars',
      title: 'GitHub Stars',
      labels: [
         'had analysis errors',
         'have more than 1,000 stars',
         'have between 300 and 1,000 stars',
         'have between 50 and 300 stars',
         'have fewer than 50 stars'
      ]
   }
];

export default function AnalysisSummary({ data }) {
   if (!data) {
      return <Text>The summary will appear once all dependencies have been analyzed.</Text>;
   }
   return (
      <Root>
         {sections.map(section => {
            const severityLevelsForMetric = data[section.metric];
            return (
               <MetricSection key={section.metric}>
                  <Title level={4} style={{ margin: "0px 10px 0px 0px" }}>
                     {section.title}
                  </Title>
                  <MetricValuesContainer>
                     {severityLevelsForMetric.map((val, i) => {
                        if (!val) return null;
                        return (
                           <Metric key={i} color={SEVERITY_COLOR_CODES[i]}>
                              <Title>{val}</Title>
                              <Text>{section.labels[i]}</Text>
                           </Metric>
                        );
                     })}
                  </MetricValuesContainer>
               </MetricSection>
            );
         })}
      </Root>
   );
}

AnalysisSummary.defaultProps = {};

AnalysisSummary.propTypes = {
   /** Comment prop  */
};
