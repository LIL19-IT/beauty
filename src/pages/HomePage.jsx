import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Intro } from "../components/Intro";
import { Offer } from "../components/Offer";
import { Feedback } from "../components/Feedback";
import axios from '../axios';
import { Footer } from "../components/Footer";

export function HomePage() {
  const [header, setHeader] = useState([]);
  const [logo, setLogo] = useState({});
  const [contact, setContact] = useState({});
  const [categoryLinks, setCategoryLinks] = useState([]);
  const [intro, setIntro] = useState({});
  const [offerHeading, setOfferHeading] = useState({});
  const [chairs, setChairs] = useState([]);
  const [feedback, setFeedback] = useState({});
  const [map, setMap] = useState({});
  const [socialLinks, setSocialLinks] = useState([]);
  const [copyright, setCopyright] = useState({})

  useEffect(() => {
    loadingData();
  }, [])

  const loadingData = async () => {
    const resHeader = await axios.get('nav_links');
    const resLogo = await axios.get('logo');
    const resContactInfo = await axios.get('contact_info');
    const resCategoryLinks = await axios.get('category_links');
    const resIntro = await axios.get('intro');
    const resOfferHeading = await axios.get('offer_heading');
    const resChairs = await axios.get('chairs');
    const resFeedback = await axios.get('feedback');
    const resMap = await axios.get("map");
    const resSocialLinks = await axios.get("social_links");
    const rescopyright = await axios.get("copyright");

    setHeader(resHeader.data);
    setLogo(resLogo.data[0]);
    setContact(resContactInfo.data[0]);
    setCategoryLinks(resCategoryLinks.data);
    setIntro(resIntro.data[0]);
    setOfferHeading(resOfferHeading.data[0]);
    setChairs(resChairs.data);
    setFeedback(resFeedback.data[0]);
    setMap(resMap.data[0]);
    setSocialLinks(resSocialLinks.data);
    setCopyright(rescopyright.data[0])
  }

  return (
    <div className="HomePage">
      <Header
        logo={logo}
        header={header}
        contact={contact}
        categoryLinks={categoryLinks}
      />

      <Intro intro={intro} />
      <Offer offerHeading={offerHeading} chairs={chairs} />
      <Feedback feedback={feedback} map={map} />
      <Footer socialLinks={socialLinks} contact={contact} copyright={copyright} />
    </div>
  )
}
