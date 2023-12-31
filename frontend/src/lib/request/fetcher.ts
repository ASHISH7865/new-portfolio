import { FetcherOptions } from "./types";


// const baseUrl: string =
//   process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://127.0.0.1:1337';
const baseUrl: string = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

export async function fetcher(url: string, options: FetcherOptions = {}) {
  const newUrl = `${baseUrl}/api/${url}`;
  try {
    let response: Response;
    if (!options) {
      response = await fetch(newUrl , {next : {revalidate : 2}});
    
    } else {
      response = await fetch(newUrl, {
        headers: { Authorization: process.env.NEXT_PUBLIC_STRAPI_AUTH_KEY || '', ...options.headers },
        ...options,
        next : {revalidate : 2}
      });
    }

    if (response.ok) {
      const data = await response.json();
      return data;
    }

    throw new Error(response.statusText);
  } catch (error) {
    // console.error(error);
    return {
      notFound: true,
    };
  }
}
