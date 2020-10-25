import { NextPage } from "next";
import { Module, Review } from "../types";
import moduleApi from "../api/module";
import reviewApi from "../api/review";

import ModuleInfoComparison from "../components/ModuleInfoComparison";
import ModuleMetaComparison from "../components/ModuleMetaComparison";
import ModuleReviewsComparison from "../components/ModuleReviewsComparison";

interface ModuleComparisonProps {
  firstModule: Module,
  secondModule: Module,
  firstModuleReviews: Review[],
  secondModuleReviews: Review[]
}

const ModuleComparison: NextPage<ModuleComparisonProps> = ({
  firstModule,
  secondModule,
  firstModuleReviews,
  secondModuleReviews
}) => {

  return (
    <>
      <ModuleInfoComparison firstModule={firstModule} secondModule={secondModule} />
      <ModuleMetaComparison firstModule={firstModule} secondModule={secondModule} />
      <ModuleReviewsComparison firstModuleReviews={firstModuleReviews} secondModuleReviews={secondModuleReviews} />
    </>
  );
}

ModuleComparison.getInitialProps = async ({ query }) => {
  const firstModule = await moduleApi.getModule(query.firstModuleId);
  const secondModule = await moduleApi.getModule(query.secondModuleId);
  firstModule.description = "Hello world!";
  firstModule.university = "NUS";
  secondModule.description = "Hello world!";
  secondModule.university = "NUS";

  const firstModuleReviews = await reviewApi.getReviewsOfModule(firstModule._id);
  const secondModuleReviews = await reviewApi.getReviewsOfModule(secondModule._id);

  return { firstModule, secondModule, firstModuleReviews, secondModuleReviews };
}

export default ModuleComparison;