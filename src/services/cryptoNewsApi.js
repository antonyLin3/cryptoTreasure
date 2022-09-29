import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders  = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '0bc0a22c33mshb5c77ad49b61384p1771e6jsn261881057309',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news'

const createRequest = (url, query) => ({ url, params: {q: `${query}`, freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off'}, headers: cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: (queryWord) => createRequest('/search',queryWord)
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi