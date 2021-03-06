import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Sidebar from "../components/Sidebar";
import Layout from "./layout";
import ButtonContainer from "../components/ButtonContainer";
import Button from "../components/Button";
import Footer from "../components/Footer";
import "./index.css";
import { MobileShow } from "../components/MobileHide";

const TemplateWrapper = props => (
    <div>
        <Layout>
            <Helmet
                title={
                    props.data ? props.data.allContentfulMeta.edges[0].node.title : "halfof8"
                }
            >
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="description" content={props.data.allContentfulMeta.edges[0].node.description.childMarkdownRemark.excerpt} />
                <meta name="keywords" content={props.data.allContentfulMeta.edges[0].node.description.childMarkdownRemark.excerpt} />
                <meta property="og:title" content={props.data.allContentfulMeta.edges[0].node.title} />
                <meta
                    property="og:description"
                    content={props.data.allContentfulMeta.edges[0].node.description.childMarkdownRemark.excerpt}
                />
                <meta property="og:image"
                    content={'https://' + props.data.allContentfulMeta.edges[0].node.image.file.url}
                />
            </Helmet>
            <div>
                <Sidebar />
            </div>
            <div style={{ flexGrow: 1 }}>
                {props.children()}
                
                <MobileShow>
                    <Footer />
                </MobileShow>
            </div>
        </Layout>
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func
};

export default TemplateWrapper;

export const query = graphql`
    query LayoutQuery {
        site {
            siteMetadata {
                title
            }
        }
        allContentfulMeta {
            edges {
                node {
                    title
                    image {
                        file {
                            url
                            fileName
                            contentType
                        }
                    }
                    description {
                        childMarkdownRemark {
                            excerpt
                        }
                    }
                }
            }
        }
    }
`;
