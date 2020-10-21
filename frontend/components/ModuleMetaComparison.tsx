import { Module } from "../types";

import MetaCompareRow from "./MetaCompareRow";

interface ModuleMetaComparisonProps {
  firstModule: Module,
  secondModule: Module
}

const ModuleMetaComparison: React.FC<ModuleMetaComparisonProps> = ({ firstModule, secondModule }) => {
  const { expectedHours: firstModuleHours, difficulty: firstDifficulty, ratings: firstRatings, university: firstUniversity } = firstModule;
  const { expectedHours: secondModuleHours, difficulty: secondDifficulty, ratings: secondRatings, university: secondUniversity } = secondModule;

  return (
    <>
      <MetaCompareRow title="Expected Workload/Week" firstMeta={`${firstModuleHours}`} secondMeta={`${secondModuleHours}`} />
      <MetaCompareRow title="Difficulty" firstMeta={`${firstDifficulty}/5`} secondMeta={`${secondDifficulty}/5`} />
      <MetaCompareRow title="Ratings" firstMeta={`${firstRatings}`} secondMeta={`${secondRatings}`} />
      <MetaCompareRow title="University" firstMeta={firstUniversity} secondMeta={secondUniversity} />
      <MetaCompareRow title="Reviews" firstMeta={""} secondMeta={""} />
    </>
  )
}

export default ModuleMetaComparison;