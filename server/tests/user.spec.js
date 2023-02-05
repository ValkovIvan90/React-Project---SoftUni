const express = require('express');
const supertest = require('supertest');
const bcrypt = require('bcrypt');

const userService = require("../services/userServices");
const expressSetup = require('../config/express');

const app = express();
expressSetup(app);

jest.mock('../services/userServices', () => {
    return {
        createUser: jest.fn(),
        getUserByUsername: jest.fn(),
        getUserByEmail: jest.fn(),
        getUserById: jest.fn(),
    }
});

describe("User controller", () => {
    describe("Post / register", () => {
        it("should register user", async () => {
            const reqBody = { username: "Atanasov", email: 'atanas@gmail.com', password: '1234', rePass: '1234' };
            const getUserByEmailServiceMock = jest.spyOn(userService, 'getUserByEmail')
                .mockImplementation(() => Promise.resolve(null));

            const registerUserServiceMock = jest.spyOn(userService, 'createUser')
                .mockImplementation(() => Promise.resolve({ username: 'Atanasov', email: 'atanas@gmail.com', _id: '123' }));

            const { body, statusCode, headers } = await supertest(app).post('/api/auth/register').send(reqBody);

            console.log(body, statusCode, headers);

            const authCookie = headers['set-cookie']?.some(x => x.startsWith('X-Authorization='));

            expect(statusCode).toEqual(200);
            expect(getUserByEmailServiceMock).toHaveBeenCalledTimes(1);
            expect(registerUserServiceMock).toHaveBeenCalledWith('atanas@gmail.com', expect.any(String));
            expect(body).toEqual({ username: "Atanasov", email: 'atanas@gmail.com', _id: '123' });
            expect(authCookie).toBeDefined();
        });

        test('should throw if email is invalid', async () => {
            const reqBody = { username: "Atanasov", email: 'atanas@gmail.com', password: '1234', rePass: '1234' };
            const getUserByEmailServiceMock = jest.spyOn(userService, 'getUserByEmail')
                .mockImplementation(() => Promise.resolve(null));
            const registerUserServiceMock = jest.spyOn(userService, 'createUser')
                .mockImplementation(() => Promise.resolve({ email: 'atanas@gmail.com', password: '1234' }));
            const { body, statusCode } = await supertest(app).post('/api/user/register').send(reqBody);

            expect(statusCode).toEqual(404);
            expect(body.message).toEqual('Invalid email!');
            expect(getUserByEmailServiceMock).toHaveBeenCalledTimes(0);
            expect(registerUserServiceMock).toHaveBeenCalledTimes(0);
        });
    })

})