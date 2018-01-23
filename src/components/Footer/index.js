import React from "react";
import styled from "styled-components";
import {MobileShow, MobileHide} from '../MobileHide'
import Link from "gatsby-link";

const FooterBase = ({ className }) => (
    <div className={className}>
      <p>
      &copy; 2012 – {new Date().getFullYear()}, 
      👋 Car does not move till we are all buckled up, so keep in touch via {' '}<a href="mailto:info@halfof8.com">info@halfof8.com</a>, 
      {' '}<a href="https://fb.com/stayswim">fb</a>, {' '}<a href="https://instagram.com/halfof8">insta</a><br>
      Developed by <a href="https://github.com/yante">Yan Te</a>.
      Typefaces used: Space Mono by <a href="http://www.colophon-foundry.org/">Colophon</a>,
      Work Sans by <a href="https://github.com/weiweihuanghuang/Work-Sans">Wei Huang</a>
     </p>
    </div>
);

const FooterStyled = styled(FooterBase)`
    padding-top: 20px;
    padding-bottom: 10px;
    padding-right: 5px;
    padding-right: 5px;
    text-align: center;

    font-size: 13px;
    line-height: 1.85;
    letter-spacing: normal;
    text-align: center;
    color: ${props => props.color || '#001d60'};
`

export default FooterStyled;
