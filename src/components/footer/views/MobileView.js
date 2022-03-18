import React from 'react'
// font awesome wasn't working 
import { SocialIcon } from 'react-social-icons';

// for the accordion in mobile view
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';



const MobileView = ({ data }) => {

  const { navLinkGroups, legalText } = data 

  // helper function - renders the mobile accordion 
  const renderAccordion = () => {
    if(navLinkGroups){
      // at the highest level, this helper function renders just the visible, unexpanded links on the accordion (accordion headings)
      const renderContent = () => {
        return navLinkGroups.map(link => {
  
          if(link.navLinks){
            // if the heading/link heading function has navLinks, this helper function renders those nav links to be visible when expanded
            const renderNavLinks = () => {
              return link.navLinks.map((link) => {
                return (
                  <li className="link nav-link" key={link._id}>
                      <a href={link.url}>{link.displayText}</a>
                  </li>
                )
              })
            }

            return (
              <AccordionItem key={link._id} className="item">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <a className="link">
                      <h5 className="accordion-link">{link.displayText}</h5>
                      <div className="symbol">+</div>
                    </a>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <ul className="inner-nav-links">
                      {/* deepest helper function rendered/called */}
                        {renderNavLinks()}
                    </ul>
                </AccordionItemPanel>
              </AccordionItem>
            )
          } else {
            return (
              <AccordionItem key={link._id} className="item">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <a className="link" href={link.url}>
                      <h5 className="accordion-link">{link.displayText}</h5>
                    </a>
                  </AccordionItemButton>
                </AccordionItemHeading>
              </AccordionItem>
            )
          }
        })
      }

      return (
        <Accordion className="accordion-links">
          {/* 2nd deepest helper function rendered/called */}
          {renderContent()}
        </Accordion>
      )
    }
  }
  
  // helper function for legal info/about/privacy policy  
  const renderLegalContent = () => {
    if(legalText) {
      return (
      <div className="legal">
        <h5 className="legal-text">&#169; {legalText[0].children[0].text}</h5>
        <a className="legal-link" href="/">{legalText[1].children[0].text}</a>
      </div>
      )
    }
  }

  

  return (
    <div className="mobile-container">
      {/* final helper function rendered/called */}
      {renderAccordion()}
      <div className="socials-container">
        <ul className="socials">
          <li className="social-link">
            <a href="instagram.com">
              <SocialIcon network="instagram" bgColor="#ffff" />
            </a>
          </li>
          <li className="social-link">
            <a href="facebook.com">
              <SocialIcon network="facebook" bgColor="#ffff" />
            </a>
          </li>
          <li className="social-link">
            <a href="pinterest.com">
              <SocialIcon network="pinterest" bgColor="#ffff" />
            </a>
          </li>
          <li className="social-link">
            <a href="twitter.com">
              <SocialIcon network="twitter" bgColor="#ffff" />
            </a>
          </li>
        </ul>
      </div>
      {/* helper function for legal info/about/privacy policy called/rendered */}
      {renderLegalContent()}
    </div>
  )
}

export default MobileView