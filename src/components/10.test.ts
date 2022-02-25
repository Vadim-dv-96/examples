import { UserType } from "./test";

function hairdresser(u:UserType, power:number) {
    u.hair = u.hair / power
}




test ( "reference type test" , () => {
    
    let user: UserType ={
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsc"
        }
    }

    hairdresser(user,2)

expect(user.hair).toBe(16)
})