import { Module } from "../types";

import MetaCompareRow from "./MetaCompareRow";

interface ModuleMetaComparisonProps {
  firstModule: Module,
  secondModule: Module
}

const ModuleMetaComparison: React.FC<ModuleMetaComparisonProps> = ({ firstModule, secondModule }) => {
  const { workload: firstModuleHours, rating: firstRatings, university: firstUniversity } = firstModule;
  const { workload: secondModuleHours, rating: secondRatings, university: secondUniversity } = secondModule;
  const firstDifficulty = firstRatings?.difficulty?.value || 3;
  const firstStar = firstRatings?.star?.value || 3;
  const secondDifficulty = secondRatings?.difficulty?.value || 3;
  const secondStar = secondRatings?.star?.value || 3;

  return (
    <>
      <MetaCompareRow title="Expected Workload/Week" firstMeta={`${firstModuleHours}`} secondMeta={`${secondModuleHours}`} />
      <MetaCompareRow title="Difficulty" firstMeta={`${firstDifficulty}/5`} secondMeta={`${secondDifficulty}/5`} />
      <MetaCompareRow title="Ratings" firstMeta={`${firstStar}`} secondMeta={`${secondStar}`} />
      <MetaCompareRow title="University" firstMeta={firstUniversity} secondMeta={secondUniversity} />
      <MetaCompareRow title="Reviews" firstMeta={""} secondMeta={""} />
    </>
  )
}

export default ModuleMetaComparison;