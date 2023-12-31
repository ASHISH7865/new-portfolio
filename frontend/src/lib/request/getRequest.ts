import { fetcher } from "./fetcher";

export const getPortfolioComponent = async () => {
    try {
        const endpoint = "my-portfolio?populate=deep";
        const data = await fetcher(endpoint);
        return data?.data?.attributes?.portfolioData;
    }
    catch (error) {
        throw new Error("Error fetching portfolio component data");
    }
}

export const getProjects = async (limit : number) => {
    try {
        const endpoint = `projects?populate=deep&pagination[limit]=${limit}`;
        const data = await fetcher(endpoint);
        return data?.data;
    }
    catch (error) {
        throw new Error("Error fetching projects data");
    }
}


export const getFeaturedProjects = async () => {
    try {
        const endpoint = "projects?populate=deep&filters[featured]=true";
        const data = await fetcher(endpoint);
        return data?.data;
    }
    catch (error) {
        throw new Error("Error fetching featured projects data");
    }
}


export const getAllProjects = async () => {
    try {
        const endpoint = "projects?populate=deep";
        const data = await fetcher(endpoint);
        return data?.data;
    }
    catch (error) {
        throw new Error("Error fetching all projects data");
    }
}

export const getAllProjectCategories = async () => {
    try {
        const endpoint = "project-categories?populate=deep";
        const data = await fetcher(endpoint);
        return data?.data;
    }
    catch (error) {
        throw new Error("Error fetching all project categories data");
    }
}

export const getHeader = async () => {
    try {
        const endpoint = "my-portfolio?populate=deep";
        const data = await fetcher(endpoint);
        return data?.data?.attributes?.header;
    }
    catch (error) {
        throw new Error("Error fetching header data");
    }
}

export const getAboutPageData = async () => {
    try {
        const endpoint = "about?populate=deep";
        const data = await fetcher(endpoint);
        return {
            aboutMeInfo : data?.data?.attributes?.info,
            musicList : data?.data?.attributes?.favouriteMusic,
            ValorantInfo : data?.data?.attributes?.valorantInfo,
        }
    }
    catch (error) {
        throw new Error("Error fetching about page data");
    }
}

export const sendFormDetails = async (data  : any) => {
    const endpoint = "/api/email";
    const response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(data),
    });

    if (response.ok) {
        return response.json();
    }
    else {
        throw new Error("Error sending form details");
    }
}