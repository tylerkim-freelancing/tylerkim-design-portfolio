import sanityClient from '@sanity/client'

const client = sanityClient({
    projectId: "ai25btyf", // provide project id
    dataset: "production",
    apiVersion:'2022-08-06', // current date
    useCdn: false
  })


export default client