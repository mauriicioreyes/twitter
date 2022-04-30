const User = require('./../../app/models/User')

describe("Tests para User", () => {
    test("Requerimiento 1: Creación de User", () => {
        const user = new User(1, "mauriicioreyes", "Mauricio", "Bio")
        expect(user.id).toBe(1)
        expect(user.username).toBe("mauriicioreyes")
    });

    test("Requerimiento 2: Fechas en atributos de User", () => {
        const user = new User(1, "carlosgarcia", "carlos", "bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()

    });

    test("Requerimiento 3: Agregando getters", () => {
        const user = new User(1, "mauriicioreyes", "mauricio", "bio")
        expect(user.getUsername).toBe("mauriicioreyes")
    })
})
// describe("Prueba de jest", () => {
//     test("Prueba 1", () => {
//         expect(10).toBe(0)
//     });
// })