import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation, Trans, Translation } from "react-i18next";

import TokenBTC from "../assets/img/tokens/btc.png";
import TokenETH from "../assets/img/tokens/eth.png";
import TokenNEW from "../assets/img/tokens/new.png";
import TokenNUSDT from "../assets/img/tokens/nusdt.png";
import TokenHT from "../assets/img/tokens/ht.png";
import TokenBNB from "../assets/img/tokens/bnb.png";
import TokenOKB from "../assets/img/tokens/okb.png";
import TokenYFI from "../assets/img/tokens/yfi.png";
import TokenUNKNOWN from "../assets/img/tokens/unknown.png";

const HomeMiningPools = () => {
  let { t, i18n } = useTranslation();
  return (
    <section className="pt-80 pb-80">
      <Container>
        <Row className="justify-content-center">
          <Col md={12} lg={10}>
            <div className="user-interact-inner text-center">
              <h2 className="h1">{t("global.pools")}</h2>
            </div>
          </Col>
          <Col sm={3} md={3} lg={3} className="pool-card-col">
            <div className="text-center pool-card">
              <div>
                <img src={TokenNEW} alt="" /> <img src={TokenNUSDT} alt="" />
              </div>
              <h4>NEW-NUSDT</h4>
              <p className="apy">APY: -</p>
              <a href="#" className="btn soon">
                {t("global.comingsoon2")}
              </a>
            </div>
          </Col>
          <Col sm={3} md={3} lg={3} className="pool-card-col">
            <div className="text-center pool-card">
              <div>
                <img src={TokenETH} alt="" /> <img src={TokenNEW} alt="" />
              </div>
              <h4>ETH-NEW</h4>
              <p className="apy">APY: -</p>
              <a href="#" className="btn soon">
                {t("global.comingsoon")}
              </a>
            </div>
          </Col>
          <Col sm={3} md={3} lg={3} className="pool-card-col">
            <div className="text-center pool-card">
              <div>
                <img src={TokenBTC} alt="" /> <img src={TokenNEW} alt="" />
              </div>
              <h4>BTC-NEW</h4>
              <p className="apy">APY: -</p>
              <a href="#" className="btn soon">
                {t("global.comingsoon")}
              </a>
            </div>
          </Col>
          <Col sm={3} md={3} lg={3} className="pool-card-col">
            <div className="text-center pool-card">
              <div>
                <img src={TokenHT} alt="" /> <img src={TokenNEW} alt="" />
              </div>
              <h4>HT-NEW</h4>
              <p className="apy">APY: -</p>
              <a href="#" className="btn soon">
                {t("global.comingsoon")}
              </a>
            </div>
          </Col>
          <Col sm={3} md={3} lg={3} className="pool-card-col">
            <div className="text-center pool-card">
              <div>
                <img src={TokenBNB} alt="" /> <img src={TokenNEW} alt="" />
              </div>
              <h4>BNB-NEW</h4>
              <p className="apy">APY: -</p>
              <a href="#" className="btn soon">
                {t("global.comingsoon")}
              </a>
            </div>
          </Col>
          <Col sm={3} md={3} lg={3} className="pool-card-col">
            <div className="text-center pool-card">
              <div>
                <img src={TokenOKB} alt="" /> <img src={TokenNEW} alt="" />
              </div>
              <h4>OKB-NEW</h4>
              <p className="apy">APY: -</p>
              <a href="#" className="btn soon">
                {t("global.comingsoon")}
              </a>
            </div>
          </Col>
          <Col sm={3} md={3} lg={3} className="pool-card-col">
            <div className="text-center pool-card">
              <div>
                <img src={TokenYFI} alt="" /> <img src={TokenNEW} alt="" />
              </div>
              <h4>YFI-NEW</h4>
              <p className="apy">APY: -</p>
              <a href="#" className="btn soon">
                {t("global.comingsoon")}
              </a>
            </div>
          </Col>
          <Col sm={3} md={3} lg={3} className="pool-card-col">
            <div className="text-center pool-card">
              <div>
                <img src={TokenUNKNOWN} alt="" /> <img src={TokenNEW} alt="" />
              </div>
              <h4>???-NEW</h4>
              <p className="apy">APY: -</p>
              {t("global.open apply")}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeMiningPools;
