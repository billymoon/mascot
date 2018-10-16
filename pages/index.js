import Layout from '../components/layout'
import { Shelf } from 'jsx-components'
import Logo from '../components/svg/logo'

export default () =>
  <Layout>
    <div className="outer">
      <div className="inner">
        <Shelf>
          <Logo />
          <div className="contact-info">
            <div><a href="http://mascot.cat">http://mascot.cat</a></div>
            <div><a href="mailto:info@mascot.cat">info@mascot.cat</a></div>
            <div><a href="tel:+447475548210">+447475548210</a></div>
          </div>
        </Shelf>
      </div>
    </div>
    <style jsx>{`
      .outer {
        height: 100%;
        width: 100%;
        position: absolute;
      }

      .inner {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        text-align: center;
      }

      .contact-info {
        margin-top: 20px;
        font-size: 20px;
      }

      .contact-info div {
        margin-top: 5px;
      }
    `}</style>
  </Layout>
