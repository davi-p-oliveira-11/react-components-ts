import Accordion from "@/components/accordion";
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
      <StarRating noOfStars={6} />
    </div>
  );
}
