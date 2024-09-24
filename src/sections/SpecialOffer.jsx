import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img
          src={offer}
          alt="Special Offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col ">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping experience that transforms the way you shop with
          exceptional deals. From exclusive selections to remarkable savings, we
          provide unmatched value that distinguishes us from the rest.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Explore a world of possibilities crafted to meet your distinct
          desires, exceeding even your highest expectations. Your experience
          with us is truly exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4 ">
          <Button label="Shop Now" iconUrl={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
