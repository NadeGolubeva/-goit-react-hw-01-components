import PropTypes from 'prop-types';
import {
  SectionStat,
  TitleStat, StatList, ItemStat, LabelStat, NumberStat
} from './statistics.styled'
export const Statistics = ({ title, stats }) => {
  return (
    <SectionStat class="statistics" key={stats.id}>
      <TitleStat class="title">{title}</TitleStat>

      <StatList class="stat-list">
        <ItemStat class="item">
          <LabelStat class="label">.docx</LabelStat>
          <NumberStat class="percentage">4%</NumberStat>
        </ItemStat>
        <ItemStat class="item">
          <LabelStat class="label">.mp3</LabelStat>
          <NumberStat class="percentage">14%</NumberStat>
        </ItemStat>
        <ItemStat class="item">
          <LabelStat class="label">.pdf</LabelStat>
          <NumberStat class="percentage">41%</NumberStat>
        </ItemStat>
        <ItemStat class="item">
          <LabelStat class="label">.mp4</LabelStat>
          <NumberStat class="percentage">12%</NumberStat>
        </ItemStat>
      </StatList>
    </SectionStat>
  );
};

Statistics.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}