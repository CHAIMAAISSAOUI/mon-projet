import {create} from 'zustand'
import  {persist,createJSONStorage} from 'zustand/middleware'

export const useUser = create (persist(
    (set,get)=> ({                   
 user:0,
 setUser:(data) => set ({ user:data})
} ),
{
    name:'userstor',// name of the storage (must be unique)
    Storage: createJSONStorage //([=> localStorage]), (optional) by default, 'localstorage' is used
}


))