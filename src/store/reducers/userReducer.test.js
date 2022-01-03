import { GET_USERS } from '../actions/actionType';
import userReducer from './userReducer';

describe("تست userReducer", () => {
    test("در صورتی که فالس برگرداند", () => {
        const newState = userReducer(undefined, {});
        if(newState === false)
            expect(newState).toBe(false);
    }); 

    test(" در صورتی که فالس برگرداند", () => {
        const newState = userReducer(false, { type: 'unknown' });
        if(newState === false)
            expect(newState).toBe(false);
    });

    test.skip("در صورتیکه تایپ مورد نظر باید", () => {
        const newState = userReducer(false, { type: GET_USERS });
        if(newState === false)
            expect(newState).toBe(true);
    });
});