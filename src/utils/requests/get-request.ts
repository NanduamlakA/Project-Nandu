import { AxiosResponse } from 'axios';
import { GetRequestParam } from 'src/types/requests';
import axiosServices from '../axios';

export const buildGetRequest = async (url: string, params: GetRequestParam | null | undefined): Promise<AxiosResponse> => {
  try {
    const requestParams: Record<string, any> = {};

    if (params?.pagination !== null) {
      requestParams.pagination = params?.pagination;
    }

    if (params?.filter !== null) {
      requestParams.filter = params?.filter;
    }

    if (params?.sorting !== null) {
      requestParams.sorting = params?.sorting;
    }

    const response = await axiosServices.get(url, {
      params: requestParams
    });

    return response;
  } catch (error) {
    throw error;
  }
};
