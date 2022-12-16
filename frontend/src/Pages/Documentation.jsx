import React from "react";
import UnregisteredUserNavbar from "../Components/UnregisteredUserNavbar";

import photo1 from "../Assets/Images/photo1.png";
import photo2 from "../Assets/Images/photo2.png";
import photo3 from "../Assets/Images/photo3.png";
import photo4 from "../Assets/Images/photo4.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import FAQ from "../Components/FAQ";
const Documentation = () => {
  return (
    <>
      <UnregisteredUserNavbar />
      <div className="document">
        <nav
          id="sidebarMenu"
          className="collapse d-lg-block sidebar collapse bg-white position-fixed "
        >
          <div className="sidebar position-sticky">
            <div className="list_item">
              <AnchorLink
                to="#"
                className="fw-bold list-group-item list-group-item-action py-2 ripple"
              >
                <span className="menu_listing">Outline</span>
              </AnchorLink>
              <AnchorLink
                to="#"
                className=" list-group-item list-group-item-action py-2 ripple"
              >
                <span className="menu_listing">Crow Documentation</span>
              </AnchorLink>
              <AnchorLink
                href="#intro"
                className=" list-group-item list-group-item-action py-2 ripple"
              >
                <span className="menu_listing color-success">Introduction</span>
              </AnchorLink>
              <div className="guides-menu">
                <AnchorLink
                  href="/Dashboard/portfolioCategory"
                  className=" list-group-item list-group-item-action py-2 ripple"
                >
                  <span className="menu_listing color-success">Guides</span>
                </AnchorLink>
                <div className="guide">
                  <ul className="list-unstyled p-0">
                    <li>
                      <AnchorLink
                        href="#firstSteps"
                        className=" list-group-item list-group-item-action py-1 ripple"
                      >
                        First Steps
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink
                        href="#Signup"
                        className=" list-group-item list-group-item-action py-1 ripple"
                      >
                        Signing Up
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink
                        href="#creatingATemplate"
                        className=" list-group-item list-group-item-action py-2 ripple"
                      >
                        Creating a Template
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink
                        href="#creatingADesign"
                        className=" list-group-item list-group-item-action py-2 ripple"
                      >
                        Creating a Design
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink
                        href="#socialMediaLinks"
                        className=" list-group-item list-group-item-action py-2 ripple"
                      >
                        Adding Social Media Links
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink
                        href="#FAQ"
                        className=" list-group-item list-group-item-action py-2 ripple"
                      >
                        Get Help
                      </AnchorLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="main_doc">
          <div className="doc-heading">
            <h1>CROW DOCUMENTATION</h1>
          </div>
          <div className="doc-subheading">
            <h2>Getting Started with CROW</h2>
          </div>
          <div id="intro">
            <h2>Introduction:</h2>
            <div className="intro-body">
              <p>
                CROW offers an all-in-one content management system, or CMS for
                bloggers, businesses and developers. A CROW website is free and
                it includes professionally designed layouts, 24/7 support, and
                access to our user-friendly platform for creating beautiful
                websites. <br></br>
                <br></br>We also offer tools for creating a portfolio, blogs and
                professional websites.All of these are available as standalone
                features or as part of the CROW SITE
              </p>
              <img src={photo4} alt="" />
            </div>
          </div>
          <div id="firstSteps">
            <h3>First Steps</h3>
            <div className="intro-body">
              <p>
                Every CROW site begins on a free subscription. If you are just
                visiting us at CROW, there is a possibility for you to set up a
                website. <br></br>
                <br></br>You click the get a demo website button, fill in some
                information and immediately you have a website setup for you
                with that information.<br></br>
                <br></br> You also have access to preview the templates on the
                website. To have access to editing these beautifully curated
                templates you would have to join CROW by registering to edit
                templates and also create a custom website for free.<br></br>{" "}
                <br></br>As a registered user you can explore the platform,
                upload content, experiment with your design, and share your
                progress with friends and colleagues.<br></br>
                <br></br> When you get started, you start with a template of
                your choice. Templates help to showcase site features and give
                you an idea of how your site can be styled. You can make changes
                to the template by adding images, customizing colors, adding
                blocks, changing fonts and so much more. <br></br>
                <br></br>When you’re ready to build your site, use the edit
                panel to create a new page. Then you can add sections and
                rearrange your content to create custom layouts
              </p>
              <img src={photo1} alt="" />
              <p>
                The Editor panel is where you create the structure of your site.
                The panel comprises a drag and drop interface which makes design
                very easy. It also includes:{" "}
                <ul>
                  <li>
                    Add Page Button: This enables you to create different pages
                    to youe website
                  </li>
                  <li>
                    The Device Manager which allows you to check your website on
                    different screens(desktop, tablet, mobile)
                  </li>
                  <li>
                    The toggle section which comprises the Full screen: This
                    allows you to see your site in full screen
                  </li>
                  <ul>
                    <li>
                      Preview Icon: This enables you to preview the site you
                      have created
                    </li>
                    <li>
                      Undo and Redo Section: This helps you undo or redo a
                      particular edit action on any element.
                    </li>
                    <li>
                      Download: You can download the html and css files of your
                      website
                    </li>
                    <li>
                      {" "}
                      Delete: This allows you to clear all the edits in your
                      site.
                    </li>
                  </ul>
                  <li>
                    The Block Manager: This is what you would use in creating
                    your website by dragging in any element of your choice.
                  </li>
                  <li>
                    Layers: This is an overview of all the elements in the body
                    of your site’
                  </li>
                  <li>
                    Settings: Click over any page and click to open its page
                    setting. On the page settings you can make changes in the
                    General tab which enables
                  </li>
                  <li>Style Manager: For styling elements on your site.</li>
                  <li>Save: This is used to save changes on your site.</li>
                  <li>
                    Selector Manager: This would be used to select the elements
                    on the site.
                  </li>
                  <li>
                    Device Manager: This checks the responsiveness of your the
                    website you created
                  </li>
                  <li>
                    Trait Manager: This is used to make edit to the different
                    element added to the canvas of the editor
                  </li>
                </ul>
              </p>
              <p>
                When you first create your site, the editor panel is populated
                with templates Each line displays a page's title and an icon
                representing its page type. Pages appear in your site's
                navigation in the order they're placed in the Editor panel. A
                house icon appears to the left of your homepage To add a new
                page, click + at the top of a navigation section. Hover over any
                page and click the trash can icon to delete page To add
                drop-down menus, use folders
              </p>
            </div>
          </div>
          <div id="Signup">
            <h3>Signing Up</h3>
            <div className="intro-body">
              <p>
                To have full access to the free CROW platform, you have to be a
                registered user. Click the register button to get started. If
                you already have an account, click the sign-in button.
              </p>
            </div>
          </div>
          <div id="choosingATemplate">
            <h3>Choosing a Template</h3>
            <div className="intro-body">
              <p>
                On the current CROW platform, all sites use the same template,
                with the same features and style options. The design you choose
                when you start with is a starting point, but it doesn't limit
                the designs or layouts you can create. Explore the template
                store to find a design that fits your vision. We recommend
                paying more attention to the structure and style rather than its
                example content. The content is there for inspiration, but you
                can customize it to meet your needs. Remember, if you decide you
                want to change the design of your site later, you can always
                rebuild it using pages, page sections, blocks, and style
                settings.
              </p>
            </div>
          </div>
          <div id="creatingADesign">
            <h3>Creating a design</h3>
            <div className="intro-body">
              <p>
                Select different curated font and colour themes to quickly
                update styles across your entire sites. Choose a font pack
                Changing fonts: This guide walks you through changing fonts on
                your site, including the font style, size, color, and spacing.
                All sites start with default font styles that you can change and
                adjust in site styles. How fonts work in Crow When reviewing the
                font menu, please note:Font menus include all available font
                options, including 600 Google fonts and 1,000 Adobe Fonts.
                Scroll to browse our full library, or use the menu's search
                field to search for a specific font. To keep menus short, we
                limit what appears at first, focusing on your recently used
                fonts and our most popular options. Not all formatting options
                offered by Google Fonts or Adobe Fonts are supported by Crow.
                Customize theme colors: You can further customize any theme by
                setting specific colors for different site elements. Any changes
                made to a theme's colors apply to all areas of your site using
                that theme.
              </p>
              <img src={photo2} alt="" />
              <p>
                To edit a theme: While editing a page, click the paintbrush
                icon, then click Colors. Choosing compelling images Select
                effective visuals to reflect your style and brand. Your site's
                personality is crafted through fonts, colors, and other styling
                choices, but the imagery visitors see first makes a powerful
                impression. Images add to your overall tone and message. This
                guide gives you the tools for choosing great images, including
                how to use stock images if you don’t have your own. 1. Get
                inspired Every project begins as a blank page, and beautiful
                websites are no exception. That's why we suggest getting
                inspired before you begin creating content. Exploring what your
                favorite people, brands, and businesses are doing with their
                sites can help you visualize what you want for yourself. Take
                note of imagery that appeals to you, styles that connect with
                what you're trying to accomplish, and structure that could work
                for your content or objective. If you look at our Crow templates
                page, you can view real customer examples for each template,
                providing inspiration and insights into each template’s design
                strengths. 2. Create a cohesive look Think of a word or two that
                sums up the theme or personality of your site. A home goods
                retailer specializing in modern design might choose
                “minimalist;” a quirky cupcake shop might pick “joyful.”
                Whatever the word is, you can make your site more effective by
                tying all its elements — images, colors, fonts — to the theme,
                creating a cohesive look. 3. Find the perfect picture There are
                many ways to find images online. While you may be tempted to
                pull them from a search engine, this can result in inferior
                quality images and run afoul of creators’ copyrights. Often the
                ideal image is the one you shot yourself. To simplify the
                process of finding high quality imagery without legal issues, we
                integrated with Unsplash and Getty Images to help you find the
                perfect stock image for your site. The Unsplash and Getty
                libraries include some of the most beautiful editorial and stock
                photos available anywhere, available for free or a small fee per
                image, depending on the library.
              </p>
            </div>
          </div>
          <div id="socialMediaLinks">
            <h3>Adding Social Media Links </h3>
            <div className="intro-body">
              <p>
                Add social links to display social icons to your visitors,
                helping them find you wherever you maintain a presence on the
                web. Icons include logos for many common platforms, like
                Facebook, Instagram, and Twitter. You can also add link or mail
                icons that lead to any website or email address. Add social icon
                links Add links to the Social links panel to display social
                icons across your site. If we recognize the platform based on
                the URL, we’ll display an icon with the platform’s logo. If the
                link is from a page or service we don’t recognize, it’ll be
                represented by a link icon. If the link is an email address,
                it’ll be represented by a mail icon.
              </p>
              <img src={photo3} alt="" />
            </div>
          </div>
          <div id="FAQ">
            <h3>FAQ</h3>
            <div className="intro-body">
              <p>
                <ul>
                  <li>
                    <strong>Question:</strong> Can someone build my site for me?
                  </li>
                  <li>
                    <strong>Answer:</strong> Yes, While Crow is great for a DIY
                    approach, many web designers specialize in building CROW
                    sites for clients. If you're building a site yourself, we're
                    here to help.
                  </li>
                  <li>
                    <strong>Question:</strong> When is my site live?
                  </li>
                  <li>
                    <strong>Answer:</strong> Your site is live when you copy the
                    link to your url and share with others to view. GET HELP We
                    offer other resources to help you get the most out of your
                    CROW site. Contact us to chat about your website needs.
                    We're here to help 24/7, and you’ll always talk to real,
                    friendly humans.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <FAQ />
        </div>
      </div>
    </>
  );
};

export default Documentation;
