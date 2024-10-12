import Accordion from "@/components/accordion";
import ImageSlider from "@/components/image-slider";
import RandomColor from "@/components/random-color";
import StarRating from "@/components/star-rating";

export default function Home() {
  return (
    <div className="app">
      {/* Accordion component  */}
      {/* <Accordion /> */}

      {/* Random Color component */}
      {/* <RandomColor /> */}

      {/* Star rating components */}
      {/* <StarRating noOfStars={6} /> */}

      {/* Image slider component */}
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />
    </div>
  );
}
