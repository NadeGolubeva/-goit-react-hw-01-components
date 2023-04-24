import PropTypes from 'prop-types';
import {
  SectionStat,
  TitleStat, StatList, ItemStat, LabelStat, NumberStat
} from './statistics.styled'
export const Statistics = ({ title, stats }) => {
  return (
    <SectionStat class="statistics" key={stats.id}>
      {{ title } && (<TitleStat class="title">{title}</TitleStat>)}
      <StatList class="stat-list" >
      {stats.map(({ id, label, percentage }) => {
return (
          
          
         <ItemStat class="item" key = {id}>
          <LabelStat class="label">{label}</LabelStat>
          <NumberStat class="percentage">{percentage}</NumberStat>
        </ItemStat>
        )
       })}
        
   
      </StatList>
    </SectionStat>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired
}