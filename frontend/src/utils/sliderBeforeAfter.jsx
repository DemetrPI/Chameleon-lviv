import ReactCompareImage from "react-compare-image";

// Update the component to accept props
export default function ImageCompare({ leftImage, rightImage }) {
  return <ReactCompareImage leftImage={leftImage} rightImage={rightImage} />;
}
