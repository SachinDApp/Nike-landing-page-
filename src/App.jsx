import Hero from './sections/Hero';
import PopularProducts from './sections/PopularProducts';
import Subscribe from './sections/Subscribe';
import SuperQuality from './sections/SuperQuality';
import SpecialOffer from './sections/SpecialOffer';
import CustomerReview from './sections/CustomerReview';
import Footer from './sections/Footer';
import Services from './sections/Services';
import Nav from './Components/Nav';

export default function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding-x py-10">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReview />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}
