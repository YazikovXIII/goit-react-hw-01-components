import React from 'react';
import { WrapperCard, StatsInnerItem } from 'components/profile/Profile.styled';
import { Title, StatList, StatListItem } from './Statistics.styled';

import { getRandomColor } from 'components/helpers/colorRandomizer';

export const Statistics = ({ title, stats }) => {
  return (
    <WrapperCard>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatListItem
              key={id}
              style={{ backgroundColor: getRandomColor() }}
            >
              <StatsInnerItem>{label}</StatsInnerItem>
              <StatsInnerItem>{percentage}%</StatsInnerItem>
            </StatListItem>
          );
        })}
      </StatList>
    </WrapperCard>
  );
};
