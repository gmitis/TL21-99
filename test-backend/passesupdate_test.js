//https://localhost:9130/interoperability/api/admin/PassesUpdate?file=D:\softeng21-99\TL21-99\backend\Data\newpasses2199.csv

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 10000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(10000);
});
