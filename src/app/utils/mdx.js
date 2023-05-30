import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import { Test, Image, CodeBlock } from '../components/'

const components = { Test }

export default function TestPage({ source }) {
  return (
    <div className="content">
      <MDXRemote {...source} components={{ Test, Image, CodeBlock }} />
    </div>
  )
}

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  const source = 'Some **mdx** text, with a component <Test />'
  const mdxSource = await serialize(source)

  return {
    props: {
      source: mdxSource,
    },
  }
}