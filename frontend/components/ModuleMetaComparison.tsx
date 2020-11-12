import { Module } from "../types";
import { useSelector } from "react-redux";

import MetaCompareRow from "./MetaCompareRow";

interface ModuleMetaComparisonProps {
  firstModule: Module;
  secondModule: Module;
}

const ModuleMetaComparison: React.FC<ModuleMetaComparisonProps> = ({
  firstModule,
  secondModule,
}) => {
  const schools = useSelector((state) => state.schools);

  const {
    workload: firstModuleHours = 10,
    rating: firstRatings,
    schoolId: firstSchoolId,
    semester: firstSemester,
    credit: firstCredit = 4,
  } = firstModule;

  const {
    workload: secondModuleHours = 10,
    rating: secondRatings,
    schoolId: secondSchoolId,
    semester: secondSemester,
    credit: secondCredit = 4,
  } = secondModule;

  const firstUniversity = schools.find(
    (school) => school._id === firstSchoolId
  )?.name;
  const firstDifficulty = firstRatings?.difficulty?.value || 0;
  const firstStar = firstRatings?.star?.value || 0;
  const secondUniversity = schools.find(
    (school) => school._id === secondSchoolId
  )?.name;
  const secondDifficulty = secondRatings?.difficulty?.value || 0;
  const secondStar = secondRatings?.star?.value || 0;

  return (
    <>
      <MetaCompareRow
        title="Expected Workload/Week"
        firstMeta={`${firstModuleHours}`}
        secondMeta={`${secondModuleHours}`}
      />
      <MetaCompareRow
        title="Difficulty"
        firstMeta={`${firstDifficulty.toFixed(1) == "0.0" ? "-" : firstDifficulty.toFixed(1)}/5`}
        secondMeta={`${secondDifficulty.toFixed(1) == "0.0" ? "-" : secondDifficulty.toFixed(1)}/5`}
      />
      <MetaCompareRow
        title="Ratings"
        firstMeta={`${firstStar.toFixed(1)}`}
        secondMeta={`${secondStar.toFixed(1)}`}
      />
      <MetaCompareRow
        title="Semester(s) offered"
        firstMeta={`${firstSemester.sort().join(", ")  || "-"}`}
        secondMeta={`${secondSemester.sort().join(", ")  || "-"}`}
      />
      <MetaCompareRow
        title="Credits"
        firstMeta={`${firstCredit}`}
        secondMeta={`${secondCredit}`}
      />
      <MetaCompareRow
        title="University"
        firstMeta={firstUniversity ?? "-"}
        secondMeta={secondUniversity ?? "-"}
      />
      <MetaCompareRow title="Reviews" firstMeta={""} secondMeta={""} />
    </>
  );
};

export default ModuleMetaComparison;
