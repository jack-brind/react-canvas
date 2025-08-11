import "./CaseStudyHeader.css";
import { caseStudy } from "./case-studies";
import PageContent from "../../PageContent/PageContent.jsx";
import pages from "../../../pages.js";
import { Segment, SegmentOption } from "../../Segment/Segment.jsx";
import {
  Menu,
  X,
  Coins,
  RectangleEllipsis,
  LibraryBig,
  CircleCheckBig,
} from "lucide-react";
import { Icon } from "lucide-react";
import Tldr from "../../../assets/icons/Tldr";
import DeepDive from "../../../assets/icons/DeepDive";
import { useState } from "react";
import Breadcrumb from "../../Breadcrumb/Breadcrumb";

export default function CaseStudyHeaderComponent() {
  const currentPageData = pages.find((page) => page.link === "caseStudyHeader");
  const [selectedStudy, setSelectedStudy] = useState(0);

  const breadcrumbItems = [
    { label: "Work", path: "/work" },
    {
      label: caseStudy[selectedStudy].title,
      path: caseStudy[selectedStudy].path || "#",
    },
  ];

  const handleCaseStudySelection = (selectedStudy) => {
    setSelectedStudy(selectedStudy);
  };

  return (
    <>
      <PageContent
        icon={<currentPageData.icon size={32} />}
        title={currentPageData.caption}
        subtitle="The header / frontmatter for case studies on my portfolio including a segment component to switch between the short and long version of the case study."
      />
      <h3>Case study</h3>
      <div className="case-study__selection">
        <Segment>
          <SegmentOption
            icon={<Coins size={12} />}
            text="Global rates"
            active={selectedStudy === 0}
            onClick={() => handleCaseStudySelection(0)}
          />
          <SegmentOption
            icon={<RectangleEllipsis size={12} />}
            text="Compliance overrides"
            active={selectedStudy === 1}
            onClick={() => handleCaseStudySelection(1)}
          />
          <SegmentOption
            icon={<LibraryBig size={12} />}
            text="Knowledgebase"
            active={selectedStudy === 2}
            onClick={() => handleCaseStudySelection(2)}
          />
          {/* <SegmentOption
            icon={<CircleCheckBig size={12} />}
            text="Approvals"
            active={selectedStudy === 3}
            onClick={() => handleCaseStudySelection(3)}
          /> */}
        </Segment>
      </div>
      <CaseStudyHeader
        caseStudy={caseStudy[selectedStudy]}
        breadcrumbItems={breadcrumbItems}
      />
    </>
  );
}

function CaseStudyHeader({ caseStudy, breadcrumbItems }) {
  const [selectedOption, setSelectedOption] = useState("tldr");

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
      <ArticleTitle title={caseStudy.title} />
      <div>
        <div className="key-impact">
          <MetadataTag metadata={caseStudy.metadata[0]} isHighlight={true} />
        </div>
        <div className="metadata__rail">
          <MetadataTag metadata={caseStudy.metadata[1]} />
          <MetadataTag metadata={caseStudy.metadata[2]} />
          <MetadataTag metadata={caseStudy.metadata[3]} />
        </div>
      </div>
      <div className="version">
        <Segment>
          <SegmentOption
            icon={<Tldr size={12} />}
            text="Summary"
            active={selectedOption === "tldr"}
            onClick={() => setSelectedOption("tldr")}
          />
          <SegmentOption
            icon={<DeepDive size={12} />}
            text="Deep dive"
            active={selectedOption === "deep-dive"}
            onClick={() => setSelectedOption("deep-dive")}
          />
        </Segment>
        <span className="read-time">
          {selectedOption === "tldr"
            ? `${caseStudy.tldr}m read`
            : `${caseStudy.deepDive}m read`}
        </span>
      </div>
      <div>
        {selectedOption === "tldr" ? "TLDR VERSION" : "DEEP DIVE VERSION"}
      </div>
    </div>
  );
}

// function Breadcrumb({ title }) {
//   return (
//     <div className="breadcrumb">
//       <a href="/" className="breadcrumb__link">
//         Work
//       </a>{" "}
//       <span className="breadcrumb__divider">/</span>{" "}
//       <span className="breadcrumb__name">{title}</span>
//     </div>
//   );
// }

function ArticleTitle({ title }) {
  return <h1 className="article__title">{title}</h1>;
}

function MetadataTag({ metadata, isHighlight = false }) {
  const IconComponent = metadata.icon;
  return (
    <div className="metadata__container">
      <IconComponent size={isHighlight ? 16 : 12} color={metadata.colour} />
      <span
        className={`metadata__text--label${isHighlight ? "-highlight" : ""}`}
      >{`${metadata.name}:`}</span>
      <span
        className={`metadata__text--value${isHighlight ? "-highlight" : ""}`}
      >{`${metadata.value}`}</span>
    </div>
  );
}
