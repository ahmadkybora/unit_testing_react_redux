import { GET_USERS } from './actionType';
import { userGet } from './userAction';

describe("تست اکشن userAction", () => {
    let action;
    beforeEach(() => {
        action = userGet();
    })
    test.skip("آیا اکشن userGet موجود است", () => {
        expect(action).toStrictEqual({});
    });

    test("آیا تایپ مورد نظر مساوی است", () => {
        expect(action).toEqual({ type: GET_USERS });
    })
})