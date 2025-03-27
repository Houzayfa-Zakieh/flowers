import api from "./axiosConfig";

export const getProducts = async () => {
    try{
        const res = await api.get("")
        return res;
    } catch(error){
        throw error;
    }
}
export const getBanner = async () => {
    try{
        const res = await api.get("")
        return res;
    } catch(error){
        throw error;
    }
}
export const getFeatures = async () => {
    try{
        const res = await api.get("")
        return res;
    } catch(error){
        throw error;
    }
}