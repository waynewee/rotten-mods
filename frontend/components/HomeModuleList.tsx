import { FC, useState } from "react";
import { Module } from "../types";
import ArrowButton from "./ArrowButton";
import HomeModuleListCard from "./HomeModuleListCard";


interface HomeModuleListProps {
  modules: Module[];
}

const HomeModuleList: React.FC<HomeModuleListProps> = ({modules}) => {
  const numberOfModuleCardsInView = 3;
  const [index, setIndex] = useState(0);
  const allModuleCards = modules.map((module, index) => <HomeModuleListCard module={module} key={index}/>);
  const moduleCardsInThrees = allModuleCards.slice(index, index + 3);
  const scrollLeft = () => {
    if (index - numberOfModuleCardsInView <= 0) {
      setIndex(0);
    } else {
      setIndex(index - numberOfModuleCardsInView);
    }
  }

  const scrollRight = () => {
    if (index + numberOfModuleCardsInView > allModuleCards.length - numberOfModuleCardsInView) {
      setIndex(allModuleCards.length - numberOfModuleCardsInView);
    } else {
      setIndex(index + numberOfModuleCardsInView);
    }
  }

  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
      <ArrowButton direction="left" onClick={scrollLeft} />
      {moduleCardsInThrees}
      <ArrowButton direction="right" onClick={scrollRight} />
    </div >
  );
}


export default HomeModuleList;

// For scrolling

// const widthOfModuleCard = 350;
// const numberOfModules = 6;
// const maxWidthOfList = widthOfModuleCard * (numberOfModules - 3);

// const [offset, setOffset] = useState(widthOfModuleCard);
// const carouselRef = useRef(null);


// const scrollToRef = (offset: number) => carouselRef.current.scrollTo(offset, 0);

// const scrollRight = () => {
//   if (offset >= maxWidthOfList) {
//     scrollToRef(maxWidthOfList);
//   } else {
//     scrollToRef(offset);
//     setOffset(offset + widthOfModuleCard);
//   }
// }

// const scrollLeft = () => {
//   scrollToRef(offset - widthOfModuleCard);
//   if (offset - widthOfModuleCard <= 0) {
//     setOffset(widthOfModuleCard);
//   } else {
//     setOffset(offset - widthOfModuleCard)
//   }
// }

// return (
//   <div style={{ display: "flex" }}>
//     <div style={{ display: "flex", alignItems: "center", marginRight: 5, cursor: "pointer" }} onClick={scrollLeft}>{"<"}</div>
//     <div
//       className={stylesheet.horizontalCardCarousel}
//       style={{
//         display: "flex",
//         overflowY: "hidden",
//         overflowX: "auto",
//         paddingLeft: 5,
//       }}
//     >
//       {menu}
//     </div>
//     <div style={{ display: "flex", alignItems: "center", marginLeft: 10, cursor: "pointer" }} onClick={scrollRight}>{">"}</div>

//   </div >


// );