const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Cave Johnson', 1, 'email', 123);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.room).toEqual(expect.any(Number));


})