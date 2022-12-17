import { client } from './sanity.client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

const urlFor = (src: Image) => {
  return builder.image(src)
}

export default urlFor;