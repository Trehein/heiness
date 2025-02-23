import {useQuery} from '@tanstack/react-query'
import { queryCollections } from '../collections/collections';

export const useGet = (queryCollection: string) => {

  console.log(queryCollections[queryCollection])
  const {data, error, isLoading, isSuccess} = useQuery({
    queryKey: [queryCollection],
    queryFn: queryCollections[queryCollection],
  })

  let mappedData
  if(isSuccess) {
    // @ts-ignore
    mappedData = data?.docs.map((doc: any) => {
      return doc.data()
    })
  }
  
  return {mappedData, error, isLoading, isSuccess}
}


