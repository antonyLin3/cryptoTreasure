import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '0bc0a22c33mshb5c77ad49b61384p1771e6jsn261881057309',
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
}

// 為了要節省請求次數，這裡會先關掉
// https://rapidapi.com/coingecko/api/coingecko/
const baseUrl = 'https://coingecko.p.rapidapi.com/'

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoExchangesApi = createApi({
    reducerPath: 'cryptoExchangesApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getExchanges: builder.query({
            query: () => createRequest('/exchanges')
        })
    })
})

export const { useGetExchangesQuery } = cryptoExchangesApi