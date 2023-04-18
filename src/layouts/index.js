import React from 'react';
import PropTypes from 'prop-types';
// import Link from 'gatsby-link';
import '../style/index.scss';
import { HelmetDatoCms } from 'gatsby-source-datocms';

const Layout = ({ children, site, seo }) => {
  return (
    <>
      <HelmetDatoCms seo={seo} />
      <div className="Container">
        <div className="Header">
          <div className="Wrap">
            <div className="Header__body">
              <h1 className="Header__title">
                  My Game Store
                {/* <Link data-text={site.globalSeo.siteName} to="/">
                  {site.globalSeo.siteName}
                </Link> */}
              </h1>
              <div className="Header__summary snipcart-summary snipcart-checkout">
                <div className="Header__summary__title">🛍 MY CART 🛍</div>
                <div className="Header__summary__line">
                  Number of items:{' '}
                  <span className="snipcart-total-items"></span>
                </div>
                <div className="Header__summary__line">
                  Total price: <span className="snipcart-total-price"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Wrap">{children}</div>
        <div className="Wrap">
          <div className="Footer">
            This website is just an example project to demonstrate how you can
            integrate <a href="https://www.gatsbyjs.org/">Gatsby</a>,{' '}
            <a href="https://snipcart.com/">Snipcart</a> and{' '}
            <a href="https://www.datocms.com">DatoCMS</a>.
          </div>
        </div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
