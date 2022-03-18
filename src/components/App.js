import "../assets/styles.css";
import Footer from "./footer/Footer";
import { desktopFooter, mobileFooter } from '../data/mockData'

export default () => {
  return (
      <div className="container main">
          <div style={{ height: '100vh'}}>Simulated content</div>
          <Footer desktopFooter={desktopFooter} mobileFooter={mobileFooter} />
      </div>
  );
};