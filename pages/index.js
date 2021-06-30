import React, { useState } from 'react';

import TopBar from '../components/top-bar';
import Drawer from '../components/drawer';
import TopSection from '../homepage-sections/top-section';
import DescriptionSection from '../homepage-sections/description-section';
import WhyChooseUs from '../homepage-sections/why-choose-us';
import Categories from '../homepage-sections/categories';
import AboutUs from '../homepage-sections/about-us';
import GoToTop from '../components/go-to-top';
import RequestQuoteModal from '../components/request-quote-modal';

export default function Home() {
  const [isQuoteModalShown, setIsQuoteModalShown] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const onQuoteModalOpen = () => setIsQuoteModalShown(true);
  const onQuoteModalClose = () => setIsQuoteModalShown(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsDrawerOpen(open);
  }

  return (
    <React.Fragment>
      <TopBar toggleDrawer={toggleDrawer} openQuoteModal={onQuoteModalOpen} />
      <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <TopSection />
      <DescriptionSection />
      <WhyChooseUs />
      <Categories />
      <AboutUs />
      <RequestQuoteModal showModal={isQuoteModalShown} onModalClose={onQuoteModalClose} />
      <GoToTop />
    </React.Fragment>
  );
}