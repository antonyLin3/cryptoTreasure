import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '0bc0a22c33mshb5c77ad49b61384p1771e6jsn261881057309',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

// 為了要節省請求次數，這裡會先關掉
const baseUrl = 'https://coinranking1.p.rapidapi.com/'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCoinDetails: builder.query({
            query: (coinId, timePeriod) => ({
                url: `/coin/${coinId}`,
                params: {'referenceCurrencyUuid': 'yhjMzLPhuIDl', 'timePeriod': timePeriod},
                headers: cryptoApiHeaders
            })
        }),
        getCoinHistory: builder.query({
            query: ({coinId, timePeriod}) => ({
                url: `/coin/${coinId}/history`,
                params: {'referenceCurrencyUuid': 'yhjMzLPhuIDl', 'timePeriod':  timePeriod},
                headers: cryptoApiHeaders
            })
        }),
    })
})


// console.log("安安"+JSON.stringify(createRequest('/coins')))

export const { useGetCryptosQuery, useGetCoinDetailsQuery, useGetCoinHistoryQuery } = cryptoApi

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//         referenceCurrencyUuid: 'yhjMzLPhuIDl',
//         timePeriod: '24h',
//         'tiers[0]': '1',
//         orderBy: 'marketCap',
//         orderDirection: 'desc',
//         limit: '50',
//         offset: '0'
//     },
//     headers: {
//         'X-RapidAPI-Key': '0bc0a22c33mshb5c77ad49b61384p1771e6jsn261881057309',
//         'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
// };