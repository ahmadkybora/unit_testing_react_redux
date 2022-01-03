import { storeFactory } from "./store/util";
import { all, userGet } from './store/actions/userAction';

describe("", () => {
    describe("", () => {
        let store;
        beforeEach(() => {
            // در این قسمت شما در اصل یک استیت به استور خود اضافه میکنید 
            // بوسیله تنظیماتی که برای استور انجام دادید
            // البته باید استیت مورد نظر وجود داشته باشد در استور اصلی وگرنه
            // خطا میدهد
            store = storeFactory({ 
                cartReducer: 'hello', 
                userReducer: [
                    { first_name: 'ahmad' }, 
                    { last_name: 'montazeri' }, 
                ]
         });
            // بطور مثال دو استیت بالا در استور اصلی وجود دارد پس خطایی رخ نمیدهد
            // شما از این قسمت میتوانید مقادیر دلخواه خود را وارد کنید
        });
        test("", () => {
            const state = store.getState();
            console.log(state);
        })
        test("تست همه ریدیوسرها", () => {

            // بوسیله متد زیر اکشن مورد نظر را دیسپچ میکنیم
            // store.dispatch(all());

            // بوسیله متد زیر استیت جاری را میگیریم
            // در متد زیر چون ریدیوسری را فراخوانی نکردیم
            // همه ریدیوسرها فراخوانی میشوند
            const newState = store.getState();
            // console.log(newState);
            // اگر بخواهیم ریدیوسر مورد نظری را فرا خوانی کنیم
            // به سبک زیر عمل میکنیم
            // const newState = store.getState().userReducer;

            // در قسمت زیر ما یک ساختمانی از داده ها
            // و یا آرایه ای از آبجکت ها را داریم که برای مقایسه کردن با
            // همه ریدیوسرها استفاده میشود
            // در این مثال به راحتی میتوان فهمید استیت های ما چه مقادیری دارند
            const expectedState = {
                userReducer: [
                    { first_name: 'ahmad' }, 
                    { last_name: 'montazeri' }, 
                ], 
                cartReducer: 'hello'
            };
            expect(newState).toEqual(expectedState);
            // اینجا ما مقادیر را با هم چک میکنیم تا انتظارمان براورده شود
            // انتظار میرود مقدار مورد نظر با مقدار داخل استور یکی باشد
        });
    })
});

/**
 * module.exports = {
 * ...jest.requireActual('..'),
 * __esModule: true,
 * getSecretWord: jest.fn().mockReturnValue({ type: 'mock' })
 * }
 * 
 * in package.json
 * 
 * "jest": {
 *  "resetMocks": false
 * }
 */