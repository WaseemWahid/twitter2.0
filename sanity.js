import { createClient } from "next-sanity";

export const config = {
    /*
    * Find your project ID and data set in 'sanity.json' in your studio project,
    * These are considered public, but you can use enviroment variables
    * If you want differ between local dev and production.
    * 
    *  hhtps://nextjs.org/docs/basic-features/enviroment-variables
    */

    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: '2021-03-25',

    /**
     * Set useCdn to 'false' if your application require the freshest possible
     * data always (potentially slightly slower ansd a bit more expensive).
     * Authenticated request (like preview) will always bypass the CDN
     */

    useCdn: process.env.NODE_ENV === 'production',
}

export const sanityClient = createClient(config)