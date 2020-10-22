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
  // const firstModule = await moduleApi.getModule(query.firstModuleId);
  // const secondModule = await moduleApi.getModule(query.secondModuleId);
  const firstModule = await moduleApi.getModule("5f90feff1821cd1952590276");
  const secondModule = await moduleApi.getModule("5f90feff1821cd1952590276");
  firstModule.description = "Hello world!";
  firstModule.university = "NUS";
  secondModule.description = "Hello world!";
  secondModule.university = "NUS";

  // // TODO: query for reviews here
  const dummyReviews: Review[] = [
    {
      userName: "Thomas Tan",
      likes: 79,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget bibendum purus, sed ultricies nunc. Proin et purus odio. Etiam ex elit, consectetur placerat feugiat non, luctus eu justo. Vestibulum quis accumsan orci. Morbi ante massa, semper in mi eleifend, tempor posuere quam. In odio nulla, tristique et lorem vitae, mollis dictum ipsum. Sed sollicitudin augue quis turpis hendrerit laoreet. Nam facilisis turpis leo, in lobortis lorem lobortis vel. Maecenas scelerisque ante vel elit lobortis lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla ac imperdiet erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris eu purus at urna facilisis eleifend. Ut dapibus, ex vitae vehicula suscipit, enim lacus vulputate tortor, vel convallis diam dui quis est. Duis cursus velit enim, vitae interdum nisi facilisis ut. In porttitor lacus vulputate lacinia semper. Vivamus consectetur felis vitae felis maximus sodales. Sed scelerisque blandit consectetur. Duis nec dictum ligula, quis lobortis ipsum. Ut rhoncus, nulla quis cursus euismod, quam metus pellentesque nulla, sit amet gravida felis libero id urna. Aenean a nunc imperdiet, vestibulum nibh nec, pretium tortor. Mauris magna nisl, porta eget orci eu, sodales gravida nulla. Sed eleifend dapibus libero quis fermentum. Vivamus non hendrerit augue.",
      yearTaken: 2020,
      semesterTaken: 1,
      workload: 10,
      rating: {
        difficulty: 5,
        star: 5
      },
      _id: "1"
    },
    {
      userName: "Susan Lim",
      likes: 24,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget bibendum purus, sed ultricies nunc. Proin et purus odio. Etiam ex elit, consectetur placerat feugiat non, luctus eu justo. Vestibulum quis accumsan orci. Morbi ante massa, semper in mi eleifend, tempor posuere quam. In odio nulla, tristique et lorem vitae, mollis dictum ipsum. Sed sollicitudin augue quis turpis hendrerit laoreet. Nam facilisis turpis leo, in lobortis lorem lobortis vel. Maecenas scelerisque ante vel elit lobortis lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      yearTaken: 2020,
      semesterTaken: 1,
      workload: 10,
      rating: {
        difficulty: 5,
        star: 5
      },
      _id: "2"
    }
  ]

  const firstModuleReviews = dummyReviews;
  const secondModuleReviews = dummyReviews;

  return { firstModule, secondModule, firstModuleReviews, secondModuleReviews };
}

export default ModuleComparison;