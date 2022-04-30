const User = require('./../../app/models/User')

describe("Tests para User", () => {
    test("Creación de User", () => {
        const user = new User(1, "mauriicioreyes", "Mauricio", "Bio", "dateCreated", "lastUpdated")
        expect(user.id).toBe(1)
        expect(user.username).toBe("mauriicioreyes")
    })
})
// describe("Prueba de jest", () => {
//     test("Prueba 1", () => {
//         expect(10).toBe(0)
//     });
// })