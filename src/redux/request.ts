import HTTP from "../helpers/axios";

export const get = async (url: string) =>
    HTTP.get(url);

export const post = async (url: string, _data: any) =>
    HTTP.post(url, _data);