import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import { SEVERITY_COLOR_CODES } from 'Styles';
import {
   Root,
   MetricSection,
   MetricValuesContainer,
   Metric,
   MetricTitle,
   MetricNumber,
   LoadingText
} from './analysisSummary.styled';

const { Title, Text } = Typography;

const sections = [
   {
      metric: 'versionsBehind',
      title: 'Versions Behind',
      labels: ['analysis errors', 'up to date', 'only patches behind', 'minors behind', 'majors behind']
   },
   {
      metric: 'lastPublish',
      title: 'Last Publish',
      labels: ['analysis errors', '< 2 months ago', '> 2 months ago', '> 6 months ago', '> a year ago']
   },
   {
      metric: 'weeklyDownloads',
      title: 'Weekly Downloads',
      labels: ['analysis errors', '> 100k', 'between 10k and 100k', 'between 1k and 10k', '< 1k downloads']
   },
   {
      metric: 'stars',
      title: 'GitHub Stars',
      labels: ['had analysis errors', '> 1k', 'between 300 and 1k', 'between 50 and 300', '< 50']
   }
];

export default function AnalysisSummary({ data }) {
   if (!data) {
      return <LoadingText>The summary will appear once all dependencies have been analyzed.</LoadingText>;
   }
   return (
      <Root>
         {sections.map(section => {
            const severityLevelsForMetric = data[section.metric];
            return (
               <MetricSection key={section.metric}>
                  <MetricTitle>{section.title}</MetricTitle>
                  <MetricValuesContainer>
                     {severityLevelsForMetric.map((val, i) => {
                        if (!val) return null;
                        return (
                           <Metric key={i}>
                              <MetricNumber color={SEVERITY_COLOR_CODES[i]}>{val}</MetricNumber>
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

AnalysisSummary.propTypes = {
   /* Analysis summary data  */
   data: PropTypes.object
};
