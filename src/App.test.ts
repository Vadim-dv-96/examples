import { makeHairstyle, moveUser, upgradeLaptop, UserType, UserWithLaptopType } from './components/test';


test ( "reference type test" , () => {
  
  let user: UserType ={
      name: "Dimych",
      hair: 32,
      address: {
          city: "Minsc"
      }
  }

  const awesomeUser=makeHairstyle(user,2)

expect(awesomeUser.hair).toBe(16)
expect(user.hair).toBe(32)
expect(awesomeUser.address).toBe( user.address )
})

test ( "change address" , () => {
  
  let user: UserWithLaptopType ={
      name: "Dimych",
      hair: 32,
      address: {
          city: "Minsc",
          house:12
      },
      laptop: {
        title: "Zenbook"
      }
  }

  const movedUser=moveUser(user,"Kiev")

expect(user).not.toBe(movedUser)
expect(user.address).not.toBe(movedUser.address)
expect(movedUser.address.city).toBe("Kiev")
expect(movedUser.laptop).toBe(user.laptop)


})
test ( "upgrade laptop to Macbook" , () => {
  
  let user: UserWithLaptopType ={
      name: "Dimych",
      hair: 32,
      address: {
          city: "Minsc",
          house:12
      },
      laptop: {
        title: "Zenbook"
      }
  }

  const movedUser=upgradeLaptop(user,"Macbook")

expect(user).not.toBe(movedUser)
expect(movedUser.laptop).not.toBe(user.laptop)
expect(movedUser.laptop.title).toBe("Macbook")
expect(user.laptop.title).toBe("Zenbook")


})