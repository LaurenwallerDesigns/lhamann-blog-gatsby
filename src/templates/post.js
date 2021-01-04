import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import TemplateStyle from '../components/template-style';

export const query = graphql`
    query($slug: String!) {
        mdx(frontmatter: {slug: { eq: $slug }}){
            frontmatter {
                title
                author
            }
            body
        }
    }
`;



const PostTemplate = ({ data: {mdx: post} }) => (
    <Layout>
        <TemplateStyle className="mid-section">
            <article className="article-flex flex-col">
                <h1 className="title main">{post.frontmatter.title}</h1>
                <span className="author-span">author: {post.frontmatter.author}</span>
                <MDXRenderer>{post.body}</MDXRenderer>
                <p>{post.frontmatter.body}</p>
                <Link to="/" className="load-link"><span className="arrow-pink">&larr;</span> back to all blog posts</Link>
            </article>
        </TemplateStyle>
    </Layout>
)

export default PostTemplate;