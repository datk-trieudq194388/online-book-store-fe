import { SERVER_ADDR } from "../configs/config";

export const getUserTitle = async (sortType = 1, pageSize = 12, page = 1) => {

    const query = `?sortType=${sortType}&pageSize=${pageSize}&page=${page}`
 
    const response = await fetch(`${SERVER_ADDR}/title/user` + query);
    
    const data = await response.json();
    console.log(data)

    return {data: data, status: response.status, ok: response.ok};

}

export const getTitleBySlug = async (slug) => {

    const response = await fetch(`${SERVER_ADDR}/title/detail/` + slug);
    
    const data = await response.json();
    console.log(data)

    return {data: data, status: response.status, ok: response.ok};

}